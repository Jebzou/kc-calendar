var calendar = $('#calendar').fullCalendar();

String.prototype.getMonth = function() {
    return this.split("/")[1];
}

String.prototype.getDay = function() {
return this.split("/")[0];
}

String.prototype.getYear = function() {
return this.split("/")[2];
}

Array.prototype.toCalendar = function() {
var returnArray = [];
this.forEach(element => {
    var newElement = {
    title: element.name_en,
    "start": CURRENTYEAR()+"-"+element.birthdate.getMonth()+"-"+element.birthdate.getDay()
    }

    returnArray.push(newElement);
});

return returnArray;
}

var CURRENTYEAR = function(){
    var date = new Date();
    return date.getFullYear();
};

$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listAll'
      },
      editable: true,
      navLinks: true, // can click day/week names to navigate views
      eventLimit: true, // allow "more" link when too many events
      events: getAll().toCalendar(),
      loading: function(bool) {
        $('#loading').toggle(bool);
      },
      views: {
        listAll: {
          type: 'list',
          visibleRange: {
            start: '1900-01-01',
            end: '2100-12-31'
          },
          title: "s",
          buttonText: 'All'
        }
      }
    });

    calendar = $('#calendar').fullCalendar('getCalendar');
  });
