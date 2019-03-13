import axios from 'axios'
import GlobeConfig from '../GlobeConfig'

export default ({
    WaitAll: function (req, success) {
      axios.all(req)
        .then(axios.spread(function (acct, perms) {
          if (success)
            success();
        }));
    },
    Get: function (url, data, success) {
      if (!success && typeof (data) === "function") {
        success = data;
        data = null;
      }
      var obj = axios.get(GlobeConfig.api + url, {params:data}).then(function (s) {
  
        if (success)
          success(s.data);
        else {
  
        }
      }).catch(function (error) {
        alert('错误:' + error);
      });
  
      return obj;
    },
    Post: function (url, data, success) {
      if (!success && typeof (data) === "function") {
        success = data;
        data = null;
      }
      var obj = axios.post(GlobeConfig.api + url, data).then(function (s) {
  
        if (success)
          success(s.data);
        else {
  
        }
      }).catch(function (error) {
        alert('错误:' + error);
      });
  
      return obj;
    }
  })
  