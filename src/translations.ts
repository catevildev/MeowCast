export type Language = 'en' | 'pt' | 'es';

const pt = {
  nav: {
    how: 'Como funciona',
    livesense: 'LiveSense',
    privacy: 'Privacidade',
    download: 'Baixar grátis',
  },
  hero: {
    badge: 'Overlay no Windows · suas chaves',
    title: 'Fale. O MeowCast escreve.',
    titleItalic: 'Sem sair da tela.',
    subtitle:
      'Receba ditado, transcrição e o que dizer na reunião — sem convidar um bot. O MeowCast escuta no seu computador e fica numa janela própria ao lado do Zoom, Meet, Teams e de qualquer conversa.',
    download: 'Baixar grátis',
    secondary: 'Ver o LiveSense',
    requires: 'Windows 10+ · sem login · você traz a chave',
  },
  trust: [
    'Nenhum bot entra na chamada',
    'Funciona com qualquer app',
    'Você controla quando ele escuta',
  ],
  apps: {
    left: 'Um copiloto para qualquer conversa',
    right:
      'Zoom, Google Meet, Microsoft Teams, Discord, Slack, áudio presencial e o que vier depois.',
  },
  scenes: {
    kicker: 'Três cenas',
    title: 'O overlay vai até o seu fluxo.',
    items: [
      {
        title: 'Fala que o cursor escreve.',
        desc: 'Segura o atalho em qualquer programa. O MeowCast transcreve, aplica o dicionário e, se você quiser, uma Skill — e-mail, WhatsApp, texto polido — e cola no lugar certo.',
        tag: 'Ditado',
      },
      {
        title: 'Duas vozes. Uma sessão.',
        desc: 'O LiveSense escuta você e a reunião em canais separados. Quando o outro lado termina de falar, aparece o que foi dito e um Diga isso para você.',
        tag: 'LiveSense',
      },
      {
        title: 'Pesquisa sem abandonar a tela.',
        desc: 'Pergunta no meio da call. Resumo no seu idioma, fontes clicáveis. Fecha e volta para a conversa.',
        tag: 'Spotlight',
      },
    ],
  },
  livesense: {
    kicker: 'O recurso mais wow',
    title: 'A próxima frase, pronta.',
    body: 'Janela dedicada para calls. Microfone de um lado, áudio da reunião do outro. Três abas: transcrição, sessão e resumo. Nenhum bot entra no Zoom.',
    tabs: ['Transcrição', 'Sessão', 'Resumo'],
    caption: 'Ao lado do Meet. Stealth esconde da captura. Ninguém na call vê a janela.',
    points: [
      { title: 'Você e a reunião', desc: 'O microfone de um lado, o áudio da call do outro. Idioma e tradução por fonte.' },
      { title: 'Diga isso', desc: 'Sugestão só depois que a outra pessoa termina a fala.' },
      { title: 'Resumo no fim', desc: 'Panorama, tópicos-chave e itens de ação da reunião inteira.' },
    ],
  },
  kit: {
    kicker: 'O resto do kit',
    title: 'Não é só transcrição.',
    items: [
      { title: 'Skills', desc: 'A fala passa por um tom: e-mail formal, WhatsApp, reformular. Você cria as suas.' },
      { title: 'Dicas da IA', desc: 'Pergunta em voz o que está na tela. A visão responde com base no screenshot.' },
      { title: 'Chat', desc: 'Conversa longa nas configurações. Gemini, OpenAI ou Groq. Anexos e histórico local.' },
      { title: 'Stealth', desc: 'OBS, Discord e Teams não capturam as janelas. O copiloto fica só para você.' },
      { title: 'Dicionário', desc: '“use effect” vira useEffect. Nomes, siglas e jargão saem certos.' },
      { title: 'Lembretes', desc: 'Hidratação e eventos do dia no overlay. Precisa do app aberto para disparar.' },
    ],
  },
  start: {
    kicker: 'Começa em três passos',
    title: 'Instala. Cola a chave. Fala.',
    subtitle: 'Não há conta MeowCast. BYOK: você cola a API key do provedor. O app chama a API em seu nome.',
    steps: [
      { n: '01', title: 'Baixa no Windows', desc: 'Instalador NSIS. Escolhe PT, EN ou ES no primeiro uso.' },
      { n: '02', title: 'Cola uma chave', desc: 'Groq, OpenAI ou Gemini. Groq costuma ser o ponto de entrada gratuito.' },
      { n: '03', title: 'Usa o atalho', desc: 'O widget aparece. Segura para falar, Alt+B na reunião, Alt+D para buscar.' },
    ],
    tabs: { groq: 'Groq', gemini: 'Gemini', openai: 'OpenAI' },
    getKey: 'Pegar a chave',
    instructions: {
      groq: [
        'Abra o Groq Cloud Console.',
        'Crie uma conta ou entre.',
        'Em API Keys, crie uma chave.',
        'Cole em Configurações → Chat / LiveSense.',
      ],
      gemini: [
        'Abra o Google AI Studio.',
        'Entre com a conta Google.',
        'Gere uma API key.',
        'Cole no MeowCast (visão e, se quiser, LiveSense).',
      ],
      openai: [
        'Abra a OpenAI Platform.',
        'Em API Keys, crie uma secret key.',
        'Requer créditos na conta.',
        'Cole no MeowCast para Whisper e chat.',
      ],
    },
    links: {
      groq: 'https://console.groq.com/keys',
      gemini: 'https://aistudio.google.com/app/apikey',
      openai: 'https://platform.openai.com/api-keys',
    },
  },
  personas: {
    kicker: 'Para quem é',
    title: 'Call, ditado, código e live.',
    items: [
      { title: 'Reunião em outro idioma', desc: 'OUTROS em inglês, Diga isso em português. No fim, o resumo vira ata.' },
      { title: 'Quem fala mais do que digita', desc: 'Suporte, comercial, criadores. Skill no tom certo, dicionário no nome do produto.' },
      { title: 'Dev no meio do fluxo', desc: 'Dita no editor, Spotlight na docs, dicas da IA no erro da tela.' },
      { title: 'Live e gravação', desc: 'Stealth esconde o overlay do OBS. O gato continua só na sua máquina.' },
    ],
  },
  price: {
    kicker: 'Preço',
    title: 'O app é grátis. A IA é a que você já usa.',
    body: 'O MeowCast não cobra assinatura e não fatura o uso. Groq e Gemini têm faixa gratuita. OpenAI e Tavily (Spotlight) seguem a conta de cada um.',
    points: [
      { title: 'Sem login nosso', desc: 'Chaves no seu PC, criptografadas no Windows quando dá.' },
      { title: 'Sem servidor no meio', desc: 'Áudio vai do PC para o provedor que você ligou. Histórico é local.' },
      { title: 'Troca quando quiser', desc: 'STT e LLM separados. Acabou a cota? Muda o provedor.' },
    ],
  },
  privacy: {
    kicker: 'Privacidade',
    title: 'Não guardamos os seus dados.',
    body: 'As suas informações são salvas apenas no seu computador. Ninguém além de você tem acesso a elas. O MeowCast não coleta dados — não há conta nossa e não há nuvem no meio. O app foi feito para te dar mais produtividade, não para levar a sua conversa embora.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'O MeowCast é grátis?',
        a: 'O aplicativo sim: você baixa e usa. A inteligência vem das APIs que você configurar. Groq e Gemini têm faixas gratuitas; OpenAI e Tavily seguem a conta de cada um. O MeowCast não fatura o uso da IA.',
      },
      {
        q: 'Preciso criar conta no MeowCast?',
        a: 'Não. Não há login nosso. As chaves ficam no seu PC, com criptografia do Windows quando disponível.',
      },
      {
        q: 'Funciona no Mac, Linux ou no celular?',
        a: 'Hoje o alvo de distribuição é Windows (instalador NSIS). Não há app mobile.',
      },
      {
        q: 'Meus áudios e textos vão para vocês?',
        a: 'Não. O áudio vai do seu PC para o provedor que você escolheu. Não há servidor MeowCast no meio para guardar reunião. O histórico é local.',
      },
      {
        q: 'O que é BYOK?',
        a: 'Bring Your Own Key: você cola a API key do provedor. O app só chama a API em seu nome.',
      },
      {
        q: 'LiveSense grava a reunião?',
        a: 'Ele transcreve em tempo real para mostrar na janela e gerar sessão/resumo. Não é um gravador de arquivo de áudio para a nuvem do MeowCast.',
      },
      {
        q: 'A outra pessoa na call vê o LiveSense?',
        a: 'Não, a menos que você compartilhe a janela. Com Stealth, a janela nem aparece em OBS, Discord ou Teams.',
      },
      {
        q: 'Funciona em Zoom, Meet, Teams, Discord?',
        a: 'Sim. O LiveSense captura o áudio do sistema e o seu microfone. Funciona em cima dessas ferramentas; não é um bot que entra na call.',
      },
      {
        q: 'Posso usar em português numa call em inglês?',
        a: 'Sim. Você escolhe o idioma do VOCÊ, o dos OUTROS e o idioma de tradução/sugestão.',
      },
      {
        q: 'A busca Spotlight usa o Google?',
        a: 'Não. Usa Tavily (chave à parte). O resumo pode ir para PT, EN ou ES. As fontes são links da web.',
      },
      {
        q: 'Preciso deixar o app aberto para os lembretes?',
        a: 'Sim. Eventos e hidratação disparam no overlay. Se o MeowCast estiver fechado, o alarme não toca.',
      },
    ],
  },
  cta: {
    title: 'Um gato no canto da tela. O resto é atalho.',
    body: 'Baixa, cola a chave, segura o atalho. Sem mensalidade nossa.',
    download: 'Baixar para Windows',
    github: 'GitHub',
  },
  footer: {
    desc: 'Assistente de desktop para Windows: ditado, LiveSense, Spotlight e chat. Suas chaves. Sem login.',
    product: 'Produto',
    productLinks: [
      { label: 'LiveSense', href: '#livesense' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Download', href: 'https://github.com/catevildev/MeowCast/releases/latest' },
    ],
    more: 'Mais',
    moreLinks: [
      { label: 'GitHub', href: 'https://github.com/catevildev/MeowCast' },
      { label: 'Releases', href: 'https://github.com/catevildev/MeowCast/releases' },
      { label: 'Privacidade', href: '#privacidade' },
    ],
    rights: 'Todos os direitos reservados.',
  },
  mock: {
    listening: 'Ouvindo…',
    you: 'Você',
    others: 'Reunião',
    theySaid: 'Eles disseram',
    sayThis: 'Diga isso',
    topic: 'Prazo do beta',
    theyLine: 'Can you walk us through the timeline for the beta?',
    suggestion: 'Posso. O beta sai na sexta, com o checklist que combinamos na daily.',
    transcriptYou: 'Combinamos o checklist ontem. Falta só o recorte de analytics.',
    transcriptOthers: 'Perfect. And the changelog — is that going out with the build?',
    summaryHeading: 'Resumo da reunião',
    panorama: 'Panorama',
    summaryBody: 'Alinhamento do beta de sexta. Analytics ainda em aberto. Changelog sai junto do build.',
    topicsKicker: 'Tópicos-chave',
    topicNotes: 'Checklist fechado; recorte de analytics ainda em aberto.',
    actionsKicker: 'Itens de ação',
    action: 'Enviar checklist até quinta',
    actionOwner: 'Você',
    dictationApp: 'E-mail',
    dictationTyped: 'Oi, time — o beta sai sexta com o checklist da daily. Falta só o recorte de analytics.',
    smartAnswer: 'Resposta inteligente',
    sources: 'Fontes',
    spotlightPlaceholder: 'Pesquise rapidamente na web...',
    spotlightQ: 'o que é NPS',
    spotlightA: 'NPS (Net Promoter Score) mede, de 0 a 10, o quanto o cliente indicaria o produto. Promoters (9–10) menos detratores (0–6).',
    source: 'qualtrics.com',
    sourceTitle: 'What is NPS? Net Promoter Score explained',
    sourceSnippet: 'NPS is a loyalty metric: one question, from 0 to 10, about recommending a product or brand.',
    emptySearchTitle: 'Busca rápida na web',
    emptySearchHint: 'Digite o que precisa e aperte Enter. Esc fecha a janela.',
    meetingTitle: 'Weekly beta sync',
    meetingApp: 'Meet',
    meetingHint: 'OUTROS falando',
    enter: 'Enter',
  },
};

