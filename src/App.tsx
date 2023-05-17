// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Tree from "react-d3-tree";
import { Tooltip } from "@mui/material";

const treeData = {
   name: "TARS",
   children: [
      {
         name: "Login",
         attributes: {
            función: "Se encarga del inicio de sesion",
            refactor: "TBD",
         },
      },
      {
         name: "NuevaCuenta",
         attributes: {
            función:
               "Busca tener un primer contacto con las ONG's interesadas, conocidas como leads",
            refactor: "TBD",
         },
      },
      {
         name: "Registro",
         attributes: {
            función: "Crea una nueva cuenta con un código de activación",
            refactor: "TBD",
         },
      },
      {
         name: "StipePago",
         children: [
            {
               name: "SuccessAlert",
               attributes: {
                  función:
                     "Muestra un mensaje arriba a la derecha de la pantalla cuando se realiza un pago exitoso",
                  refactor: "TBD",
               },
            },
            {
               name: "TerminosCondiciones",
               attributes: {
                  función: "Se encarga de mostrar el RAW de los terminos y condiciones",
                  refactor: "TBD",
               },
            },
         ],
         attributes: {
            función: "Se encarga de la parte de pago de la plataforma a través de Stripe",
            refactor: "TBD",
         },
      },
      {
         name: "Deposito",
         attributes: {
            función:
               "Muestra las instrucciones para realizar un depósito para el pago de la plataforma",
            refactor: "TBD",
         },
      },
      {
         name: "PagoCase",
         attributes: {
            función: "Redirige al usuario a su opción de pago: depósito o tarjeta (Stripe)",
            refactor: "TBD",
         },
      },
      {
         name: "CambiaPassword",
         attributes: {
            función: "Cambia la contraseña del usuario",
            refactor: "TBD",
         },
      },
      {
         name: "OlvidePassword",
         attributes: {
            función: "Manda una solicitud al backend para cambiar la contraseña",
            refactor: "TBD",
         },
      },
      {
         name: "AvisoDePrivacidad",
         attributes: {
            función: "Muestra el aviso de privacidad",
            refactor: "TBD",
         },
      },
      {
         name: "Facturacion",
         children: [
            {
               name: "TerminosCondiciones",
            },
         ],
         attributes: {
            función: "Formulario para realizar la facturación una vez que se ha realizado el pago",
            refactor: "TBD",
         },
      },
      {
         name: "Dashboard",
         children: [
            {
               name: "DialogRechazados",
               attributes: {
                  función: "Muestra un dialogo con los documentos rechazados por paso",
                  refactor: "TBD",
               },
            },
            {
               name: "Topbar",
               attributes: {
                  función:
                     "Renderiza la barra superior de la plataforma con el logo y el nombre de la ONG",
                  refactor: "TBD",
               },
            },
            {
               name: "DashboardDocumentos",
               children: [
                  {
                     name: "IconPendiente",
                  },
                  {
                     name: "IconRechazado",
                  },
                  {
                     name: "IconEnProceso",
                  },
                  {
                     name: "IconDocumentosEnviados",
                  },
               ],
               attributes: {
                  función: "Renderiza el status por paso ",
                  refactor: "TBD",
               },
            },
            {
               name: "MenuPaso1",
               attributes: {
                  función: "Renderiza las dos secciones del paso 1: Documentos y PLD",
                  refactor: "TBD",
               },
               children: [
                  {
                     name: "Documentos",
                     attributes: {
                        función: "Renderiza las dos secciones del paso 1: Documentos y PLD",
                        refactor: "TBD",
                     },
                     children: [
                        {
                           name: "Pregunta Auditado",
                           attributes: {
                              función:
                                 "Pregunta al usuario si sus documentos son auditados, y si es así, renderiza los documentos requeridos",
                              refactor: "TBD",
                           },
                        },
                        {
                           name: "Tabla",
                           attributes: {
                              función:
                                 "Renderiza una tabla con filas que contienen los documentos requeridos por la plataforma",
                              refactor: "TBD",
                           },
                           children: [
                              {
                                 name: "Fila",
                                 attributes: {
                                    función:
                                       "Muestra una fila con el nombre del documento, un botón para guardarlo y otro para enviarlo",
                                    refactor: "TBD",
                                 },
                                 children: [
                                    {
                                       name: "GuardarDoc",
                                       attributes: {
                                          función:
                                             "Renderiza un botón que se encarga de mostrar un dialogo para guardar el documento",
                                          refactor: "TBD",
                                       },
                                    },
                                    {
                                       name: "EnviarDoc",
                                       attributes: {
                                          función:
                                             "Envia el documento para que los evaluadores lo revisen",
                                          refactor: "TBD",
                                       },
                                    },
                                 ],
                              },
                           ],
                        },
                     ],
                  },
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 1",
                        refactor: "TBD",
                     },
                  },
                  {
                     name: "PLD",
                     attributes: {
                        función:
                           "Renderiza la sección de PLD para ingresar datos o enviar la información necesaria",
                        refactor: "TBD",
                     },
                     children: [
                        {
                           name: "EditarPLD",
                           attributes: {
                              función:
                                 "Renderiza un dialog para editar o ingresar la información de PLD",
                              refactor: "TBD",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "Tabla",
               attributes: {
                  función:
                     "Renderiza una tabla con filas que contienen los documentos requeridos por la plataforma",
                  refactor: "TBD",
               },
               children: [
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 2",
                        refactor: "TBD",
                     },
                  },
                  {
                     name: "Fila",
                     attributes: {
                        función:
                           "Muestra una fila con el nombre del documento, un botón para guardarlo y otro para enviarlo",
                        refactor: "TBD",
                     },
                     children: [
                        {
                           name: "GuardarDoc",
                           attributes: {
                              función:
                                 "Renderiza un botón que se encarga de mostrar un dialogo para guardar el documento",
                              refactor: "TBD",
                           },
                        },
                        {
                           name: "EnviarDoc",
                           attributes: {
                              función: "Envia el documento para que los evaluadores lo revisen",
                              refactor: "TBD",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "MenuPaso3",
               attributes: {
                  función: "Renderiza las tres secciones del paso 3: Datos, Estructura y Modelo",
                  refactor: "TBD",
               },
               children: [
                  {
                     name: "DialogGuardados",
                     attributes: {
                        función: "Renderiza las tres secciones del paso 3: Datos, Estructura y Modelo",
                        refactor: "TBD",
                     },
                  },
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 3",
                        refactor: "TBD",
                     },
                  },
                  {
                     name: "Datos",
                     attributes: {
                        función: "Renderiza las cajas de texto e informes de la sección de Datos",
                        refactor: "TBD",
                     },
                     children: [
                        {
                           name: "OngTextField",
                           children: [
                              {
                                 name: "EditarOngTextField",
                              },
                           ],
                        },
                        {
                           name: "OngArchivo",
                           children: [
                              {
                                 name: "GuardarInforme",
                              },
                              {
                                 name: "MensajeRechazado",
                              },
                              {
                                 name: "Status",
                              },
                           ],
                        },
                        {
                           name: "OdsTextField",
                        },
                        {
                           name: "EditarDatos",
                        },
                        {
                           name: "SuccessAlert",
                        },
                        {
                           name: "CustomDialog",
                        },
                        {
                           name: "Status",
                        },
                     ],
                  },
                  {
                     name: "Estructura",
                     children: [
                        {
                           name: "Formulario",
                           children: [
                              {
                                 name: "Estrellas",
                              },
                           ],
                        },
                        {
                           name: "EstructuraTextField",
                        },
                     ],
                  },
                  {
                     name: "Modelo",
                     children: [
                        {
                           name: "CreaNuevoEje",
                        },
                        {
                           name: "SuccessAlert",
                        },
                        {
                           name: "CustomDialog",
                        },
                        {
                           name: "EditarEje",
                        },
                        {
                           name: "Status",
                        },
                        {
                           name: "MensajeRechazado",
                        },
                     ],
                  },
               ],
            },
            {
               name: "MenuPaso4",
               children: [
                  {
                     name: "Tabla",
                     children: [
                        {
                           name: "DescripcionPaso",
                        },
                        {
                           name: "Fila",
                           children: [
                              {
                                 name: "GuardarDoc",
                              },
                              {
                                 name: "EnviarDoc",
                              },
                              {
                                 name: "Template",
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
            {
               name: "MenuEvaluacion",
               children: [
                  {
                     name: "Resumen",
                     children: [
                        {
                           name: "Calificacion",
                        },
                        {
                           name: "Explicacion",
                        },
                     ],
                  },
                  {
                     name: "Detalles",
                     children: [
                        {
                           name: "DetallesCard",
                        },
                     ],
                  },
                  {
                     name: "Certificado",
                     children: [
                        {
                           name: "Aprobado",
                        },
                        {
                           name: "Reprobado",
                        },
                     ],
                  },
               ],
            },
            {
               name: "Historial",
               children: [
                  {
                     name: "Card",
                  },
               ],
            },
            {
               name: "Sidebar",
               children: [
                  {
                     name: "IconGuardado",
                  },
                  {
                     name: "IconRechazado",
                  },
               ],
            },
         ],
      },
   ],
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderCircleSvgNode = ({ nodeDatum, toggleNode }) => {
   const functionText = `Función: ${nodeDatum.attributes?.función || ""}`;
   const refactorText = `Refactor: ${nodeDatum.attributes?.refactor || ""}`;

   return (
      <Tooltip
         title={
            <>
               <div>{functionText}</div>
               <div>{refactorText}</div>
            </>
         }
         placement="top"
      >
         <g>
            <circle r="14" onClick={toggleNode} />
            <text fill="black" strokeWidth="1" x="20">
               {nodeDatum.name}
            </text>
         </g>
      </Tooltip>
   );
};

function App() {
   return (
      <div id="treeWrapper" style={{ width: "100vw", height: "100vh" }}>
         <Tree
            data={treeData}
            orientation="vertical"
            renderCustomNodeElement={renderCircleSvgNode}
         />
      </div>
   );
}

export default App;
