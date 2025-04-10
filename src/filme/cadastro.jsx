import { Field, Form, FormikProvider, useFormik } from 'formik';
import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput';
import { useEffect } from 'react';
//import * as yup from 'yup';
import { object, string } from 'yup';

const FilmeSchema = object({
    titulo: string()
                .required("Título é obrigatório.")
                .max(50, "Título permite apenas 50 caracteres"),
    subtitulo: string()
                .max(50, "Subtitulo permite apenas 50 caracteres"),
    diretor: string()
                .required("Diretor é obrigatório.")
                .max(50, "Diretor permite apenas 50 caracteres")
})

const Cadastro = props => {
    const { filme, salvar, limpar } = props;

    const formik = useFormik({
        initialValues: filme,
        validationSchema: FilmeSchema,
        onSubmit: salvar
    });
    
    const alterarValor = (nomeCampo, valorCampo) => {
        console.log("Formik: ", formik);
        console.log("Values do Formulário: ", formik.values)
        filme[nomeCampo] = valorCampo;
    }

    useEffect(() => {
        formik.setValues(filme);
    }, [filme]);

    /*const alterarSubtitulo = subtitulo => {
        console.log("subtitulo ", subtitulo);
        console.log("filme antes: ", filme);
        filme.subtitulo = subtitulo;
        console.log("filme depois: ", filme);
    }*/

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <div className="formulario">
                    <Field name="titulo" />
                    {/*<TextInput label="Título" 
                        name="titulo"
                        value={formik.values.titulo} 
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                    />*/}
                    {formik.touched.titulo && formik.errors.titulo && 
                        <span className='erro-campo-formulario'>{formik.errors.titulo}</span>}
                    <TextInput label="Subtitulo"
                        name="subtitulo"
                        value={formik.values.subtitulo}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}/>
                        {formik.touched.subtitulo && formik.errors.subtitulo && 
                        <span className='erro-campo-formulario'>{formik.errors.subtitulo}</span>}
                    <TextInput label="Diretor" 
                        name="diretor"
                        value={formik.values.diretor}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}/>
                        {formik.touched.diretor && formik.errors.diretor && 
                        <span className='erro-campo-formulario'>{formik.errors.diretor}</span>}
                    <div className='botoes'>
                        <button className='botao-formulario' onClick={limpar}>Novo</button>
                        <button type='submit' className='botao-formulario'>Salvar</button>
                    </div>
                </div>
            </Form>

        </FormikProvider>
        
    )
}

export default Cadastro;