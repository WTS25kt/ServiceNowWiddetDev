(function() {
    var input = {
        u_action: 'client_test_action',
        u_time: '2025-01-01 12:00:00',
        u_user: 'client_test_user',
        u_sequencesort: '99'
    };

    gs.info('受信データは:' + JSON.stringify(input));

    var data = {
        result: 'Mocked response: Attendance record saved successfully'
    };

    return data;
})();