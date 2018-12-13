import RequestUrl from './BaseUrl';
import BaseRequest from '../utils/request';

class IndexPageService{
  async test(paramJson) {
    console.log('图呢',RequestUrl.testURL)
    // await BaseRequest({
    //   url:`${RequestUrl.testURL}`,
    //   method:"post",
    // })
		const res = await BaseRequest.fetch(`${RequestUrl.testURL}`, {
			method: "GET",
			// body: JSON.stringify(paramJson)
    });
  }
}
export default new IndexPageService();