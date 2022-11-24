const verbs = [
    {
        fr: `Affecter`,
        en: `To affect, to move (emotionnaly), to have an effect on, to assign, to allocate, to feign`,
        group: `Première (ER)`,
    },
    {
        fr: `Améliorer`,
        en: `To improve, advance, get better, enhance`,
        group: `Première (ER)`,
    },
    {
        fr: `Apporter`,
        en: `To bring, to cause (for example: a change), to bring about`,
        group: `Première (ER)`,
    },
    {
        fr: `Arrêter`,
        en: `To (bring to a) stop, to a standstill, to turn off (for example: device), to shut down (for example: system), to arrest, to seize (for example: merchandise)`,
        group: `Première (ER)`,
    },
    {
        fr: `Arriver`,
        en: `To arrive, to come, to check in (for example: hotel)`,
        group: `Première (ER)`,
    },
    {
        fr: `Assister (à)`,
        en: `To attend, to be present at`,
        group: `Première (ER)`,
    },
    {
        fr: `Avouer`,
        en: `To admit, to confess, to own up to`,
        group: `Première (ER)`,
    },
    {
        fr: `Brosser`,
        en: `To brush`,
        group: `Première (ER)`,
    },
    {
        fr: `Déprimer`,
        en: `To (be) depress(ed)`,
        group: `Première (ER)`,
    },
    {
        fr: `Déshabiller`,
        en: `To undress`,
        group: `Première (ER)`,
    },
    {
        fr: `Détester`,
        en: `To hate, to detest, to loathe`,
        group: `Première (ER)`,
    },
    {
        fr: `Deviner`,
        en: `To guess, suppose, estimate`,
        group: `Première (ER)`,
    },
    {
        fr: `Donner`,
        en: `To give`,
        group: `Première (ER)`,
    },
    {
        fr: `Écouter`,
        en: `To listen`,
        group: `Première (ER)`,
    },
    {
        fr: `Envoyer`,
        en: `To send, to ship, to dispatch (for example: merchandise, parcel), to remit (for example: money)`,
        group: `Première (ER)`,
    },
    {
        fr: `Fumer`,
        en: `To smoke`,
        group: `Première (ER)`,
    },
    {
        fr: `Habiller`,
        en: `To dress`,
        group: `Première (ER)`,
    },
    {
        fr: `Ignorer`,
        en: `Not to know (about), to be ignored / unaware of, to ignore`,
        group: `Première (ER)`,
    },
    {
        fr: `Imaginer`,
        en: `To suppose, to imagine, to devise (for example: machine), to think up`,
        group: `Première (ER)`,
    },
    {
        fr: `Jouer`,
        en: `To play (Game, music, role), to act / perform (for example: television, cinema)`,
        group: `Première (ER)`,
    },
    {
        fr: `Laver`,
        en: `To wash`,
        group: `Première (ER)`,
    },
    {
        fr: `Lever`,
        en: `To raise, to lift, to open (for example: bling), to wind up (for example: car window)`,
        group: `Première (ER)`,
    },
    {
        fr: `Manger`,
        en: `To eat`,
        group: `Première (ER)`,
    },
    {
        fr: `Manquer`,
        en: `To miss, to lose, to fail`,
        group: `Première (ER)`,
    },
    {
        fr: `Manquer de`,
        en: `To (be) lack(ing) (in), to be short of`,
        group: `Première (ER)`,
    },
    {
        fr: `Marcher`,
        en: `To walk, to work (for example: equipment), to go (for example: car)`,
        group: `Première (ER)`,
    },
    {
        fr: `Préparer`,
        en: `To prepare, to make ready, to make preparations or arrangements for, to arrange, to make up (for example: bed)`,
        group: `Première (ER)`,
    },
    {
        fr: `Présumer`,
        en: `To presume`,
        group: `Première (ER)`,
    },
    {
        fr: `Prêter`,
        en: `To lend`,
        group: `Première (ER)`,
    },
    {
        fr: `Quitter`,
        en: `To leave somewhere or someone, to quit (for example: job), to vacate (for example: hotel room)`,
        group: `Première (ER)`,
    },
    {
        fr: `Raser`,
        en: `To shave (off)`,
        group: `Première (ER)`,
    },
    {
        fr: `Regarder`,
        en: `To look at something or someone, to watch (for example: film)`,
        group: `Première (ER)`,
    },
    {
        fr: `Remarquer`,
        en: `To notice, to observe`,
        group: `Première (ER)`,
    },
    {
        fr: `Réveiller`,
        en: `To wake (up), to (a)waken`,
        group: `Première (ER)`,
    },
    {
        fr: `Téléphoner (à)`,
        en: `To (tele)phone, to call`,
        group: `Première (ER)`,
    },
    {
        fr: `Tourner`,
        en: `To turn`,
        group: `Première (ER)`,
    },
    {
        fr: `Tutoyer`,
        en: `To address somone as "tu". Or, to ask if someone can be addressed informally. For example: S'il VOUS plais vs S'il TE plais.`,
        group: `Première (ER)`,
    },
    {
        fr: `Choisir`,
        en: `To choose, to pick, to select`,
        group: `deuxième (IR)`,
    },
    {
        fr: `Finir`,
        en: `To finish, to end`,
        group: `deuxième (IR)`,
    },
    {
        fr: `Nourrir`,
        en: `To feed`,
        group: `deuxième (IR)`,
    },
    {
        fr: `Se Nourrir`,
        en: `To feed oneself`,
        group: `deuxième (IR)`,
    },
    {
        fr: `Apprendre`,
        en: `to learn`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Attendre`,
        en: `to wait (for)`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `(se) Détendre`,
        en: `To relax, to become less tense (for example: situation), to become stretched`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Descendre`,
        en: `to descend, go down`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Entendre`,
        en: `to hear, to understand, perceive, grasp`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Perdre`,
        en: `to lose`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Prendre`,
        en: `to take, grab, catch`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Repondre`,
        en: `to answer, respond`,
        group: `troisième (RE): régulier`,
    },
    {
        fr: `Aller`,
        en: `to go`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Boire`,
        en: `to drink`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Conduire`,
        en: `to drive, to steer (boat), to lead`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Lire`,
        en: `to read`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Partir`,
        en: `to leave, go off / away, to walk off / away`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Sortir`,
        en: `to exit, leave, go out`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Dormir`,
        en: `to sleep`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `(se) Sentir`,
        en: `to feel`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Servir`,
        en: `to serve, pour`,
        group: `troisième: irrégulier`,
    },
    {
        fr: `Ouvrir`,
        en: `to open, open up, initiate, start, launch`,
        group: `troisième: irrégulier`,
    },
];