
$('#navread').on('click', function(){
  if (this.text === "ReadMore >>"){
    $(this).text("ReadLess <<")
  }else {
  $(this).text("ReadMore >>")
  }
})
