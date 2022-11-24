const words = [
    {
        fr: `un appel téléphonique`,
        en: `(tele)phone call`,
        gender: `masculin`,
    },
    {
        fr: `un courrier`,
        en: `mail, letters, correspondence`,
        gender: `masculin`,
    },
    {
        fr: `un courriel`,
        en: `e-mail`,
        gender: `masculin`,
    },
    {
        fr: `un courrier électronique`,
        en: `electronic mail, e-mail`,
        gender: `masculin`,
    },
    {
        fr: `une information`,
        en: `information, news (ex: media)`,
        gender: `féminin`,
    },
    {
        fr: `un journal, des journaux`,
        en: `(news)paper, journal (ex: trip), record (ex: events)`,
        gender: `masculin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `un journal télévisé, des journaux télévisés`,
        en: `television news`,
        gender: `masculin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une télé (familier)`,
        en: `T.V., telly, 'the box'`,
        gender: `féminin`,
    },
    {
        fr: `une télévision`,
        en: `television`,
        gender: `féminin`,
    },
    {
        fr: `un téléviseur`,
        en: `television set`,
        gender: `masculin`,
    },
    {
        fr: `un, une avant-midi`,
        en: `morning, forenoon`,
        gender: `masculin ou féminin`,
        note: `le nom << avant-midi >> est invariable au pluriel`,
    },
    {
        fr: `une demi-heure, des demi-heures`,
        en: `half hour, half an hour`,
        gender: `féminin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une demi-journée, des demi-journées`,
        en: `half (a) day`,
        gender: `féminin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une minute`,
        en: `minute`,
        gender: `féminin`,
    },
    {
        fr: `un moment`,
        en: `moment`,
        gender: `masculin`,
    },
    {
        fr: `une nuit`,
        en: `night`,
        gender: `masculin`,
    },
    {
        fr: `une second`,
        en: `second`,
        gender: `féminin`,
    },
    {
        fr: `une soirée`,
        en: `evening`,
        gender: `féminin`,
    },
    {
        fr: `un appétit`,
        en: `appetite, desire, craving`,
        gender: `masculin`,
    },
    {
        fr: `une bière`,
        en: `beer`,
        gender: `féminin`,
    },
    {
        fr: `un bistro`,
        en: `pub, café`,
        gender: `masculin`,
    },
    {
        fr: `une boîte`,
        en: `box, tin (of food), can (of preserves)`,
        gender: `féminin`,
    },
    {
        fr: `un déjeuner`,
        en: `lunch (in France), breakfast (in Canada and Belgium)`,
        gender: `masculin`,
    },
    {
        fr: `une faim`,
        en: `hunger`,
        gender: `féminin`,
        note: `toujours singulier`,
    },
    {
        fr: `un lunch`,
        en: `lunch`,
        gender: `masculin`,
    },
    {
        fr: `une nourriture`,
        en: `food`,
        gender: `féminin`,
        note: `toujours singulier`,
    },
    {
        fr: `une nourriture pour chat`,
        en: `cat food`,
        gender: `féminin`,
        note: `toujours singulier`,
    },
    {
        fr: `un petit déjeuner, des petits déjeuners`,
        en: `breakfast(s) (in France)`,
        gender: `masculin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une soif`,
        en: `thirst, craving`,
        gender: `féminin`,
    },
    {
        fr: `un verre`,
        en: `glass, drink, lens (ex: glasses)`,
        gender: `masculin`,
    },
    {
        fr: `une demie`,
        en: `half`,
        gender: `féminin`,
    },
    {
        fr: `un pied`,
        en: `foot`,
        gender: `masculin`,
    },
    {
        fr: `un poids`,
        en: `weight`,
        gender: `masculin`,
        note: `invariable au pluriel`,
    },
    {
        fr: `un quart`,
        en: `quarter`,
        gender: `masculin`,
    },
    {
        fr: `un bureau, des bureaux`,
        en: `office(s), study (at home), desk(s) (furniture)`,
        gender: `masculin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `un employé`,
        en: `employee`,
        gender: `masculin`,
    },
    {
        fr: `une employée`,
        en: `employee`,
        gender: `féminin`,
    },
    {
        fr: `des resources (humaines)`,
        en: `(human) resources, means`,
        gender: `féminin`,
        note: `toujours au pluriel`,
    },
    {
        fr: `une réunion`,
        en: `meeting, gathering (together), reunion, session, sitting (ex: committee), function, joining, bringing together`,
        gender: `féminin`,
    },
    {
        fr: `une société d'État, des société d'État`,
        en: `crown corporation(s)`,
        gender: `féminin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une tâche`,
        en: `task, job`,
        gender: `féminin`,
    },
    {
        fr: `une aide`,
        en: `help, assistance, aid (humanitarian)`,
        gender: `féminin`,
    },
    {
        fr: `un air`,
        en: `air`,
        gender: `masculin`,
    },
    {
        fr: `une attention`,
        en: `attention`,
        gender: `féminin`,
    },
    {
        fr: `un autobus`,
        en: `bus`,
        gender: `masculin`,
        note: `les noms << autobus >> est invariable au pluriel`,
    },
    {
        fr: `un besoin`,
        en: `need`,
        gender: `masculin`,
    },
    {
        fr: `un changement`,
        en: `change`,
        gender: `masculin`,
    },
    {
        fr: `un chat`,
        en: `cat`,
        gender: `masculin`,
    },
    {
        fr: `chatte`,
        en: `cat`,
        gender: `féminin`,
    },
    {
        fr: `un chien`,
        en: `dog`,
        gender: `masculin`,
    },
    {
        fr: `une chienne`,
        en: `dog`,
        gender: `féminin`,
    },
    {
        fr: `une cigarette`,
        en: `cigarette`,
        gender: `féminin`,
    },
    {
        fr: `une débâcle`,
        en: `collapse (ex: financial deal), crash (ex: large business), ruin (ex: financial), break(ing) up`,
        gender: `féminin`,
    },
    {
        fr: `une dent`,
        en: `tooth`,
        gender: `féminin`,
    },
    {
        fr: `un divan`,
        en: `sofa, chesterfield`,
        gender: `masculin`,
    },
    {
        fr: `un docteur`,
        en: `doctor, physician`,
        gender: `masculin`,
    },
    {
        fr: `une douche`,
        en: `shower`,
        gender: `féminin`,
    },
    {
        fr: `une eau, des eaux`,
        en: `water(s)`,
        gender: `féminin`,
        note: `notez la forme au pluriel`,
    },
    {
        fr: `une énergie`,
        en: `energy`,
        gender: `féminin`,
    },
    {
        fr: `un état`,
        en: `state, condition`,
        gender: `masculin`,
    },
    {
        fr: `un exercise`,
        en: `exercise`,
        gender: `masculin`,
    },
    {
        fr: `un fait`,
        en: `fact`,
        gender: `masculin`,
    },
    {
        fr: `un froid`,
        en: `cold`,
        gender: `masculin`,
    },
    {
        fr: `une histoire`,
        en: `story, tale, history`,
        gender: `féminin`,
    },
    {
        fr: `une idée`,
        en: `idea`,
        gender: `féminin`,
    },
    {
        fr: `un parc`,
        en: `park`,
        gender: `masculin`,
    },
    {
        fr: `une peine`,
        en: `sorrow, sadness, distress, trouble (ex: effort), pains`,
        gender: `féminin`,
    },
    {
        fr: `un réveil`,
        en: `alarm clock`,
        gender: `masculin`,
    },
    {
        fr: `un réveille-matin`,
        en: `alarm clock`,
        gender: `masculin`,
        note: `les noms << réveille-matin >> est invariable au pluriel`,
    },
    {
        fr: `un robot`,
        en: `robot`,
        gender: `masculin`,
    },
    {
        fr: `une routine`,
        en: `routine, rut`,
        gender: `féminin`,
    },
    {
        fr: `une voiture`,
        en: `car, automobile, coach (ex: train), carriage`,
        gender: `féminin`,
    },
    {
        fr: `sinon`,
        en: `or, otherwise, if-not`,
        gender: `neutre`,
        note: `contraction`,
    }
];