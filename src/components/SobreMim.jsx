// Componente 1: Sobre Mim isolado em um arquivo
function SobreMim() {
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <div className="sobre-container">
        <div className="foto-perfil">
          {/* Pegando a minha foto lá da pasta public (o Vite entende que a barra / vai direto pra lá) */}
          <img src="/minha-foto.JPG" alt="Foto de Hilton Fagner" />
        </div>
        <div className="sobre-texto">
          <p>Sou <strong>Hilton Fagner</strong>, desenvolvedor de sistemas em formação e moro na cidade de Domingos Mourão. Atualmente, possuo formação Técnica em Zootecnia e pretendo trabalhar no desenvolvimento de soluções para pequenos produtores rurais.</p>
          <p>Meu objetivo é facilitar o acesso a sistemas descomplicados que permitam gerenciar índices zootécnicos e a rentabilidade do negócio, unindo o conhecimento de campo com a tecnologia.</p>
        </div>
      </div>
    </section>
  )
}

export default SobreMim
