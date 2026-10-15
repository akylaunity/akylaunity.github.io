'use strict';

const site = {
  name: 'QUTTY',
  email: 'quttyhelp@gmail.com',
  navigation: [
    ['index.html', 'Главная'],
    ['features.html', 'Возможности'],
    ['download.html', 'Скачать'],
    ['updates.html', 'Обновления'],
    ['about.html', 'О проекте'],
    ['support.html', 'Поддержка']
  ],
  footerNavigation: [
    ['news.html', 'Новости'],
    ['roadmap.html', 'Планы разработки'],
    ['team.html', 'Команда'],
    ['faq.html', 'Частые вопросы'],
    ['donate.html', 'Поддержать проект'],
    ['privacy.html', 'Конфиденциальность']
  ]
};

const features = [
  { icon: '✦', title: 'Личные и групповые чаты', text: 'Общение с друзьями, коллегами и сообществами в одном интерфейсе.' },
  { icon: '◉', title: 'Голосовые и видеозвонки', text: 'Планируем удобную связь на разных устройствах.' },
  { icon: '▤', title: 'Каналы и сообщества', text: 'Публикации, подписки и новости от авторов.' },
  { icon: '◷', title: 'Истории', text: 'Моменты, которыми хочется делиться.' },
  { icon: '⌕', title: 'Поиск', text: 'Поиск людей, чатов и нужной информации.' },
  { icon: '◈', title: 'Настройка под себя', text: 'Темы оформления, профиль и персональные настройки.' }
];

function card(title, description, icon = '✦', extra = '') {
  return `<article class="card"><div class="card-icon" aria-hidden="true">${icon}</div><h3>${title}</h3><p>${description}</p>${extra}</article>`;
}

function titleBlock(label, title, description = '') {
  return `<div class="heading-block"><span class="eyebrow">${label}</span><h1>${title}</h1>${description ? `<p class="lead">${description}</p>` : ''}</div>`;
}

function sectionHeader(label, title, description = '') {
  return `<div class="section-header"><div><span class="eyebrow">${label}</span><h2>${title}</h2></div>${description ? `<p>${description}</p>` : ''}</div>`;
}

function platformCard(icon, title, type) {
  return `<article class="card platform-card"><div class="platform-symbol" aria-hidden="true">${icon}</div><div><h3>${title}</h3><p>${type}</p></div><span class="status">В разработке</span></article>`;
}

