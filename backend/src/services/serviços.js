const { JasperStarter } = require("jasperstarter");

exports.generatePDF = async (formData, imagePath) => {
  const jasper = new JasperStarter();
  await jasper.jasperProcess({
    files: ["path/to/your/template.jasper"],
    output: "path/to/output.pdf",
    parameters: { 
      name: formData.name, 
      email: formData.email, 
      dataDeNascimento: formData.dataDeNascimento,
      imagePath: imagePath // Caminho da imagem
    },
  });

  return "path/to/output.pdf";
};
