---
title: Файл автоответов
description: Создание и использование файла autounattend.xml для полной автоматизации установки Windows.
date: 2025-11-14
author: rivzor
icon: lucide/file-cog
comments: true
tags:
    - винда
    - оптимизация
    - установка
    - autounattend
    - гайд
---

# Файл автоответов (autounattend.xml) 

> Как пропустить все окна настройки (OOBE) при установке Windows и сразу попасть на рабочий стол с готовым пользователем.

---

!!! question "Что такое autounattend.xml?"
    `autounattend.xml` - это специальный XML-файл, который содержит ответы на все вопросы установщика Windows. Он позволяет полностью автоматизировать процесс установки: от выбора языка и принятия EULA до создания учетных записей и настройки параметров приватности.

## Шаг 1: Онлайн-генератор  { data-search-exclude }

Самый простой способ создать корректный файл — использовать онлайн-генератор. Он предоставляет удобный веб-интерфейс для выбора всех необходимых опций.

[:material-web: Перейти к Unattend Generator](https://schneegans.de/windows/unattend-generator/){ .md-button .md-button--primary }

### Как пользоваться генератором  { data-search-exclude }

1.  **System:** Выберите версию Windows (10/11), которую вы устанавливаете.
2.  **General:** Укажите имя компьютера, ключ продукта (можно оставить пустым для активации позже) и настройки приватности (рекомендуется "Disable All" для максимальной конфиденциальности).
3.  **User Account:** Самая важная часть.
    -   **Name:** Имя вашего локального пользователя (например, `Admin` или `rivzor`).
    -   **Password:** Укажите пароль.
    -   **Auto-Logon:** Включите, если хотите автоматически входить в систему при запуске.
4.  **Региональные настройки (Regional):** Выберите язык системы, раскладку клавиатуры (`ru-RU`) и часовой пояс.
5.  **OOBE (Out-of-Box Experience):** Установите "Skip all" (Пропустить всё), чтобы не видеть экраны приветствия.
6.  **Disk Configuration:** Можно оставить по умолчанию (Wipe & Use entire disk), если вы устанавливаете систему на чистый диск.

!!! warning "Пароль"
    Если вы указываете пароль в генераторе, он будет сохранен в XML-файле в виде простого текста (Base64). Не используйте этот файл на флешках, к которым имеют доступ посторонние. Для локального использования это безопасно.

После настройки всех параметров нажмите кнопку **"Download File"** внизу страницы. Переименуйте скачанный файл в `autounattend.xml`.

---

## Шаг 2: Использование файла  { data-search-exclude }

Чтобы установщик Windows "подхватил" файл, его нужно правильно разместить.

1.  **Подготовьте флешку:** Создайте загрузочную USB-флешку с Windows. Вы можете использовать для этого Rufus, как описано в другом гайде.
    
    [:material-page-next-outline: Гайд по установке Windows](install.md){ .md-button data-preview }
    
    [:material-usb-flash-drive: О программе Rufus](../software/pc/rufus.md){ .md-button data-preview }

2.  **Скопируйте файл:** Просто скопируйте ваш готовый файл `autounattend.xml` в **корень** созданной загрузочной USB-флешки (рядом с `setup.exe` и другими папками).

3.  **Начните установку:** Загрузитесь с этой флешки.

!!! success "Готово!"
    Если все сделано правильно, вы не увидите ни одного окна настройки. Установка скопирует файлы, несколько раз перезагрузит ПК и сразу же загрузит рабочий стол созданного вами пользователя.

??? example "Минимальный пример `autounattend.xml` (Только пропуск OOBE)"
    Если вам не нужно создавать пользователя, а просто пропустить надоедливые экраны OOBE (например, при установке в виртуальной машине), вы можете использовать этот минимальный файл. Он заставит систему пропустить OOBE и создать пользователя без пароля.

    ```xml title="autounattend.xml"
    <?xml version="1.0" encoding="utf-8"?>
    <unattend xmlns="urn:schemas-microsoft-com:unattend">
        <settings pass="oobeSystem">
            <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="[http://schemas.microsoft.com/WMIConfig/2002/State](http://schemas.microsoft.com/WMIConfig/2002/State)" xmlns:xsi="[http://www.w3.org/2001/XMLSchema-instance](http://www.w3.org/2001/XMLSchema-instance)">
                <OOBE>
                    <HideEULAPage>true</HideEULAPage>
                    <HideOEMRegistrationScreen>true</HideOEMRegistrationScreen>
                    <HideOnlineAccountScreens>true</HideOnlineAccountScreens>
                    <HideLocalAccountScreen>true</HideLocalAccountScreen>
                    <HideWirelessSetup>true</HideWirelessSetup>
                    <ProtectYourPC>3</ProtectYourPC>
                </OOBE>
                <UserAccounts>
                    <LocalAccounts>
                        <LocalAccount wcm:action="add">
                            <Name>Admin</Name>
                            <Group>Administrators</Group>
                            <Password>
                                <Value></Value>
                                <PlainText>true</PlainText>
                            </Password>
                        </LocalAccount>
                    </LocalAccounts>
                </UserAccounts>
            </component>
        </settings>
    </unattend>
    ```