type Copy = typeof pt;

const en: Copy = {
  nav: {
    how: 'How it works',
    livesense: 'LiveSense',
    privacy: 'Privacy',
    download: 'Download free',
  },
  hero: {
    badge: 'Windows overlay · your keys',
    title: 'Speak. MeowCast writes.',
    titleItalic: 'Without leaving the screen.',
    subtitle:
      'Live dictation, meeting notes and the next line to say — with no bot in the call. MeowCast listens on your PC and sits in its own window next to Zoom, Meet, Teams and anything else.',
    download: 'Download free',
    secondary: 'See LiveSense',
    requires: 'Windows 10+ · no login · bring your own key',
  },
  trust: [
    'No bot joins the call',
    'Works with any app',
    'You choose when it listens',
  ],
  apps: {
    left: 'A copilot for any conversation',
    right:
      'Zoom, Google Meet, Microsoft Teams, Discord, Slack, in-person audio, and whatever comes next.',
  },
  scenes: {
    kicker: 'Three scenes',
    title: 'The overlay comes to your flow.',
    items: [
      {
        title: 'Talk. The cursor types.',
        desc: 'Hold the shortcut in any app. MeowCast transcribes, applies your dictionary, optionally a Skill — email, WhatsApp, polish — and pastes where the cursor is.',
        tag: 'Dictation',
      },
      {
        title: 'Two voices. One session.',
        desc: 'LiveSense hears you and the meeting on separate tracks. When the other side finishes, you get what they said and a Say this line.',
        tag: 'LiveSense',
      },
      {
        title: 'Search without leaving the screen.',
        desc: 'Ask in the middle of the call. A summary in your language, clickable sources. Close and you’re back.',
        tag: 'Spotlight',
      },
    ],
  },
  livesense: {
    kicker: 'The wow feature',
    title: 'The next line, ready.',
    body: 'A dedicated window for calls. Your mic on one track, meeting audio on the other. Three tabs: transcript, session, summary. No bot joins Zoom.',
    tabs: ['Transcript', 'Session', 'Summary'],
    caption: 'Sits next to Meet. Stealth hides it from capture. Nobody on the call sees the window.',
    points: [
      { title: 'You and the meeting', desc: 'Your mic on one track, meeting audio on the other. Language and translation per source.' },
      { title: 'Say this', desc: 'A suggestion only after the other person finishes speaking.' },
      { title: 'Summary at the end', desc: 'Overview, key topics and action items for the whole meeting.' },
    ],
  },
  kit: {
    kicker: 'The rest of the kit',
    title: 'Not just transcription.',
    items: [
      { title: 'Skills', desc: 'Your speech hits a tone: formal email, WhatsApp, rewrite. You can make your own.' },
      { title: 'AI tips', desc: 'Ask out loud what’s on screen. Vision answers from a screenshot.' },
      { title: 'Chat', desc: 'Longer threads in settings. Gemini, OpenAI or Groq. Attachments and local history.' },
      { title: 'Stealth', desc: 'OBS, Discord and Teams don’t capture the windows. The copilot stays on your machine.' },
      { title: 'Dictionary', desc: '“use effect” becomes useEffect. Names, acronyms and jargon land clean.' },
      { title: 'Reminders', desc: 'Hydration and today’s events on the overlay. The app has to be open to fire.' },
    ],
  },
  start: {
    kicker: 'Three steps',
    title: 'Install. Paste a key. Speak.',
    subtitle: 'No MeowCast account. BYOK: you paste the provider API key. The app calls the API on your behalf.',
    steps: [
      { n: '01', title: 'Download on Windows', desc: 'NSIS installer. Pick PT, EN or ES on first launch.' },
      { n: '02', title: 'Paste a key', desc: 'Groq, OpenAI or Gemini. Groq is usually the free on-ramp.' },
      { n: '03', title: 'Use the shortcut', desc: 'The widget appears. Hold to talk, Alt+B in a meeting, Alt+D to search.' },
    ],
    tabs: { groq: 'Groq', gemini: 'Gemini', openai: 'OpenAI' },
    getKey: 'Get API key',
    instructions: {
      groq: [
        'Open the Groq Cloud Console.',
        'Create an account or sign in.',
        'Under API Keys, create a key.',
        'Paste it in Settings → Chat / LiveSense.',
      ],
      gemini: [
        'Open Google AI Studio.',
        'Sign in with Google.',
        'Generate an API key.',
        'Paste it into MeowCast (vision and, if you want, LiveSense).',
      ],
      openai: [
        'Open the OpenAI Platform.',
        'Under API Keys, create a secret key.',
        'Requires billing on the account.',
        'Paste it into MeowCast for Whisper and chat.',
      ],
    },
    links: {
      groq: 'https://console.groq.com/keys',
      gemini: 'https://aistudio.google.com/app/apikey',
      openai: 'https://platform.openai.com/api-keys',
    },
  },
  personas: {
    kicker: 'Who it’s for',
    title: 'Calls, dictation, code and streams.',
    items: [
      { title: 'Meetings in another language', desc: 'OTHERS in English, Say this in Portuguese. The summary becomes the notes.' },
      { title: 'People who talk more than they type', desc: 'Support, sales, creators. A Skill for tone, a dictionary for product names.' },
      { title: 'Devs in the flow', desc: 'Dictate in the editor, Spotlight the docs, AI tips on the on-screen error.' },
      { title: 'Live and recording', desc: 'Stealth hides the overlay from OBS. The cat stays on your machine only.' },
    ],
  },
  price: {
    kicker: 'Pricing',
    title: 'The app is free. The AI is the one you already pay.',
    body: 'MeowCast doesn’t charge a subscription or meter usage. Groq and Gemini have free tiers. OpenAI and Tavily (Spotlight) follow your own accounts.',
    points: [
      { title: 'No login of ours', desc: 'Keys stay on your PC, encrypted by Windows when available.' },
      { title: 'No server in the middle', desc: 'Audio goes from your PC to the provider you turned on. History is local.' },
      { title: 'Switch anytime', desc: 'STT and LLM are separate. Hit a quota? Change the provider.' },
    ],
  },
  privacy: {
    kicker: 'Privacy',
    title: 'We don’t keep your data.',
    body: 'Your information is saved only on your computer. Nobody else has access to it. MeowCast doesn’t collect data — no account of ours, no cloud in the middle. The app is here to help you get more done, not to take your conversation away.',
  },
  faq: {
    title: 'Frequently asked',
    items: [
      {
        q: 'Is MeowCast free?',
        a: 'The app is: download and use it. Intelligence comes from the APIs you configure. Groq and Gemini have free tiers; OpenAI and Tavily bill their own accounts. MeowCast doesn’t charge for AI usage.',
      },
      {
        q: 'Do I need a MeowCast account?',
        a: 'No. There is no login of ours. Keys stay on your PC, with Windows encryption when available.',
      },
      {
        q: 'Does it run on Mac, Linux or mobile?',
        a: 'Today we ship Windows (NSIS installer). There is no mobile app.',
      },
      {
        q: 'Do my audio and text go to you?',
        a: 'No. Audio goes from your PC to the provider you chose. There is no MeowCast server in the middle storing meetings. History is local.',
      },
      {
        q: 'What is BYOK?',
        a: 'Bring Your Own Key: you paste the provider API key. The app only calls the API on your behalf.',
      },
      {
        q: 'Does LiveSense record the meeting?',
        a: 'It transcribes in real time to show in the window and build the session/summary. It is not an audio-file recorder for a MeowCast cloud.',
      },
      {
        q: 'Can the other person see LiveSense?',
        a: 'Not unless you share the window. With Stealth, it doesn’t even appear in OBS, Discord or Teams.',
      },
      {
        q: 'Does it work with Zoom, Meet, Teams, Discord?',
        a: 'Yes. LiveSense captures system audio and your microphone. It sits on top of those apps; it is not a bot that joins the call.',
      },
      {
        q: 'Can I use Portuguese in an English call?',
        a: 'Yes. You pick the language for YOU, for OTHERS, and for translation/suggestions.',
      },
      {
        q: 'Does Spotlight search Google?',
        a: 'No. It uses Tavily (a separate key). The summary can be PT, EN or ES. Sources are web links.',
      },
      {
        q: 'Do reminders need the app open?',
        a: 'Yes. Events and hydration fire on the overlay. If MeowCast is closed, the alarm doesn’t ring.',
      },
    ],
  },
  cta: {
    title: 'A cat in the corner. The rest is a shortcut.',
    body: 'Download, paste a key, hold the shortcut. No subscription from us.',
    download: 'Download for Windows',
    github: 'GitHub',
  },
  footer: {
    desc: 'Windows desktop assistant: dictation, LiveSense, Spotlight and chat. Your keys. No login.',
    product: 'Product',
    productLinks: [
      { label: 'LiveSense', href: '#livesense' },
      { label: 'How it works', href: '#como-funciona' },
      { label: 'Download', href: 'https://github.com/catevildev/MeowCast/releases/latest' },
    ],
    more: 'More',
    moreLinks: [
      { label: 'GitHub', href: 'https://github.com/catevildev/MeowCast' },
      { label: 'Releases', href: 'https://github.com/catevildev/MeowCast/releases' },
      { label: 'Privacy', href: '#privacidade' },
    ],
    rights: 'All rights reserved.',
  },
  mock: {
    listening: 'Listening…',
    you: 'You',
    others: 'Meeting',
    theySaid: 'They said',
    sayThis: 'Say this',
    topic: 'Beta timeline',
    theyLine: 'Can you walk us through the timeline for the beta?',
    suggestion: 'Sure. Beta ships Friday, with the checklist we locked in daily.',
    transcriptYou: 'We locked the checklist yesterday. Analytics cut is the only open item.',
    transcriptOthers: 'Perfect. And the changelog — is that going out with the build?',
    summaryHeading: 'Meeting summary',
    panorama: 'Overview',
    summaryBody: 'Friday beta alignment. Analytics still open. Changelog ships with the build.',
    topicsKicker: 'Key topics',
    topicNotes: 'Checklist locked; analytics cut still open.',
    actionsKicker: 'Action items',
    action: 'Send checklist by Thursday',
    actionOwner: 'You',
    dictationApp: 'Email',
    dictationTyped: 'Hey team — beta ships Friday with the daily checklist. Analytics cut is the only open item.',
    smartAnswer: 'Smart answer',
    sources: 'Sources',
    spotlightPlaceholder: 'Search the web quickly...',
    spotlightQ: 'what is NPS',
    spotlightA: 'NPS (Net Promoter Score) asks how likely a customer is to recommend you, from 0 to 10. Promoters (9–10) minus detractors (0–6).',
    source: 'qualtrics.com',
    sourceTitle: 'What is NPS? Net Promoter Score explained',
    sourceSnippet: 'NPS is a loyalty metric: one question, from 0 to 10, about recommending a product or brand.',
    emptySearchTitle: 'Quick web search',
    emptySearchHint: 'Type what you need and press Enter. Esc closes the window.',
    meetingTitle: 'Weekly beta sync',
    meetingApp: 'Meet',
    meetingHint: 'OTHERS speaking',
    enter: 'Enter',
  },
};

