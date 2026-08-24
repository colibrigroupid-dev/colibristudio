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

const CARDS = [
  {
    id: 'ahmed',
    file: '/assets/cards/card_ahmed.jpg',
    num: '01',
    name: { en: 'Ahmed', ru: 'Ахмед' },
    role: { en: 'Lead — street fighter, 18', ru: 'Главный герой — уличный боец, 18' },
    drive: { en: '“Win the tournament and change my life”', ru: '«Выиграть турнир и изменить свою жизнь»' },
    alt: 'Character card: Ahmed — canon portrait, fight frames, wardrobe and scenes from the script',
  },
  {
    id: 'nyoman',
    file: '/assets/cards/card_nyoman.jpg',
    num: '02',
    name: { en: 'Nyoman', ru: 'Ньоман' },
    role: { en: 'Second lead — orphan, 10', ru: 'Второй герой — сирота, 10' },
    drive: { en: '“Save Bro and find my mother”', ru: '«Спасти Бро и найти маму»' },
    alt: 'Character card: Nyoman — canon portrait, the black backpack, scenes from the script',
  },
  {
    id: 'bro',
    file: '/assets/cards/card_bro.jpg',
    num: '03',
    name: { en: 'Bro', ru: 'Бро' },
    role: { en: 'The rooster — third hero', ru: 'Петух — третий герой' },
    drive: { en: '“Survive and become a champion”', ru: '«Выжить и стать чемпионом»' },
    alt: 'Character card: Bro the black Ayam Cemani rooster — canon, backpack, fight, scenes',
  },
  {
    id: 'bike',
    file: '/assets/cards/card_bike.jpg',
    num: '04',
    name: { en: 'The bike', ru: 'Байк' },
    role: { en: 'The heroes’ transport', ru: 'Транспорт героев' },
    drive: { en: 'A home on two wheels · the road to Bali', ru: 'Дом на двух колёсах · путь на Бали' },
    alt: 'Character card: the custom maxi-scooter — profile, front angle, details and scenes',
  },
]

export default function CharactersPage() {
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
    const onScroll = () => bar && bar.classList.toggle('solid', window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <div className="bar solid" id="bar">
        <div className="barleft">
          <a className="brand" href="/bro/">
            B<b>R</b>O
          </a>
          <nav className="tabs" aria-label="Sections">
            <a href="/bro/">
              <T en="The film" ru="Фильм" />
            </a>
            <a href="/bro/characters/" className="on" aria-current="page">
              <T en="Characters" ru="Персонажи" />
            </a>
          </nav>
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

      <section className="cardshead">
        <div className="wrap">
          <div className="eyebrow">
            <T en="Character maps" ru="Карты персонажей" />
          </div>
          <h1 className="cardstitle">
            <T en="Who carries this story" ru="Кто несёт эту историю" />
          </h1>
          <p className="cardslede">
            <T
              en="One sheet per character: the canonical look locked for the whole production, plus wardrobe details, action beats and scenes from the script. Every frame is made with the film’s own pipeline — the same face, the same clothes, the same grade in any scene."
              ru="По одному листу на персонажа: канонический образ, зафиксированный для всего производства, детали костюма, экшн-моменты и сцены из сценария. Каждый кадр сделан собственным пайплайном фильма — то же лицо, та же одежда, тот же грейд в любой сцене."
            />
          </p>
        </div>
      </section>

      <section className="cards">
        <div className="wrap">
          {CARDS.map((c) => (
            <figure className="cardrow rv" key={c.id} id={c.id}>
              <div className="cardmeta">
                <div className="cnum">{c.num}</div>
                <div className="cname">
                  <T en={c.name.en} ru={c.name.ru} />
                </div>
                <div className="crole">
                  <T en={c.role.en} ru={c.role.ru} />
                </div>
                <div className="cdrive">
                  <T en={c.drive.en} ru={c.drive.ru} />
                </div>
              </div>
              <a className="cardimg" href={c.file} target="_blank" rel="noreferrer">
                <img src={c.file} alt={c.alt} loading="lazy" width="1920" height="1080" />
                <span className="czoom">
                  <T en="Open full size" ru="Открыть в полном размере" />
                </span>
              </a>
            </figure>
          ))}
        </div>
      </section>

      <section className="cardsfoot">
        <div className="wrap rv">
          <p>
            <T
              en="Need the full character bible, screenplay or the investor package? Everything is available under NDA."
              ru="Нужна полная библия персонажей, сценарий или инвест-пакет? Всё доступно по запросу, под NDA."
            />
          </p>
          <a className="btn" href="/bro/#contact">
            <T en="Request the package" ru="Запросить пакет" />
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            <T en="© 2026 BRO the film · Colibri Studio" ru="© 2026 Фильм «БРО» · Colibri Studio" />
          </div>
          <a href="/bro/">
            <T en="Back to the film" ru="Назад к фильму" />
          </a>
        </div>
      </footer>
    </>
  )
}
