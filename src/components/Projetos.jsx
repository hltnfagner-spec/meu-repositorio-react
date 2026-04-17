// 
function Projetos() {
  // Lista com os projetos
  const meusProjetos = [
    {
      titulo: "MVP - Migração para React",
      descricao: "Migração do meu portfólio profissional para React.",
      //
      link: "meu-repositorio-react-chi.vercel.app" 
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="grid-projetos">
        {/* O map vai passar pelo array e criar o card */}
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
