

//funcion "countdown" o cuenta regresiva
const getRemainTime = deadline => {
    let now = new Date(),

    Time = (new Date(deadline) - now + 1000)/1000,

    Seconds = ('0' + Math.floor (Time % 60)).slice(-2),
    Minutes = ('0' + Math.floor (Time  /60 % 60)).slice(-2),
    Hours = ('0' + Math.floor (Time /3600 % 24)).slice(-2),
    Days = Math.floor(Time / (3600 * 24));


    return {
        Time,
        Seconds,
        Minutes,
        Hours,
        Days

    }
};
//console.log(getRemainTime('Jul 23 2020 17:26:15 GMT-0400 '))

const countdown = (deadline,elem,mensaje) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval ( () => {
        let time = getRemainTime(deadline);
        el.innerHTML = ` <div class ="time-clock">
        ${time.Days}<p>días</p>${time.Hours}<p>Horas</p>${time.Minutes}<p>Minutos</p>${time.Seconds}
          </div>`;

        if(time.remainTime <=1){
            clearInterval(timerUpdate)
            el.innerHTML = mensaje ;
        }
    },1000)


};

countdown('Jul 23 2020 09:30:15 GMT-0400','clock')