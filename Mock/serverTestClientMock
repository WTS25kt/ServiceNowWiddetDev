api.controller = function($http) {
    var c = this;

    c.recordTime = function(action) {
        var dataToSend = {
            u_action: action,
            u_time: '2024-09-06 12:00:00',
            u_user: 'test_user',
            u_sequencesort: '1'
        };

        console.log('送信データ:', dataToSend);

        $http.post('/api/now/table/u_kintaikanri', dataToSend).then(function(response) {
            console.log('成功:', response.data);
        }, function(error) {
            console.error('失敗:', error);
        });
    };

    // テスト用に関数を呼び出す
    c.recordTime('test_action');
};
