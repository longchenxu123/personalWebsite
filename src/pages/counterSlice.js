// 切片对象
import { createSlice } from '@reduxjs/toolkit'
/* 
reducer切片
createSlice函数的作用：生成分片的reducer
内部调用的市createAction和createReducer 
creatSlice可以帮助我们用更少的代码去生成配套的reducer和action,而且有很好的维护性
*/

const userSlice = createSlice({
  name: 'zhangsan', // 标识符，生成actions的时候要使用，
  // state初始值
  initialState: {
     imgLoadStatus: false, // 壁纸加载状态
      innerWidth: null, // 当前窗口宽度
      coverType: "4", // 壁纸种类   默认壁纸
      siteStartShow: false, // 建站日期显示
      musicClick: false, // 音乐链接是否跳转
      musicIsOk: false, // 音乐是否加载完成
      musicVolume: 0, // 音乐音量;
      musicOpenState: false, // 音乐面板开启状态
      backgroundShow: false, // 壁纸展示状态
      boxOpenState: false, // 盒子开启状态
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
      setOpenState: false, // 设置页面开启状态
      playerState: false, // 当前播放状态
      playerTitle: null, // 当前播放歌曲名
      playerArtist: null, // 当前播放歌手名
      playerLrc: "歌词加载中", // 当前播放歌词
      playerLrcShow: true, // 是否显示底栏歌词
      footerBlur: true, // 底栏模糊
      playerAutoplay: false, // 是否自动播放
      playerLoop: "all", // 循环播放 "all", "one", "none"
      playerOrder: "list", // 循环顺序 "list", "random"
  } ,
  // reducer的具体方法，
  reducers: {
    setbackgroundShow(state, action) {
      state.imgLoadStatus = action.payload
    },
    setImgLoadStatus(state, action) {
      state.imgLoadStatus = action.payload
    },
    setboxOpenState(state, action) {
      state.boxOpenState = action.payload

    },
    setsetOpenState(state, action) {
      state.setOpenState = action.payload

    },
    setmobileOpenState(state, action) {
      state.mobileOpenState = action.payload
    },
    setcoverType(state, action) {
      state.coverType = action.payload
    },
    // 更改当前页面宽度
    setInnerWidth(state, action) {
      state.innerWidth = action.payload;
      if (action.payload >= 720) {
        state.mobileOpenState = false;
        state.mobileFuncState = false;
      } else {
        state.boxOpenState = false;
      }
    },
    // 指定state的各种操作，直接就可以在对象中添加方法
    setName(state, action) {
      /* 
      可以通过不同的方法修来指定对state的不同的操作
      state，action 
      可以直接修改state => state 是一个代理对象  之前的复制一份，返回一个新的对象
      */
      state.name = action.payload
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})
export const {setImgLoadStatus, setbackgroundShow, setInnerWidth,
  setmobileOpenState, setcoverType,
  setsetOpenState, setboxOpenState} = userSlice.actions;
export default userSlice.reducer
