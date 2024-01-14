AOS.init()

window.addEventListener('DOMContentLoaded', function(){
    

    const birthdayPartyEvent = new Date("Mar 28, 2024, 10:00:00");
    const timeStampFromEvent = birthdayPartyEvent.getTime();


    const countingHours = this.setInterval(function(){
        
        const now = new Date();
        const rightNowTimeStamp = now.getTime();

        const differenceTimeStamp = timeStampFromEvent - rightNowTimeStamp;

        const msInDays = 1000 * 60 * 60 *24;
        const msInHours = 1000 * 60 * 60;
        const msInMinutes = 1000 * 60;
        const msInSeconds = 1000;
    
        const daysFromEvent = Math.floor(differenceTimeStamp / msInDays);
        const hoursFromEvent = Math.floor((differenceTimeStamp % msInDays) / msInHours);
        const minutesFromEvent = Math.floor(differenceTimeStamp % msInHours / msInMinutes);
        const secondsFromEvent = Math.floor(differenceTimeStamp % msInMinutes / msInSeconds);
        

        document.getElementById('contador-de-dias').innerHTML = `${daysFromEvent}d ${hoursFromEvent}h ${minutesFromEvent}m ${secondsFromEvent}s`;
        
        if (differenceTimeStamp < 0) {
            clearInterval(countingHours)
            document.getElementById('contador-de-dias').innerHTML = 'Chegou tarde... Ano que vem teremos uma festa melhor, não perca!';
        }

    }, 1000);

});  

    /*

    const niver = new Date("Mar 28, 2024, 10:00:00");
    const anoNiver = niver.getFullYear();
    const mesNiver = niver.getMonth()+1;
    const semanaNiver = niver.getDay()+1;
    const diaNiver = niver.getDate();
    const horaNiver = niver.getHours();
    const horaNiverFormatado = horaNiver.toString().padStart(2, '0');
    
    const minNiver = niver.getMinutes();
    const minNiverFormatado = minNiver.toString().padStart(2, '0')
    */
    
    // Recuperando o dia atual
    
    /*
    const hoje = new Date();
    const anoHoje = hoje.getFullYear();
    const mesHoje = hoje.getMonth()+1;
    const semanaHoje = hoje.getDay()+1;
    const diaHoje = hoje.getDate();
    const horaHoje = hoje.getHours();
    const minHoje = hoje.getMinutes();

    
    const subMes = mesNiver +  (12- mesHoje);
    console.log(subMes)
    
    
    // recuperando os dias do mês
    function numeroDiasMes(ano, mes){
        return new Date(ano, mes, 0).getDate()
    }

    let mes12;
    
    if (mesHoje <= 12){
        let mes12 = 12 - mesAtual;
        console.log(mes12)
    }
    


    /* 
    if((numeroDiasMes(anoHoje, mesHoje)) > 29){
        const mes29 = mesAteNiver + 1;
        console.log(mes29)
    } else {
        console.log('Abaixo')
    } */




    /* 
    const timeStampAtual = hoje.getTime();
    const distanciaAteNiver = timeStampNiver- timeStampAtual;
    const mesEmMs = 1000 * 60 * 60 * 24 * 30;
    const diaEmMs = 1000 * 60 *60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const mesAteNiver = Math.floor(distanciaAteNiver / mesEmMs)
    const diaAteNiver= Math.floor(distanciaAteNiver / diaEmMs);
    const horaAteNiver = Math.floor(distanciaAteNiver / horaEmMs);
    const minAteNiver = Math.floor(distanciaAteNiver / minutoEmMs);

    

    
    this.document.getElementById('contador-de-dias').innerHTML = `O dia será ${niver}`
*/


