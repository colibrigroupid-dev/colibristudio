'use client'

import { useEffect, useState } from 'react'

function T({ en, ru }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ru">{ru}</span>
    </>
  )
}

export default function BroPage() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    let l = 'en'
    try {
      const saved = localStorage.getItem('bro-lang')
      if (saved) l = saved
      else if ((navigator.language || '').toLowerCase().startsWith('ru')) l = 'ru'
    } catch (e) {}
    setLang(l)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('lang-ru', lang === 'ru')
    document.documentElement.lang = lang
    try {
      localStorage.setItem('bro-lang', lang)
    } catch (e) {}
  }, [lang])

  useEffect(() => {
    const bar = document.getElementById('bar')
    const onScroll = () => bar && bar.classList.toggle('solid', window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.18 }
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <div className="bar" id="bar">
        <div className="brand">
          B<b>R</b>O
        </div>
        <div className="langs" role="group" aria-label="Language">
          <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
            EN
          </button>
          <button type="button" className={lang === 'ru' ? 'on' : ''} onClick={() => setLang('ru')}>
            RU
          </button>
        </div>
      </div>

      <header className="hero">
        <div className="bg">
          <img
            src="/assets/hero_night.jpg"
            alt="Ahmed on a black motorbike at night in Jakarta; the rooster Bro rides in a cage behind him"
            fetchPriority="high"
          />
        </div>
        <div className="scrim"></div>
        <div className="inner">
          <div className="kicker">
            <T en="An AI-produced feature film" ru="Полнометражный фильм ИИ-производства" />
          </div>
          <h1>BRO</h1>
          <div className="byline">
            <T
              en={
                <>
                  A film by <em>Ara Arush</em>
                </>
              }
              ru={
                <>
                  Фильм <em>Ары Аруша</em>
                </>
              }
            />
          </div>
          <p className="logline">
            <T
              en="A ten-year-old orphan escapes a Jakarta orphanage with his pet rooster to find the mother he remembers only by her scent. A chance meeting with a young street fighter turns their run across Indonesia into a story about brotherhood beyond blood."
              ru="Десятилетний сирота сбегает из джакартского интерната с ручным петухом, чтобы найти маму, которую помнит только по запаху. Случайная встреча с молодым уличным бойцом превращает их путь через Индонезию в историю о братстве не по крови."
            />
          </p>
          <div className="meta">
            <T en="Adventure · Drama" ru="Приключения · Драма" />
            <span className="sep">/</span>13+<span className="sep">/</span>
            <T en="Kazakhstan · Indonesia" ru="Казахстан · Индонезия" />
          </div>
        </div>
        <div className="scrollcue" aria-hidden="true"></div>
      </header>

      <section className="statement">
        <div className="wrap rv">
          <p>
            <T
              en="“Brothers are not made by blood. They are made by the road you survive together.”"
              ru="«Братьями людей делает не кровь — а дорога, которую они прошли вместе»."
            />
          </p>
          <div className="src">
            <T en="The heart of the film" ru="Сердце фильма" />
          </div>
        </div>
      </section>

      <section id="pipeline" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="How the film is made" ru="Как делается фильм" />
            </div>
            <h2>
              <T en="Live action meets the neural studio" ru="Живые съёмки встречают нейростудию" />
            </h2>
            <p>
              <T
                en="BRO is a hybrid: the creative studio develops and shoots live material, the neural studio scales it into a full-length feature. The teaser was shot live in Indonesia — every AI frame on this page holds that bar."
                ru="«БРО» — гибрид: креативная студия разрабатывает и снимает живой материал, нейростудия масштабирует его в полный метр. Тизер снят вживую в Индонезии — и каждый AI-кадр на этой странице держит эту планку."
              />
            </p>
          </div>
          <div className="ppl rv">
            <div className="pstep">
              <img
                src="/assets/locker_wraps.jpg"
                alt="Live-action frame from the teaser shoot: Ahmed wrapping his fists in the locker room"
                loading="lazy"
              />
              <div className="pnum">01</div>
              <div className="ptitle">Colibri Studio</div>
              <div className="ptext">
                <T
                  en="Creative development & pre-production: screenplay, 346 storyboards, casting, live-action shoots."
                  ru="Креативная разработка и препродакшн: сценарий, 346 раскадровок, кастинг, живые съёмки."
                />
              </div>
            </div>
            <div className="pstep">
              <img
                src="/assets/ahmed_sheet.jpg"
                alt="Character model sheet: consistent turnaround of Ahmed for the AI pipeline"
                loading="lazy"
              />
              <div className="pnum">02</div>
              <div className="ptitle">
                <T en="Neyra neural studio" ru="Нейростудия Neyra" />
              </div>
              <div className="ptext">
                <T
                  en="AI production: consistent characters, worlds and action at feature scale — from the live material."
                  ru="AI-продакшн: консистентные персонажи, миры и экшн в масштабе полного метра — на основе живого материала."
                />
              </div>
            </div>
            <div className="pstep">
              <img
                src="/assets/night_ride.jpg"
                alt="Finished cinematic frame: night chase through neon streets"
                loading="lazy"
              />
              <div className="pnum">03</div>
              <div className="ptitle">
                <T en="Post & master" ru="Пост и мастер" />
              </div>
              <div className="ptext">
                <T
                  en="Live orchestral score, sound design, color — a theatrical master for festivals and platforms."
                  ru="Живой оркестр, звуковой дизайн, цвет — кинотеатральный мастер для фестивалей и платформ."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="still" style={{ paddingTop: 0 }}>
        <figure className="frame rv">
          <img
            src="/assets/jakarta_day.jpg"
            alt="Ahmed's black motorbike with Bro's cage crossing a rainy Jakarta avenue among cars, scooters and tuk-tuks"
            loading="lazy"
          />
          <figcaption className="cap">
            <span>
              <T en="Jakarta. The run begins." ru="Джакарта. Начало побега." />
            </span>
          </figcaption>
        </figure>
      </section>

      <section id="story">
        <div className="wrap cols">
          <div className="text rv">
            <div className="eyebrow">
              <T en="The story" ru="История" />
            </div>
            <h2>
              <T
                en="Two orphans. One rooster. All of Indonesia against them."
                ru="Два сироты. Один петух. Против них — вся Индонезия."
              />
            </h2>
            <p>
              <T
                en="Nyoman hatched the rooster Bro himself, from an egg stolen out of the orphanage canteen. Ahmed, a street fighter raised by the port, owes a mob boss a champion bird — and Bro is its spitting image. One rigged fight later, the boys are running from Jakarta to Bali with a stolen hardware wallet, hunted by the syndicate of Miss Tonako."
                ru="Ньоман сам высидел петуха Бро из яйца, украденного в интернатской столовой. Ахмед, уличный боец из порта, должен боссу мафии бойцового петуха — и Бро похож на него как две капли воды. Одна подмена на боях — и мальчики бегут из Джакарты на Бали с украденным аппаратным кошельком, а по их следу идут люди мисс Тонако."
              />
            </p>
            <p>
              <T
                en="Underneath the chase — a film against cruelty. A child who refuses to accept the world of fights, and makes the adults see it."
                ru="Под погоней — фильм против жестокости. Ребёнок не принимает мир боёв — и заставляет взрослых его увидеть."
              />
            </p>
          </div>
          <figure className="photo rv">
            <img
              src="/assets/night_ride.jpg"
              alt="Night ride through neon-lit streets: Ahmed and Bro's cage on the back of the motorbike, motion blur"
              loading="lazy"
            />
            <figcaption className="pcap">
              <T en="Frame · night chase" ru="Кадр · ночная погоня" />
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="still" style={{ paddingTop: 0 }}>
        <figure className="frame rv">
          <img
            src="/assets/locker_prayer.jpg"
            alt="Ahmed in a worn locker room, hands folded in prayer before the fight, sunlight through the windows"
            loading="lazy"
          />
          <figcaption className="cap">
            <span>
              <T en="Scene one. A prayer before the fight." ru="Первая сцена. Молитва перед боем." />
            </span>
          </figcaption>
        </figure>
      </section>

      <section id="ahmed" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="The characters" ru="Персонажи" />
            </div>
            <h2>
              <T en="Ahmed. The fighter who never strikes first" ru="Ахмед. Боец, который не бьёт первым" />
            </h2>
          </div>
          <figure className="char-hero rv">
            <picture>
              <source media="(max-width:700px)" srcSet="/assets/ahmed_hero_916.jpg" />
              <img src="/assets/ahmed_hero_219.jpg" alt="Ahmed — character portrait" loading="lazy" />
            </picture>
          </figure>
          <div className="char-grid rv">
            <div className="dossier">
              <div className="drow">
                <div className="dk"><T en="Age" ru="Возраст" /></div>
                <div className="dv">18</div>
              </div>
              <div className="drow">
                <div className="dk"><T en="From" ru="Откуда" /></div>
                <div className="dv"><T en="Jakarta, Indonesia" ru="Джакарта, Индонезия" /></div>
              </div>
              <div className="drow">
                <div className="dk"><T en="Occupation" ru="Род занятий" /></div>
                <div className="dv">
                  <T en="Street fighter (pencak silat). Earns his living in underground no-rules fights." ru="Уличный боец (пенчак-силат). Зарабатывает подпольными боями без правил." />
                </div>
              </div>
              <div className="drow">
                <div className="dk"><T en="Role" ru="Роль" /></div>
                <div className="dv"><T en="Lead character, narrator of the story" ru="Главный герой, рассказчик истории" /></div>
              </div>
            </div>
            <div className="char-text">
              <h3><T en="Character" ru="Характер" /></h3>
              <p>
                <T
                  en="Cocky on the outside, faithful on the inside. He combines daily prayer with street life and keeps one rule: “I never strike first.” True to his word, quick-witted, fast to decide. He lives by the law of the street — but his road leads to his mentor's words: “To serve the Almighty is to help His creations.”"
                  ru="Дерзкий снаружи, верующий внутри. Совмещает намаз с уличной жизнью и держит своё правило: «Я никогда не бью первым». Верен слову, ироничен, быстро принимает решения. Живёт по законам улицы, но путь его — к словам наставника: «Служить Всевышнему — значит помогать его творениям»."
                />
              </p>
              <h3><T en="Backstory" ru="Предыстория" /></h3>
              <p>
                <T
                  en="An orphan raised by the streets of Jakarta. Shelter, food and family came from his mentor Abu — a pencak silat master. Ahmed promised Abu never to fight, but breaks the promise to earn a living. He has lost Shiva — a fighting rooster that belongs to a mob boss — and now must return it before the tournament at any cost."
                  ru="Сирота, вырос на улицах Джакарты. Кров, еду и семью ему заменил наставник Абу — мастер пенчак-силата. Ахмед обещал Абу не драться, но нарушает обещание ради заработка. Потерял бойцового петуха Шиву, принадлежащего боссу мафии, — и теперь должен вернуть его к турниру любой ценой."
                />
              </p>
              <h3><T en="Goal" ru="Цель" /></h3>
              <p>
                <T
                  en="Repay the debt and survive. Reach Bali and keep the promise he gave Nyoman — to find his mother. And one dream: to become an actor and a world Asian movie star. “Just like Bruce Lee.”"
                  ru="Вернуть долг и выжить. Добраться до Бали и сдержать обещание, данное Ньоману, — найти его маму. И мечта — стать актёром и мировой азиатской кинозвездой. «Прямо как Брюс Ли»."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="wrap cols">
          <figure className="photo rv">
            <img
              src="/assets/ahmed_sheet.jpg"
              alt="Character model sheet of Ahmed: consistent turnaround views with and without helmet"
              loading="lazy"
            />
            <figcaption className="pcap">
              <T en="Character model sheet · pipeline consistency" ru="Модель-щит персонажа · консистентность пайплайна" />
            </figcaption>
          </figure>
          <div className="text rv">
            <div className="eyebrow">
              <T en="Why now" ru="Почему сейчас" />
            </div>
            <h2>
              <T en="A $6M film, produced for $2M" ru="Фильм на $6 млн — производством за $2 млн" />
            </h2>
            <p>
              <T
                en="BRO was fully developed for conventional production: the same script, storyboards and creative team were budgeted at over $6,000,000 under a studio model. AI production brings the total project cost to $2,000,000 — with live actors for voice and reference, and an orchestral score recorded live."
                ru="«БРО» полностью разработан под классическое производство: тот же сценарий, раскадровки и творческая группа стоили бы больше $6 000 000 в студийной модели. ИИ-производство сводит полную стоимость проекта к $2 000 000 — с живыми актёрами (голос и референсы) и живой оркестровой записью музыки."
              />
            </p>
            <p>
              <T
                en="Every frame on this page was produced with the film's own pipeline."
                ru="Каждый кадр на этой странице сделан собственным пайплайном фильма."
              />
            </p>
          </div>
        </div>
      </section>

      <section id="facts" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="facts rv">
            <div className="fact">
              <div className="n">168</div>
              <div className="l">
                <T en="pages · completed screenplay" ru="страниц · готовый сценарий" />
              </div>
            </div>
            <div className="fact">
              <div className="n">346</div>
              <div className="l">
                <T en="storyboard pages" ru="листов раскадровок" />
              </div>
            </div>
            <div className="fact">
              <div className="n">
                $2<small>M</small>
              </div>
              <div className="l">
                <T en="total project cost" ru="полная стоимость проекта" />
              </div>
            </div>
            <div className="fact">
              <div className="n">3×</div>
              <div className="l">
                <T en="below the conventional budget" ru="дешевле классической сметы" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="Distribution" ru="Дистрибуция" />
            </div>
            <h2>
              <T en="Release in waves — markets that already answered" ru="Релиз волнами — по рынкам, которые уже ответили" />
            </h2>
          </div>
          <ul className="waves rv">
            <li>
              <b>
                <T en="Kazakhstan & Central Asia" ru="Казахстан и Центральная Азия" />
              </b>
              <div className="sub">
                <T en="Home market premiere; produced in Kazakhstan." ru="Домашняя премьера; производство в Казахстане." />
              </div>
            </li>
            <li>
              <b>
                <T en="Indonesia & Southeast Asia" ru="Индонезия и ЮВА" />
              </b>
              <div className="sub">
                <T
                  en="The film's setting, cinema audience of ~150M. Content placement agreements within the Neyra ecosystem: Vision+ (MNC Group) and Vidio (Emtek) streaming platforms."
                  ru="Место действия фильма, киноаудитория ~150 млн. Соглашения экосистемы Neyra о размещении контента: стриминги Vision+ (MNC Group) и Vidio (Emtek)."
                />
              </div>
            </li>
            <li>
              <b>
                <T en="Russia & CIS" ru="Россия и СНГ" />
              </b>
              <div className="sub">
                <T
                  en="Letter of intent from a major CIS distributor — theatrical, TV and digital rights."
                  ru="Письмо о намерениях от крупного дистрибьютора СНГ — кинотеатральные, ТВ- и цифровые права."
                />
              </div>
            </li>
            <li>
              <b>
                <T en="India, international, TV & streaming" ru="Индия, мир, ТВ и стриминг" />
              </b>
              <div className="sub">
                <T
                  en="Co-production and OTT distribution letter from an Indian partner; festival premiere strategy."
                  ru="Письмо индийского партнёра о ко-продакшне и OTT-дистрибуции; фестивальная стратегия премьеры."
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="ecosystem" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="The studio behind the film" ru="Студия за фильмом" />
            </div>
            <h2>
              <T en="NEYRA — an AI film ecosystem of Southeast Asia" ru="NEYRA — AI-киноэкосистема Юго-Восточной Азии" />
            </h2>
            <p>
              <T
                en="Full-cycle production on a proprietary AI platform: Neyra Labs (Singapore) — technology, Neyra Vision Studio (Jakarta) — production, Colibri Studio — creative development. Two awards at Cannes AI Film Awards 2025 («Nusantara»). A feature film full cycle in 2–3 months, at a fraction of conventional cost — with in-house creative and production teams."
                ru="Полный цикл производства на собственной AI-платформе: Neyra Labs (Сингапур) — технология, Neyra Vision Studio (Джакарта) — производство, Colibri Studio — креативная разработка. Две награды Cannes AI Film Awards 2025 («Nusantara»). Полный цикл полного метра — за 2–3 месяца, в разы дешевле классики, со своими креативной и производственной командами."
              />
            </p>
          </div>
          <div className="eco rv">
            <div className="cell">
              <div className="pname">PFN</div>
              <div className="pdesc">
                <T
                  en="State film company of Indonesia · partner studio: LED stage, cameras, infrastructure"
                  ru="Гос. кинокомпания Индонезии · партнёрская студия: LED-экран, камеры, инфраструктура"
                />
              </div>
              <span className="chip">
                <T en="Partner studio · signed" ru="Студия-партнёр · подписано" />
              </span>
            </div>
            <div className="cell">
              <div className="pname">MNC · Vision+</div>
              <div className="pdesc">
                <T en="The region's largest media holding · visionplus.id platform" ru="Крупнейший медиахолдинг региона · платформа visionplus.id" />
              </div>
              <span className="chip">MOU</span>
            </div>
            <div className="cell">
              <div className="pname">Emtek · Vidio</div>
              <div className="pdesc">
                <T en="Indonesia's leading streaming service · vidio.com" ru="Ведущий стриминг Индонезии · vidio.com" />
              </div>
              <span className="chip">
                <T en="Content placement" ru="Размещение контента" />
              </span>
            </div>
            <div className="cell">
              <div className="pname">Amadeus Cinemagma</div>
              <div className="pdesc">
                <T
                  en="Production partner · supplies for Netflix Asia · access to A-list actors"
                  ru="Продакшн-партнёр · поставки для Netflix Asia · доступ к актёрам класса A"
                />
              </div>
              <span className="chip">
                <T en="MOU + contract" ru="MOU + контракт" />
              </span>
            </div>
            <div className="cell">
              <div className="pname">E-Motion</div>
              <div className="pdesc">
                <T en="Music, film, TV, digital" ru="Музыка, кино, ТВ, digital" />
              </div>
              <span className="chip">MOU</span>
            </div>
            <div className="cell">
              <div className="pname">
                <T en="Ministry of Tourism & Creative Economy" ru="Минтуризма и креативной экономики" />
              </div>
              <div className="pdesc">
                <T
                  en="Official support of Neyra initiatives (AI Film Awards Bali)"
                  ru="Официальная поддержка инициатив Neyra (AI Film Awards Bali)"
                />
              </div>
              <span className="chip">
                <T en="Support" ru="Поддержка" />
              </span>
            </div>
            <div className="cell">
              <div className="pname">KADIN Institute</div>
              <div className="pdesc">
                <T
                  en="Think tank of Indonesia's Chamber of Commerce · Kadin AI Academy"
                  ru="Think tank ТПП Индонезии · Kadin AI Academy"
                />
              </div>
              <span className="chip">
                <T en="Strategic partnership" ru="Стратегическое партнёрство" />
              </span>
            </div>
            <div className="cell">
              <div className="pname">LMN VFX</div>
              <div className="pdesc">
                <T
                  en="Post-production & 3D partner studio · 120+ specialists, Jakarta"
                  ru="Партнёрская студия поста и 3D · 120+ специалистов, Джакарта"
                />
              </div>
              <span className="chip">
                <T en="Partner" ru="Партнёр" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="team" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="rv" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ display: 'inline-block' }}>
              <T en="The people behind BRO" ru="Кто делает «БРО»" />
            </div>
          </div>
          <div className="credits rv">
            <div className="row">
              <div className="role">
                <T en="Written & directed by" ru="Автор сценария и режиссёр" />
              </div>
              <div className="name">Ara Arush</div>
              <div className="note">
                <T
                  en="Author of the completed 168-page screenplay and the film's visual world."
                  ru="Автор готового сценария на 168 страниц и визуального мира фильма."
                />
              </div>
            </div>
            <div className="row">
              <div className="role">
                <T en="Executive producer" ru="Исполнительный продюсер" />
              </div>
              <div className="name">
                <T en="Alexander Andreianov" ru="Александр Андреянов" />
              </div>
              <div className="note">
                <T
                  en="Almaty, Kazakhstan. Financing, partnerships and the production entity."
                  ru="Алматы, Казахстан. Финансирование, партнёрства и производственная компания."
                />
              </div>
            </div>
            <div className="row">
              <div className="role">
                <T en="AI production" ru="ИИ-производство" />
              </div>
              <div className="name">Neyra Vision</div>
              <div className="note">
                <T
                  en="The pipeline behind every frame on this page — characters, action, environments."
                  ru="Пайплайн, которым сделан каждый кадр этой страницы: персонажи, экшн, среды."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teaser" style={{ paddingTop: 40 }}>
        <div className="wrap rv">
          <div className="eyebrow">
            <T en="Watch" ru="Смотреть" />
          </div>
          <h2>
            <T en="The teaser — shot live in Indonesia" ru="Тизер — снят вживую в Индонезии" />
          </h2>
          <div className="vidwrap">
            <iframe
              src={
                lang === 'ru'
                  ? 'https://www.youtube-nocookie.com/embed/rwoyjHGbBDk'
                  : 'https://www.youtube-nocookie.com/embed/n2V2EEB_0sk'
              }
              title="BRO — teaser"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="vgrid">
            <div className="vcard">
              <div className="vidwrap">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/7DbBNAX7wRo"
                  title="RINDU — BRO original soundtrack"
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="vlabel">
                <T en="«Rindu» · original soundtrack" ru="«Rindu» · саундтрек фильма" />
              </div>
            </div>
            <div className="vcard">
              <div className="vidwrap">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/U_NjixyEhNw"
                  title="BRO — making of the teaser"
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="vlabel">
                <T en="Making of the teaser" ru="Как снимали тизер" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact" style={{ paddingTop: 110 }}>
        <div className="wrap rv">
          <div className="eyebrow" style={{ display: 'inline-block' }}>
            <T en="For investors & producers" ru="Инвесторам и продюсерам" />
          </div>
          <h2>
            <T en="The full package is ready to share" ru="Полный пакет готов к показу" />
          </h2>
          <p>
            <T
              en="Screenplay, financial plan with three revenue scenarios, marketing plan and teaser — under NDA, on request. Tell us who you are and we will get back within a day."
              ru="Сценарий, финансовый план с тремя сценариями сборов, маркетинговый план и тизер — по запросу, под NDA. Расскажите, кто вы, — ответим в течение дня."
            />
          </p>
          <form className="lead" action="https://formsubmit.co/colibrigroupid@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="BRO — заявка на инвест-пакет с colibristudio.ai" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://colibristudio.ai/thanks/" />
            <div>
              <label htmlFor="f-name">
                <T en="Name *" ru="Имя *" />
              </label>
              <input id="f-name" name="name" required autoComplete="name" />
            </div>
            <div>
              <label htmlFor="f-email">
                <T en="Email *" ru="Email *" />
              </label>
              <input id="f-email" type="email" name="email" required autoComplete="email" />
            </div>
            <div className="full">
              <label htmlFor="f-company">
                <T en="Company / role" ru="Компания / роль" />
              </label>
              <input id="f-company" name="company" />
            </div>
            <div className="full">
              <label htmlFor="f-message">
                <T en="Briefly about you and your interest *" ru="Коротко о себе и вашем интересе *" />
              </label>
              <textarea id="f-message" name="message" required></textarea>
            </div>
            <div className="full">
              <button className="btn" type="submit">
                <T en="Request the investor deck" ru="Запросить инвест-пакет" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            © 2026 <T en="BRO Film · Colibri Studio" ru="Фильм «БРО» · Colibri Studio" />
            <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 12.5, letterSpacing: '.08em' }}>
              <a href="https://www.instagram.com/colibristudio.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--paper)' }}>
                Instagram
              </a>
              <span style={{ color: 'var(--red)', margin: '0 10px' }}>/</span>
              <a href="https://www.youtube.com/@colibri_indonesia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--paper)' }}>
                YouTube
              </a>
            </div>
          </div>
          <p>
            <T
              en="This page is an informational overview and does not constitute an offer of securities or an investment solicitation."
              ru="Страница носит информационный характер и не является офертой ценных бумаг или предложением инвестиций."
            />
          </p>
        </div>
      </footer>
    </>
  )
}