const es: Copy = {
  nav: {
    how: 'Cómo funciona',
    livesense: 'LiveSense',
    privacy: 'Privacidad',
    download: 'Descargar gratis',
  },
  hero: {
    badge: 'Overlay en Windows · tus claves',
    title: 'Habla. MeowCast escribe.',
    titleItalic: 'Sin salir de la pantalla.',
    subtitle:
      'Dictado, transcripción y qué decir en la reunión — sin invitar a un bot. MeowCast escucha en tu PC y vive en su propia ventana junto a Zoom, Meet, Teams y cualquier conversación.',
    download: 'Descargar gratis',
    secondary: 'Ver LiveSense',
    requires: 'Windows 10+ · sin login · tú pones la clave',
  },
  trust: [
    'Ningún bot entra a la llamada',
    'Funciona con cualquier app',
    'Tú controlas cuándo escucha',
  ],
  apps: {
    left: 'Un copiloto para cualquier conversación',
    right:
      'Zoom, Google Meet, Microsoft Teams, Discord, Slack, audio presencial y lo que venga después.',
  },
  scenes: {
    kicker: 'Tres escenas',
    title: 'El overlay va a tu flujo.',
    items: [
      {
        title: 'Habla y el cursor escribe.',
        desc: 'Mantén el atajo en cualquier programa. MeowCast transcribe, aplica el diccionario y, si quieres, una Skill — email, WhatsApp, texto pulido — y pega donde está el cursor.',
        tag: 'Dictado',
      },
      {
        title: 'Dos voces. Una sesión.',
        desc: 'LiveSense te escucha a ti y a la reunión en canales separados. Cuando el otro lado termina, aparece lo dicho y un Di esto para ti.',
        tag: 'LiveSense',
      },
      {
        title: 'Busca sin abandonar la pantalla.',
        desc: 'Pregunta en medio de la call. Resumen en tu idioma, fuentes clicables. Cierras y vuelves.',
        tag: 'Spotlight',
      },
    ],
  },
  livesense: {
    kicker: 'Lo más wow',
    title: 'La siguiente frase, lista.',
    body: 'Ventana dedicada para calls. Tu micro en una pista, el audio de la reunión en otra. Tres pestañas: transcripción, sesión y resumen. Ningún bot entra a Zoom.',
    tabs: ['Transcripción', 'Sesión', 'Resumen'],
    caption: 'Al lado de Meet. Stealth lo oculta de la captura. Nadie en la call ve la ventana.',
    points: [
      { title: 'Tú y la reunión', desc: 'Tu micro en una pista, el audio de la call en otra. Idioma y traducción por fuente.' },
      { title: 'Di esto', desc: 'Sugerencia solo cuando la otra persona termina de hablar.' },
      { title: 'Resumen al final', desc: 'Panorama, temas clave e ítems de acción de toda la reunión.' },
    ],
  },
  kit: {
    kicker: 'El resto del kit',
    title: 'No es solo transcripción.',
    items: [
      { title: 'Skills', desc: 'Tu habla pasa por un tono: email formal, WhatsApp, reformular. Tú creas las tuyas.' },
      { title: 'Tips de IA', desc: 'Pregunta en voz qué hay en pantalla. La visión responde con el screenshot.' },
      { title: 'Chat', desc: 'Hilo largo en ajustes. Gemini, OpenAI o Groq. Adjuntos e historial local.' },
      { title: 'Stealth', desc: 'OBS, Discord y Teams no capturan las ventanas. El copiloto queda solo para ti.' },
      { title: 'Diccionario', desc: '“use effect” se vuelve useEffect. Nombres, siglas y jerga salen bien.' },
      { title: 'Recordatorios', desc: 'Hidratación y eventos del día en el overlay. La app tiene que estar abierta.' },
    ],
  },
  start: {
    kicker: 'Empieza en tres pasos',
    title: 'Instala. Pega la clave. Habla.',
    subtitle: 'No hay cuenta MeowCast. BYOK: pegas la API key del proveedor. La app llama a la API en tu nombre.',
    steps: [
      { n: '01', title: 'Descarga en Windows', desc: 'Instalador NSIS. Elige PT, EN o ES en el primer uso.' },
      { n: '02', title: 'Pega una clave', desc: 'Groq, OpenAI o Gemini. Groq suele ser la entrada gratuita.' },
      { n: '03', title: 'Usa el atajo', desc: 'Aparece el widget. Mantén para hablar, Alt+B en la reunión, Alt+D para buscar.' },
    ],
    tabs: { groq: 'Groq', gemini: 'Gemini', openai: 'OpenAI' },
    getKey: 'Obtener la clave',
    instructions: {
      groq: [
        'Abre Groq Cloud Console.',
        'Crea una cuenta o entra.',
        'En API Keys, crea una clave.',
        'Pégala en Ajustes → Chat / LiveSense.',
      ],
      gemini: [
        'Abre Google AI Studio.',
        'Entra con tu cuenta de Google.',
        'Genera una API key.',
        'Pégala en MeowCast (visión y, si quieres, LiveSense).',
      ],
      openai: [
        'Abre OpenAI Platform.',
        'En API Keys, crea una secret key.',
        'Requiere créditos en la cuenta.',
        'Pégala en MeowCast para Whisper y chat.',
      ],
    },
    links: {
      groq: 'https://console.groq.com/keys',
      gemini: 'https://aistudio.google.com/app/apikey',
      openai: 'https://platform.openai.com/api-keys',
    },
  },
  personas: {
    kicker: 'Para quién es',
    title: 'Call, dictado, código y live.',
    items: [
      { title: 'Reunión en otro idioma', desc: 'OTROS en inglés, Di esto en portugués. Al final, el resumen es el acta.' },
      { title: 'Quien habla más de lo que escribe', desc: 'Soporte, comercial, creadores. Skill en el tono, diccionario en el nombre del producto.' },
      { title: 'Dev en el flujo', desc: 'Dicta en el editor, Spotlight en la docs, tips de IA en el error de pantalla.' },
      { title: 'Live y grabación', desc: 'Stealth esconde el overlay del OBS. El gato sigue solo en tu máquina.' },
    ],
  },
  price: {
    kicker: 'Precio',
    title: 'La app es gratis. La IA es la que ya usas.',
    body: 'MeowCast no cobra suscripción ni factura el uso. Groq y Gemini tienen tramo gratuito. OpenAI y Tavily (Spotlight) siguen la cuenta de cada uno.',
    points: [
      { title: 'Sin login nuestro', desc: 'Claves en tu PC, cifradas en Windows cuando se puede.' },
      { title: 'Sin servidor en el medio', desc: 'El audio va del PC al proveedor que encendiste. El historial es local.' },
      { title: 'Cambia cuando quieras', desc: 'STT y LLM por separado. ¿Se acabó la cuota? Cambia el proveedor.' },
    ],
  },
  privacy: {
    kicker: 'Privacidad',
    title: 'No guardamos tus datos.',
    body: 'Tu información se guarda solo en tu computadora. Nadie más que tú tiene acceso a ella. MeowCast no recopila datos — no hay cuenta nuestra ni nube en el medio. La app existe para darte más productividad, no para llevarse tu conversación.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿MeowCast es gratis?',
        a: 'La aplicación sí: la bajas y la usas. La inteligencia viene de las APIs que configures. Groq y Gemini tienen tramos gratuitos; OpenAI y Tavily siguen la cuenta de cada uno. MeowCast no factura el uso de la IA.',
      },
      {
        q: '¿Necesito crear cuenta en MeowCast?',
        a: 'No. No hay login nuestro. Las claves quedan en tu PC, con cifrado de Windows cuando está disponible.',
      },
      {
        q: '¿Funciona en Mac, Linux o el celular?',
        a: 'Hoy el objetivo de distribución es Windows (instalador NSIS). No hay app mobile.',
      },
      {
        q: '¿Mis audios y textos van a ustedes?',
        a: 'No. El audio va de tu PC al proveedor que elegiste. No hay servidor MeowCast en el medio para guardar la reunión. El historial es local.',
      },
      {
        q: '¿Qué es BYOK?',
        a: 'Bring Your Own Key: pegas la API key del proveedor. La app solo llama a la API en tu nombre.',
      },
      {
        q: '¿LiveSense graba la reunión?',
        a: 'Transcribe en tiempo real para mostrar en la ventana y generar sesión/resumen. No es un grabador de archivo de audio para una nube de MeowCast.',
      },
      {
        q: '¿La otra persona en la call ve LiveSense?',
        a: 'No, a menos que compartas la ventana. Con Stealth, ni aparece en OBS, Discord o Teams.',
      },
      {
        q: '¿Funciona en Zoom, Meet, Teams, Discord?',
        a: 'Sí. LiveSense captura el audio del sistema y tu micrófono. Funciona encima de esas herramientas; no es un bot que entra a la call.',
      },
      {
        q: '¿Puedo usar portugués en una call en inglés?',
        a: 'Sí. Eliges el idioma de TÚ, el de OTROS y el de traducción/sugerencia.',
      },
      {
        q: '¿Spotlight busca en Google?',
        a: 'No. Usa Tavily (clave aparte). El resumen puede ir a PT, EN o ES. Las fuentes son enlaces de la web.',
      },
      {
        q: '¿Los recordatorios necesitan la app abierta?',
        a: 'Sí. Eventos e hidratación disparan en el overlay. Si MeowCast está cerrado, la alarma no suena.',
      },
    ],
  },
  cta: {
    title: 'Un gato en la esquina. El resto es un atajo.',
    body: 'Descarga, pega la clave, mantén el atajo. Sin suscripción nuestra.',
    download: 'Descargar para Windows',
    github: 'GitHub',
  },
  footer: {
    desc: 'Asistente de escritorio para Windows: dictado, LiveSense, Spotlight y chat. Tus claves. Sin login.',
    product: 'Producto',
    productLinks: [
      { label: 'LiveSense', href: '#livesense' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Download', href: 'https://github.com/catevildev/MeowCast/releases/latest' },
    ],
    more: 'Más',
    moreLinks: [
      { label: 'GitHub', href: 'https://github.com/catevildev/MeowCast' },
      { label: 'Releases', href: 'https://github.com/catevildev/MeowCast/releases' },
      { label: 'Privacidad', href: '#privacidade' },
    ],
    rights: 'Todos los derechos reservados.',
  },
  mock: {
    listening: 'Escuchando…',
    you: 'Tú',
    others: 'Reunión',
    theySaid: 'Ellos dijeron',
    sayThis: 'Di esto',
    topic: 'Fecha del beta',
    theyLine: 'Can you walk us through the timeline for the beta?',
    suggestion: 'Claro. El beta sale el viernes, con el checklist que cerramos en la daily.',
    transcriptYou: 'Cerramos el checklist ayer. Solo falta el recorte de analytics.',
    transcriptOthers: 'Perfect. And the changelog — is that going out with the build?',
    summaryHeading: 'Resumen de la reunión',
    panorama: 'Panorama',
    summaryBody: 'Alineación del beta del viernes. Analytics aún abierto. Changelog junto al build.',
    topicsKicker: 'Temas clave',
    topicNotes: 'Checklist cerrado; recorte de analytics aún abierto.',
    actionsKicker: 'Ítems de acción',
    action: 'Enviar checklist hasta el jueves',
    actionOwner: 'Tú',
    dictationApp: 'Email',
    dictationTyped: 'Hola, equipo — el beta sale el viernes con el checklist de la daily. Solo falta el recorte de analytics.',
    smartAnswer: 'Respuesta inteligente',
    sources: 'Fuentes',
    spotlightPlaceholder: 'Busca rápido en la web...',
    spotlightQ: 'qué es NPS',
    spotlightA: 'NPS (Net Promoter Score) mide, de 0 a 10, cuánto el cliente recomendaría el producto. Promoters (9–10) menos detractores (0–6).',
    source: 'qualtrics.com',
    sourceTitle: 'What is NPS? Net Promoter Score explained',
    sourceSnippet: 'NPS es una métrica de lealtad: una pregunta, de 0 a 10, sobre recomendar un producto o marca.',
    emptySearchTitle: 'Búsqueda rápida en la web',
    emptySearchHint: 'Escribe lo que necesitas y pulsa Enter. Esc cierra la ventana.',
    meetingTitle: 'Weekly beta sync',
    meetingApp: 'Meet',
    meetingHint: 'OTROS hablando',
    enter: 'Enter',
  },
};

export const t: Record<Language, Copy> = { pt, en, es };
