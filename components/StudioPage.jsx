'use client'

import { useEffect, useState } from 'react'
import Slate from './Slate'

function T({ en, ru }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ru">{ru}</span>
    </>
  )
}

const FAQ = [
  {
    q: { en: 'What is Colibri Studio?', ru: 'Что такое Colibri Studio?' },
    a: {
      en: 'Colibri Studio is a film studio working between Jakarta, Bali and Almaty. We develop and shoot feature films, commercials and music films, and we finish them with neural production inside the Neyra ecosystem. Six projects are in development right now, each with a named director or author.',
      ru: 'Colibri Studio — киностудия, которая работает между Джакартой, Бали и Алматы. Мы придумываем и снимаем полный метр, рекламу и музыкальные фильмы, а доводим их нейропродакшном внутри экосистемы Neyra. Сейчас в разработке шесть проектов, у каждого есть режиссёр или автор.',
    },
  },
  {
    q: { en: 'What does “live action × neural production” mean?', ru: 'Что значит «живые съёмки × нейропродакшн»?' },
    a: {
      en: 'It means we shoot real actors and real locations, and build everything a small budget cannot shoot — crowds, creatures, cities, impossible camera moves — with neural tools. The actor, the voice and the performance stay human. The scale around them is produced, not rented.',
      ru: 'Мы снимаем живых актёров и настоящие локации, а всё, что маленький бюджет снять не может — толпы, существ, города, невозможные движения камеры — собираем нейросетями. Актёр, голос и игра остаются человеческими. Масштаб вокруг них производится, а не арендуется.',
    },
  },
  {
    q: { en: 'Which projects are in development?', ru: 'Какие проекты сейчас в разработке?' },
    a: {
      en: 'Six: BRO, an adventure comedy shot in Indonesia; БӨРІ, a Kazakh thriller; MATKA, a drama; NECTARIUM, an animated universe; BABY SHARP, an animated series; and THE YACHT, a metaphysical drama. Each card on this page names the director or author and the stage the project has reached.',
      ru: 'Шесть: BRO — экшн-комедия, снятая в Индонезии; БӨРІ — казахстанский триллер; «Матка» — драма; «Нектариум» — анимационная вселенная; BABY SHARP — анимационный сериал; и «Яхта» — метафизическая драма. В каждой карточке на этой странице указаны автор и стадия, на которой проект находится.',
    },
  },
  {
    q: { en: 'Can a brand order a commercial from the studio?', ru: 'Можно ли заказать у студии рекламу или бренд-фильм?' },
    a: {
      en: 'Yes. We take commercials and brand films from the director’s treatment through to the final master, and we work the same way as on features: real shooting plus neural production. Write a few lines about the project in the form below and we answer within one working day.',
      ru: 'Да. Берём рекламу и бренд-фильмы от режиссёрского тритмента до финального мастера и работаем так же, как в кино: живая съёмка плюс нейропродакшн. Напишите пару строк о проекте в форме ниже — отвечаем в течение рабочего дня.',
    },
  },
  {
    q: { en: 'Where does the studio work?', ru: 'Где работает студия?' },
    a: {
      en: 'Jakarta, Bali and Almaty. Production in Indonesia runs through PT Colibri Group Indonesia together with Neyra Vision Studio; projects in Kazakhstan run with Taurus Asia Production. The technology comes from Neyra Labs in Singapore.',
      ru: 'Джакарта, Бали и Алматы. Производство в Индонезии идёт через PT Colibri Group Indonesia вместе с Neyra Vision Studio, проекты в Казахстане — вместе с Taurus Asia Production. Технология — Neyra Labs, Сингапур.',
    },
  },
]

