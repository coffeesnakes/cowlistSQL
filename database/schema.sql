
DROP DATABASE IF EXISTS cowssql;

CREATE DATABASE cowssql;

USE cowssql;

CREATE TABLE cows (
  id     INT NOT NULL AUTO_INCREMENT,
  name      VARCHAR(25) NOT NULL,
  description  VARCHAR(200) NOT NULL,
  PRIMARY KEY  (id)
);
