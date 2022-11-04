//获取手机电量信息
// charging: 是否在充电
// chargingTime: 充满电还需要的时间(秒)
// dischargingTime:  电池剩余可用时间(秒)
// level: 剩余电量,最大电量就是1
// onchargingchange:  充电状态改变时触发该监听函数
// onchargingtimechange:  充满还需时间改变时触发该监听函数
// ondischargingtimechange:  电池剩余可用时间改变时触发该监听函数
// onlevelchange:  电量改变时触发该监听函数

const getBattery = () => {
  let power = {
    isCharging: false,
    level: 0,
    needChargingTime: '0',
    elseTime: '0'
  }
  navigator.getBattery().then(battery => {
    power.isCharging = battery.charging
    power.level = battery.level
    power.needChargingTime = battery.chargingTime
    power.elseTime = battery.dischargingTime

    battery.addEventListener('chargingchange', () => {
      power.isCharging = battery.charging
    })
    battery.addEventListener('levelchange', () => {
      power.level = battery.level
    })
    battery.addEventListener('chargingtimechange', () => {
      power.needChargingTime = battery.chargingTime
    })
    battery.addEventListener('dischargingtimechange', () => {
      power.elseTime = battery.dischargingTime
    })
  })

  return power
}

export default getBattery
