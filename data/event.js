String.prototype.getMonth = function() {
  return this.split("/")[1];
}

String.prototype.getDay = function() {
  return this.split("/")[0];
}

Array.prototype.toCalendar = function() {
  var returnArray = [];
  this.forEach(element => {
    var newElement = {
      "title": element.name_en,
      "start": "2018-"+element.birthdate.getMonth()+"-"+element.birthdate.getDay()
    };

    returnArray.push(newElement);
  });

  return returnArray;
}

var BBs = [
    {
      "name_en": "Kongou",
      "name_jp": "金剛",
      "birthdate": "18/05/1912"
    },
    {
      "name_en": "Hiei",
      "name_jp": "比叡",
      "birthdate": "21/11/1912"
    },
    {
      "name_en": "Haruna",
      "name_jp": "榛名",
      "birthdate": "14/12/1913"
    },
    {
      "name_en": "Kirishima",
      "name_jp": "霧島",
      "birthdate": "12/01/1913"
    },
    {
      "name_en": "Fusou",
      "name_jp": "扶桑",
      "birthdate": "28/03/1914"
    },
    {
      "name_en": "Yamashiro",
      "name_jp": "山城",
      "birthdate": "03/11/1915"
    },
    {
      "name_en": "Ise",
      "name_jp": "伊勢",
      "birthdate": "02/11/1916"
    },
    {
      "name_en": "Hyuuga",
      "name_jp": "日向",
      "birthdate": "27/01/1917"
    },
    {
      "name_en": "Nagato",
      "name_jp": "長門",
      "birthdate": "12/09/1919"
    },
    {
      "name_en": "Mutsu",
      "name_jp": "陸奥",
      "birthdate": "31/05/1920"
    },
    {
      "name_en": "Yamato",
      "name_jp": "大和",
      "birthdate": "08/08/1940"
    },
    {
      "name_en": "Musashi",
      "name_jp": "武蔵",
      "birthdate": "11/01/1940"
    },
    {
      "name_en": "Bismarck",
      "name_jp": "ビスマルク",
      "birthdate": "14/02/1939"
    },
    {
      "name_en": "Littorio / Italia",
      "name_jp": "イタリア",
      "birthdate": "22/08/1937"
    },
    {
      "name_en": "Roma",
      "name_jp": "ローマ",
      "birthdate": "09/06/1940"
    },
    {
      "name_en": "Iowa",
      "name_jp": "アイオワ",
      "birthdate": "27/08/1942"
    },
    {
      "name_en": "Warspite",
      "name_jp": "ウォースパイト",
      "birthdate": "26/11/1913"
    },
    {
      "name_en": "",
      "name_jp": "",
      "birthdate": ""
    },
    {
      "name_en": "Nelson",
      "name_jp": "ネルソン",
      "birthdate": "03/09/1925"
    },
    {
      "name_en": "",
      "name_jp": "",
      "birthdate": ""
    },
    {
      "name_en": "Richelieu",
      "name_jp": "リシュリュー",
      "birthdate": "17/01/1939"
    },
    {
      "name_en": "Gangut",
      "name_jp": "ガングート",
      "birthdate": "20/10/1911"
    }
   ]