After cloning application go to directory and follow below steps:

creating database (mentioned database configuration in config/config.json)

Install sequelize-cli globally

$ npm install sequelize-cli -g

$ sequelize db:create

creating table 

$ sequelize db:migrate

creating seeds data 

$ sequelize db:seed:all
