import AWS_INFO from "./constant"
import getURL from "./utils"

const url = getURL(AWS_INFO.ADDRESS, AWS_INFO.PORT, AWS_INFO.PATH)
const region = AWS_INFO.REGION

export default {url, region}
