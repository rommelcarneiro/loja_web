const formato = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function Preco({ valor }) {
  return <span>{ formato.format(valor) }</span>;
}