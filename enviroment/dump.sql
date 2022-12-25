DROP TABLE IF EXISTS chokwe;
DROP TABLE IF EXISTS portugues;
DROP TABLE IF EXISTS traducao;
DROP TABLE IF EXISTS umbundu;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS historico;


CREATE TABLE chokwe (
id_chokwe INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra VARCHAR(32),
codigo TEXT);

CREATE TABLE portugues (
id_pt INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra VARCHAR(32),
codigo TEXT);

CREATE TABLE traducao (
id_traducao INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
significado VARCHAR(32),
descricao TEXT,
id_pt INT(11) NOT NULL,
id_umbundu INT(11) NOT NULL,
id_chokwe INT(11) NOT NULL);

CREATE TABLE umbundu (
id_umbundu INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
palavra VARCHAR(32),
codigo TEXT);

CREATE TABLE usuario (
id_usuario INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(32) NOT NULL UNIQUE,
senha CHAR(32) NOT NULL,
email VARCHAR(32) NOT NULL,
telefone VARCHAR(32) NOT NULL);

CREATE TABLE historico (
id_historico INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
id_usuario INT(11) NOT NULL,
id_traducao INT(11) NOT NULL);

ALTER TABLE traducao ADD CONSTRAINT traducao_id_pt_portugues_id_pt FOREIGN KEY (id_pt) REFERENCES portugues(id_pt) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE traducao ADD CONSTRAINT traducao_id_umbundu_umbundu_id_umbundu FOREIGN KEY (id_umbundu) REFERENCES umbundu(id_umbundu) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE traducao ADD CONSTRAINT traducao_id_chokwe_chokwe_id_chokwe FOREIGN KEY (id_chokwe) REFERENCES chokwe(id_chokwe) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE historico ADD CONSTRAINT historico_id_usuario_usuario_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE historico ADD CONSTRAINT historico_id_traducao_traducao_id_traducao FOREIGN KEY (id_traducao) REFERENCES traducao(id_traducao) ON DELETE CASCADE ON UPDATE CASCADE;
