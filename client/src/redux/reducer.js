const initialState={
    favcard: [],
    card: [
        {"id":'1', "author":'Dan',   "bookname":'Code ',  "image":'https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg'},
        {"id":'2', "author":'sdfds', "bookname":'asdasd1',"image":'https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg'},
        {"id":'3', "author":'sdfds', "bookname":'asdasd2',"image":'https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg'},
        {"id":'4', "author":'sdfds', "bookname":'asdasd3',"image":'https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg'},
        {"id":'5', "author":'sdfds', "bookname":'asdasd4',"image":'https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg'}
      ]
}
function reducer(state=initialState,action){
  switch(action.type){
      case 'ADD_TO_CARD':
 const favcard=[...state.favcard,action.payload.post]
 return {...state,favcard} 



      default: return state
  }
}
export default reducer