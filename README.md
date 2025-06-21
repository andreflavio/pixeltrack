# PixelTrack

Projeto de painel interativo para dados estatísticos de eSports.

## Configuração do Git Flow

- main: Código estável.
- dev: Integração de features.
- feature/: Novas funcionalidades (ex.: feature/ranking-visualization).
- release/: Preparação de lançamentos.
- hotfix/: Correções urgentes.

### Comandos

- Inicializar: `git init`
- Configurar Git Flow: `git flow init`
- Criar feature: `git flow feature start ranking-visualization`
- Commit: `git commit -m "Adicionar função converterPontos"`
- Push: `git push origin feature/ranking-visualization`
- Evitar conflitos: `git pull --rebase origin dev`

### Boas Práticas

- Commits: Mensagens claras, commits atômicos.
- Pull Requests: Revisão via PRs no GitHub.

### Fluxograma

![Fluxograma do Git Flow](flowchart.png)

### Capturas de Tela

![Pull Request](pr_screenshot.png)

![Workflow Passando](Workflowpassando.png)
