function toast(title, duration) {
  uni.showToast({
    title,
    icon: "none",
    duration: 3000
  })
}
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "none",
    duration: 3000
  })
}

toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "success",
    duration: 3000
  })
}
toast.loading = (title, duration) => {
  uni.showToast({
    title: '正在加载中',
    icon: "loading"
  })
}

export default toast
