# Eleições 2026 — painel de apuração do Joel

Projeto próprio desde 2026-10-04, separado do Ritmo (antes morava em `mei-financeiro/public/eleicoes/`).

| | |
|---|---|
| Pasta no Mac | `/Users/joelneto/Documents/CLAUDE/Eleições 2026` |
| GitHub | github.com/joonetoo/eleicoes-2026 (público, GitHub Pages direto do ramo `main`, sem build) |
| Link | https://joonetoo.github.io/eleicoes-2026/ |
| Tecnologia | um `index.html` só (HTML + CSS + JS puro), `sw.js` (PWA), `manifest.json`, ícones, `fotos/` |
| Dados | **nenhum banco.** Só LÊ os arquivos públicos do TSE. No aparelho guarda tema, som, última leitura e quem liderava (chaves `apuracao-*`). |

## Fonte dos números (TSE)
- Base: `https://resultados.tse.jus.br/oficial/ele2026/`. O TSE libera CORS pro `joonetoo.github.io`.
- 1º turno (04/10): eleição **6257** Presidente (`br-c0001`), **6259** Governador (`<uf>-c0003`) e Senado (`<uf>-c0005`) de PR, SP, RS, PE e MG.
- Busca a cada 10 s. Presidente fica fixo em cima; Governador e Senado (3 mais votados) trocam de estado a cada 1 min, deslizando.
- A cada 5 min entra por 30 s a tela dos deputados federais do PR (`pr-c0006`, 30 cadeiras): os 30 mais votados; quando o TSE marca eleitos (`e:'s'` / `st` "Eleito…"), eles vão pra frente em verde. Botões no topo trocam na mão.
- 2º turno (25/10): eleição **6258** Presidente, **6260** Governador PR (só se o PR tiver 2º turno).
- Lê os dois formatos: `dados/<uf>/<uf>-cXXXX-eXXXXXX-u.json` (completo) e `dados-simplificados/…-r.json`; fica com o mais adiantado.
- Troca sozinho pro 2º turno quando o arquivo de Presidente da 6258 aparece. Senado (e Governador, se não houver 2º turno no PR) mostram o resultado final do 1º.
- Fotos oficiais: `…/<eleição>/fotos/<uf>/<sqcand>.jpeg` (cópias locais em `fotos/`; candidato novo cai na foto do TSE).

## Visual
Estilo das páginas oficiais de apuração (cores de partido do g1), Liquid Glass no Mac (≥821px, cabe inteiro em 1512×982),
One UI no celular (≤760px), claro/escuro/automático. Mockup aprovado: https://claude.ai/artifact/1ewP4E77bbrUXKPkgfbtfq.
Quando o Lula passa na frente: papel picado vermelho/dourado, som "tling" (gerado na hora) e aviso com a foto.

## Publicar
É só tirar a foto e enviar: `git add -A && git commit -m "..." && git push` — o GitHub Pages atualiza em ~1 min.

## Joel
Mesmo jeito de trabalhar do Ritmo (ver CLAUDE.md do Ritmo, §1): português simples, mostrar antes de mexer, desligar servidores de teste.
Depois da eleição ele vai pedir pra apagar este projeto.
