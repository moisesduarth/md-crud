# angular-crud

Generating CRUD applications with the Angular CLI and Schematics.

## Tutorial: Getting Started

1. Clone this repository at same level directory of your project (you must see both directories at same folder).

    ```
    git clone https://github.com/moisesduarth/md-crud
    ```

2. Install the needed npm packages and build:

   npm install
   npm run build
   
3. Inside your root folder project, link our lib

   npm link ../md-crud

3. Switch to the folder `src/app` and create a sub-folder `hotel` with a file `model.json`. Put the following content into this file:

    ```json
    { 
        "title": "Hotel",
        "entity": "hotel",
        "api": {
          "url": "http://www.angular.at/api/hotel"
        },
        "filter": [
          "city"
        ],
        "fields": [
          {
            "name": "id",
            "label": "Id",
            "isId": true,
            "readonly": true,
            "type": "number"
          },
          {
            "name": "name",
            "type": "string",
            "label": "Name"
          },
          {
            "name": "city",
            "type": "string",
            "label": "City"
          },
          {
            "name": "stars",
            "type": "string",
            "control": "number",
            "label": "Stars"
          } 
        ]
    }
    ```

	The generator is using a json5 parser. This means that you can use comments, omit quotation marks and use trailing commas.  

4. In your project's root directory, run the following Angular CLI based command:

    ```
    ng g angular-crud:crud-module hotel
    ```

5. Now, you get files generated for managing hotels.

6. Have a look to the generated files

7. Now you will need update the files

   app.module.ts (remove the module line import)
   constant-rest.ts (include the constant according to your new entity)
   app-routing.module.ts (incluse a new entry to map the route and inject dependencies)
   Routerinfo.ts (include the new entity to yout sidebar menu)


