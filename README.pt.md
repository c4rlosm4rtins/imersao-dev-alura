# Base de Conhecimentos de Sistemas Operacionais

Uma pequena enciclopédia interativa sobre Sistemas Operacionais — criada como projeto da Imersão Dev da Alura. Este site é leve, bonito e responsivo: perfeito para aprender, consultar ou impressionar recrutas no seu GitHub.

Se você chegou até aqui, parabéns — isso significa que você se interessa por tecnologia e gosta de código com estilo. Pegue um café, role a página e divirta-se explorando as curiosidades dos SOs! ☕🖥️

**Destaques divertidos:**
- Alternância entre tema escuro/claro (com preferência salva no navegador).
- Busca em tempo real por nome ou tags.
- Cards com descrição, ano e link de referência para cada SO.
- Layout responsivo com atenção especial à versão mobile.

---

**Demo rápido (o que fazer quando abrir o site):**
- Use a barra de busca no topo para filtrar por nomes como `Ubuntu`, `Windows 11` ou por tags como `servidor`, `mobile`.
- Clique no botão redondo no canto inferior direito para alternar entre claro/escuro.
- Clique no título para resetar a busca.

---

**Estrutura do projeto**

- `index.html` — HTML simples e sem frameworks.
- `style.css` — estilos modernos com variáveis e suporte a tema claro/escuro.
- `script.js` — lógica de busca, renderização dos cards e alternância de tema com `localStorage`.
- `data.json` — banco de dados local com informações sobre os sistemas operacionais.
- `LICENSE` — licença do projeto.

---

Como o tema funciona
- O tema padrão é o modo escuro (aquele que você provavelmente já ama). Quando o usuário clica no botão flutuante, o `body` recebe a classe `light-theme` e a preferência é salva em `localStorage` (chave: `theme`). Na próxima visita o site carrega no tema escolhido.

Dica: se quiser resetar a preferência, abra o Console do navegador e execute:

```
localStorage.removeItem('theme'); location.reload();
```

---

Responsividade e acessibilidade
- O layout foi pensado para funcionar bem em desktop, tablet e mobile. O grid adapta-se para 3 → 2 → 1 colunas conforme a largura.
- O botão de alternância é um botão real (`button`) com `aria-pressed` atualizado, e ícones SVG para escuro/claro.

---

Contribuições (bem-vindas!)

Curtiu o projeto? Quer ver mais? Faça um fork, mexa no `data.json` para adicionar mais sistemas operacionais, melhore estilos em `style.css` ou abra uma issue com ideias.

Possiveis Melhorias futuras:
- Buscar por descrição completa (full-text) ao invés de só nome/tags.
- Adicionar paginação ou filtros por categoria (desktop, servidor, mobile).
- Suporte a imagens / logos para cada card.

Como enviar uma contribuição rápida:

1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-melhora`
3. Faça as alterações e commit: `git commit -am "Minha melhoria"`
4. Envie para o seu fork: `git push origin minha-melhora`
5. Abra um Pull Request explicando a mudança.