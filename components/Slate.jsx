'use client'

// Проекты студии в разработке. Один источник данных для главной страницы.
// Ссылка (href) ведёт на страницу проекта. BRO открыт, BABY SHARP закрыт кодом.
// У БӨРІ и «Матки» ссылки нет сознательно: их страницы под noindex и без кода
// с главной на них не ходят — решение по БӨРІ за Куанышем.
// Ограничения по БӨРІ (Куаныш, 28.09): не показывать зверя, не публиковать слоган,
// не раскрывать, кто оборотень, и не упоминать параллельную тизерную версию.

export const PROJECTS = [
  {
    id: 'bro',
    img: '/assets/slate/bro.jpg',
    href: '/bro/',
    name: 'BRO',
    kind: { en: 'Feature · Indonesia · adventure comedy', ru: 'Полный метр · Индонезия · экшн-комедия' },
    what: {
      en: 'Two boys and a rooster cross the whole of Java. A road movie that starts as a joke and ends as a family.',
      ru: 'Два мальчишки и петух едут через всю Яву. Дорожная история, которая начинается как шутка и заканчивается как семья.',
    },
    crew: [
      { role: { en: 'Written and directed by', ru: 'Сценарий и режиссура' }, who: 'Ара Аруш' },
      { role: { en: 'Production', ru: 'Производство' }, who: 'PT Colibri Group Indonesia · Neyra Vision Studio' },
    ],
    stage: { en: 'Pre-production · teaser shot', ru: 'Препродакшн · тизер снят' },
  },
  {
    id: 'bori',
    // Публичная карточка: план K01 от 26.09 — пустой коридор интерната, без людей и без зверя.
    // Кадр с актёром (тестовая съёмка) остаётся только на закрытой /slate/ — для сайта он не утверждён.
    img: '/assets/slate/bori-public.jpg',
    name: 'БӨРІ',
    kind: { en: 'Feature · Kazakhstan · thriller', ru: 'Полный метр · Казахстан · триллер' },
    what: {
      en: 'After his sister is brutally murdered, a student named Medet and his friends set out to help investigate a series of killings in the foothill village of Boltirik, where the prime suspect becomes a mysterious forest ranger who may turn out to be a werewolf — “böri”.',
      ru: 'После жестокого убийства сестры студент Медет вместе с друзьями решает помочь расследованию серии убийств в ауле Болтирик в предгорье, где главным подозреваемым становится загадочный лесник, который может оказаться оборотнем — «бөрі».',
    },
    crew: [
      { role: { en: 'Written and directed by', ru: 'Сценарий и режиссура' }, who: 'Куаныш Стаханов' },
      { role: { en: 'Executive producer', ru: 'Ген. продюсер' }, who: 'Анара Жунусова' },
      { role: { en: 'Producer', ru: 'Продюсер' }, who: 'Анна Чакиртова' },
      { role: { en: 'Director of photography', ru: 'Оператор-постановщик' }, who: 'Рамиль Изимов' },
      { role: { en: 'Production designer', ru: 'Художник-постановщик' }, who: 'Алия Шманова' },
      { role: { en: 'Production', ru: 'Производство' }, who: 'Taurus Asia Production · Neyra Vision Studio' },
    ],
    stage: { en: 'Development · proof of concept', ru: 'Разработка · proof of concept' },
  },
  {
    id: 'matka',
    img: '/assets/slate/matka.jpg',
    name: { en: 'MATKA', ru: 'Матка' },
    kind: { en: 'Feature · Kazakhstan · drama', ru: 'Полный метр · Казахстан · драма' },
    what: {
      en: 'A drama in which nature answers back. The studio is building the key scene of the film.',
      ru: 'Драма, где природа отвечает человеку. Студия собирает ключевую сцену картины.',
    },
    crew: [
      { role: { en: 'Author', ru: 'Автор' }, who: 'Елена Лисасина' },
      { role: { en: 'Production', ru: 'Производство' }, who: 'Taurus Asia Production' },
    ],
    stage: { en: 'Key scene · previsualisation', ru: 'Ключевая сцена · превизуализация' },
  },
  {
    id: 'nektarium',
    img: '/assets/slate/nektarium.jpg',
    name: { en: 'NECTARIUM', ru: 'Нектариум' },
    kind: { en: 'Animated universe', ru: 'Анимационная вселенная' },
    what: {
      en: 'A bee civilisation grown out of a novel and the working knowledge of a real beekeeper.',
      ru: 'Мир пчелиной цивилизации, выросший из романа и знаний практикующего пчеловода.',
    },
    crew: [
      { role: { en: 'World and novel', ru: 'Автор мира' }, who: 'Владимир Григорьев' },
      { role: { en: 'Co-author of the novel', ru: 'Соавтор романа' }, who: 'Людмила Лазарева' },
    ],
    stage: { en: 'Pilot episode · storyboard', ru: 'Пилотный эпизод · раскадровка' },
  },
  {
    id: 'sharp',
    img: '/assets/slate/sharp.jpg',
    href: '/baby-sharp/',
    name: 'BABY SHARP',
    kind: { en: 'Animated series', ru: 'Анимационный сериал' },
    what: {
      en: 'A shark pup is alone from day one. An open universe with a continuous release of episodes.',
      ru: 'Акулёнок, который с первого дня остаётся один. Открытая вселенная с постоянным выпуском серий.',
    },
    crew: [
      { role: { en: 'Author', ru: 'Автор' }, who: 'Ара Аруш' },
      { role: { en: 'Production', ru: 'Производство' }, who: 'Neyra Vision Studio · Colibri Studio' },
    ],
    stage: { en: 'Part one in production', ru: 'Первая часть в производстве' },
  },
  {
    id: 'yahta',
    img: '/assets/slate/yahta.jpg',
    name: { en: 'THE YACHT', ru: 'Яхта' },
    kind: { en: 'Feature · metaphysical drama', ru: 'Полный метр · метафизическая драма' },
    what: {
      en: 'A woman on the border between life and death finally gets the answer to the question she never asked.',
      ru: 'Женщина на границе жизни и смерти получает ответ на вопрос, который так и не задала.',
    },
    crew: [
      { role: { en: 'Based on the screenplay by', ru: 'По сценарию' }, who: 'Котляров · Былинский' },
    ],
    stage: { en: 'Development · new treatment', ru: 'Разработка · новая редакция' },
  },
]

