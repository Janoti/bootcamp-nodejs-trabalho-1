*** Bootcamp IGTI NodeJS - Trabalho prático 1 ***

Desenvolver uma API para obter informações sobre marcas de carro em um arquivo JSON.

Rotas
|Método|	Rota	|Parâmetros	|Descrição|
|----|----|----|----|
|GET	|/marcas/maisModelos	|	|Lista todas as marcas em ordem descrescente de quantidade de modelos|
|GET	|/marcas/menosModelos	|	|Lista todas as marcas em ordem crescente de quantidade de modelos|
|GET	|/marcas/listaMaisModelos	|:amount|	Lista amount marcas em ordem descrescente de quantidade de modelos|
|GET	|/marcas/listaMenosModelos	|:amount	|Lista amount marcas em ordem crescente de quantidade de modelos|
|POST	|/marcas/listaModelos	|{"nomeMarca": "marca"}|	Lista as informações de uma marca específica recebida via body da requisição em formato JSON|


