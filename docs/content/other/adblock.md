---
title: Гайд по блокировке рекламы в браузерах
description: Надёжная защита от рекламы, трекеров, всплывающих окон и навязчивых баннеров.
date: 2025-11-13
author: rivzor
icon: lucide/shield-check
comments: true
tags:
    - реклама
    - приватность
    - браузеры
    - расширения
---

# Гайд по блокировке рекламы в браузерах

> Надёжная защита от рекламы, трекеров, всплывающих окон и навязчивых баннеров.

---

## Расширения  { data-search-exclude }


| Название  | Описание  | Chrome | Firefox  |
|-----------|-----------|:------:|:--------:|
| **I still don't care about cookies** | Убирает баннеры “Примите куки” | [⬇️ Установить](https://chromewebstore.google.com/detail/edibdbjcniadpccecjdfdjjppcpchdlm) | [🦊 Установить](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) |
| **uBlock Origin** | Мощный блокировщик рекламы и трекеров | [⬇️ Установить](https://chromewebstore.google.com/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm) | [🦊 Установить](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) |
| **Decentraleyes** | Локально кэширует CDN-файлы, ускоряет сайты, защищает от трекинга | [⬇️ Установить](https://chromewebstore.google.com/detail/ldpochfccmkkmhdbclfhpagapcfdljkj) | [🦊 Установить](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/) |
| **Privacy Badger** | Автоматически блокирует невидимые трекеры | [⬇️ Установить](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [🦊 Установить](https://addons.mozilla.org/firefox/addon/privacy-badger17/) |
| **Violentmonkey** | Аналог Tampermonkey, для пользовательских скриптов | [⬇️ Установить](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [🦊 Установить](https://addons.mozilla.org/firefox/addon/violentmonkey/) |

!!! info "Просто установить:"
    - **I still don’t care about cookies**
    - **Decentraleyes**
    - **Privacy Badger**

Эти три расширения работают автоматически и не требуют сложной настройки.

---

## Настройка uBlock Origin

После установки:

1. Открой расширение в браузере.
2. Зайди в **Настройки** → **Панель фильтров**.

### Пользовательские фильтры  { data-search-exclude }

Скопируй адреса ниже и добавь их в поле **Импортировать** (вкладка *Мои фильтры → Импортировать*), каждый с новой строки:


``` yaml title="Ссылки на фильтры"

https://filters.adtidy.org/extension/ublock/filters/1.txt
https://raw.githubusercontent.com/mtxadmin/ublock/master/it
https://raw.githubusercontent.com/mtxadmin/ublock/master/filters/yandex 
https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt 
https://easylist-downloads.adblockplus.org/cntblock.txt 
https://easylist-downloads.adblockplus.org/bitblock.txt 

``` 
??? question "Что за фильтры?"
    1. **AdGuard Russian filter** — основной русский фильтр.
    2. **Yet another small uBlock list** — анти-мошеннический и анти-трекерный.
    3. **Яндекс фильтр** — убирает баннеры и крупные лого.
    4. **NoCoin** — блокировка скрытого майнинга.
    5 и 6. **RU AdList Counters / BitBlock** — доп. фильтры для счётчиков и визуального мусора.

---

## Violentmonkey

После установки открыть данные скрипты и нажать установить:

| Название | Описание | Ссылка |
|-----------|-----------|--------|
| **RU AdList JS Fixes** | Убирает скрипты Яндекса и прочих | [Установить](https://greasyfork.org/ru/scripts/19993-ru-adlist-js-fixes) |
| **AdGuard Extra** | Расширенный юзерскрипт для защиты от сложной рекламы | [Установить](https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js) |

---

## Проверка блокировщика  { data-search-exclude }

В этих тестах должно быть **100 из 100 баллов**, только тогда рекламы видно не будет!

Проверь работу фильтров на:

| Сайт | Назначение |
|------|-------------|
| 🔗 [Test Ad Block – Toolz](https://adblock.turtlecute.org/) | Полная проверка блокировщика |
| 🔗 [CheckAdBlock](https://checkadblock.ru) | Базовая проверка на наличие рекламы |


Сайты яндекса:

- [Яндекс Погода](https://yandex.ru/pogoda)
- [Яндекс Картинки](https://yandex.ru/images)
- [Сайты с Директом](https://direct.yandex.ru)

