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
- 1º turno (04/10): eleição **6257** Presidente (`br-c0001`), **6259** Governador (`<uf>-c0003`), Senado (`<uf>-c0005`), Dep. federal (`c0006`), estadual (`c0007`, DF distrital `c0008`).
- 2º turno (25/10): eleição **6258** Presidente, **6260** Governador PR. Só troca pro 2º turno quando o 1º chegou a 100% ou o 2º já tem voto.
- Busca a cada 10 s. **Nada troca sozinho** (sem Pausar, sem Testar): botões no topo PRESIDENTE · SENADORES · DEPUTADOS · CÂMARA · SENADO.
  - PRESIDENTE: Lula x Flávio + Governador (top 3) do estado escolhido no filtro (`apuracao-gov`, começa no PR) + barra das urnas do Brasil.
  - SENADORES: disputa do Senado do estado escolhido (8 mais votados; `apuracao-sen`).
  - DEPUTADOS: filtro estado / federal-estadual / eleitos-mais votados (`apuracao-dep`); vagas de `carg[0].nv`; páginas de 30 pelas setas.
  - CÂMARA (513, soma eleitos dos 27 estados) e SENADO (81 = 27 de 2022 fixas em `SEN2022`, de memória, + 54 de hoje). Esquerda vermelho, centro cinza (PSD, MDB, PSDB, Cidadania, Solidariedade, Avante), direita azul — listas `ESQ`/`CENTRO`. Passar o mouse (ou tocar) numa cadeira mostra nome, partido, UF, votos e situação.
- Lê os dois formatos: `dados/<uf>/…-u.json` (completo) e `dados-simplificados/…-r.json`; fica com o mais adiantado.
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
