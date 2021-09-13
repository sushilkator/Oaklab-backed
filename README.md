# Oaklab-backed

Oaklab assignment backend

A server app (back-end app) being an API that may update the progress of a startup foundation, discovery, and delivery. You can interact with API endpoints using `Postman`.

The figure below shows an example of the interaction to find products with applied query params. All available interactions are listed in the 'Endpoints' section.
http://localhost:8080/

initially, this will render a simple application layout just an HTML as per mockups 

# Endpoints
* Endpoints correspond to progress <br />
  http://localhost:8080/progress/foundation <br />
  http://localhost:8080/progress/discovery <br />
  http://localhost:8080/progress/delivery <br />
  

## foundation endpoints
* **Data Format**
*  keys : 
*  setupVartualOffice : 'Setup virtual office',
*  setMissionAndVision : 'Set mission and vision'
*  selectBussinessName: 'Select bussiness name'
*  buyDomain: 'Buy domains',
*  
* **put**
  * **/** - update diffrent level of status based on data from a request body.
  * body format : {"key":"createRoadMap", "value" : false }

## discovery endpoints
* **Data Format**
*  keys : 
*  createRoadMap : 'Create roadmap',
*  competitorAnalysis : 'competitor analysis'
* **put**
  body format : {"key":"createRoadMap", "value" : false }
  
## delivery endpoints
* **Data Format**
*  keys : 
*  releaseMarketingWeb : 'Release marketing website'
*  releaseMvp: 'Release MVP'

* **put**
  body format : {"key":"createRoadMap", "value" : false }
 

# Technologies
* NodeJs
* Express
* JS (ES6)

# Postman sample request image 
  ![image](https://user-images.githubusercontent.com/12995125/132996885-8d74479d-d7b9-4a7a-ac2b-319017a577ff.png)

# Project setup : 
```
npm i
```

```
npm  start
```
to start the app.
* Now, you can interact with the server app with `Postman` 
