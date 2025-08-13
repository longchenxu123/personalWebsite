import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 或者使用 sessionStorage

// 配置持久化
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['someTemporaryReducer'], // 如果有不需要持久化的 reducer，可以使用 blacklist
    transform: [
        (state) => JSON.stringify(state), // 序列化
        (serializedState) => JSON.parse(serializedState) // 反序列化
    ]
};

// const rootReducer = (state = {}, action) => {
//     switch (action.type) {
//       // ...你的 reducer 逻辑
//       default:
//         return state;
//     }
//   };

// console.log(counterSlice());
// 创建持久化后的 reducer
const persistedReducer = persistReducer(persistConfig, counterSlice);

// 创建 Redux store
// const store = configureStore({
//   reducer: {
//     ...persistedReducer
//   }
// });


  // 创建 Redux store
const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // 忽略特定 action 类型的序列化检查
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                // 忽略特定 state 路径的序列化检查
                ignoredPaths: ['counter.someNonSerializableField'],
            },
        }),
});



// 创建持久化 store
const persistor = persistStore(store);

export {
    persistor,
    store
}


export default store