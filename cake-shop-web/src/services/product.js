import request from './request'

async function getTopProducts() {
  const res = await request.get('/product/top')
  return res
}

async function getRecommendProducts() {
  const res = await request.get('/product/recommend')
  return res
}

async function getProducts(sort) {
  const res = await request.get(`/product/${sort}`)
  return res
}

export default {
  getProducts,
  getTopProducts,
  getRecommendProducts
}
