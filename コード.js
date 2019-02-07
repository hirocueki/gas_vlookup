function doGet() {
  var html = HtmlService.createTemplateFromFile('index');
  return html.evaluate();
}

function getSheet(name){
  // フォームの回答のシートIDを設定
  var ssId = '1B9x2VAfeCATsd85kgPNZifnafuElOGPOTspg_gDSiPs';
  return SpreadsheetApp.openById(ssId).getSheetByName(name);
}
 
function getData() {
  return getSheet('回答').getDataRange().getValues();
}

function searchID(number){
  var arrData = getData()
  var _ = Underscore.load();
  var arrTrans = _.zip.apply(_, arrData);
  var result = arrTrans[1].indexOf(number);
 
  if (result == -1.0 ){
    return "未回答のようです。";
  }
  var val = arrTrans[2][result];
  Logger.log(val);
  return val;
}