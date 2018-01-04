module.exports = {
  tables: {
    comments: `create table if not exists comments(
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                content VARCHAR(40) NOT NULL,
                postid VARCHAR(40) NOT NULL,
                PRIMARY KEY ( id )
                );`,
    posts: `create table if not exists posts(
              id INT NOT NULL AUTO_INCREMENT,
              name VARCHAR(100) NOT NULL,
              title VARCHAR(40) NOT NULL,
              content  VARCHAR(40) NOT NULL,
              uid  VARCHAR(40) NOT NULL,
              moment  VARCHAR(40) NOT NULL,
              comments  VARCHAR(40) NOT NULL DEFAULT '0',
              pv  VARCHAR(40) NOT NULL DEFAULT '0',
              PRIMARY KEY ( id )
              );`，
    users: `create table if not exists users(
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            pass VARCHAR(40) NOT NULL,
            PRIMARY KEY ( id )
            );`
  }
}