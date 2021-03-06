# Базовый курс веб-разработки [![Build Status](https://travis-ci.com/Maximumstart-basic-course/pasha-e1-006.svg?branch=master)](https://travis-ci.com/Maximumstart-basic-course/pasha-e1-006)

* Студент:  `Павел Капелюховский`.
* Ментор: `Дмитрий Тытарь`.
* План занятий: [нате](https://docs.google.com/document/d/1e6PG06nszODebSn5DsqBsG6AujbXoKmqj1drDsoQElM/edit?usp=sharing).
* Требования к выпускному проекту: [тут](https://docs.google.com/document/d/16VOU_viRMtN2wBW6nv_2rGkjsI8PiBILPVwKOMp-vMs/edit?usp=sharing).
* Экзаменационные вопросы: [вот](https://docs.google.com/document/d/16MYa5-VYmnF4OFAtIeR-MEs23RMh0LHaHyQ_W0ZO8wE/edit?usp=sharing).
* Основные репозитории: [здесь](https://github.com/Maximumstart-basic-course).
* Репозиторий с домашними заданиями: [там](https://github.com/MaximumStart/essential-course).

## Проходил "Начальный курс веб-разработки"? Если да, то с каким результатом?

`undefined`

---

Не удаляй и ничего не меняй в файлах: `.eslintrc`, `.gitignore`, `package.json`, `package-lock.json`.

Если есть необходимость размещать какие-то свои личные файлы, то в корню локального репозитория есть специальная папка `Personal`, которая не индексируется и не прилетает на проверку.

---

# Что делать, если я вижу это впервые?

## 1. Зарегистрируйся

Если у тебя еще нет аккаунта, то зарегистрируйся на [github.com](https://github.com/join).

## 2. Найди свой репозиторий и форкни его

На [странице курса](https://github.com/Maximumstart-basic-course) найди свой репозиторий, перейди в него и нажми кнопку `Fork`. Все дальнейшее обучение будет проходить непосредственно в форкнутом репозитории.

## 3. Создай SSH-ключ, если еще этого не делал

Для этого в `Git BASH` или в терминале запусти команду:

```bash
ssh-keygen
```

Нажимай `Enter` до появления графического ключа. 

После чего, в домашней папке (для того, чтобы узнать расположение домашней папки, в `Git BASH` введи символ __~__ и нажми `Enter`) найди папку `.ssh`, а в ней файл `id_rsa.pub`. Открой его в любом текстовом редакторе и полностью скопируй его содержимое.

Зайди на GitHub -> Settings -> SSH and GPG keys -> New SSH key. В поле __Title__ введи любое название, а в поле __Key__ вставь содержимое файла `id_rsa.pub`.

## 4. Представься

Укажи свой логин на Github и email, которые потом будут записываться в каждый коммит. Делается это с помощью команд:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## 5. Клонируй репозиторий себе на компьютер

Найди форкнутый репозиторий у себя в аккаунте, нажми в нем на кнопку `Clone or download`, выбери `Use SSH` и скопируй ссылку. На рабочем столе или в любой другой папке откройте `Git BASH` и введи следующую команду:

```bash
git clone <ссылка_из_гитхаба>
```

## 6. Установи линтер

Открой папку или перейди в нее из консоли командой:

```bash
cd <название репозитория>
```

Установи все необходимые для работы файлы командой: 

```bash
npm i
```

## 7. Создай ветку и измени файл README.md

Для создания новой ветки введи команду:

```bash
git checkout -b first-task
```

В этом курсе мы для выполнения каждого задания будем создавать отдельную ветку, а потом будем вливать ее в основной репозиторий.

Сейчас ты находишься в ветке `first-task`, убедиться в этом можно, используя команду:

```bash
git status
```

В ответе должна быть строка:

```bash
On branch first-task
```

В этом файле пока еще нет информации о тебе, вместо нее ты видишь надписи `undefined`. Заполни эту информацию, чтобы нам было удобнее работать с тобой. Все остальное оставь без изменений.

## 8. Поправь .gitignore

Открой файл `.gitignore` в корне проекта и в первых двух строках убери знак октоторпа "#". После этого на GitHub не будут отправляться папки __node_modules__, __Personal__ и сам файл __.gitignore__.

## 9. Отправь все файлы в свой форк на Гитхаб

Для этого в своей рабочей папке запусти `Git BASH` и выполни команду

```bash
git add README.md
```

чтобы проиндексировать файл. После чего выполни:

```bash
git commit -m 'Изменила Readme'
```

Консоль подскажет что-то вида:

```
[master c75f147] Изменила Readme
 1 file changed, 26 insertions(+), 1 deletion(-)
 rewrite README.md (100%)
```

Отправь свой коммит на Гитхаб командой:

```bash
git push origin first-task
```

Тут очень важно указать ветку, которая отправляется, потому что сейчас у нас есть две ветки -- `master` и `first-task`. В `master` никаких изменений нет, а в `first-task` ми обновили файл `README.md`

## 10. Отправь все файлы в свой форк на Гитхаб

Убедитесь, что в репозитории появился свежий коммит и нажмите на кнопку `New pull request`, на появившейся странице нажмите `Create pull request`, оставьте комментарий для наставника и сообщите о готовом к проверке домашнем задании в Телеграм. В течение нескольких часов задание проверят и сольют с главным репозиторием.

## 11. Сообщи ментору

После создания pull request'a, сообщи ментору о том, что задание готово к проверке.

# Критерии оценивания

1. На 10 занятии студенты проходят письменное тестирования, которое состоит из 10 случайно выбранных [экзаменационных вопросов](https://docs.google.com/document/d/16MYa5-VYmnF4OFAtIeR-MEs23RMh0LHaHyQ_W0ZO8wE/edit?usp=sharing) по JavaScript. Каждый вопрос оценивается в 10 баллов, минимальный проходной результат -- __60 баллов__.

2. В конце курса студенты проходят компьютерное тестирование, которое включает все вопросы курса -- Git, адаптивная верстка, Bootstrap 4, Javascript (ES-2015). Минимальный проходной балл -- 60%. 1 процент = 1 балл. То есть, минимальный проходной результат -- __60 баллов__.

3. Если студент набирает __минимальные 120 баллов__, он получает .psd-файл выпускного проекта и список требований к нему. На сдачу готового проекта выделяется 14 дней, все даты и требования будут объявлены заранее.

4. Если студент систематически не сдавал домашние задания или при работе над домашним заданием не использовался Git в полной мере и в соответствии с нашими требованиями или студент использовал ухищрения, которые были замечены ментором, то от финального результата __отнимается 40 баллов__. То есть, есть ты набрал 120 баллов, то финальный результат будет равен __120 - 40 = 80 баллов__, что не является проходным баллом. О снятии баллов студента предупредит ментор за неделю до письменного экзамена.

# Как синхронизировать основной и локальный репозитории?

1. Переходим в ветку `master`:

```bash
git checkout master
```

2. Добавляем адрес основного репозитория:

```bash
git remote add main <адрес основого репозитория>
```

3. Получаем ветки из основного репозитория:

```bash
git fetch main
```

4. Сливаем наш основной репозиторий с локальным:

```bash
git merge main/master
```

# Как тестировать мой код?

Мы задали определенный правила, исполнение которых и проверяет линтер в автоматическом режиме. Роль ментора при этом не теряется, однако, если код не проходит проверку линтером, то и ментор его не примет.

Если не знаешь значения какой-то ошибки, то просто загугли. Все эти правила хорошо задокументированы.

Для прохождения теста введи команду:

```
npm test
```

Некоторые ошибки линтер может исправить автоматически. Для этого запусти последовательно команды:

```
npm run eslint:fix
npm run stylelint:fix
```
