dbst:
	docker run --name db-mysql -p 3308:3306 -e MYSQL_DATABASE=todo -e MYSQL_ROOT_PASSWORD=root -d mysql:8.1.0

dbsp:
	docker stop db-mysql

dbrm:
	docker rm db-mysql

dbup:
	docker exec -i db-mysql mysql -uroot -proot todo < database/todoup.sql

dbdw:
	docker exec -i db-mysql mysql -uroot -proot todo < database/tododown.sql

dbtc:
	node testdbconnection.js

install:
	npm install

runapp:
	dbhostname=localhost dbport=3308 dbuser=root dbpassword=root dbname=todo port=3000 node app.js