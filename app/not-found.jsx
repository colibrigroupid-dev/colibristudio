// Страница «не найдено». GitHub Pages отдаёт её на любой неверный адрес.
// Неверный адрес под /nektarium/ (опечатка, обрезанная ссылка из мессенджера,
// заглавная буква) сразу переводит на актуальную страницу работ «Нектариума».
const NEKTARIUM_LATEST = '/nektarium/2026-10-25-0115/'

const redirect = `(function(){try{
var p=decodeURIComponent(location.pathname).toLowerCase().replace(/\\s+/g,'');
if(p.indexOf('/nektarium')===0||p.indexOf('/нектариум')===0){
  var q=location.search||'';location.replace('${NEKTARIUM_LATEST}'+q);
}}catch(e){}})();`

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: '0 16px',
        background: '#0b0906',
        color: '#f3e7cc',
        fontFamily: 'IBM Plex Sans, -apple-system, Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <p style={{ margin: 0, fontSize: 18 }}>Страница не найдена</p>
      <p style={{ margin: 0, color: '#a8977a', fontSize: 14 }}>
        Проверьте адрес или откройте нужный раздел:
      </p>
      <p style={{ margin: 0, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={NEKTARIUM_LATEST} style={{ color: '#e8b84a' }}>
          «Нектариум» · все работы
        </a>
        <a href="/" style={{ color: '#e8b84a' }}>
          Главная
        </a>
      </p>
    </main>
  )
}
