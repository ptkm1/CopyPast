const ncp = require("ncp");
//ncp.limit = 16;


module.exports = {
  Copiar(arquivoACopiar, destinoAColar){
    /*
    let arquivo = { nome: arquivoACopiar.name, path: arquivoACopiar.path }
    let destino = { nome: destinoAColar.name, path: destinoAColar.path }
    /**
     * A lógica, é remover o arquivo da string que recebe o PATH, utilizando o nome dele pra fazer o metodo substring e o indexOf
     
    const indexDoNomeArquivo = arquivo.path.indexOf(arquivo.nome)
    const CaminhoDaPastaArquivo = arquivo.path.substring(0, indexDoNomeArquivo)
    console.log(CaminhoDaPastaArquivo);

    const indexDoNomeDestino = destino.path.indexOf(destino.nome)
    const CaminhoDaPastaDestino = destino.path.substring(0, indexDoNomeDestino)
    console.log(CaminhoDaPastaDestino);*/

    ncp(arquivoACopiar, destinoAColar, function (err) {
      if (err) {
        return console.error(err);
      }

      const message = "Arquivos copiados com sucesso!";
      console.log(message);

      console.log(arquivoACopiar,destinoAColar)
    });
  },
};