export default function StudioPage() {
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
          C<b>O</b>LIBRI
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

      <header className="hero" style={{ minHeight: '88vh' }}>
        <div className="bg">
          <img
            src="/assets/locker_prayer.jpg"
            alt="Film still: a fighter praying in a sunlit locker room — live-action frame by Colibri Studio"
            fetchPriority="high"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="scrim"></div>
        <div className="inner">
          <div className="kicker">
            <T en="Creative film studio · Neyra ecosystem" ru="Креативная киностудия · экосистема Neyra" />
          </div>
          <h1 style={{ fontSize: 'clamp(64px,12vw,170px)' }}>COLIBRI</h1>
          <p className="logline">
            <T
              en="The studio of the new cinema: live action multiplied by neural production. We develop and shoot stories — and scale them to feature quality with AI."
              ru="Студия нового кино: живые съёмки, умноженные на нейропродакшн. Мы придумываем и снимаем истории — и доводим их до полнометражного качества с помощью AI."
            />
          </p>
          <div className="meta">
            <T en="Film · Commercials · Music films" ru="Кино · Реклама · Музыкальные фильмы" />
            <span className="sep">/</span>
            <T en="Jakarta · Bali · Almaty" ru="Джакарта · Бали · Алматы" />
          </div>
        </div>
        <div className="scrollcue" aria-hidden="true"></div>
      </header>

      <section id="slate">
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="In development · 2026–2027" ru="В разработке · 2026–2027" />
            </div>
            <h2>
              <T en="What the studio is making now" ru="Что студия делает сейчас" />
            </h2>
            <p>
              <T
                en="Six pictures at different stages: from a treatment on the table to a teaser already shot. Every project has a director or an author — we do not put anonymous work on this page."
                ru="Шесть картин на разных стадиях: от тритмента на столе до уже снятого тизера. У каждого проекта есть режиссёр или автор — анонимных работ на этой странице нет."
              />
            </p>
          </div>
          <div className="rv">
            <Slate />
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="wrap rv">
          <p>
            <T
              en="“A small budget used to decide the size of the story. It does not any more.”"
              ru="«Раньше маленький бюджет решал, какого размера будет история. Больше не решает»."
            />
          </p>
          <div className="src">Colibri Studio</div>
        </div>
      </section>

      <section className="still" style={{ paddingTop: 0 }}>
        <figure className="frame rv">
          <img
            src="/assets/colibri_still.jpg"
            alt="A hummingbird hovers by a red heliconia flower above a jungle river at golden hour"
            loading="lazy"
          />
          <figcaption className="cap cap-stack">
            <div className="cap-main">
              <T
                en="Three grams of bird — and 800 km over open sea without a single stop."
                ru="Три грамма веса — и 800 км над открытым морем без единой посадки."
              />
            </div>
            <div className="cap-sub">
              <T en="Colibri. Small, fast, precise." ru="Колибри. Маленькая, быстрая, точная." />
            </div>
          </figcaption>
        </figure>
      </section>

      <section id="works" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="Released" ru="Уже вышло" />
            </div>
            <h2>
              <T en="You can watch this today" ru="Это можно посмотреть уже сейчас" />
            </h2>
          </div>
          <div className="works two rv">
            <a className="wcard" href="/bro/">
              <img src="/assets/night_ride.jpg" alt="BRO — feature film" loading="lazy" />
              <div className="winfo">
                <div className="wtag">
                  <T en="Feature film · teaser" ru="Полный метр · тизер" />
                </div>
                <div className="wname">BRO</div>
                <div className="wdesc">
                  <T
                    en="Shot in Indonesia. The project page with the teaser."
                    ru="Снято в Индонезии. Страница проекта с тизером."
                  />
                </div>
              </div>
            </a>
            <a
              className="wcard"
              href="https://www.youtube.com/watch?v=7DbBNAX7wRo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/jakarta_day.jpg" alt="Rindu — original soundtrack film" loading="lazy" />
              <div className="winfo">
                <div className="wtag">
                  <T en="Music film · OST BRO" ru="Музыкальный фильм · OST BRO" />
                </div>
                <div className="wname">RINDU</div>
                <div className="wdesc">
                  <T en="Shot in Bali. Watch on YouTube." ru="Снято на Бали. Смотреть на YouTube." />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="services" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="What we do" ru="Чем занимаемся" />
            </div>
            <h2>
              <T en="Live action × neural production" ru="Живые съёмки × нейропродакшн" />
            </h2>
          </div>
          <div className="svc rv">
            <div className="scell">
              <div className="sname">
                <T en="Film" ru="Кино" />
              </div>
              <div className="sdesc">
                <T
                  en="Development, screenwriting, storyboards, casting and production of feature films."
                  ru="Девелопмент, сценарий, раскадровки, кастинг и производство полнометражного кино."
                />
              </div>
            </div>
            <div className="scell">
              <div className="sname">
                <T en="Commercials" ru="Реклама" />
              </div>
              <div className="sdesc">
                <T
                  en="Cinematic commercials and brand films — from director's treatment to master."
                  ru="Киношная реклама и бренд-фильмы — от режиссёрского тритмента до мастера."
                />
              </div>
            </div>
            <div className="scell">
              <div className="sname">
                <T en="Music films" ru="Музыкальные фильмы" />
              </div>
              <div className="sdesc">
                <T en="Original soundtracks and narrative music videos." ru="Оригинальные саундтреки и сюжетные клипы." />
              </div>
            </div>
            <div className="scell">
              <div className="sname">
                <T en="AI & animation" ru="AI и анимация" />
              </div>
              <div className="sdesc">
                <T
                  en="Neural production with the Neyra studio: consistent characters, worlds and action at feature scale."
                  ru="Нейропродакшн вместе со студией Neyra: консистентные персонажи, миры и экшн в масштабе полного метра."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="Questions" ru="Вопросы" />
            </div>
            <h2>
              <T en="Short answers" ru="Коротко о главном" />
            </h2>
          </div>
          <div className="faq rv">
            {FAQ.map((item, i) => (
              <details key={i}>
                <summary>
                  <span>
                    <T en={item.q.en} ru={item.q.ru} />
                  </span>
                </summary>
                <div className="ans">
                  <p>
                    <T en={item.a.en} ru={item.a.ru} />
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact" style={{ paddingTop: 90 }}>
        <div className="wrap rv">
          <div className="eyebrow" style={{ display: 'inline-block' }}>
            <T en="New projects" ru="Новые проекты" />
          </div>
          <h2>
            <T en="Tell us what you want to make" ru="Расскажите, что хотите снять" />
          </h2>
          <p>
            <T
              en="A film, a commercial, a music film — write a few lines and we will get back within a day."
              ru="Кино, реклама, музыкальный фильм — напишите пару строк, ответим в течение дня."
            />
          </p>
          <form className="lead" action="https://formsubmit.co/colibrigroupid@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Colibri Studio — заявка с colibristudio.ai" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://colibristudio.ai/thanks/" />
            <div>
              <label htmlFor="s-name">
                <T en="Name *" ru="Имя *" />
              </label>
              <input id="s-name" name="name" required autoComplete="name" />
            </div>
            <div>
              <label htmlFor="s-email">
                <T en="Email *" ru="Email *" />
              </label>
              <input id="s-email" type="email" name="email" required autoComplete="email" />
            </div>
            <div className="full">
              <label htmlFor="s-message">
                <T en="About your project *" ru="Пара строк о проекте *" />
              </label>
              <textarea id="s-message" name="message" required></textarea>
            </div>
            <div className="full">
              <button className="btn" type="submit">
                <T en="Send" ru="Отправить" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            © 2026 Colibri Studio
            <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 12.5, letterSpacing: '.08em' }}>
              <a href="https://www.instagram.com/colibristudio.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--paper)' }}>
                Instagram
              </a>
              <span style={{ color: 'var(--red)', margin: '0 10px' }}>/</span>
              <a href="https://www.youtube.com/@colibri_indonesia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--paper)' }}>
                YouTube
              </a>
              <span style={{ color: 'var(--red)', margin: '0 10px' }}>/</span>
              <a href="/bro/" style={{ textDecoration: 'none', color: 'var(--paper)' }}>
                BRO
              </a>
            </div>
          </div>
          <p>
            <T
              en="Part of the Neyra ecosystem: Neyra Labs (Singapore) · Neyra Vision Studio (Jakarta) · Colibri Studio."
              ru="Часть экосистемы Neyra: Neyra Labs (Сингапур) · Neyra Vision Studio (Джакарта) · Colibri Studio."
            />
          </p>
        </div>
      </footer>
    </>
  )
}
