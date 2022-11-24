export const get = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const date = await response.json();
    console.log(date);
    const newDate = date.filter((item) => {
      if (item.id % 2 === 0) {
        return item;
      }
      return null;
    });
    localStorage.setItem("get", JSON.stringify(date));
    dispatch({ type: "ADD", payload: newDate });
  };
}
export const removeLcol=(id)=>{
    return async (dispatch)=>{
        localStorage.setItem(
            'get',
            JSON.stringify(
                JSON
                .parse(localStorage.getItem('get') ?? '[]')
                .filter((item)=>item.id !==id)
            )
        )
        dispatch({type: "REMOVE", id :id })
    }
}

