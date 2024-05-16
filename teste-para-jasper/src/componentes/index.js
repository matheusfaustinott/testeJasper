import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  dataDeNascimento: "",
  image: null,
};

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
          formData.append("image", values.image);
          console.log("data:", values.dataDeNascimento);

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
              <Field
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="name"
                    label="Nome"
                    variant="standard"
                    required
                    fullWidth
                  />
                )}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Field
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    required
                    fullWidth
                  />
                )}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Field
                name="dataDeNascimento"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="birthdate"
                    label="Data de Nascimento"
                    type="date"
                    variant="standard"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
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
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? "Enviando..." : "Salvar"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default TesteJasper;
