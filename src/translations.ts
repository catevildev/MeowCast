export type Language = 'en' | 'pt' | 'es';

export const t = {
  en: {
    nav: {
      ecosystem: 'Ecosystem',
      community: 'Community',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'MeowCast • LIVE',
      title: 'Vibe code at the speed of thought.',
      subtitle: 'Hold a key, speak, release — your words land wherever the cursor blinks, in any app. Private on-device Whisper or ultra-fast cloud multi-modal AI — your call.',
      download: 'Download for Windows',
      requires: 'Requires Windows 10+',
    },
    features: {
      title: 'Hold. Speak. Release. Land.',
      subtitle: 'The whole interface is one key. No window to focus, no app to switch — dictation follows your cursor across the desktop.',
      items: [
        { title: 'Hold', desc: 'One global hotkey, system-wide. Hold to record, or use it to toggle mode and dictate hands-free.' },
        { title: 'Speak', desc: 'Say it like you would to a teammate — agent prompts, commit messages, docs, Slack replies.' },
        { title: 'Release', desc: 'Transcription runs where you choose: on-device through Whisper, or in the cloud using Groq LPU or Gemini Flash.' },
        { title: 'Land', desc: 'Text lands wherever the cursor blinks — editor, terminal, browser, chat — in under a second.' },
      ]
    },
    getStarted: {
      title: 'Getting Started',
      subtitle: 'MeowCast is BYOK (Bring Your Own Key). Follow these simple steps to configure your favorite AI providers.',
      tabs: {
        groq: 'Groq (Fastest)',
        gemini: 'Google Gemini',
        openai: 'OpenAI (Whisper)',
        local: 'Local Whisper'
      },
      instructions: {
        groq: [
          'Go to the Groq Cloud Console.',
          'Create an account or log in.',
          'Navigate to "API Keys" and click "Create API Key".',
          'Copy the key and paste it into MeowCast Settings -> Transcription API Key.',
        ],
        gemini: [
          'Go to Google AI Studio.',
          'Sign in with your Google Account.',
          'Click on "Get API Key" in the left sidebar.',
          'Generate a new key and paste it into MeowCast Settings -> Vision Model API Key.',
        ],
        openai: [
          'Go to the OpenAI Platform.',
          'Sign in and navigate to "API Keys".',
          'Create a new secret key (Note: Requires billing setup).',
          'Paste it into MeowCast to use Whisper Cloud transcription.',
        ],
        local: [
          'Open MeowCast Settings.',
          'Select "Local Whisper" under Transcription Mode.',
          'The app will automatically download the necessary models to run offline.',
          'No API keys required! (Requires a capable CPU/GPU)'
        ]
      },
      links: {
        groq: 'https://console.groq.com/keys',
        gemini: 'https://aistudio.google.com/app/apikey',
        openai: 'https://platform.openai.com/api-keys'
      }
    },
    faq: {
      title: 'Frequently asked.',
      items: [
        { q: 'Is my voice data actually private?', a: 'Yes. MeowCast is designed to send audio directly to your provided API keys or run purely on-device. We do not collect, store, or train on your dictation data.' },
        { q: 'Can I dictate hands-free?', a: 'Yes, you can configure MeowCast to act as a toggle rather than push-to-talk in the settings.' },
        { q: 'Which models are available?', a: 'Currently, MeowCast supports OpenAI Whisper (cloud), Groq LPU (extremely fast), and Google Gemini (multi-modal capability for screen analysis).' },
        { q: 'What platforms does MeowCast run on?', a: 'Currently, MeowCast is optimized for Windows 10+.' },
      ]
    },
    footer: {
      desc: 'The hub of the vibe coding space. Ship software at the speed of thought alongside autonomous AI teammates.',
      ecosystem: 'Ecosystem',
      explore: 'Explore',
      community: 'Community',
      rights: 'All rights reserved.'
    }
  },
  pt: {
    nav: {
      ecosystem: 'Ecossistema',
      community: 'Comunidade',
      getStarted: 'Começar',
    },
    hero: {
      badge: 'MeowCast • AO VIVO',
      title: 'Programe na vibe, na velocidade do pensamento.',
      subtitle: 'Segure uma tecla, fale, solte — suas palavras aterrissam onde o cursor estiver, em qualquer app. Use Whisper privado no dispositivo ou a nuvem ultra-rápida. Você decide.',
      download: 'Baixar para Windows',
      requires: 'Requer Windows 10+',
    },
    features: {
      title: 'Segure. Fale. Solte. Escreva.',
      subtitle: 'A interface inteira é apenas uma tecla. Sem janelas para focar — o ditado segue o seu cursor por todo o sistema.',
      items: [
        { title: 'Segure', desc: 'Uma tecla de atalho global. Segure para gravar, ou use como botão liga/desliga para falar com as mãos livres.' },
        { title: 'Fale', desc: 'Fale naturalmente como se estivesse com um colega — responda no Slack, crie commits ou dê comandos pro Cursor.' },
        { title: 'Solte', desc: 'A transcrição roda onde você quiser: no próprio PC (Whisper Local) ou na nuvem (Groq LPU / Gemini Flash).' },
        { title: 'Escreva', desc: 'O texto cai onde o cursor estiver piscando — no editor, terminal ou navegador — em menos de um segundo.' },
      ]
    },
    getStarted: {
      title: 'Guia de Início Rápido',
      subtitle: 'O MeowCast funciona conectando-se diretamente às suas próprias chaves de API. Siga os passos abaixo para configurar.',
      tabs: {
        groq: 'Groq (Mais Rápido)',
        gemini: 'Google Gemini',
        openai: 'OpenAI (Whisper)',
        local: 'Whisper Local'
      },
      instructions: {
        groq: [
          'Acesse o Console da Groq.',
          'Crie uma conta ou faça login.',
          'Vá em "API Keys" e clique em "Create API Key".',
          'Copie a chave e cole nas Configurações do MeowCast -> Transcription API Key.',
        ],
        gemini: [
          'Acesse o Google AI Studio.',
          'Faça login com sua conta do Google.',
          'Clique em "Get API Key" na barra lateral esquerda.',
          'Gere uma chave e cole no MeowCast -> Vision Model API Key.',
        ],
        openai: [
          'Acesse a plataforma da OpenAI.',
          'Faça login e vá em "API Keys".',
          'Crie uma nova chave (Aviso: Requer créditos na conta).',
          'Cole no MeowCast para usar a transcrição Whisper via nuvem.',
        ],
        local: [
          'Abra as configurações do MeowCast.',
          'Selecione "Local Whisper" no Modo de Transcrição.',
          'O aplicativo baixará automaticamente o modelo para rodar offline.',
          'Sem necessidade de API Keys! (Requer uma CPU/GPU razoável)'
        ]
      },
      links: {
        groq: 'https://console.groq.com/keys',
        gemini: 'https://aistudio.google.com/app/apikey',
        openai: 'https://platform.openai.com/api-keys'
      }
    },
    faq: {
      title: 'Perguntas Frequentes.',
      items: [
        { q: 'Meus dados de voz são realmente privados?', a: 'Sim. O MeowCast foi feito para enviar o áudio direto para a SUA chave de API, ou rodar 100% no seu PC. Nós não coletamos nem armazenamos nada.' },
        { q: 'Posso usar sem segurar o botão?', a: 'Sim, você pode configurar o MeowCast para funcionar no modo "Toggle" (Ligar/Desligar) nas configurações.' },
        { q: 'Quais modelos estão disponíveis?', a: 'Atualmente suportamos OpenAI Whisper (Nuvem), Groq LPU (Ultra Rápido) e Google Gemini (Capacidade multi-modal de visão).' },
        { q: 'Em quais sistemas o MeowCast funciona?', a: 'Atualmente, o MeowCast é otimizado exclusivamente para Windows 10+.' },
      ]
    },
    footer: {
      desc: 'O epicentro do vibe coding. Entregue software na velocidade do pensamento junto com agentes autônomos.',
      ecosystem: 'Ecossistema',
      explore: 'Explorar',
      community: 'Comunidade',
      rights: 'Todos os direitos reservados.'
    }
  },
  es: {
    nav: {
      ecosystem: 'Ecosistema',
      community: 'Comunidad',
      getStarted: 'Empezar',
    },
    hero: {
      badge: 'MeowCast • EN VIVO',
      title: 'Vibe coding a la velocidad del pensamiento.',
      subtitle: 'Mantén una tecla, habla, suelta — tus palabras aterrizan donde parpadea el cursor, en cualquier app. Whisper privado en tu PC o nube ultrarrápida. Tú decides.',
      download: 'Descargar para Windows',
      requires: 'Requiere Windows 10+',
    },
    features: {
      title: 'Mantén. Habla. Suelta. Escribe.',
      subtitle: 'Toda la interfaz es solo una tecla. Sin ventanas que enfocar — el dictado sigue tu cursor por todo el sistema.',
      items: [
        { title: 'Mantén', desc: 'Un atajo global. Mantén presionado para grabar, o úsalo como interruptor para hablar con manos libres.' },
        { title: 'Habla', desc: 'Habla naturalmente como lo harías con un compañero — responde en Slack, haz commits o usa Cursor.' },
        { title: 'Suelta', desc: 'La transcripción se ejecuta donde elijas: en tu PC (Whisper Local) o en la nube (Groq LPU / Gemini Flash).' },
        { title: 'Escribe', desc: 'El texto aterriza donde esté parpadeando el cursor — editor, terminal o navegador — en un segundo.' },
      ]
    },
    getStarted: {
      title: 'Guía de Inicio Rápido',
      subtitle: 'MeowCast funciona conectándose a tus propias claves de API. Sigue estos pasos para configurarlo.',
      tabs: {
        groq: 'Groq (Más Rápido)',
        gemini: 'Google Gemini',
        openai: 'OpenAI (Whisper)',
        local: 'Whisper Local'
      },
      instructions: {
        groq: [
          'Ve a la consola de Groq.',
          'Crea una cuenta o inicia sesión.',
          'Ve a "API Keys" y haz clic en "Create API Key".',
          'Copia la clave y pégala en la Configuración de MeowCast -> Transcription API Key.',
        ],
        gemini: [
          'Ve a Google AI Studio.',
          'Inicia sesión con tu cuenta de Google.',
          'Haz clic en "Get API Key" en la barra lateral.',
          'Genera una clave y pégala en MeowCast -> Vision Model API Key.',
        ],
        openai: [
          'Ve a la plataforma de OpenAI.',
          'Inicia sesión y ve a "API Keys".',
          'Crea una nueva clave (Nota: Requiere configuración de facturación).',
          'Pégala en MeowCast para usar la nube de Whisper.',
        ],
        local: [
          'Abre la configuración de MeowCast.',
          'Selecciona "Local Whisper" en Modo de Transcripción.',
          'La aplicación descargará los modelos automáticamente para usar sin conexión.',
          '¡No se requieren claves de API! (Requiere una buena CPU/GPU)'
        ]
      },
      links: {
        groq: 'https://console.groq.com/keys',
        gemini: 'https://aistudio.google.com/app/apikey',
        openai: 'https://platform.openai.com/api-keys'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes.',
      items: [
        { q: '¿Son mis datos de voz realmente privados?', a: 'Sí. MeowCast envía el audio directamente a TU clave de API, o se ejecuta 100% en tu PC. No recopilamos ni almacenamos nada.' },
        { q: '¿Puedo dictar sin usar las manos?', a: 'Sí, puedes configurar MeowCast para que funcione como un interruptor (Toggle) en la configuración.' },
        { q: '¿Qué modelos están disponibles?', a: 'Actualmente soportamos OpenAI Whisper (Nube), Groq LPU (Ultrarrápido) y Google Gemini (Capacidad multimodal).' },
        { q: '¿En qué plataformas funciona MeowCast?', a: 'Actualmente, MeowCast está optimizado para Windows 10+.' },
      ]
    },
    footer: {
      desc: 'El epicentro del vibe coding. Crea software a la velocidad del pensamiento junto a compañeros de IA.',
      ecosystem: 'Ecosistema',
      explore: 'Explorar',
      community: 'Comunidad',
      rights: 'Todos los derechos reservados.'
    }
  }
};
