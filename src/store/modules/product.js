const filterObj = (state, id) => { return state.find(item => item.id === id) }
const productModule = {
  state: () => ({
    products: [
      {
        id: 1,
        name: '2020夏季新款纯棉浅色水洗牛仔裤九分裤萝卜裤可调节裤脚女',
        price: 291,
        showInventory: 5,
        inventory: 5,
        imgUrl: 'https://img13.360buyimg.com/n4/s160x160_jfs/t1/114976/12/8685/225393/5ed1bfbeEe9bd5476/a444fb4719f102ea.jpg'
      },
      {
        id: 2,
        name: '多功能刨丝器 ins北欧风土豆切丝擦丝器切菜切片切丁切菜神器擦丝沥水',
        price: 29.9,
        showInventory: 20,
        inventory: 20,
        imgUrl: 'https://img10.360buyimg.com/n4/s160x160_jfs/t1/119037/24/8583/203019/5ed06697E3cdd1181/be5276e705d14965.jpg'
      },
      {
        id: 3,
        name: '牛仔半身裙夏2020新款短裙女高腰裙子半裙a字裙夏季牛仔裙133 蓝色-带安全裤-正品保证-送运费险 M-27（96-105斤）',
        price: 108,
        showInventory: 100,
        inventory: 100,
        imgUrl: 'https://img10.360buyimg.com/n4/s160x160_jfs/t1/88161/33/17064/157606/5e8315ddE5ccdadaf/9bf8a8457f89ff84.jpg'
      },
      {
        id: 4,
        name: '昭达觉乐3层成人一次性使用医用口罩（非无菌型） 一袋10片 带熔喷层 防飞',
        price: 13.9,
        showInventory: 300,
        inventory: 300,
        imgUrl: 'https://img13.360buyimg.com/n4/s160x160_jfs/t1/121071/24/2837/110146/5ecb2816E43f42660/68f6301a3243d50b.jpg'
      },
      {
        id: 5,
        name: '大码男装新款潮胖子短袖T恤男士加肥加大号肥佬圆领半袖上衣潮流时尚',
        price: 69,
        showInventory: 400,
        inventory: 400,
        imgUrl: 'https://img10.360buyimg.com/n4/s160x160_jfs/t1/25966/14/13820/134309/5ca2f4daEf2399585/c235b9e258d5ea34.jpg'
      },
      {
        id: 6,
        name: '香奈儿（CHANEL）口红58豆沙色魅力炫亮哑光丝绒山茶花女士唇膏女生节日',
        price: 178,
        showInventory: 30,
        inventory: 30,
        imgUrl: 'https://img11.360buyimg.com/n4/s160x160_jfs/t1/129003/9/4507/112026/5ede66daE75a5e170/4a134a335daccd57.jpg'
      },
      {
        id: 7,
        name: '男鞋春秋季真皮男士休闲皮鞋头层牛皮中老年464748码大码爸爸鞋单鞋',
        price: 98,
        showInventory: 10,
        inventory: 10,
        imgUrl: 'https://img10.360buyimg.com/n4/s160x160_jfs/t1/3039/6/9749/239251/5bc87948Ef6448ad2/0e87fb08045cf5b7.jpg'
      },
      {
        id: 8,
        name: '蓝女装热卖假两件连衣裙女夏2020新款高腰显瘦气质时尚印花a字裙',
        price: 388,
        showInventory: 40,
        inventory: 40,
        imgUrl: 'https://img14.360buyimg.com/n4/s160x160_jfs/t1/143037/1/241/148210/5edf0304E81bee0ab/7166d20f97936069.jpg'
      }
    ]
  }),
  mutations: {
    addToCart(state, id) {
      filterObj(state.products, id).showInventory--
    },
    delCart(state, id) {
      filterObj(state.products, id).showInventory = filterObj(state.products, id).inventory
    },
    changeNumber(state, payload) {
      if (payload.value === '+') {
        filterObj(state.products, payload.id).showInventory--
      } else if (payload.value === '-') {
        filterObj(state.products, payload.id).showInventory++
      } else {
        filterObj(state.products, payload.id).showInventory = filterObj(state.products, payload.id).inventory - payload.value
      }
    },
    delSelectedProductInCart(state,payload){
      if(payload.type==='del'){
        state.products.forEach(item=>{
          if(payload.selectedInCart.includes(item.id)){
            item.showInventory=item.inventory
          }
        })
      }else{
        state.products.forEach(item=>{
          if(payload.selectedInCart.includes(item.id)){
            item.inventory=item.showInventory
          }
        })
      }
    }
  }

}
export default productModule