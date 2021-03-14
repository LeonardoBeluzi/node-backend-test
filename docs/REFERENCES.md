# API References

**List Users**
----
  Returns json data about all users.

* **URL**

  /user

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ { id: 1, name: "Leonardo", dob: "1995-09-29", address: "Avenida Brasil, 2042", description: "Minha descrição", createdAt: "2021-03-14T15:52:53.000Z", updatedAt: "2021-03-14T15:52:53.000Z" } ]`
 
* **Error Response:**

   None

**Show User**
----
  Returns json data about a single user.

* **URL**

  /user/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, name: "Leonardo", dob: "1995-09-29", address: "Avenida Brasil, 2042", description: "Minha descrição", createdAt: "2021-03-14T15:52:53.000Z", updatedAt: "2021-03-14T15:52:53.000Z" }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error: "User not found" }`

**Create User**
----
  Returns json data about the created user.

* **URL**

  /user

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

   **Required:**
 
   `name=[string]` <br />
   `dob=[string]` <br />
   `address=[string]` <br />

   **Optional:**
 
   `description=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id: 1, name: "Leonardo", dob: "1995-09-29", address: "Avenida Brasil, 2042", description: "Minha descrição", createdAt: "2021-03-14T15:52:53.000Z", updatedAt: "2021-03-14T15:52:53.000Z" }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ errors: [ 'Field "dob" is not a valid date', 'Field "name" must be between 3 and 255 characters' ] }`

**Update User**
----
  Returns json data about the updated user.

* **URL**

  /user/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   **Optional:**
 
   `name=[string]` <br />
   `dob=[string]` <br />
   `address=[string]` <br />
   `description=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, name: "Leonardo", dob: "1995-09-29", address: "Avenida Brasil, 2042", description: "Minha descrição", createdAt: "2021-03-14T15:52:53.000Z", updatedAt: "2021-03-14T15:52:53.000Z" }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ errors: [ 'Field "dob" is not a valid date', 'Field "name" must be between 3 and 255 characters' ] }`

  OR

  * **Code:** 404 <br />
    **Content:** `{ error: "User not found" }`

**Delete User**
----
  Returns json data about the deleted user.

* **URL**

  /user/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, name: "Leonardo", dob: "1995-09-29", address: "Avenida Brasil, 2042", description: "Minha descrição", createdAt: "2021-03-14T15:52:53.000Z", updatedAt: "2021-03-14T15:52:53.000Z" }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error: "User not found" }`