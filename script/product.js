try {
    
    let products = JSON.parse(
        localStorage.getItem("products")
    )

} catch(error){
    
    console.log(error);
}