api.controller = function($http) {
  var c = this;

  // 日付をフォーマットする関数
  function formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }

  c.recordTime = function(action) {
    // 日付をフォーマット
    var currentTime = formatDate(new Date());
    var testUser = 'test_user';
    var testAction = action;

    // 固定値の1を送信
    var sequenceIncrement = '1';

    // 送信するデータのキー名を調整
    var dataToSend = {
      u_action: testAction,
      u_time: currentTime,
      u_user: testUser,
      u_sequencesort: sequenceIncrement // 固定値1を追加
    };

    console.log('送信データ:', dataToSend);

    $http.post('/api/now/table/u_kintaikanri', dataToSend).then(function(response) {
      console.log('成功:', response.data);
    }, function(error) {
      console.error('失敗:', error);
    });
  };
};
