# testeJasper
Projeto para testar o jasper e suas novas atualizações.

Projeto utiliza node.js e REACT.
a intenção é criar uma mini aplicação que consiga gerar um relatório com base nas consequencias do usuário no sistema. Nesse relatório vamos testar as funcionalidades listadas abaixo;

# JasperReports: ele se encontra na versão *6.21.3*

Informações sobre a versão:  https://jasperreports.sourceforge.net/sample.reference.html

Importação de fontes(tem): https://jasperreports.sourceforge.net/sample.reference/fonts/index.html#fonts

Visualização de imagens(tem 2 opções com as bibliotecas *JFreeChart*  e *XChart* ): https://jasperreports.sourceforge.net/sample.reference/jfreechart/index.html#jfreechart 
https://jasperreports.sourceforge.net/sample.reference/xchart/index.html#xchart

Visualização de tabelas(tem): https://jasperreports.sourceforge.net/sample.reference/tabular/index.html#tabular

Aplicação de estilos(tem): https://jasperreports.sourceforge.net/sample.reference/templates/index.html#templates

Criação de cabeçalhos e rodapés(tem): função de versão anteriores 

# PONTO X:
Jasper tem que fazer uma req pro meu backend, tem que retornar a imagem em byte array ou consumir de um cache.

backend criado: pattern MVC 
ROTAS GET E POST 
Consegue salvar a imagem na pasta : backend/src/routes/uploads e acessar por meio de uma api 
localhost:5000/api/uploads/"nome da imagem" 
No banco de dados em postgreSQL é salvo o caminho para a pasta dessa imagem