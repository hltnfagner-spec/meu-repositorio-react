// Componente 2: Meus Projetos isolados num arquivo só
function Projetos() {
  // Lista com os meus projetos. Deixei só o da migração para o React!
  const meusProjetos = [
    {
      titulo: "MVP - Migração para React",
      descricao: "Migração do meu portfólio profissional para React.",
      // Lembrete: Colocar o link certo do repositório ou do site na Vercel aqui
      link: "meu-repositorio-react-chi.vercel.app" 
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="grid-projetos">
        {/* O map vai passar pelo array e criar o card na tela, mesmo sendo só um por enquanto */}
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
