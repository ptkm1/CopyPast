const ncp = require("ncp");
//ncp.limit = 16;


module.exports = {
  Copiar(arquivoACopiar, destinoAColar) {
    ncp(arquivoACopiar, destinoAColar, function (err) {
      if (err) {
        return console.error(err);
      }

      const message = "Arquivos copiados com sucesso!";
      console.log(message);
    });
  },
};
