console.log('hola');
var currentDayEl = $('#currentDay');
var hour = [
    { labelHour: '09:00 AM', numHour: 9 },
    { labelHour: '10:00 AM', numHour: 10 },
    { labelHour: '11:00 AM', numHour: 11 },
    { labelHour: '12:00 PM', numHour: 12 },
    { labelHour: '01:00 PM', numHour: 13 },
    { labelHour: '02:00 PM', numHour: 14 },
    { labelHour: '03:00 PM', numHour: 15 },
    { labelHour: '04:00 PM', numHour: 16 },
    { labelHour: '05:00 PM', numHour: 17 },
];

currentDayEl.text(dayjs().format("dddd MMMM DD"));
var hoursListEl = $('#container');
var ahora = dayjs().hour();

for (var j = 0; j < hour.length; j++) {
   /*Se crean cada uno de los renglones por hora de la agenda */
    var hourBlock = $('<div>');
    hourBlock.addClass('input-group input-group-lg time-block');
    hourBlock.attr('scrollspyHeading', j);
    hoursListEl.append(hourBlock);
  /*Se crea el texto que despliega la hora */
    var hourText = $('<p>');
    hourText.addClass('input-group-text hour');
    hourText.text(hour[j].labelHour);
  
    var hora = hour[j].numHour;
    console.log(hora);
    hourBlock.append(hourText);
   /*Se crea el area de texto donde se capturarán las actividades en agenda */
    var textArea = $('<textarea>');
    textArea.addClass('form-control row');
    textArea.attr('metod', 'POST');
    textArea.attr('id', j);
   
    var renglon = textArea.val();
    console.log(renglon);
    /*Se categoriza cada reguistro de agenda (pasado, presente, futuro)por color segun hora actual */
    if (hour[j].numHour < ahora) {
        textArea.addClass('past');
    } else if (ahora === hour[j].numHour) {

        textArea.addClass('present');
    } else {
        textArea.addClass('future');
    }
    hourBlock.append(textArea);
   /*Se crea boton de gurdar */
    var save = $('<button>');
    save.addClass('btn btn-outline-secondary saveBtn');
    save.attr('type', 'button');
    save.attr('id', j);
    hourBlock.append(save);

    var labelSave = $('<i>');
    save.append(labelSave);

    var icono = $('<img>');
    icono.attr('src', './assets/images/black-24dp/1x/baseline_save_black_24dp.png');
    icono.attr('alt', 'save icon');
    labelSave.append(icono);

    localStorage.getItem(hour[j]);

}

/*Se guarda en storage evento */
var scheduleArray = [];
$(".saveBtn").click(function (event) {
    event.preventDefault();
    /* var line = $(event.Tarjet.parent());
      console.log("aqui esta  ====>", line);
      var Texto = line.find(textArea);
      console.log("Texto ===>", Texto);¨*/
    var objectActivity = {
        horaArray: hour.numHour,
        actArray: textArea.val(),
    }
    for (var i = 0; i < hour.length; i++) {
        scheduleArray[i] = objectActivity;
    }
    console.log(scheduleArray);
    localStorage.setItem("evento", JSON.stringify(scheduleArray));

});






































