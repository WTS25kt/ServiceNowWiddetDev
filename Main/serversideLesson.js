(function() {
    var action = input.u_action || '';
    var time = input.u_time || '';
    var user = input.u_user || '';
    var sequence = parseInt(input.u_sequencesort, 10) || 2; // クライアントからの固定値を取得

    //if (action && time && user) {
	  if (true) {
			  gs.info('受信データは:' + JSON.stringify(input));
        gs.info('Actionは:' + action);
        gs.info('Timeは:' + time);
        gs.info('Userは:' + user);
        gs.info('Sequenceは:' + sequence);

        var attendanceRecord = new GlideRecord('u_kintaikanri');

        // 最新のシーケンス番号を取得
        attendanceRecord.orderByDesc('u_sequencesort');
        attendanceRecord.setLimit(1);
        gs.info('前');
        attendanceRecord.query();
        gs.info('後');

        var maxSequence = 0;
        if (attendanceRecord.next()) {
            gs.info('クエリがあった');
            maxSequence = parseInt(attendanceRecord.u_sequencesort, 10);
            gs.info('クエリのシーケンスは:' + maxSequence);
        } else {
            gs.info('クエリがなかった');
        }

        gs.info('Max Sequenceは: ' + maxSequence);
        var newSequence = maxSequence + sequence; // 最大値に固定値を加算
        gs.info('New Sequenceは:' + newSequence);
        gs.info('New Sequenceを文字列に変換:' + newSequence.toString());

        attendanceRecord.initialize();
        //attendanceRecord.setValue('u_action', action);
        //attendanceRecord.setValue('u_time', time);
        //attendanceRecord.setValue('u_user', user);
        //attendanceRecord.setValue('u_sequencesort', newSequence.toString()); // 新しいシーケンス番号を設定

			  attendanceRecord.setValue('u_action', 'テスト');
        attendanceRecord.setValue('u_time', '2024-09-03 06:39:00');
        attendanceRecord.setValue('u_user', 'サンプル');
        attendanceRecord.setValue('u_sequencesort', newSequence.toString());
        try {
            attendanceRecord.insert();
            data.result = 'Attendance record saved successfully';
        } catch (e) {
					  gs.info('成功');
            data.result = 'Error saving record: ' + e.message;
        }
    } else {
			  gs.info('データ送信失敗またはロード時に呼び出されてしまった');
        data.result = 'Missing data';
    }
})();
