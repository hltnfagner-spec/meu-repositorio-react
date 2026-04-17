// Importando os componentes que eu criei
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'

// Componente principal que junta todas as peças do quebra-cabeça
function App() {
  return (
    <div>
      <header>
        <div className="logo">Hilton Fagner</div>
      </header>
      
      <main>
        {/* Chamando os componentes na tela */}
        <SobreMim />
        <Projetos />
      </main>

      <footer>
        <p>&copy; 2026 - Hilton Fagner | Desenvolvedor de Sistemas</p>
      </footer>
    </div>
  )
}

export default App
