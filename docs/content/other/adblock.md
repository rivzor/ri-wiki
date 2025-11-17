---
title: Гайд по блокировке рекламы в браузерах
description: Самый эффективный и актуальный набор инструментов для полной защиты от рекламы, cookie-баннеров, трекеров, майнеров и визуального мусора в Chrome, Edge, Firefox и производных браузерах.
date: 2025-11-13
author: rivzor
icon: lucide/shield-check
comments: true
tags:
    - adblock
    - приватность
    - ublock-origin
    - браузеры
    - трекеры
---

# Полная блокировка рекламы и трекеров в браузерах (актуально на 2025 год)

Надёжная многослойная защита, которая убирает 99,9 % рекламы, cookie-баннеры, скрытые трекеры, майнинг-скрипты и навязчивые элементы без потери функциональности сайтов.

!!! success "Результат после настройки"

    Никаких баннеров «Принять cookies»
    Полное отсутствие рекламы на YouTube, Яндексе, Twitch и большинстве сайтов
    Блокировка скрытого майнинга и счётчиков
    Ускорение загрузки страниц за счёт локального CDN

---

## Обязательный минимальный набор (устанавливается за 2 минуты) { data-search-exclude }


| Расширение  | Что блокирует  | Chrome / Edge | Firefox  |
|-----------|-----------|:------:|:--------:|
| **I still don't care about cookies** | Все cookie-баннеры GDPR/CCPA | [Установить](https://chromewebstore.google.com/detail/edibdbjcniadpccecjdfdjjppcpchdlm) | [Установить](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) |
| **uBlock Origin** | Реклама, трекеры, майнеры, всплывающие окна | [Установить](https://chromewebstore.google.com/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm) | [Установить](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **Decentraleyes** | Трекинг через Google Hosted Libraries, CDN | [Установить](https://chromewebstore.google.com/detail/ldpochfccmkkmhdbclfhpagapcfdljkj) | [Установить](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/) |
| **Privacy Badger** | Автоматическая блокировка невидимых трекеров EFF | [Установить](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [Установить](https://addons.mozilla.org/firefox/addon/privacy-badger17/) |

---

## Продвинутый уровень: максимальная защита
### Настройка uBlock Origin

1. Откройте **uBlock Origin** → нажмите на иконку шестерёнки → вкладка **Фильтры**.
2. Пролистайте вниз и включите все списки из категорий **Annoyances** и **Multipurpose** (если ещё не включены).
3. Перейдите во вкладку **Мои фильтры**.
4. Вставьте ссылки ниже (каждую с новой строки) и нажмите **Применить изменения**.

``` yaml title="адреса"
# Русскоязычные и региональные
https://filters.adtidy.org/extension/ublock/filters/214.txt          # RU AdList: Фильтр счётчиков и аналитики
https://filters.adtidy.org/extension/ublock/filters/224.txt          # RU AdList: Битблок (визуальные элементы)
https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt  # NoCoin — блокировка майнинга

# Дополнительные annoyances и защита
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances-cookies.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances-others.txt
https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt
```

---

### Violentmonkey + пользовательские скрипты (обход сложной рекламы)

Установите менеджер пользовательских скриптов:

| Расширение  | Что блокирует  | Chrome / Edge | Firefox  |
|-----------|-----------|:------:|:--------:|
| **Violentmonkey** | Аналог Tampermonkey, для пользовательских скриптов | [Установить](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Установить](https://addons.mozilla.org/firefox/addon/violentmonkey/) |

После установки просто перейдите по ссылкам и нажмите Установить:

| Скрипт  | Что делает  | Ссылка на установку |
|-----------|-----------|:------:|
| **RU AdList JS Fixes** | Убирает рекламу, внедрённую через JavaScript (Яндекс, Mail.ru и др.) | [Установить](https://greasyfork.org/ru/scripts/19993-ru-adlist-js-fixes/code) |
| **AdGuard Extra** | Обходит самые сложные анти-адблок системы | [Установить](https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js) |
| **YouTube Anti-AdBlock Bypass** (опционально) | Отключает предупреждение YouTube об адблоке | [Установить](https://greasyfork.org/ru/scripts/495583-youtube-anti-adblock-bypass) |

---

### Проверка эффективности блокировки { data-search-exclude }

После настройки откройте тесты — все должны показать 100/100 или полное отсутствие рекламы.

| Тест  | Ожидаемый результат  | Ссылка |
|-----------|-----------|:------:|
| **Toolz AdBlock Tester** | 100/100 | [Проверить](https://adblock.turtlecute.org/) |
| **CheckAdBlock.ru** | «AdBlock работает идеально» | [Проверить](https://checkadblock.ru/) |
| **D3Ward AdBlock Test** | Все тесты зелёные | [Проверить](https://d3ward.github.io/toolz/adblock.html) |

#### Реальные сайты для проверки: { data-search-exclude }

- [Яндекс.Погода](https://yandex.ru/pogoda) — не должно быть баннеров и рекламы в боковой панели
- [Яндекс.Картинки](https://yandex.ru/images) — чистый поиск без промо
- YouTube — видео без рекламы и без предупреждения «Ad blockers violate...»

---

### Частые проблемы и решения { data-search-exclude }

| Проблема  | Решение |
|:-----------|:-----------|
| На YouTube появляется предупреждение об адблоке | Обновите uBlock Origin и установите скрипт YouTube Anti-AdBlock Bypass (ссылка выше) |
| Сайт показывает серый экран или «Включите JS» | Добавьте сайт в белый список uBlock (клик по иконке → большой выключатель) |

---

Теперь браузер чист от рекламы и трекинга на 99,9 % случаев.

> Если после настройки что-то не работает — пишите в комментарии модель браузера и сайт-проблему, разберём индивидуально.

---

<div>
  <a href="https://yoomoney.ru/to/4100115791948942" class="donate-block">
    <span class="donate-text">
        Поддержи развитие Ri-Wiki 🌱
    </span>
  </a>
</div>