import React from "react";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";
import { initialValues } from "./initialValues";

const TesteJasper = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("dataDeNascimento", values.dataDeNascimento);
          formData.append("image", values.image); // Adicione o campo da imagem

          axios
            .post("http://localhost:5000/api/data", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log("Dados enviados com sucesso:", response.data);
            })
            .catch((error) => {
              console.error("Erro ao enviar dados para o servidor:", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form style={{ width: "300px" }}>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="name"
                name="name"
                label="Nome"
                variant="standard"
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="standard"
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                id="birthdate"
                name="dataDeNascimento"
                label="Data de Nascimento"
                type="date"
                variant="standard"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                required
              />
            </div>
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Salvar"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default TesteJasper;
