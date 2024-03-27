// server.ts

interface Produto {
    id: number;
    img: string;
    title: string;
    prevPrice: string;
  }
  
  const carrinhoKey = 'carrinho';
  
  // Função para recuperar o carrinho do armazenamento local
  function getCarrinhoFromLocalStorage(): Produto[] {
    console.log(carrinhoKey)
    if (typeof window !== 'undefined') { // Verifica se está no lado do cliente
      const carrinhoString = window.localStorage.getItem(carrinhoKey);
      if (carrinhoString) {
        return JSON.parse(carrinhoString);
      }
    }
    return [];
  }
  
  // Função para salvar o carrinho no armazenamento local
  function saveCarrinhoToLocalStorage(carrinho: Produto[]): void {
    if (typeof window !== 'undefined') { // Verifica se está no lado do cliente
      window.localStorage.setItem(carrinhoKey, JSON.stringify(carrinho));
      console.log(carrinho)
    }
  }
  
  // Função para adicionar um produto ao carrinho
  function adicionarProdutoAoCarrinho(produto: Produto): void {
    const carrinho = getCarrinhoFromLocalStorage();
    carrinho.push(produto);
    saveCarrinhoToLocalStorage(carrinho);
    console.log(carrinho)
  }
  
  // Função para limpar o carrinho
  function limparCarrinho(): void {
    if (typeof window !== 'undefined') { // Verifica se está no lado do cliente
      window.localStorage.removeItem(carrinhoKey);
    }
  }
  
  export { getCarrinhoFromLocalStorage, saveCarrinhoToLocalStorage, adicionarProdutoAoCarrinho, limparCarrinho };
  