const pages = {
  home: () => `
    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow"><span class="pulse-dot"></span> Независимый проект мессенджера</span>
        <h1>Общение, которое <span class="gradient-text">чувствуется своим.</span></h1>
        <p class="lead">QUTTY — развивающийся мессенджер для общения, звонков и сообществ. Мы создаём понятный продукт с вниманием к деталям.</p>
        <div class="actions"><a class="button button-primary" href="features.html">Узнать о QUTTY <span aria-hidden="true">↗</span></a><a class="button button-outline" href="download.html">Версии приложения</a></div>
        <p class="hero-note">Проект в разработке. Возможности и сроки могут изменяться.</p>
      </div>
      <div class="hero-art" aria-label="Демонстрационный макет интерфейса QUTTY">
        <div class="glow-orb"></div>
        <div class="demo-window">
          <div class="demo-top"><div class="window-dots"><i></i><i></i><i></i></div><span>QUTTY / Концепт интерфейса</span><span>⋯</span></div>
          <div class="demo-body">
            <aside class="demo-rail"><div class="mini-logo">Q</div><div class="rail-icon selected">◫</div><div class="rail-icon">◯</div><div class="rail-icon">⚙</div></aside>
            <div class="demo-chat-list"><strong>Сообщения</strong><div class="search-placeholder">⌕ &nbsp; Поиск</div><div class="demo-contact active"><span class="avatar a1">Д</span><div><b>Друзья</b><small>Заходим сегодня?</small></div></div><div class="demo-contact"><span class="avatar a2">Q</span><div><b>QUTTY News</b><small>Будущие обновления</small></div></div><div class="demo-contact"><span class="avatar a3">П</span><div><b>Проекты</b><small>Есть идея!</small></div></div></div>
            <div class="demo-conversation"><div class="conversation-header"><span class="avatar a1">Д</span><div><b>Друзья</b><small>Групповой чат</small></div><span class="conversation-more">⋯</span></div><div class="bubbles"><div class="bubble incoming">Как вам идея нового QUTTY?</div><div class="bubble outgoing">Выглядит интересно ✨</div><div class="bubble incoming">Ждём первые версии!</div></div><div class="message-field">Написать сообщение… <span>➤</span></div></div>
          </div>
        </div>
        <div class="floating-tag">✦ &nbsp; Сайт нового поколения</div>
      </div>
    </section>
    <section class="section container">${sectionHeader('Возможности', 'Один мессенджер для важного', 'Это направления разработки, а не перечень уже выпущенных функций.')}<div class="cards-grid">${features.slice(0, 6).map(f => card(f.title, f.text, f.icon)).join('')}</div></section>
    <section class="section container"><div class="split-banner"><div><span class="eyebrow">Развитие</span><h2>Мы только начинаем.</h2><p>Следите за прогрессом: будем публиковать новости, этапы разработки и сведения о доступных версиях.</p><a class="button button-light" href="roadmap.html">Посмотреть планы →</a></div><div class="banner-decoration" aria-hidden="true"><span>Q</span></div></div></section>
    <section class="section container">${sectionHeader('Следующий шаг', 'Узнайте больше о проекте')}<div class="cards-grid cards-grid-3">${card('Обновления', 'Когда появятся сборки и изменения, расскажем об этом здесь.', '↗', '<a class="text-link" href="updates.html">Перейти →</a>')}${card('Команда', 'Люди, которые работают над развитием QUTTY.', '◎', '<a class="text-link" href="team.html">Познакомиться →</a>')}${card('Поддержка', 'Вопросы, идеи и сообщения о проблемах.', '✉', '<a class="text-link" href="support.html">Написать →</a>')}</div></section>
  `,
  features: () => `
    <section class="page-hero container">${titleBlock('Возможности', 'Идеи, которые объединяют.', 'Мы продумываем QUTTY как единое пространство для общения. Пока это планируемые функции — их реализация и доступность могут изменяться.')}</section>
    <section class="section container"><div class="cards-grid">${features.map(f => card(f.title, f.text, f.icon)).join('')}</div></section>
    <section class="section container"><div class="notice"><b>Важно:</b> показанные возможности описывают направление разработки. Точный перечень доступных функций появится вместе с тестовыми сборками.</div></section>
  `,
  download: () => `
    <section class="page-hero container">${titleBlock('Загрузки', 'QUTTY на ваших устройствах.', 'В этом разделе появятся проверенные ссылки на установочные файлы и сведения о версиях. Сейчас публичные загрузки не представлены.')}</section>
    <section class="section container"><div class="platform-grid">${platformCard('▣', 'Windows', 'Приложение для компьютера')}${platformCard('◧', 'Android', 'Мобильное приложение / APK')}${platformCard('◉', 'iOS', 'Версия для iPhone')}${platformCard('⌘', 'macOS', 'Версия для Mac')}</div><div class="notice spaced"><b>Безопасность:</b> скачивайте будущие сборки только по ссылкам, опубликованным на официальном сайте QUTTY. Сторонние установочные файлы не проверяются командой.</div></section>
  `,
  updates: () => `
    <section class="page-hero container">${titleBlock('Обновления', 'История версий.', 'Здесь будут выходить заметки о новых версиях, исправлениях и изменениях приложений QUTTY.')}</section>
    <section class="section container"><div class="empty-state"><div class="empty-illustration">↻</div><h2>Список версий пока пуст</h2><p>После публикации первой сборки добавим номер версии, дату, изменения и ссылку на загрузку.</p><a class="button button-outline" href="roadmap.html">Посмотреть план разработки</a></div></section>
  `,
  news: () => `
    <section class="page-hero container">${titleBlock('Новости', 'Что нового в QUTTY?', 'События проекта, заметки о разработке и анонсы будут собраны на этой странице.')}</section>
    <section class="section container"><div class="empty-state"><div class="empty-illustration">✧</div><h2>Новости появятся позже</h2><p>Мы не будем выдумывать публикации задним числом: добавим реальные новости, когда будем готовы ими поделиться.</p><a class="button button-outline" href="about.html">О проекте</a></div></section>
  `,
  roadmap: () => `
    <section class="page-hero container">${titleBlock('Планы разработки', 'От идеи к продукту.', 'Предварительная дорожная карта без обещаний по датам. Этапы и приоритеты могут меняться.')}</section>
    <section class="section container"><div class="timeline"><article class="timeline-item"><span class="timeline-step">01</span><div><span class="tag">Этап разработки</span><h2>Дизайн и общая структура</h2><p>Фирменный стиль, интерфейсы, сайт проекта и подготовка компонентов.</p></div></article><article class="timeline-item"><span class="timeline-step">02</span><div><span class="tag">Планируется</span><h2>Интеграция основных функций</h2><p>Учётные записи, профили, переписка и взаимодействие приложений с сервером.</p></div></article><article class="timeline-item"><span class="timeline-step">03</span><div><span class="tag">Планируется</span><h2>Тестирование и улучшения</h2><p>Проверка работы на устройствах, исправление проблем и улучшение удобства.</p></div></article><article class="timeline-item"><span class="timeline-step">04</span><div><span class="tag">В перспективе</span><h2>Первые публичные версии</h2><p>Публикация проверенных сборок и дальнейшее развитие возможностей.</p></div></article></div></section>
  `,
  about: () => `
    <section class="page-hero container">${titleBlock('О проекте', 'Знакомьтесь, QUTTY.', 'Независимый проект мессенджера, который создаётся с фокусом на понятное общение и удобство на разных устройствах.')}</section>
    <section class="section container"><div class="two-column"><div class="feature-panel"><span class="eyebrow">Наша идея</span><h2>Простота без ощущения ограничений.</h2><p>Мы хотим, чтобы личные сообщения, группы, звонки и сообщества сочетались в одном последовательном интерфейсе.</p><p>Сейчас проект развивается. Мы постепенно превращаем концепции и прототипы в проверенные функции.</p></div><div class="fact-stack"><div class="fact"><span>Название</span><strong>QUTTY</strong></div><div class="fact"><span>Направление</span><strong>Мессенджер</strong></div><div class="fact"><span>Платформы в планах</span><strong>Desktop и Mobile</strong></div><div class="fact"><span>Контакт</span><a href="mailto:${site.email}">${site.email}</a></div></div></div></section>
    <section class="section container"><div class="cards-grid cards-grid-3">${card('Команда', 'Познакомьтесь с участниками проекта.', '◎', '<a href="team.html" class="text-link">Смотреть →</a>')}${card('Планы', 'Посмотрите, над чем мы собираемся работать.', '↗', '<a href="roadmap.html" class="text-link">Смотреть →</a>')}${card('Поддержка', 'Открыты к вопросам и конструктивным предложениям.', '✉', '<a href="support.html" class="text-link">Написать →</a>')}</div></section>
  `,
  team: () => `
    <section class="page-hero container">${titleBlock('Команда', 'Люди за QUTTY.', 'Знакомьтесь с участниками, работающими над проектом. Роли и состав команды могут обновляться.')}</section>
    <section class="section container"><div class="cards-grid cards-grid-2">${[
      ['A', 'akyjla_blitz ', 'Руководитель проекта / Backend'],
      ['M', 'mimomori  ', 'Frontend / SMM !Работа Web-Версией!'],
      ['X', 'Xurua ', 'Frontend !Работа Web-Версией! '],
      ['I', 'ivan2282 ','Backend-разработка / серверная часть' ],
      ['K', 'Kotaz ','Backend-разработка ' ],
      ['G', 'Griboed ','Визуальная часть и оформление ' ]
    
    ].map(([initial, name, role]) => `<article class="card team-card"><div class="team-avatar">${initial}</div><div><h3>${name}</h3><p>${role}</p></div></article>`).join('')}
  `,
  support: () => `
    <section class="page-hero container">${titleBlock('Поддержка', 'Мы на связи.', 'Вопрос по проекту, идея или замеченная ошибка? Напишите команде QUTTY.')}</section>
    <section class="section container"><div class="two-column"><div class="contact-card"><span class="eyebrow">Электронная почта</span><h2>${site.email}</h2><p>Основной адрес для вопросов, предложений и сообщений об ошибках.</p><a class="button button-primary" href="mailto:${site.email}?subject=QUTTY%20%E2%80%94%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5">Написать на почту ↗</a></div><div class="feature-panel"><span class="eyebrow">Как сообщить об ошибке</span><h2>Помогите разобраться быстрее</h2><ul class="simple-list"><li>Укажите, в каком разделе возникла проблема.</li><li>Опишите, что вы делали и что произошло.</li><li>При необходимости приложите скриншот.</li><li>Не отправляйте пароли и коды подтверждения.</li></ul></div></div></section>
    <section class="section container">${sectionHeader('Ответы', 'Начните с частых вопросов')}<div class="cta-row"><p>Собрали ответы о статусе проекта, загрузках и обращениях.</p><a class="button button-outline" href="faq.html">Открыть FAQ →</a></div></section>
  `,
  faq: () => `
    <section class="page-hero container">${titleBlock('FAQ', 'Частые вопросы.', 'Коротко о QUTTY, доступности приложений и обратной связи.')}</section>
    <section class="section container"><div class="faq-list"><details><summary>QUTTY уже доступен для скачивания?</summary><p>Публичные ссылки на сборки пока не опубликованы. Когда они появятся, их разместят на странице «Скачать».</p></details><details><summary>На каких устройствах планируется QUTTY?</summary><p>Мы рассматриваем версии для Windows, Android, iOS и macOS. Точные сроки и доступность объявим позже.</p></details><details><summary>Где следить за развитием проекта?</summary><p>На страницах «Новости», «Обновления» и «Планы разработки» официального сайта.</p></details><details><summary>Как связаться с разработчиками?</summary><p>Напишите на <a href="mailto:${site.email}">${site.email}</a>.</p></details><details><summary>Нужен ли аккаунт на этом сайте?</summary><p>Пока нет. Сайт информационный, а авторизацию мы рассмотрим на следующем этапе разработки.</p></details></div></section>
  `,
  donate: () => `
    <section class="page-hero container">${titleBlock('Поддержать проект', 'Помогите QUTTY развиваться.', 'Благодарим за интерес к нашему проекту. Варианты добровольной поддержки опубликуем позже.')}</section>
    <section class="section container"><div class="empty-state"><div class="empty-illustration">♡</div><h2>Способы поддержки пока не добавлены</h2><p>Не отправляйте деньги по неизвестным ссылкам или реквизитам от имени QUTTY. Официальная информация появится здесь.</p><a class="button button-outline" href="mailto:${site.email}">Связаться с командой</a></div></section>
  `,
  privacy: () => `  
    <section class="page-hero container privacy-page"><div class="heading-block"><span class="eyebrow">Документы</span><h1>Политика конфиденциальности</h1></div><div class="privacy-blank" aria-label="Содержание политики конфиденциальности будет добавлено позже"></div></section>
  `
};

