
    function getTime() {

        var now = new Date();       // 오늘 날짜를 객체로 지정
        var firstDay = new Date("2022-03-02")   // 시작 날짜를 객체로 지정
    
        var toNow = now.getTime();         // 오늘까지 지난 시간(밀리 초)
        var toFirst = firstDay.getTime();  // 첫날까지 지난 시간(밀리 초) 
        var passedTime = toFirst - toNow;  // 첫날부터 오늘까지 지난 시간(밀리 초)
    
        passedTime = Math.round(passedTime/(1000*60*60*24));  // 밀리 초를 일 수로 계산하고 반올림
    
        document.querySelector('#result').innerText = passedTime;
        }
        function init() {
          setInterval(getTime, 1000);
        }
        init();