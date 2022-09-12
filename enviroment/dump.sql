
DROP TABLE IF EXISTS traduzido;
DROP TABLE IF EXISTS chokwe;
DROP TABLE IF EXISTS umbundu;
DROP TABLE IF EXISTS portugues;

CREATE TABLE portugues (
id_pt INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra TEXT NOT NULL,
codigo TEXT NOT NULL);

CREATE TABLE chokwe (
id_chokwe INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra TEXT NOT NULL,
codigo TEXT NOT NULL UNIQUE);

CREATE TABLE traduzido (
id_traduzido INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
significado TEXT,
descricao TEXT,
id_pt INT(11) NOT NULL,
id_umbundu INT(11) NOT NULL,
id_chokwe INT(11) NOT NULL);

CREATE TABLE umbundu (
id_umbundu INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra TEXT NOT NULL,
codigo TEXT NOT NULL UNIQUE);

ALTER TABLE traduzido ADD CONSTRAINT traduzido_id_pt_portugues_id_pt FOREIGN KEY (id_pt) REFERENCES portugues(id_pt) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE traduzido ADD CONSTRAINT traduzido_id_umbundu_umbundu_id_umbundu FOREIGN KEY (id_umbundu) REFERENCES umbundu(id_umbundu) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE traduzido ADD CONSTRAINT traduzido_id_chokwe_chokwe_id_chokwe FOREIGN KEY (id_chokwe) REFERENCES chokwe(id_chokwe) ON DELETE CASCADE ON UPDATE  CASCADE;