function linkItem([href, label], activePage) {
  const isActive = (href === 'index.html' && activePage === 'home') || href === `${activePage}.html`;
  return `<a href="${href}" ${isActive ? 'aria-current="page"' : ''}>${label}</a>`;
}

function renderHeader(currentPage) {
  return `<header class="site-header"><div class="container header-inner"><a href="index.html" class="brand" aria-label="QUTTY — главная"><span class="brand-mark">Q</span><span>QUTTY</span></a><nav class="nav-links" id="site-nav" aria-label="Главное меню">${site.navigation.map(item => linkItem(item, currentPage)).join('')}</nav><div class="header-actions"><button type="button" class="theme-toggle" aria-label="Переключить тему" title="Переключить тему">☀</button><button type="button" class="menu-toggle" aria-label="Открыть меню" aria-expanded="false" aria-controls="site-nav">☰</button></div></div></header>`;
}

function renderFooter(currentPage) {
  return `<footer class="site-footer"><div class="container footer-grid"><div><a href="index.html" class="brand"><span class="brand-mark">Q</span><span>QUTTY</span></a><p>Мессенджер, который мы создаём вместе с идеями и обратной связью.</p><a class="footer-email" href="mailto:${site.email}">${site.email}</a></div><div><h3>Проект</h3>${site.navigation.slice(1).map(item => linkItem(item, currentPage)).join('')}</div><div><h3>Информация</h3>${site.footerNavigation.map(item => linkItem(item, currentPage)).join('')}</div></div><div class="container footer-bottom"><span>© 2026 QUTTY. Проект в разработке.<div class="footer-socials">
  <a href="https://t.me/+HeycGt1aqNU4ODhi"
     target="_blank" rel="noopener noreferrer">
    Telegram
  </a>

  <a href="https://www.youtube.com/@QuttyMessenger"
     target="_blank" rel="noopener noreferrer">
    YouTube
  </a>
</div>
</div></footer>`;
}




function init() {
  const currentPage = document.body.dataset.page || 'home';
  const root = document.getElementById('app');
  if (!root) return;
  const page = pages[currentPage] || pages.home;
  root.innerHTML = `${renderHeader(currentPage)}<main id="main-content">${page()}</main>${renderFooter(currentPage)}`;

  let theme = 'dark';
  try { theme = localStorage.getItem('qutty-theme') === 'light' ? 'light' : 'dark'; } catch (_) {}
  const themeButton = document.querySelector('.theme-toggle');
  const setTheme = value => {
    document.documentElement.setAttribute('data-theme', value);
    themeButton.textContent = value === 'light' ? '☾' : '☀';
    themeButton.setAttribute('aria-label', value === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему');
  };
  setTheme(theme);
  themeButton.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('qutty-theme', theme); } catch (_) {}  
  });

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav'); 
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    menuButton.textContent = open ? '✕' : '☰';
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
