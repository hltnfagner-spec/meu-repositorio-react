// Componente 1: Sobre Mim isolado em um arquivo
function SobreMim() {
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <div className="sobre-container">
        <div className="foto-perfil">
          {/* A foto agora precisa ficar na pasta raiz chamada public, ou deixamos sem por enquanto pra focar na nota */}
          <img src="https://github.com/hltnfagner-spec.png" alt="Foto de Hilton Fagner" />
        </div>
        <div className="sobre-texto">
          <p>Sou <strong>Hilton Fagner</strong>, desenvolvedor de sistemas em formação e moro na cidade de Domingos Mourão. Atualmente, possuo formação Técnica em Zootecnia e pretendo trabalhar no desenvolvimento de soluções para pequenos produtores rurais.</p>
          <p>Meu foco atual é criar sistemas descomplicados para gerenciar a rentabilidade de projetos locais, em especial iniciativas voltadas para a apicultura na nossa região, unindo o conhecimento de campo com a tecnologia.</p>
        </div>
      </div>
    </section>
  )
}

export default SobreMim
