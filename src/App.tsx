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
            refactor:
               "Contiene demasiadas funciones como pagar, activar cuenta, etc. sin explicación al usuario de qué hace cada una",
         },
      },
      {
         name: "NuevaCuenta",
         attributes: {
            función: "Busca tener un primer contacto con las ONG's interesadas, conocidas como leads",
            refactor: ":)",
         },
      },
      {
         name: "Registro",
         attributes: {
            función: "Crea una nueva cuenta con un código de activación",
            refactor: ":)",
         },
      },
      {
         name: "StipePago",
         children: [
            {
               name: "TerminosCondiciones",
               attributes: {
                  función: "Se encarga de mostrar el RAW de los terminos y condiciones",
                  refactor: ":)",
               },
            },
         ],
         attributes: {
            función: "Se encarga de la parte de pago de la plataforma a través de Stripe",
            refactor: "Por los cambios en renovación, se debe unificar los pagos en un solo componente",
         },
      },
      {
         name: "Deposito",
         attributes: {
            función: "Muestra las instrucciones para realizar un depósito para el pago de la plataforma",
            refactor: ":)",
         },
      },
      {
         name: "PagoCase",
         attributes: {
            función: "Redirige al usuario a su opción de pago: depósito o tarjeta (Stripe)",
            refactor: "Mejorar el UI y UX, pues es muy sencilla y no se ve bien",
         },
      },
      {
         name: "CambiaPassword",
         attributes: {
            función: "Cambia la contraseña del usuario",
            refactor: ":)",
         },
      },
      {
         name: "OlvidePassword",
         attributes: {
            función: "Manda una solicitud al backend para cambiar la contraseña",
            refactor: ":)",
         },
      },
      {
         name: "AvisoDePrivacidad",
         attributes: {
            función: "Muestra el aviso de privacidad",
            refactor: ":)",
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
            refactor: ":)",
         },
      },
      {
         name: "Dashboard",
         children: [
            {
               name: "PasoActual",
               attributes: {
                  función: "Muestra el paso actual en el que se encuentra el usuario",
                  refactor: ":)",
               },
            },
            {
               name: "DialogRechazados",
               attributes: {
                  función: "Muestra un dialogo con los documentos rechazados por paso",
                  refactor: ":)",
               },
            },
            {
               name: "Topbar",
               attributes: {
                  función: "Renderiza la barra superior de la plataforma con el logo y el nombre de la ONG",
                  refactor: "Cambiar el css pues está hardcodeado y no permite nuevos elementos de manera fácil",
               },
               children: [
                  {
                     name: "AdminPerfil",
                     attributes: {
                        función: "Dialog que muestra dops opciones: config perfil y admin suscripción",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "ConfigPerfil",
                     attributes: {
                        función: "Dialog que permite modificar el correo electrónico",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "AdminSuscripcion",
                     attributes: {
                        función:
                           "Dialog que permite modificar la suscripción: modificar tarjeta, cancelar suscripción, etc.",
                        refactor: ":)",
                     },
                  },
               ],
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
                  refactor: ":)",
               },
            },
            {
               name: "MenuPaso1",
               attributes: {
                  función: "Renderiza las dos secciones del paso 1: Documentos y PLD",
                  refactor: ":)",
               },
               children: [
                  {
                     name: "Documentos",
                     attributes: {
                        función: "Renderiza las dos secciones del paso 1: Documentos y PLD",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "Pregunta Auditado",
                           attributes: {
                              función:
                                 "Pregunta al usuario si sus documentos son auditados, y si es así, renderiza los documentos requeridos",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "Tabla",
                           attributes: {
                              función:
                                 "Renderiza una tabla con filas que contienen los documentos requeridos por la plataforma",
                              refactor: ":)",
                           },
                           children: [
                              {
                                 name: "Fila",
                                 attributes: {
                                    función:
                                       "Muestra una fila con el nombre del documento, un botón para guardarlo y otro para enviarlo",
                                    refactor: ":)",
                                 },
                                 children: [
                                    {
                                       name: "GuardarDoc",
                                       attributes: {
                                          función:
                                             "Renderiza un botón que se encarga de mostrar un dialogo para guardar el documento",
                                          refactor:
                                             "Unificar el componente para que se pueda implementar en N pasos sin tener que especificar los props por cada paso",
                                       },
                                    },
                                    {
                                       name: "EnviarDoc",
                                       attributes: {
                                          función: "Envia el documento para que los evaluadores lo revisen",
                                          refactor:
                                             "Unificar el componente para que se pueda implementar en N pasos sin tener que especificar los props por cada paso",
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
                        refactor: ":)",
                     },
                  },
                  {
                     name: "PLD",
                     attributes: {
                        función: "Renderiza la sección de PLD para ingresar datos o enviar la información necesaria",
                        refactor: "Modificar el UI/UX pues no tiene un diseño atractivo",
                     },
                     children: [
                        {
                           name: "EditarPLD",
                           attributes: {
                              función: "Renderiza un dialog para editar o ingresar la información de PLD",
                              refactor: ":)",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "Tabla",
               attributes: {
                  función: "Renderiza una tabla con filas que contienen los documentos requeridos por la plataforma",
                  refactor: ":)",
               },
               children: [
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 2",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "Fila",
                     attributes: {
                        función:
                           "Muestra una fila con el nombre del documento, un botón para guardarlo y otro para enviarlo",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "GuardarDoc",
                           attributes: {
                              función:
                                 "Renderiza un botón que se encarga de mostrar un dialogo para guardar el documento",
                              refactor:
                                 "Unificar el componente para que se pueda implementar en N pasos sin tener que especificar los props por cada paso",
                           },
                        },
                        {
                           name: "EnviarDoc",
                           attributes: {
                              función: "Envia el documento para que los evaluadores lo revisen",
                              refactor:
                                 "Unificar el componente para que se pueda implementar en N pasos sin tener que especificar los props por cada paso",
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
                  refactor: ":)",
               },
               children: [
                  {
                     name: "DialogGuardados",
                     attributes: {
                        función: "Renderiza las tres secciones del paso 3: Datos, Estructura y Modelo",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 3",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "Datos",
                     attributes: {
                        función: "Renderiza las cajas de texto e informes de la sección de Datos",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "Informacion",
                           attributes: {
                              función: "Contender que renderiza los textfields de sección de Información",
                           },
                           children: [
                              {
                                 name: "OngTextField",
                                 attributes: {
                                    función: "Renderiza una caja de texto no editable con su respectiva información",
                                    refactor: ":)",
                                 },
                                 children: [
                                    {
                                       name: "EditarOngTextField",
                                       attributes: {
                                          función:
                                             "Renderiza un dialog para editar la información de la caja de texto, guarda la información en la base",
                                          refactor: ":)",
                                       },
                                    },
                                 ],
                              },
                              {
                                 name: "Status",
                                 attributes: {
                                    función: "Renderiza un texto con su respectivo color dependiendo del estatus",
                                    refactor: ":)",
                                 },
                              },
                           ],
                        },
                        {
                           name: "Informes",
                           attributes: {
                              función: "Contender que renderiza los informes de la sección de Información",
                              refactor: ":)",
                           },
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
                              {
                                 name: "OngArchivo",
                                 attributes: {
                                    función:
                                       "Renderiza un estatus del informe, una caja de texto con descripción del estatus y un botón para subir el informe",
                                    refactor: ":)",
                                 },
                              },
                           ],
                        },
                     ],
                  },
                  {
                     name: "Estructura",
                     attributes: {
                        función:
                           "Se encarga de renderizar el estatus de la sección, de los botones para ingresar, guardar, editar e enviar y las respuestas de las preguntas del formulario",
                        refactor: "TBD",
                     },
                     children: [
                        {
                           name: "Formulario",
                           attributes: {
                              función: "Renderiza un dialog para llenar las preguntas del formulario",
                              refactor:
                                 "Modificar la manera en que renderizan los estados de cada pregunta pues está hardcodeado cada estado de la pregunta y no lo renderiza de manera numerable, es decir, sin importar el tamaño de las preguntas",
                           },
                           children: [
                              {
                                 name: "Estrellas",
                                 attributes: {
                                    función: "Renderiza 5 estrellas para las preguntas de calificación",
                                    refactor: ":)",
                                 },
                              },
                              {
                                 name: "RadioButtton1",
                                 attributes: {
                                    función: "Renderiza dos botones de radio para las preguntas de sí o no",
                                    refactor: ":)",
                                 },
                              },
                              {
                                 name: "RadioButtton2",
                                 attributes: {
                                    función:
                                       "Renderiza 5 opciones desde totalmente en desacuerdo hasta totalmente de acuerdo",
                                    refactor: ":)",
                                 },
                              },
                              {
                                 name: "PreguntaIndividual",
                                 attributes: {
                                    función: "Renderiza una pregunta con su respectiva respuesta",
                                    refactor: ":)",
                                 },
                              },
                           ],
                        },
                        {
                           name: "EstructuraTextField",
                           attributes: {
                              función: "Renderiza una caja de texto con su pregunta y su respectiva respuesta",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "EstructuraContainer",
                           attributes: {
                              función:
                                 "Renderiza un contenedor con las preguntas y respuestas de la sección de Estructura",
                              refactor: ":)",
                           },
                        },
                     ],
                  },
                  {
                     name: "Modelo",
                     attributes: {
                        función:
                           "Renderiza los botones para agregar nuevos ejes, enviar ejes y los ejes guardados separados en una caja con un botón para editarlos",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "CreaNuevoEje",
                           attributes: {
                              función: "Muestra un Dialog con cajas de texto para crear un nuevo eje",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "EditarEje",
                           attributes: {
                              función:
                                 "Muestra un Dialog idéntico a CreaNuevoEje pero con la información del eje a editar",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "Status",
                           attributes: {
                              función: "Renderiza un texto con su respectivo color dependiendo del estatus",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "MensajeRechazado",
                           attributes: {
                              función: "Renderiza un ícono de mensaje con un ToolTip que muestra la razón del rechazo",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "OdsTextField",
                           attributes: {
                              función: "Muestra una caja de texto no editable con su respectiva información",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "EjeDeAccion",
                           attributes: {
                              función: "Renderiza un eje de acción con su respectiva información",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "ModeloContainer",
                           attributes: {
                              función: "Renderiza un contenedor con la información de los ejes de acción",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "ProblemaTextField",
                           attributes: {
                              función: "Renderiza una caja de texto no editable con su respectiva información",
                              refactor: ":)",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "MenuPaso4",
               attributes: {
                  función: "Renderiza la tabla con filas para subir los documentos del paso 4",
                  refactor: ":)",
               },
               children: [
                  {
                     name: "DescripcionPaso",
                     attributes: {
                        función: "Muestra una descripción sobre en qué consiste el paso 4",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "Fila",
                     attributes: {
                        función:
                           "Renderiza una fila con el nombre del documento y un botón para subirlo y otro para enviarlo",

                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "GuardarDoc",
                        },
                        {
                           name: "EnviarDoc",
                        },
                        {
                           name: "Template",
                           attributes: {
                              función: "Renderiza un botón template que descarga un .xlsx",
                              refactor: ":)",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "MenuEvaluacion",
               attributes: {
                  función: "Renderiza el menú con Resumen, Detalles y Certificado",
                  refactor: ":)",
               },
               children: [
                  {
                     name: "Resumen",
                     attributes: {
                        función: "Renderiza un resumen de las cuatro seccioens",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "Calificacion",
                           attributes: {
                              función: "Circulo con el porcentaje de la calificación",
                              refactor: ":)",
                           },
                        },
                        {
                           name: "Explicacion",
                        },
                     ],
                  },
                  {
                     name: "Detalles",
                     attributes: {
                        función: "Renderiza Las cartas con el desglose de cada calificación por sección",
                        refactor: ":)",
                     },
                     children: [
                        {
                           name: "DetallesCard",
                           attributes: {
                              función: "Renderiza una carta con la calificación desglosada por sección",
                              refactor: ":)",
                           },
                        },
                     ],
                  },
                  {
                     name: "Certificado",
                     children: [
                        {
                           name: "Aprobado",
                           attributes: {
                              función: "Mensaje de Felicitación si aprobó el certificado",
                              refactor: "Mejorar el UI/UX pues no tiene un diseño atractivo",
                           },
                        },
                        {
                           name: "Reprobado",
                           attributes: {
                              función: "Mensaje si no pasó el certificado",
                              refactor: "Mejorar el UI/UX pues no tiene un diseño atractivo",
                           },
                        },
                     ],
                  },
               ],
            },
            {
               name: "Historial",
               attributes: {
                  función: "Renderiza las cartas para descargar las evaluacione y certificados ordenados por año",
                  refactor: ":)",
               },
               children: [
                  {
                     name: "Card",
                     attributes: {
                        función:
                           "Renderiza una carta con un botón para descargar evaluación y otro para descargar certificado",
                        refactor: ":)",
                     },
                  },
               ],
            },
            {
               name: "Renovacion",
               children: [
                  {
                     name: "BloqueoDialog",
                     attributes: {
                        función: "Renderiza un Dialog para bloquear el uso de TARS",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "WarningDialog",
                     attributes: {
                        función:
                           "Renderiza un Dialog para advertir que a la ong que le quedan 30 días o menos para renovar",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "RenovacionDialog",
                     attributes: {
                        función: "Renderiza un Dialog para renovar CASE ",
                        refactor: ":)",
                     },
                  },
               ],
            },
            {
               name: "Sidebar",
               attributes: {
                  función: "Renderiza la barra lateral con los botones de cada paso",
                  refactor:
                     "Implementar una funcionalidad de estados para que seleccione el paso en el que se encuentra el usuario y renderice su contenido. Modificar el css pues está hardcodeado y no permite nuevos elementos de manera fácil",
               },
               children: [
                  {
                     name: "IconGuardado",
                     attributes: {
                        función:
                           "Renderiza un ícono con un badge para mostrar cuántos documentos guardados tiene por enviar",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "IconRechazado",
                     attributes: {
                        función: "Renderiza un ícono con un badge para mostrar cuántos documentos rechazados tiene",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "SideBar",
                     attributes: {
                        function: "Renderiza los botones de cada paso",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "Tabs",
                     attributes: {
                        function: "Maneja la lógica de los tabs activos de cada paso",
                        refactor: ":)",
                     },
                  },
                  {
                     name: "Tab",
                     attributes: {
                        function: "Renderiza un tab con su respectivo nombre",
                        refactor: ":)",
                     },
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
         <Tree data={treeData} orientation="vertical" renderCustomNodeElement={renderCircleSvgNode} />
      </div>
   );
}

export default App;
