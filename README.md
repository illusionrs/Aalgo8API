# Aalgo8API

## Deoloyed: http://algo8.herokuapp.com/

# User API:
 * ##  Method :GET
       * /user/reg
       * Response: {name, email, password, passwordcheck}
 
* ## Method :POST
       * /user/login
       *  body: { email ,password}


# Admin API:
 * ##  Method :GET
       * /admin/reg
       * body: {name, email, password, passwordcheck}
 
* ## Method :POST
       * /admin/login
       *  body: { email ,password}

# Product API:
 * ## Method :GET
       * /productdta
       * Response: {productid, productname, price}
 
* ## Method :GET
       * /productdata/:id
       *  Response: { producrid,productname,price} 
* ## Method :POST
       * /productdata
       * body : {productid, productname, price}
 
 # Order or Payment API:
  * ## Method : POST
       *  /pay
       *  body : { amount, useremail, productid, productname}
       *  Response :{id, currency, amount}
    
    
        

