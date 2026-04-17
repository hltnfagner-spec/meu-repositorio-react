// Componente 2: Meus Projetos renderizando dados dinâmicos
function Projetos() {
  // Array de objetos com os meus projetos (requisito da atividade)
  const meusProjetos = [
    {
      titulo: "MVP - Portfólio em React",
      descricao: "Migração do meu portfólio profissional para React, focado em componentização e renderização dinâmica.",
      link: "https://github.com/hltnfagner-spec/meu-portfolio-react" 
    },
    {
      titulo: "Gestão para Apicultura",
      descricao: "Sistema em planejamento para auxiliar o controle de colmeias na associação de apicultores.",
      link: "#"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="grid-projetos">
        {/* Passando pelo array com o map para criar os cards na tela */}
        {meusProjetos.map((projeto, index) => (
          <div className="projeto-card" key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">Ver Repositório</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos
