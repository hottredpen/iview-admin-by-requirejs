import HttpRequest from 'babel!./axios'
import config from 'babel!../config/index'

const baseUrl = config.baseUrl.dev
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
