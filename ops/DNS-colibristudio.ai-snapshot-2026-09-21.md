# colibristudio.ai — снимок зоны Namecheap BasicDNS, 21.09.2026 22:36 (+05), до любых изменений
Аккаунт Namecheap: AlexisNova · домен ACTIVE до Jan 17, 2028 · Domain Privacy ON · DNSSEC: не включён (проверить) · NS: Namecheap BasicDNS (pdns1/pdns2.registrar-servers.com)

## Host records
| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |
| CNAME | www | colibrigroupid-dev.github.io. | Automatic |

## Mail settings
Режим: **Email Forwarding** (Namecheap). MX ставятся автоматически: eforward1–5.registrar-servers.com (по dig 21.09).
TXT @ `v=spf1 include:spf.efwd.registrar-servers.com ~all` (locked by Email Forwarding).
Правила пересылки — вкладка Domain → Redirect Email (выписать перед сменой NS).

## Что должно остаться после переноса на Cloudflare DNS
A ×4 и CNAME www — с оранжевым облаком (proxy); MX eforward1–5 (приоритеты 10/15/20/…, как в dig) и TXT SPF — как есть, серые (DNS only). SSL/TLS в Cloudflare — Full.

## Проверка 22:38 — вкладка Domain
- **Redirect Email: правил пересылки НЕТ** («You haven't defined any Email Redirect yet»). MX eforward1–5 стоят, но никуда не ведут — почта на @colibristudio.ai сейчас не доставляется никому. Форма FormSubmit на /bro/invest шлёт напрямую на colibrigroupid@gmail.com, домен не задействован. Терять при переносе нечего; MX/SPF всё равно переносим как есть, чтобы включить пересылку позже.
- Nameservers: сейчас Namecheap BasicDNS; переключатель «Custom DNS» на этой же вкладке (для NS Cloudflare).
- Регистрант/админ: Alexis Nova, Colibri, Джакарта, colibrigroupid@gmail.com. Domain Privacy до 17.01.2027, домен до 17.01.2028.
- Cloudflare: в Chrome входа нет (dash.cloudflare.com/login).

## Cloudflare, 22:45 — зона создана, ждёт NS
Аккаунт Cloudflare: Colibrigroupid@gmail.com, Account ID 3670f2728732c88ab7a942cc6d6bf1d3, Zone ID 90c427d7b57f91350268563b08d89d6c, план Free.
Импорт: A ×4 и CNAME www — Proxied; MX eforward1–5 (10/10/10/15/20) и TXT SPF — DNS only. Статус: «Waiting for your registrar to propagate your new nameservers».
NS для Namecheap: **lochlan.ns.cloudflare.com**, **sara.ns.cloudflare.com** (Domain → Nameservers → Custom DNS). Смену NS в Namecheap фильтр Claude Code заблокировал — делает Александр.
После активации: SSL/TLS → Full; проверить https://colibristudio.ai/, /matka/, /bori/, /bro/, /bro/invest/, /thanks/; замерить скорость mp4.
