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

export default toast
