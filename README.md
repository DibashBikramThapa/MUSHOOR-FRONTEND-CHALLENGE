## MUSHOOR-FRONTEND-CHALLENGE
MUSHOOR FRONTEND INTERN CHALLENGE Solved.

The steps followed are:
* Created html as index.html and added bootstrap4 stylesheet link, boostrap4 and ajax javascript.

* Then divisions with row and column with top margin with 4 and top padding with 2 is made so that upon adding column, same format for division card is implemented.

* Card with shadow, title, paragraph, 'a' tag and text such that before clicking 'a' tag, collapsed text can be shown after clicking.

* Then, custom css is added for card by adding customcard class and navread class for 'a' tag to change to color grey/

* Then, custom js is added for text called ReadMore so that it can be changed to Readless and vice-versa on clikcing using jquery syntax i.e:
```
  >$('#navread').on('click', function(){
    if (this.text === "ReadMore >>"){
      $(this).text("ReadLess <<")
    }else {
    $(this).text("ReadMore >>")
    }
  })
```
