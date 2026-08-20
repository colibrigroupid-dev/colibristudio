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

      <section id="works">
        <div className="wrap">
          <div className="rv">
            <div className="eyebrow">
              <T en="Selected work" ru="Работы" />
            </div>
            <h2>
              <T en="What we are making" ru="Что мы делаем сейчас" />
            </h2>
          </div>
          <div className="works rv">
            <a className="wcard" href="/bro/">
              <img src="/assets/hero_night.jpg" alt="BRO — feature film" loading="lazy" />
              <div className="winfo">
                <div className="wtag">
                  <T en="Feature film · in development" ru="Полный метр · в производстве" />
                </div>
                <div className="wname">BRO</div>
                <div className="wdesc">
                  <T
                    en="Two orphans. One rooster. All of Indonesia against them."
                    ru="Два сироты. Один петух. Против них — вся Индонезия."
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
            <div className="wcard soon">
              <div className="winfo">
                <div className="wtag">
                  <T en="Commercial · coming soon" ru="Реклама · скоро" />
                </div>
                <div className="wname">
                  <T en="New work" ru="Новая работа" />
                </div>
                <div className="wdesc">
                  <T
                    en="A commercial production case is being finished. Check back shortly."
                    ru="Рекламный кейс на финальной стадии. Загляните чуть позже."
                  />
                </div>
              </div>
            </div>
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
