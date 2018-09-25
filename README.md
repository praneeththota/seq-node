after cloning application go to directory and follow below steps:

creating database (mentioned database configuration in config/config.json)

$ node_modules/.bin/sequelize db:create

creating table 

$ node_modules/.bin/sequelize db:migrate

creating seeds data 

$ node_modules/.bin/sequelize db:seed:all
