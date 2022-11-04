/**
 *
 * @desc 获取设备电量信息
 * @return {*object} power
 * @return  power.charging: 是否在充电
 * @return  power.chargingTime: 充满电还需要的时间(秒)
 * @return  power.dischargingTime:  电池剩余可用时间(秒)
 * @return  power.level: 剩余电量,最大电量就是1
 * @mdn https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/getBattery
 */
const getBattery = () => {
  let power = {
    isCharging: false,
    level: 0
  }

  navigator.getBattery().then(battery => {
    power.isCharging = battery.charging
    power.level = battery.level

    // onchargingchange: 充电状态改变时触发该监听函数
    // onchargingtimechange: 充满还需时间改变时触发该监听函数
    // ondischargingtimechange: 电池剩余可用时间改变时触发该监听函数
    // onlevelchange: 电量改变时触发该监听函数

    battery.addEventListener('chargingchange', () => {
      power.isCharging = battery.charging
    })
    battery.addEventListener('levelchange', () => {
      power.level = battery.level
    })
  })

  return power
}

export default getBattery
