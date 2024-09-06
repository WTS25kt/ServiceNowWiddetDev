(function() {
    var input = {
        u_action: 'test_action',
        u_time: '2024-09-06 12:00:00',
        u_user: 'test_user',
        u_sequencesort: '1'
    };

    gs.info('受信データは:' + JSON.stringify(input));

    var data = {
        result: 'Mocked response: Attendance record saved successfully'
    };

    return data;
})();