// Обе версии текста всегда в разметке: .en/.ru переключаются css-классом на body,
// поэтому оба языка попадают в статический html и их видят поисковики.
function B({ v }) {
  if (v == null) return null
  if (typeof v === 'string') return <>{v}</>
  return (
    <>
      <span className="en">{v.en}</span>
      <span className="ru">{v.ru}</span>
    </>
  )
}

function alt(v) {
  return typeof v === 'string' ? v : v.en
}

export default function Slate() {
  return (
    <div className="slate">
      {PROJECTS.map((p) => {
        const Tag = p.href ? 'a' : 'div'
        return (
          <Tag key={p.id} className={'pcard' + (p.href ? ' link' : '')} {...(p.href ? { href: p.href } : {})}>
            <div className="pshot">
              <img src={p.img} alt={alt(p.name)} loading="lazy" />
            </div>
            <div className="pbody">
              <div className="pkind"><B v={p.kind} /></div>
              <div className="pname"><B v={p.name} /></div>
              <p className="pwhat"><B v={p.what} /></p>
              <div className="pcrew">
                {p.crew.map((c, i) => (
                  <div className="prow" key={i}>
                    <div className="prole"><B v={c.role} /></div>
                    <div className="pwho">{c.who}</div>
                  </div>
                ))}
                <div className="pstage">
                  <span><B v={p.stage} /></span>
                  {p.href ? (
                    <span className="pmore">
                      <span className="en">Open</span>
                      <span className="ru">Открыть</span>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </Tag>
        )
      })}
    </div>
  )
}
