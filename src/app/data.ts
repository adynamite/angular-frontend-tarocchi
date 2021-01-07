import { TreCarte } from './modello';

export interface TarotCards {
    name: string;
    imgUrl: string;
    letturaPassato: string;
    letturaPresente:string;
    letturaFuturo:string;
   
  }
  
  export const tarotCards: TarotCards[] = [
    {
      name: `Il Matto`,
      imgUrl: `../assets/images/deck/il_matto.png`,
      letturaPassato:`Il Matto è un essere imprevedibile, allegro, innocente che offre più di una sorpresa. I rischi che hai preso e il tuo modo di pensare originale ti hanno portato molto successo. Fare cose in un modo nuovo ti ha permesso di raggiungere un potenziale maggiore.`,
      letturaPresente:`Questa carta ci dice di seguire gli impulsi del cuore prima di quelli del cervello. In questo momento stai entrando in una nuova fase della tua vita. Questo cambiamento può sembrare buono o cattivo per ora, ma la sua influenza diventerà più chiara in futuro. È fondamentale valutare i rischi al fine di prendere la decisione giusta.`,
      letturaFuturo:`Per raggiungere il successo devi trovare nuovi modi per raggiungere i tuoi obiettivi. Quando arriva l'opportunità, devi essere in grado di lasciarti alle spalle le tue vecchie abitudini. E se, tale opportunità non arriva, potrebbe essere il momento di creare quell'opportunità con nuovi metodi.`,
      
    },
    {
      name: `Il Mago`,
      imgUrl: `../assets/images/deck/il_mago.png`,
      letturaPassato:`La carta del Mago ricorda che sei un essere unico e che hai molti doni che gli altri non possiedono. Sei inventivo e creativo e il Mago incarna queste qualità. In passato, ti sei concentrato in modo particolare sull'originalità e sui risultati efficienti. Tuttavia, questo può renderti incline ad analizzare eccessivamente i tuoi pensieri e le tue teorie, fino al punto in cui puoi ristagnare nei dubbi su te stesso.`,
      letturaPresente:`Generalmente il Mago nei Tarocchi si associa a comunicatori intelligenti e abili. La tua presenza indica che hai un livello di sicurezza e determinazione che ti consente di tradurre le idee in azioni. Questa è una carta molto pratica le cui rivelazioni sono meglio applicate agli aspetti pragmatici e fisici della tua vita, ma non in quelli teorici o effimeri. Il tuo successo negli sforzi futuri in politica o affari dipenderà dalla tua forza di volontà e dalla tua determinazione. In questo momento, le tue capacità e conoscenze sono necessarie per influenzare i cambiamenti che si stanno verificando. Per rendere questi cambiamenti utili, devi sapere come giocare bene le tue carte.`,
      letturaFuturo:`Il tuo futuro è incerto, presenta rischi e opportunità. Le possibilità saranno influenzate dalle amicizie che hai coltivato e dal sostegno che ricevi dai tuoi cari. Potrebbe trattarsi di un nuovo inizio positivo. Il mago nei tarocchi simboleggia l'azione e il potere nella tua vita. Le sue connotazioni positive indicano qualcuno che è un buon lavoratore ed è bravo in tutti gli aspetti della comunicazione. Questa carta suggerisce di usare la tua forza di volontà per andare avanti e agire. La risposta alla tua domanda è sì.`,
    },
    {
      name: `La Papessa`,
      imgUrl: `../assets/images/deck/la_papessa.png`,
      letturaPassato:`La carta più intuitiva e connessa dell'intero mazzo dei Tarocchi, la Papessa è una carta di consapevolezza e subcoscienza. Sei di mente elevata e idealista e la carta dell'Alta Sacerdotessa incarna queste qualità. In passato, ti sei spesso preoccupato di trovare il livello morale in ogni situazione. Ma a volte ti sei spinto troppo oltre, lottando per collaborare e cooperare con coloro le cui opinioni sono diverse dalle tue.`,
      letturaPresente:`Le tue capacità creative represse o che hai ancora bisogno di scoprire ti chiedono di essere espresse. Devi cercare una guida spirituale che ti aiuti a raggiungere il massimo potenziale delle tue capacità fisiche o artistiche. Dovrai superare la tua paura dell'impegno per ottenere ciò che desideri.`,
      letturaFuturo:`Sei sulla strada di vere ricompense, ma solo se continuerai a essere disciplinato e motivato. Se rifiuti i tentativi di uscire dalla strada che stai seguento, il tuo futuro è luminoso. Segui la tua intuizione e sarai diretto verso la soddisfazione duratura del successo. La Papessa è una donna spiritualmente intuitiva e piena di mistero, saggezza e comprensione. La presenza di questa carta nella va di pari passo con un viaggio alla scoperta del proprio io. Rappresenta le cose che devono ancora essere scoperte nella tua vita e quindi la risposta alla tua domanda non è chiara.`
    },
    {
      name: `L'Imperatrice`,
      imgUrl: `../assets/images/deck/l_imperatrice.png`,
      letturaPassato:`Profondamente connesso a Madre Natura, l'Imperatrice è una sostenitrice dell'assorbimento dell'energia del mondo che ti circonda. Sei più ispirato dalle idee emergenti e dalle persone che ti circondano, e la carta dell'Imperatrice incarna queste qualità. In passato ti sei reinventato e hai sperimentato nuove prospettive, cambiando spesso con le stagioni. Questa espressione di sé in continua evoluzione emana un senso di spontaneità che a volte ti ha fatto sembrare imprevedibile, anche agli amici intimi e ai tuoi cari.`,
      letturaPresente:`Potrebbe esserci un nuovo inizio che si sta aprendo davanti a te e solo tu puoi decidere come andrà. Devi essere comprensivo e particolarmente sensibile agli aspetti emotivi della vita. Una persona amata avrà bisogno di una mano o di una luce nell'oscurità, sarà il tuo ruolo aiutarla, indipendentemente dalla tua scelta.`,
      letturaFuturo:`Il futuro ti darà respiro e guarirà le tue ferite emotive e fisiche. Trascorrere del tempo a percorrere nuovi sentieri sarà più utile che riparare le situazioni pregresse. I tuoi investimenti daranno i loro frutti se presterai la dovuta attenzione. L'imperatrice rappresenta tutto ciò che è materno. Risolve problemi d'amore, indica sforzi in affari di successo e altre opportunità positive o produttive. Lei suggerisce di andare avanti per raggiungere il tuo pieno potenziale e la risposta che stai cercando è sì.`,
    },
    {
      name: `L'Imperatore`,
      imgUrl: `../assets/images/deck/l_imperatore.png`,
      letturaPassato:`L'Imperatore è una carta autorevole, di potere e forza. Sei un leader naturale, pieno di passione e carisma e la carta dell'Imperatore incarna queste qualità. In passato, sei stato un faro di autenticità e altruismo, senza paura di alzarti e parlare quando sentivi che qualcosa doveva essere detto. Ma a volte puoi anche esagerare con il tuo ottimismo, spingendo gli altri più in là di quanto sono pronti o disposti ad andare.`,
      letturaPresente:`Si sta avvicinando il momento in cui qualcuno in una posizione autorevole ti offre il suo aiuto. In ogni caso, lasciati guidare da chi ti viene in aiuto poichè si tratta di una persona più esperta di cui hai bisogno. Stai attento a non sbagliare nei confronti delle persone che dipendono troppo da te.`,
      letturaFuturo:`Le influenze dell'Imperatore sono positive e suggeriscono che potresti essere in via di promozione o avanzamento. Qualunque sia l'impeto del cambiamento, indica che puoi avere una forza interiore fuori dall'ordinario che ti aiuterà ad agire e ti guiderà. Prendere l'iniziativa può avvicinarti al tuo obiettivo, ma solo se sei in grado di essere responsabile delle tue azioni. Ti verrà data l'opportunità di gestire una delle tante situazioni della vita che aspettavi da tempo. Non lasciare indietro le persone che ti seguono.`,
     
    },
    {
      name: `Il Papa`,
      imgUrl: `../assets/images/deck/il_papa.png`,
      letturaPassato:`Il Papa è un messaggero dei cieli esperto nella guida. Sei un capogruppo naturale, pieno di passione ed energia, e la carta Ierofante incarna queste qualità. In passato, hai dimostrato un'abilità unica nel notare piccoli cambiamenti o motivi sottostanti che gli altri non vedono. Le tue acute osservazioni ti hanno naturalmente portato a essere quello che fa spesso domande, ma a volte altri lo trovano scoraggiante, dandoti la reputazione di qualcuno che mette in dubbio l'autorità.`,
      letturaPresente:`Un'opportunità di lavoro o di studio sta arrivando grazie all'aiuto di un superiore. In altri casi potrebbe significare, nel caso in cui tu stia sbagliando qualcosa che lo puoi fare poichè tutti commettono errori.`,
      letturaFuturo:`Per raggiungere il successo devi fare affidamento su un'organizzazione solida e su principi strutturati. Le tue azioni devono essere motivate da ragioni al di là del tuo istinto, altrimenti i tuoi risultati non saranno eccezionali come potrebbero essere. Il Papa è un simbolo di educazione e tradizione. Questo tarocco ti suggerisce di cercare una guida o un consiglio spirituale nella tua vita. È anche un'indicazione dell'approvazione religiosa. Questa carta non ha connotazione negativa o positiva. Ad una domana precisa la risposta è forse.`,
      
    },
    {
      name: `Gli Amanti`,
      imgUrl: `../assets/images/deck/gli_amanti.png`,
      letturaPassato:`Essere più in sintonia con te ti darà la capacità di connetterti meglio con gli altri. Il peso emotivo di un recente conflitto aumenterà rapidamente e porterà a una risoluzione di successo. Gli Amanti possono riguardare una relazione che può essere affettiva, familiare ma anche la formazione di associazioni negli affari, sta a te dare una corrispondenza adeguata al tuo caso. Il lato negativo di questa carta potrebbe essere l'evidenza di un errore di scelta fatto al momento in cui hai preso una decisione, o un momento di pressioni e tensioni esterne. Se saprai mantenere la calma e agire saggiamente, troverai la soluzione migliore.`,
      letturaPresente:`Si tratta di un conflitto che peserà i tuoi valori. Per poter progredire dovrai prendere una decisione tra l'amore e la tua carriera, ma la decisione determinerà le tue priorità. Forse è un periodo in cui sei molto preso da un progetto di relazione a cui sei interessato o da un'unione che potrebbe nascere in qualsiasi momento. Pertanto, è tempo per te di pensare con calma e chiarezza e di analizzare ciò che è meglio per te, solo tu saprai come prendere la decisione in risposta al fatto che questa relazione è davvero ciò che desideri per la tua vita.`,
      letturaFuturo:`Ti sarà utile ricordare che gli opposti sono i due lati di una stessa medaglia e che non esiste una condizione senza il suo opposto, quindi la decisione corretta può essere presa solo se si accetta l'esistenza di entrambe le corrispondenze. Solitamente Gli Amanti nei Tarocchi rappresenta anche l'emergere di una nuova opportunità, o se sei una persona impegnata, sarà il momento di decidere se è tempo di staccarti e questa potrebbe essere l'occasione giusta. Gli Amanti suggerisce che ti trovi ad un bivio in alcuni aspetti della tua vita. Anche se questa carta simboleggia relazioni, amore e unità, potrebbe anche rivelare un'alleanza positiva negli affari, magari che stai formando una squadra per far progredire la tua vita. La risposta alla tua domanda è Si.`,
     
    },
    {
      name: `Il Carro`,
      imgUrl: `../assets/images/deck/il_carro.png`,
      letturaPassato:`La carta del Carro è collegata alla tua spinta naturale e alla tua determinazione. Spingi i tuoi obiettivi con pura forza di volontà dove gli altri potrebbero arrendersi e andare avanti e la carta Carro incarna proprio questo concetto. Nel passato, hai ottenuto grandi risultati comunicando in modo dominante e potente, ma a volte questo ti ha portato a sopraffare gli altri che sono più timidi e sensibili di te.`,
      letturaPresente:`Generalmente quando esce la carta del Carro dei Tarocchi signigica che hai un duro lavoro davanti a te e che non sempre può essere risolto rapidamente, poichè Il Carro è una carta forte, potresti attraversare in questo periodo strade lunghe e difficili, pendenze in salita, vicoli ciechi e battute d'arresto dolorose. Un buon risultato può essere garantito solo se la carta è in piedi. Ma non perdere la speranza. Questa strada difficile ti ispirerà con un forte senso dello scopo, la capacità di avere successo attraverso l'organizzazione, la resistenza e la fiducia e solo coloro che hanno fatto qualcosa che non credevano possibile, ne trarranno vantaggio, poche persone possono affrontare fatiche simili. Buone notizie stanno arrivando e sconfiggerai l'opposizione con una vittoria decisiva.`,
      letturaFuturo:`Continua la tua lotta e otterrai il risultato che ti aspetti. Onore, consensi e riconoscimenti sono possibili risultati che otterrai se non ti dimetti.`,
      
    },
    {
      name: `La Forza`,
      imgUrl: `../assets/images/deck/la_forza.png`,
      letturaPassato:`La carta della Forza rappresenta la tua forza d'animo, il coraggio e la capacità generale di resistere a tutto ciò che la vita ti offre. Sebbene tu possa essere percepito come calmo, riservato o persino timido, hai una fiamma interiore e una passione che possono davvero brillare e la carta Forza incarna questo concetto. In passato, sei stato spesso guidato da principi, non da ricompense e punizioni. Tuttavia, non tutti capiscono questo approccio orientato al valore e questo a volte ti ha portato a sentirti incompreso.`,
      letturaPresente:`La carta della Forza nei Tarocchi mostra una presenza di autostima e fiducia nell'affrontare i problemi della tua vita. Suggerisce che sei una persona che gode del potere e che ha la capacità di esercitare l'autocontrollo in ogni momento. Forza e pazienza possono essere necessarie nelle tue attività. La risposta che stai cercando è probabilmente sì. Non rifiutare alcuna offerta che cambierà il tuo futuro. Abbi fiducia nelle tue convinzioni e sii abbastanza forte da fidarti di ciò che verrà.`,
      letturaFuturo:`C'è una grande liberazione energetica nel tuo futuro che ti guiderà verso maggiori cambiamenti nella tua vita. Comprendendo ciò che vali, trarrai il massimo vantaggio da questa meravigliosa opportunità per migliorare la tua vita.`,
      
    },
    {
      name: `L'Eremita`,
      imgUrl: `../assets/images/deck/l_eremita.png`,
      letturaPassato:`L'Eremita sa che l'unico modo per elaborare ciò che sta accadendo nella vita è ritirarsi dal rumore del mondo e creare uno spazio tranquillo di solitudine. Sei un pensatore indipendente che spesso scopre di lavorare meglio da solo e la carta dell'Eremita incarna questo modo di essere. Dimostrate spesso una razionalità efficiente con il vostro pensiero strategico, ma a volte questo ha avuto un prezzo in passato: sebbene sia probabile che chiunque altro provi sentimenti profondi, a volte è stato difficile prestare attenzione alle proprie emozioni ed esprimerle agli altri.`,
      letturaPresente:`L'Eremita è una carta che simboleggia una ricerca di illuminazione spirituale. L'introspezione e la contemplazione solitarie sono anche associate all'Eremita. Forse semplicemente ti può voler dire che devi fare un autoesame o una riflessione su te stesso. Ci sono momenti nella vita in cui bisogna fare un passo indietro per esaminare attentamente le situazioni e le decisioni che si sono prese. C'è qualcuno che può aiutarti a superare tutti i tuoi problemi e la loro conoscenza potrebbe sorprenderti. Questa persona sei proprio tu. Comprendendo te stesso sarai in grado di capire meglio gli altri.`,
      letturaFuturo:`La carta dell' Eremita nei Tarocchi insegna a staccare la mente e sfruttare il silenzio per ottenere illuminazione e auto-miglioramento. Rafforza l'importanza del silenzio profondo della tua anima per il raggiungimento dei tuoi obiettivi. Pertanto, la risposta alla tua domanda è forse. Quando ti renderai conto di quale sia la tua vera strada, non ci sarà più nulla che ti potrà ostacolare. La vita ti ha sfidato ma sei pronto a tirar fuori il meglio in futuro.`,
     
    },
    {
      name: `La Ruota della Fortuna`,
      imgUrl: `../assets/images/deck/la_fortuna.png`,
      letturaPassato:`La Ruota della Fortuna è in costante rotazione e ci ricorda che nulla è permanente. Sei poliedrico e talvolta contraddittorio, come qualcuno che è amichevole ma riservato, calmo ma spontaneo e curioso, a volte incapace di rimanere concentrato in ambienti formali. Puoi quindi essere una sfida da prevedere, anche da parte di amici e persone care, e la carta della Ruota della Fortuna incarna questo concetto. In passato, ti sei spesso impegnato in processi creativi e di risoluzione dei problemi per esplorare idee, sebbene il tuo approccio a ruota libera, per tentativi ed errori, a volte ti abbia portato a calpestare i piedi di altre persone.`,
      letturaPresente:`La Ruota della fortuna nei Tarocchi simboleggia i cicli della vita e parla di nuovi inizi. Molto probabilmente troverai che questi eventi sono positivi, ma essendo governati dalla fortuna, possono essere al di fuori del tuo controllo e influenza. Presta attenzione a quelle cose che puoi controllare attentamente e impara a non soffrire di ciò che non puoi controllare. Il cambiamento benefico sta arrivando, ma dovresti tenere presente che la fortuna è fuori dal tuo controllo.`,
      letturaFuturo:`Il futuro ti offre l'opportunità di cambiare il tuo percorso verso la crescita personale e la felicità. Devi essere pronto a cambiare il tuo modo di pensare e a rappresentare un cambiamento positivo, sia che le tue azioni abbiano successo o meno.`,
    },
    {
      name: `La Giustizia`,
      imgUrl: `../assets/images/deck/la_giustizia.png`,
      letturaPassato:`La carta della Giustizia è un promemoria fermo ma giusto che il karma è reale e che ogni azione ha una conseguenza. Sei apprezzato da molti per i tuoi chiari consigli e indicazioni, e la carta della giustizia incarna questo concetto. In passato hai dimostrato di essere affidabile e di avere una forte etica del lavoro. Ma ti sei anche guadagnato la reputazione di inflessibilità tra alcuni perché ti aspetti che gli altri ricambino, non necessariamente riconoscendo che a volte le persone contribuiscono in modi diversi.`,
      letturaPresente:`È bello trovare la carta della Giustizia nella tua tiratura significa che hai agito con gentilezza ed equità nei confronti degli altri, specialmente se sei stato vittima. È un importante indicatore di risoluzione positiva, sebbene come e in quale campo della tua vita dipenderà dalle tua situazione. Tuttavia, se sei stato ingiusto, offensivo e immorale nei tuoi rapporti, presta attenzione. Nella migliore delle ipotesi, questa carta rappresenta un avvertimento per gli ingiusti di cambiare strada prima che accada una punizione. In casi neutrali potrebbe semplicemente dirti di cercare un equilibrio nella tua vita. Riceverai un suggerimento o un regalo, o forse ti verrà pagato un debito.`,
      letturaFuturo:`Quando tutto è detto e fatto riceverai il risultato che meriti. Il tuo carattere morale sarà giustificato, quindi mantieni la tua integrità e cerca di bilanciarti.`,
      
    },
    {
      name: `L'Appeso`,
      imgUrl: `../assets/images/deck/l_appeso.png`,
      letturaPassato:`L' Appeso nei Tarocchi è una carta che può essere interpretata nel modo che ogni cambiamento è a sua volta una piccola morte, poiché il vecchio deve morire per creare il nuovo. Rinunciare ad alcune cose del tuo passato ti ha portato un nuovo volo nella tua vita spirituale. Ciò che hai sacrificato deve essere visto in un modo nuovo. `,
      letturaPresente:`Se qualcosa viene accellerato, questa lettera indica che potresti essere in pausa. Tieni presente che l'atto di aiutare non è più importante della persona che viene aiutata.`,
      letturaFuturo:`Ci sono molte cose che ti sono sconosciute al momento, quindi devi fissare gli obiettivi e pianificare con cautela. Agire al momento giusto ti farà andare avanti. L'Appeso nei Tarocchi suggerisce una sorta di metamorfosi attraverso schemi di rottura, lasciando andare o attraversando un periodo di transizione.
      A volte può anche significare rinunciare a qualcosa per ottenere una nuova prospettiva, ma comunque non ha una connotazione positiva o negativa. La risposta che vuole darti è "forse".`,
      
    },
    {
      name: `La Morte`,
      imgUrl: `../assets/images/deck/la_morte.png`,
      letturaPassato:`La morte suggerisce una completa separazione tra passato e futuro e molto probabilmente sarà dolorosa. Nonostante il senso di perdita associato, la Morte svolge un ruolo naturale e importante nella vita, portando infine all'accettazione. È una parte necessaria per andare avanti e vedrai che i cambiamenti sono più facili se li accetti invece di combatterli. Tutte le cose cambiano nel tempo e anche il tuo destino in questo mondo cambierà.`,
      letturaPresente:`La carta della Morte nei Tarocchi mostra alcuni cambiamenti drammatici che potrebbero avvenire per poi portare ad un nuovo inizio. È spesso associato a qualche forma di perdita, fallimento o distruzione. Il tono generale di questa lettera è oscuro e per niente buono. Pertanto, la tua risposta è no! Un evento importante si sta avvicinando e arriverà inaspettatamente. Attenzione perderai qualcosa di valore.`,
      letturaFuturo:`Per andare avanti devi sviluppare una nuova prospettiva sul mondo. Il passato è dietro di te e il resto della tua vita continua. Avanza per la tua strada con tutto il cuore.`,
      
    },
    {
      name: `La Temperanza`,
      imgUrl: `../assets/images/deck/la_temperanza.png`,
      letturaPassato:`La carta della Temperanza è una maestra della moderazione. Hai una serie di qualità equilibrate e la carta della Temperanza incarna questo aspetto della tua natura. Ad esempio, nonostante tu sia sensibile, hai eccellenti capacità analitiche. E sebbene tu sia riservato, hai le abilità di una persona forte e solide relazioni sociali. In passato, hai dimostrato di poter essere affidabile per portare a termine i lavori in tempo. Ma hai anche la tendenza a sottovalutare i tuoi risultati, il che significa che il lavoro che fai a volte non viene riconosciuto.`,
      letturaPresente:`La Temperanza nei Tarocchi è una carta ottimista che ti incoraggia a trovare un equilibrio nella tua vita e ad affrontare i problemi con un atteggiamento calmo. Riconosce che le forze opposte non hanno bisogno di essere in guerra dentro di te. Segui attentamente tutte le decisioni importanti che prendi. Fidati che le buone decisioni porteranno a un risultato positivo per te. Finalmente arriverà qualcosa che hai desiderato a lungo. Aspettati di sviluppare una fruttuosa collaborazione o un matrimonio nel tuo circolo sociale immediato.`,
      letturaFuturo:`La carta della Temperanza suggerisce l'intervento divino, l'equilibrio e l'armonia. La presenza generalmente positiva di questa carta nel tuo tiro rivela alti livelli di autostima e controllo nei tuoi sforzi. La risposta che questa carta ti dà è molto probabilmente sì. Prendi il controllo della tua vita e pratica la moderazione. Rimanendo in equilibrio risolverai qualsiasi conflitto attuale e inizierai un nuovo capitolo della tua vita.`,

    },
    {
      name: `Il Diavolo`,
      imgUrl: `../assets/images/deck/il_diavolo.png`,
      letturaPassato:`Una delle scelte che hai fatto per te era sbagliata. Le forze negative ti stanno trattenendo.`,
      letturaPresente:`Il Diavolo nei Tarocchi è la carta per eccellenza che parla di tutte le cose negative. Rabbia, violenza, tentazione, paura e dubbio sono solo alcuni dei sentimenti associati a questa figura. Suggerisce che forse sei intrappolato in una relazione folle, una dipendenza o una bugia. Senza dubbio, questa lettera dice di no. C'è un evento fuori dal tuo controllo che cambierà la tua vita. Non si sa se sarà nel bene o nel male, ma è necessario evitare comportamenti stravaganti e rimanere fedeli a se stessi.`,
      letturaFuturo:`È giunto il momento per te di trovare la bellezza dentro te stesso e smettere di proiettare quelle immagini ad altri nel mondo. Trova il coraggio di cambiare la tua vita. Il corso della tua vita è al di là delle tue conoscenze, ma la conoscenza supererà le tue illusioni.`,
     
    },
    {
      name: `La Torre`,
      imgUrl: `../assets/images/deck/la_torre.png`,
      letturaPassato:`Oscura e minacciosa, la Torre è l'incarnazione di complicazioni e conflitti. Non solo il cambiamento, ma il movimento improvviso e spiacevole causato dagli eventi imprevisti e traumatici che fanno parte della vita. La Torre sul tuo tiro è sempre una minaccia, ma la vita comporta inevitabilmente una tragedia e devi decidere se affrontarla con grazia. Per fare spazio al nuovo, il vecchio deve essere distrutto. Le ambizioni che hai perseguito sono costruite su basi deboli e offrono false ricompense.`,
      letturaPresente:`La carta della Torre nei Tarocchi parla di eventi imprevisti e cambiamenti che si verificheranno nella tua vita. Tuttavia, questi cambiamenti non sono catastrofici, disastrosi ma generalmente potrebbero essere negativi. Potrebbe essere correlato a qualche tipo di incidente, ritardo o danno in una qualsiasi area della tua vita. La risposta che questa carta ti dà è no. Un conflitto sta raggiungendo un punto critico nella tua vita. Le relazioni dovranno essere rivalutate e ristrutturate per mantenerle.`,
      letturaFuturo:`Resistendo alle sfide imminenti, il tuo futuro sarà brillante. Devi vedere le cose come vuoi che siano per trasformarle in quel modo. Sapere che il peggio è finito ti darà forza.`,
    },
    {
      name: `Le Stelle`,
      imgUrl: `../assets/images/deck/le_stelle.png`,
      letturaPassato:`La carta delle Stelle è l'incarnazione della speranza, un'influenza calmante che offre ottimismo e ispirazione. Quando trovi una causa che accende la tua immaginazione, porti un'energia che spesso ti spinge sotto i riflettori e la carta Stella incarna questo aspetto di te. In passato, le tue soluzioni originali ti hanno reso un leader tra i coetanei, ma dato il tuo amore per l'indipendenza, non è sempre questo che avresti voluto essere. Apprezzi la libertà di essere innovativo e talvolta questo ti ha portato a sentirti abbattuto o intrappolato in svariate routine e aspetti amministrativi della leadership.`,
      letturaPresente:`Le Stelle nei Tarocchi simboleggia la speranza, il rinnovamento e la bellezza. Suggerisce un periodo di calma spirituale, felicità e opportunità positive. Il significato generale di questa carta è ottimismo e serenità. La risposta che suggerisce la loro presenza è sì. Tieni conto dell'equilibrio e della moderazione quando trovi soluzioni ai tuoi problemi attuali. La quantità di aiuto e incoraggiamento che riceverai porterà armonia e felicità alle tue cerchie.`,
      letturaFuturo:`Si sta avvicinando il momento del rinnovo. Hai scelto la strada giusta per ripristinare la tua salute mentale e fisica. Essendo abbastanza coraggioso da percorrere le strade più rischiose ispirerai anche le persone intorno a te.`,
     
    },
    {
      name: `La Luna`,
      imgUrl: `../assets/images/deck/la_luna.png`,
      letturaPassato:`La carta della Luna è collegata al tuo subconscio. Sei spesso un avvocato del diavolo, l'eccezione che comprende e articola idee opposte e la carta Luna incarna questo aspetto della tua identità. Nel passato, ti è piaciuto mettere in discussione lo status quo, fornendo una prospettiva critica per scuotere le cose e spingere sistemi esistenti in nuove direzioni intelligenti. Tuttavia, a volte, la tua incrollabile onestà è apparsa nelle vesti di insensibilità tra coloro che sono avversi al conflitto.`,
      letturaPresente:`La Luna nei Tarocchi è una carta fuorviante che può confondere. Suggerisce la presenza di rischi, segreti e un certo grado di confusione mentale. Ti avverte di essere cauto in ogni sforzo che stai compiendo nella tua vita. La risposta che stai cercando è no. Simbolicamente è come una linea retta che prende la forma di un nuovo progetto creativo, un conflitto in una relazione. La tua esperienza ti guiderà a compiere le azioni giuste.`,
      letturaFuturo:`La tua immaginazione ti porterà successo se i tuoi pensieri sono collegati all'azione pratica. Il motivo per raggiungere il massimo potenziale potrebbe portare molti conflitti nella tua vita, ma i risultati saranno formidabili.`,
      
    },
    {
      name: `Il Sole`,
      imgUrl: `../assets/images/deck/il_sole.png`,
      letturaPassato:`Il Sole è una carta potente ed edificante, che rappresenta gioia, vitalità e ottimismo. Ti piacciono i riflettori ma sei anche generoso con il tuo tempo e la tua energia, e la carta Sole incarna proprio queste qualità. Sei stato spesso motivo di risate, giocosità e disponibilità a provare cose nuove. Ma concentrarsi sul divertimento e sui piaceri immediati a volte ti ha portato a trascurare altri doveri e responsabilità in passato.`,
      letturaPresente:`Il Sole nei Tarocchi, essendo l'opposto della Luna, è una carta piena di vita, di gioia ed energia. Rivela risultati positivi, iniziative di successo e in genere manifestazioni di buona fortuna nella tua vita. C'è un'opportunità per una nuova amicizia o relazione d'amore che porterà alla felicità e alla gioia. Non arrenderti e sarai sulla buona strada per il successo.`,
      letturaFuturo:`Ti stai avvicinando a un momento che ha il potenziale per cambiare la tua vita. Approfitta di questo momento e otterrai un futuro di possibilità illimitate.`,
     
    },
    {
      name: `La Giustizia`,
      imgUrl: `../assets/images/deck/la_giustizia.png`,
      letturaPassato:`La Giustizia è una carta di responsabilità, che richiede la revisione delle decisioni e delle azioni che hai fatto. Dimostrate spesso integrità, responsabilità e instancabile dedizione al dovere e la carta del giudizio incarna queste qualità. In passato, hai fatto del tuo meglio per adempiere a tutti gli obblighi che ti sei impegnato a sostenere, indipendentemente dal costo personale. Tuttavia, questo ha anche significato che gli altri a volte hanno trasferito le loro responsabilità su di te, sapendo che ti prenderai sempre la briga di risolvere tutto.`,
      letturaPresente:`La carta della Gistizia nei Tarocchi rappresenta un certo tipo di cambiamento o trasformazione, probabilmente che si è già verificato. Può significare la presenza di una chiamata spirituale o professionale o che devi prendere delle decisioni che ti porteranno al successo. La risposta alla tua domanda è sì. Il presente è arrivato e il passato sta rinunciando al suo controllo sul tuo destino. Questo è il momento migliore per cambiare un'abitudine nel tuo stile di vita.`,
      letturaFuturo:`I frutti delle tue decisioni sono in arrivo e riceverai ciò che meriti. Il tracciato ai tuoi piedi e la direzione verso cui stai andando sono chiari. Vedrai che il tuo più grande desiderio sarà soddisfatto. La carta della Giustizia rappresenta quindi un certo tipo di cambiamento o trasformazione, probabilmente qualcosa che si è già manifestato. Può significare la presenza di una chiamata spirituale o professionale e che devi prendere le decisioni che ti porteranno al successo. La risposta alla tua domanda è sì.`,
    },
    {
      name: `Il Mondo`,
      imgUrl: `../assets/images/deck/il_mondo.png`,
      letturaPassato:`Il Mondo è l'ultima carta degli Arcani Maggiori e rappresenta il completamento e l'adempimento. Sei spesso qualcuno che lascia il segno e conduce gli altri verso il successo, e la carta del mondo incarna queste qualità su di te. In passato, hai speso molto tempo a costruire relazioni e organizzare attività sociali per gli altri. Tuttavia, questo a volte ha significato che i tuoi sentimenti sono stati feriti quando le tue idee venivano rifiutate o nei casi in cui le persone semplicemente non erano interessate.`,
      letturaPresente:`La carta del Mondo nei Tarocchi significa che soddisfazione e successo sono già molto vicini. Realizzazione, ricompensa, certezza e risultati positivi sono tutte cose direttamente associate alla presenza di questa carta. La risposta è probabilmente sì. Il momento presente ti porterà alla realizzazione di un desiderio o di un necessario cambio di scenario. Per trovare soddisfazione devi accettare che le idee altrui siano valide quanto le tue.`,
      letturaFuturo:`Devi prima conoscere il tuo scopo per realizzarlo. È lo stesso con i sogni, devi sapere di cosa si tratta e farlo esistere. Non hai successo garantito, ma l'esperienza che acquisirai avrà il potenziale per soddisfare i tuoi desideri.`,
    },
    {
      name: `Asso di Coppe`,
      imgUrl: `../assets/images/deck/asso_di_coppe.png`,
      letturaPassato:`L'Asso di Coppe mostra il massimo della fertilità e della gioia di vivere. Forti soddisfazioni e sentimenti forti in arrivo.`,
      letturaPresente:`L'Asso di Coppe presenta una coppa traboccante, una fontana che rappresenta ristoro e guarigione. Potresti provare nuovi sentimenti o l'inizio di relazioni emergenti nel presente. L'asso di coppe è un'indicazione che intima a restare aperto e rilassarti mentre nuove forme di supporto appaiono nella tua vita.`,
      letturaFuturo:`L'Asso di Coppe presenta una coppa traboccante, come una fontana rinfrescante. Suggerisce di sfidare te stesso in futuro e scoprire cosa c'è di buono in ogni relazione. Consenti alla tua immaginazione di percepire il potenziale in ogni persona ed esperienza. Prendi una decisione consapevole per approvare e persino goderti gli sviluppi bizzarri che fanno girare il mondo. Nessuno può essere perfetto nell'accettazione incondizionata, ma man mano che diventa una seconda natura, questa pratica illuminerà la tua vita quotidiana.`,
    },
    {
      name: `Due di Coppe`,
      imgUrl: `../assets/images/deck/2_di_coppe.png`,
      letturaPassato:`Il Due di Coppe mostra che hai un stretto legame con un’altra persona. Relazione prolifica. Amore.`,
      letturaPresente:`Il Due di Coppe indica l'unione di partnership. Nel presente, potresti soffermarti su una relazione importante. Sebbene sia spesso romantico, può anche essere una stretta amicizia o un'altra relazione basata su affinità e profonda comprensione reciproca. Il Due di Coppe ti incoraggia a concentrarti su questa relazione nella tua vita e a coltivarla in ogni modo possibile.`,
      letturaFuturo:`Il Due di Coppe significa un'unione di partnership. In futuro, potresti concentrarti su una relazione romantica o su qualsiasi amicizia basata su affinità e profonda comprensione reciproca. Quando il Due di Coppe appare nella tua lettura dei Tarocchi, avvicinati a coloro a cui tieni, in modo che sappiano che stai pensando a loro. Anche se potresti sentirti vulnerabile quando esponi le tue emozioni allo scoperto, non hai niente da perdere e tutto da guadagnare. La vita è meglio vissuta con gli altri. Può essere raro entrare in contatto con altri che sono complementari e compatibili con te, quindi riconosci il privilegio con gratitudine.`,
      
    },
    {
      name: `Tre di Coppe`,
      imgUrl: `../assets/images/deck/3_di_coppe.png`,
      letturaPassato:`Il Tre di Coppe mostra una relazione di comprensione perfetta. Affari fruttuosi e pienamente appaganti. Sintonia completa e felicità. Nascita di opportunità.`,
      letturaPresente:`Il Tre di Coppe implica uno spirito di accordo, sostegno reciproco e incoraggiamento. Nel presente, è probabile che tu appartenga a una comunità di persone che la pensano allo stesso modo e trarrai beneficio dal mantenere relazioni positive con gli altri. Quando il Tre di Coppe compare nella tua lettura dei Tarocchi, ti chiede di realizzare tutto il supporto e la comprensione nella tua rete. Ricordati di raggiungere e rimanere in contatto con coloro che apprezzi.`,
      letturaFuturo:`Il Tre di Coppe significa spirito di accordo e incoraggiamento. In futuro, ti troverai con una forte rete di supporto di persone che la pensano allo stesso modo a cui puoi rivolgerti facilmente. Questa carta ti chiede di realizzare tutto il supporto e la comprensione che hai a disposizione. Invita gli altri a sostenerti e confida che il loro contributo sarà proprio ciò di cui hai bisogno. Ricorda di pensare in modo collaborativo in futuro, in modo che gli altri possano aiutarti a trovare il successo nel tuo lavoro.`,
     
    },
    {
      name: `Quatro di Coppe`,
      imgUrl: `../assets/images/deck/4_di_coppe.png`,
      letturaPassato:`Il Quatro di Coppe mostra un equilibrio negli affetti. Stabilità positiva. Piacere ritrovato nella vita di tutti i giorni.`,
      letturaPresente:`Il Quattro di Coppe si riferisce a un periodo inquieto, quando sei diventato insoddisfatto della vita e deluso da dove ti siedi rispetto agli altri. Ti senti stagnante e desideri un cambiamento? Il Quattro di Coppe ti avverte di non allontanarti dal mondo, anche se potresti essere tentato di essere così assorbito dalla negatività da non poter provare gratitudine o vedere le opportunità che hai di fronte. Una prospettiva più aperta nel presente può cambiare tutto.`,
      letturaFuturo:`Il Quattro di Coppe si riferisce a un periodo inquieto, quando sei diventato insoddisfatto della vita e deluso dai tuoi rapporti con gli altri. In futuro, potresti sentirti stagnante e desideroso di cambiamento, impantanato dalla negatività o dalla disperazione. Il Quattro di Coppe in questa posizione suggerisce che dovrai dare un'occhiata chiara a quanto sei entrato in stallo o ti sei distratto. Elimina alcune delle forze che ti indeboliscono, facendoti sentire incapace. Avrai bisogno di qualcosa su cui concentrarti che ti coinvolgerà e renderà chiaro il tuo percorso. Mentre ti apri a ciò che ti circonda, presto sarai di nuovo sulla buona strada.`,
      
    },
    {
      name: `Cinque di Coppe`,
      imgUrl: `../assets/images/deck/5_di_coppe.png`,
      letturaPassato:`Il Cinque di Coppe mostra che hai delle occasioni nuove da cogliere, però rapidamente, perché l’opportunità non durerà a lungo.`,
      letturaPresente:`Il Cinque di Coppe tradizionalmente ritrae il caos che è lasciato dopo uno sconvolgimento emotivo. Senti dolore o aspettative non soddisfatte nelle tue relazioni? Quando il Cinque di Coppe appare nella tua lettura dei Tarocchi, potresti ritrovarti a crogiolarti nel rimpianto e nella delusione per l'esito di una particolare situazione. Per cambiare questi sentimenti nel presente, ricorda di lasciarti andare e pratica il perdono, non solo verso gli altri, ma anche verso te stesso. La speranza non è persa, quindi lascia che i tuoi problemi diventino lezioni e vai avanti.`,
      letturaFuturo:`Il Cinque di Coppe ritrae tradizionalmente il casino che è lasciato dopo uno sconvolgimento emotivo. In futuro, potresti ritrovarti a sperimentare dolore o aspettative non soddisfatte nelle tue relazioni. Il Cinque di Coppe in questa posizione ti consiglia di accontentarti e di mostrare più apprezzamento per le cose che hai. Se qualcosa è veramente tuo, non può essere perso. Quando provi sentimenti di perdita, potrebbe essere a causa di un inappropriato attaccamento emotivo. Non aggrapparti alla battuta d'arresto. Concentrati sul potenziale.`,
      
    },
    {
      name: `Sei di Coppe`,
      imgUrl: `../assets/images/deck/6_di_coppe.png`,
      letturaPassato:`Un passato fatto di serenità potrebbe tornare. Bei ricordi ci tornano alla mente, ci fanno riflettere sulla nostra situazione, e sono di stimolo per il nostro futuro a breve termine.`,
      letturaPresente:`Il Sei di Coppe ricorda l'infanzia. Ti ricordi quando eri giovane ed entusiasta e il futuro era completamente aperto? Potresti provare un rinnovato senso di innocenza, la volontà di imparare e l'ottimismo sul fatto che le cose andranno meglio. Che il tuo passato sia stato una gioia o una delusione, il Sei di Coppe ti ricorda che non è mai troppo tardi e che la vera magia sta nel momento presente.`,
      letturaFuturo:`Il Sei di Coppe si riferisce all'infanzia, a quando eri giovane ed entusiasta. Potresti ritrovarti a sperimentare un rinnovato senso di apertura e innocenza, volontà di apprendere e ottimismo sul fatto che le cose andranno meglio. In futuro, trarrai beneficio dal guardare a ciò che è ripetitivo o ciclico nella tua vita. Quindi distilla tutto ciò che vale la pena dai tuoi ricordi e poi usa questo come motivazione per il cambiamento. Fai il miglior uso del senno di poi, prendendo nuove angolazioni su qualsiasi tuo problema ricorrente.`,
     
    },
    {
      name: `Sette di Coppe`,
      imgUrl: `../assets/images/deck/7_di_coppe.png`,
      letturaPassato:`Il Sette di Coppe dimostra che ciò che sembrava ormai non arrivare più finalmente è in arrivo.`,
      letturaPresente:`Il Sette di Coppe si riferisce tipicamente alla tua immaginazione. Stai inventando una vita diversa da quella che stai vivendo attualmente? Nel presente, potresti sentirti triste o deluso, con risultati o relazioni non all'altezza delle tue aspettative. Ma il Sette di Coppe ti ricorda che i risultati non sono scolpiti nella pietra. Non dimenticare di abbracciare un senso di magia mentre prendi in considerazione i tuoi sogni, paure e supposizioni che potrebbero nascondere ciò che sta realmente accadendo.`,
      letturaFuturo:`Il Sette di Coppe si riferisce tipicamente alla tua immaginazione. Stai inventando un futuro diverso dalla vita che stai attualmente vivendo? Anche se potresti sentirti triste e deluso, questa carta ti ricorda che il tuo risultato non è scolpito nella pietra. Il Sette di Coppe in questa posizione ti consiglia di eseguire un esercizio creativo di visualizzazione rilassando la guardia e lasciando andare le tue paure. Anche se è solo una pausa temporanea, questo può essere un esercizio utile per dare alla tua psiche una nuova dose di ottimismo e possibilità illimitate.`,
      
    },
    {
      name: `Otto di Coppe`,
      imgUrl: `../assets/images/deck/8_di_coppe.png`,
      letturaPassato:`L'Otto di Coppe significa che hai avuto l'occasione per riflettere. Buone basi per creare qualcosa insieme ad un’altra persona.`,
      letturaPresente:`L'Otto di Coppe spesso significa una grande delusione, una battuta d'arresto emotiva o un tradimento. Questa è una carta difficile da ricevere, ma realistica. Pensi di aver fatto tutto il possibile e le cose non stanno ancora andando come avresti voluto? Quando l'Otto di Coppe compare nella tua lettura dei Tarocchi, però, è un promemoria per smettere di mettere tutte le tue energie in una situazione che non ti porterà da nessuna parte. Invece, concentrati sulla comprensione di ciò che ti turba nel presente e sulle azioni che ti hanno portato qui, in modo da non ritrovarti nello stesso posto.`,
      letturaFuturo:`L'Otto di Coppe spesso significa una delusione o una battuta d'arresto emotiva. Questa è una carta difficile da ricevere, ma realistica. L'Otto di Coppe è un promemoria per guardarsi dentro e riconoscere la parte di te che nutre un rancore per una vecchia ferita o un trauma del passato. Non negare questa tendenza pessimistica, in quanto non riconoscere la verità farà solo esplodere la repressione in un'altra parte della tua psiche. Invece, cerca di comprendere e accettare l'esitazione e la paura che potresti provare, e di fare i conti con loro.`,
     
    },
    {
      name: `Nove di Coppe`,
      imgUrl: `../assets/images/deck/9_di_coppe.png`,
      letturaPassato:`Il Nove di Coppe mostra che hai avuto un momento di massima soddisfazione personale, sia affettiva che lavorativa. Buone nuove occasioni da cogliere. Non potrebbe andare meglio.`,
      letturaPresente:`Il Nove di Coppe è una carta di grande felicità e appagamento. Essendo una delle carte più positive che puoi ricevere in una lettura dei Tarocchi, è un indicatore di amore, gioia e gratitudine. Quando il Nove di Coppe compare nella tua lettura, continua a concentrarti sulle cose belle della tua vita ed evita di soffermarti sul negativo. In tal modo, potresti scoprire che gli aspetti positivi del presente continueranno a moltiplicarsi.`,
      letturaFuturo:`Il Nove di Coppe è una carta di grande felicità e appagamento. Una delle carte più positive che puoi ricevere in una lettura dei Tarocchi, è un indicatore di tanto amore, gioia e gratitudine nel tuo futuro. Il Nove di Coppe in questa posizione ti consiglia di aprirti e di essere ricettivo alle circostanze intorno a te. Potrebbe non essere necessario gestire una situazione che richiede molto controllo o leadership. Procedi dal tuo cuore e affidati al tuo intuito. Consenti a te stesso di essere attratto da ciò che ti sostiene ed evita ciò che ti sembra duro, critico o giudicante. Se questo richiede che tu cambi i tuoi modi, così sia. I risultati dell'essere intuitivi sono generalmente di gran lunga superiori a quelli dell'essere emotivamente protetti ed eccessivamente razionali.`,
      
    },
    {
      name: `Dieci di Coppe`,
      imgUrl: `../assets/images/deck/10_di_coppe.png`,
      letturaPassato:`Il Dieci di Coppe rappresenta la massima serenità d’animo e disposizione ad amare. Grande ricchezza interiore che finalmente genererà risultati e sarà apprezzata dagli altri... da alcuni in modo molto particolare. Siamo finalmente attraenti per la nostra ricchezza interiore.`,
      letturaPresente:`Il Dieci di Coppe è una delle carte più felici dell'intero mazzo dei Tarocchi. Rappresenta gioia, celebrazione e comunità. Nel presente, hai una forte rete di sicurezza emotiva, un supporto che si estende in tutte le direzioni. Quando il Dieci di Coppe appare nella tua lettura dei Tarocchi, è un promemoria che sei supportato nelle tue azioni attuali, quindi puoi abbracciare la direzione che stai percorrendo.`,
      letturaFuturo:`Il Dieci di Coppe è una delle carte più felici dell'intero mazzo dei Tarocchi. Rappresenta la comunità, la celebrazione e la gioia ultima. Nel tuo futuro, sperimenterai amore e sostegno che si estendono in tutte le direzioni, in una forte rete di sicurezza emotiva. Quando il Dieci di Coppe appare nella tua lettura dei Tarocchi, ti incoraggia a condividere abbondantemente e dare la priorità agli sforzi collettivi rispetto ai tuoi obiettivi personali. Adottando un approccio disinteressato, potresti scoprire che gli effetti durano più a lungo e che potresti anche essere generosamente ricompensato in seguito in futuro.`,
      
    },
    {
      name: `Fante di Coppe`,
      imgUrl: `../assets/images/deck/fante_di_coppe.png`,
      letturaPassato:`l Fante richiede onestà e sincerità in tutte le vicende sentimentali. Non fatevi gioco dei sentimenti, accettate e comunicate le vostre emozioni. Se il Fante di Coppe è il guardiano di una relazione, essa sarà consacrata dalla fortuna.`,
      letturaPresente:`Gli amanti troveranno un alleato forte e attento nel Fante di Coppe. Egli coniuga gli elementi acqua e terra in perfetta armonia. Con lui la bellezza e l'emozione possono durare per sempre perché rappresenta l'essenza della vita e non la mera superficie. Il Fante richiede onestà e sincerità in tutte le vicende sentimentali. Non fatevi gioco dei sentimenti, accettate e comunicate le vostre emozioni. Se il Fante di Coppe è il guardiano di una relazione, essa sarà consacrata dalla fortuna.`,
      letturaFuturo:`Il futuro ti farà trovare un'attrazione e fantasia persistente nei confronti di una persona molto attraente che ci ha colpito.`,
    },
    {
      name: `Cavaliere di Coppe`,
      imgUrl: `../assets/images/deck/cavaliere_di_coppe.png`,
      letturaPassato:`Godete della vostra creatività e sviluppatela. Modellate il vostro ambiente poiché siete il centro del mondo. Tuttavia non dimenticate che dovete rispettare anche i diritti degli altri. La prepotenza esagerata può causare grande dolore.`,
      letturaPresente:`Il Cavaliere di Coppe conduce una vita da artista e libero pensatore. Egli è guidato dalle passioni e non dalla necessità. Attrae il cambiamento e il movimento. Il Cavaliere crea cose originali con facilità - ma il suo carattere oscillante gli impedisce di stabilirsi una volta per sempre. Godete della vostra creatività e sviluppatela. Modellate il vostro ambiente poiché siete il centro del mondo. Tuttavia non dimenticate che dovete rispettare anche i diritti degli altri. La prepotenza esagerata può causare grande dolore.`,
      letturaFuturo:`Il futuro ti farà riscoprire dei sentimenti sopiti ed un desiderio di conoscere persone nuove.`,
    },
    {
      name: `Regina di Coppe`,
      imgUrl: `../assets/images/deck/regina_di_coppe.png`,
      letturaPassato:`Accettate la miriade di aspetti differenti della vostra anima e comprendete la loro relazione con coloro che amate. Spesso ci vuole tempo per capire - ma se vi dedicherete in tal modo, la ricompensa della Regina di Coppe sarà generosa.`,
      letturaPresente:`Con la Regina di Coppe l'amore e l'attenzione raggiungono vette incomparabili. La personalità di questa regina è piena di sfaccettature - tutte tese all'amore e alla dedizione. I suoi sentimenti non sono mai basati sull'egoismo. Accettate la miriade di aspetti differenti della vostra anima e comprendete la loro relazione con coloro che amate. Spesso ci vuole tempo per capire - ma se vi dedicherete in tal modo, la ricompensa della Regina di Coppe sarà generosa.`,
      letturaFuturo:`Nel futuro incontrerai una persona che ti vuole bene in modo disinteressato e che ti consiglierà sempre per il meglio. Questa persona ha una grande influenza su di te è pronta di sacrifica per il tuo bene.`,
    },
    {
      name: `Re di Coppe`,
      imgUrl: `../assets/images/deck/re_di_coppe.png`,
      letturaPassato:`Come una vera maestà il Re di Coppe rappresenta un ponte tra la sensualità e l'innocenza, tra la passione e la purezza. Né il suo regno né il suo affetto dureranno per sempre. Ciò che è importante oggi può essere irrilevante domani.`,
      letturaPresente:`Come una vera maestà il Re di Coppe rappresenta un ponte tra la sensualità e l'innocenza, tra la passione e la purezza. Né il suo regno né il suo affetto dureranno per sempre. Ciò che è importante oggi può essere irrilevante domani. Non credete ciecamente alle promesse: esse vi possono anche ingannare e deludere. C'è pericolo che un futuro misero possa seguire un momento di bellezza. Se accompagnerete il Re di Coppe, avvenimenti incredibili vi aspettano.`,
      letturaFuturo:`Il futuro ti riserva l'incontro con una persona carismatica, una persona che ci vuole bene in modo disinteressato e che ci guiderà sempre per il meglio.

      `,
    },
    {
      name: `Asso di Denari`,
      imgUrl: `../assets/images/deck/asso_di_denari.png`,
      letturaPassato:`L'Asso di Denari rappresenta la realizzazione dei nostri desideri. Felicità, addirittura euforia. Carta estremamente positiva, soprattutto dal lato economico, ma non solo.`,
      letturaPresente:`L'Asso di Denari è solitamente raffigurato con una pianta o un giardino per enfatizzare la sua connessione con la Terra e il potenziale di questo Asso di servire come seme per la realizzazione futura. Allora quali sono i semi che stai piantando nel presente? Se i tuoi talenti sono piantati e curati con cura, questo seme germoglierà e ti ricompenserà con un buon raccolto. L'asso offre un messaggio di supporto e consiglia di muoverti gradualmente, costantemente e con intenzione, al fine di raggiungere i tuoi obiettivi a lungo termine.`,
      letturaFuturo:`L'Asso di Denari è solitamente raffigurato con un giardino o uno sfondo agricolo per enfatizzare la sua connessione con la Terra, e il potenziale di questo Asso di servire come seme di realizzazione futura. Una crescita lenta e costante rende inevitabili il cambiamento e la crescita: anche se potresti non accorgertene di giorno in giorno, non sarai in grado di perdere i cambiamenti mentre l'anno torna al punto di partenza. L'asso di denari è un messaggio di supporto, che consiglia di muoverti gradualmente e con intenzione in futuro, al fine di raggiungere i tuoi obiettivi a lungo termine.`,
    },
    {
      name: `Due di Denari`,
      imgUrl: `../assets/images/deck/2_di_denari.png`,
      letturaPassato:`Nel passato hai trovato un buon partner con cui fare affari. Cerca di mantenertelo stretto.`,
      letturaPresente:`Il Due di Denari generalmente presenta come figura un giocoliere. È chiaro che l'ultima chiamata non può essere effettuata finché qualcosa non cade; c'è altro da imparare prima che un'azione possa essere intrapresa. Questa carta rappresenta la pazienza, quindi non lasciare che le circostanze ti infastidiscano. Hai tutto il tempo di cui hai bisogno per risolverlo, non importa quanto le cose urgenti appaiano nel presente. Quando il Due di Denari viene fuori nella tua lettura dei Tarocchi, è probabile che qualcosa sia in movimento. Ma ti consigliamo di mantenere la calma finché i cambiamenti non si saranno risolti.`,
      letturaFuturo:`Il Due di Denari presenta generalmente una figura giocoleria, con forme a mezz'aria. Fino a quando qualcosa non cade, l'ultima chiamata non può essere effettuata; c'è altro da imparare prima che un'azione possa essere intrapresa. Questa carta rappresenta quindi la pazienza. Non importa quanto urgano le cose in futuro, il Due di Denari in questa posizione ti consiglia di non lasciarti trascinare in decisioni o azioni premature. Concediti un po'più di tempo per chiarire i tuoi sentimenti e gli eventuali messaggi contrastanti che potresti ricevere dagli altri. Agisci solo quando sei in grado di farlo con sicurezza e coscienza pulita.`,
     
    },
    {
      name: `Tre di Denari`,
      imgUrl: `../assets/images/deck/3_di_denari.png`,
      letturaPassato:`Hai un'ottima disposizione della situazione generale per il raggiungimento della tua soddisfazione.`,
      letturaPresente:`Il Tre di Denari è tradizionalmente la carta dei Tarocchi del genio, spesso raffigurato al lavoro, da solo e al buio. Quando il Tre di Denari emerge nella tua lettura dei Tarocchi, è un promemoria non solo per rimanere concentrato sul compito a portata di mano, ma anche per goderti ciò che fai nel presente. Attraverso piani realistici, collaborazione e dedizione al miglioramento, anche tu puoi trasformare le tue grandi visioni in realtà.`,
      letturaFuturo:`La carta del Tre di Denari rappresenta tradizionalmente il genio, spesso ritratto al lavoro, da solo al buio. In questa posizione, la carta suggerisce che potresti aspettarti presto interessanti opportunità per mostrare al mondo le tue abilità e talenti. Quindi, permettiti di mostrare le tue capacità uniche in futuro. Una volta ricevuto l'apprezzamento che meriti, accettalo con gratitudine e assapora il riconoscimento.`,
    },
    {
      name: `Quatro di Denari`,
      imgUrl: `../assets/images/deck/4_di_denari.png`,
      letturaPassato:`Il passato è stato caratterizzato da una stabilità generale nella propria vita.`,
      letturaPresente:`Il Quattro di Denari rappresenta il paradosso della sicurezza materiale - la realtà a doppio taglio che emerge quando hai avuto successo, portando sia prosperità che la pressione delle responsabilità. Questa carta ti incoraggia ad adottare le abilità per gestire le tue finanze in modo ragionevole e per disconnettere la tua autostima da quella di valore materiale. Potresti trarre vantaggio allentando il tuo attaccamento alle tue finanze e ad altre preoccupazioni materialistiche, poiché l'appagamento che il denaro offre così spesso svanisce.`,
      letturaFuturo:`Il Quattro di Denari rappresenta il paradosso della sicurezza materiale, ovvero la realtà a doppio taglio che emerge quando hai avuto successo, quindi prosperità, ma anche la pressione delle responsabilità. Questa carta ti incoraggia quindi a sviluppare abilità in modo da poter gestire in modo ragionevole le tue finanze in futuro. Quello che ti è stato dato è abbondante, ma non senza limiti. Se sei prudente e responsabile, le risorse a tua disposizione cresceranno. Tuttavia, se sei frivolo o sciocco, il tuo comportamento potrebbe minare sia i tuoi beni che il benessere degli altri che sono collegati ad esso.`,
     
    },
    {
      name: `Cinque di Denari`,
      imgUrl: `../assets/images/deck/5_di_denari.png`,
      letturaPassato:`Il passato è stato un periodo felice in cui sei risultato apprezzato ed attraente. Cerca di mantenere le tue abbitudini sane. `,
      letturaPresente:`Il Cinque di Denari è la carta del desiderio e della gratificazione. Ma fare qualcosa per la gratificazione a breve termine spesso porterà a delusioni a lungo termine. Questa carta dei Tarocchi ti incoraggia quindi a discernere ciò che cerchi nel presente. Quando i soldi e il successo sono le tue forze trainanti nella vita, qualsiasi battuta d'arresto in queste aree può essere un duro colpo per la tua autostima. Puoi anche trascurare facilmente le persone della tua vita che ti hanno aiutato ad arrivare dove sei, facendoti sentire solo. Il denaro fa parte della vita, ma non lasciare che sia tutta la tua vita. Il Cinque di Denari ti ricorda che le ricchezze si presentano in molte forme diverse.`,
      letturaFuturo:`Il Cinque di Denari è una carta sul desiderio e la gratificazione. Fare qualcosa per una gratificazione a breve termine spesso porterà a una delusione a lungo termine. Quindi questa carta dei Tarocchi ti incoraggia a discernere in ciò che cerchi in futuro. Quando il denaro e il successo sono le tue forze trainanti nella vita, una battuta d'arresto in queste aree può infliggere un duro colpo alla tua autostima. Rischi anche di trascurare le persone della tua vita che ti hanno aiutato ad arrivare dove sei, sentendoti così infelice e solo. Il denaro è una parte della vita, ma non lasciare che sia tutta la tua vita: il Cinque di Denari ti ricorda che le ricchezze si presentano in molte forme diverse.`,
      
    },
    {
      name: `Sei di Denari`,
      imgUrl: `../assets/images/deck/6_di_denari.png`,
      letturaPassato:`Nel passato hai ricevuto dei doni inaspettati e la fortuna è stata sempre dalla tua parte.`,
      letturaPresente:`Il Sei di Denari è la carta del patrocinio e della generosità, con tutti i vincoli. Si tratta di dare e ricevere, ma anche di trovare l'equilibrio tra i due. Che si tratti di tempo, denaro o conoscenza che stai offrendo agli altri nel presente, stai ripagando l'universo per quando hai ricevuto aiuto in passato e stai aprendo l'opportunità di ricevere aiuto in futuro. In alternativa, se stai ricevendo supporto da qualcuno in un momento di bisogno attuale, il Sei di Denari è un promemoria che dovrai pagarlo in avanti ogni volta che puoi farlo.`,
      letturaFuturo:`Il Sei di Denari è la carta del patrocinio e della generosità, ma con tutti i vincoli. Si tratta di dare e ricevere e del necessario equilibrio tra i due. Il Sei di Denari in questa posizione ti chiede di pensare a te stesso come a qualcuno che può aiutare gli altri a perfezionare le loro abilità e usare i loro talenti con successo. Ma mentre lo fai, ricordati di controllare le tue intenzioni: non sentirti orgoglioso di fare un favore a qualcuno. In verità quello che stai facendo è ripagare un vecchio debito verso coloro che ti hanno aiutato a fare da mentore.`,
     
    },
    {
      name: `Sette di Denari`,
      imgUrl: `../assets/images/deck/7_di_denari.png`,
      letturaPassato:`Nel passato hai raggiunto tutti i tuoi obiettivi, per questo susciti curiosità positiva negli altri ed ammirazione.`,
      letturaPresente:`Il Sette di Denari riguarda il mettersi al lavoro. Il concetto tradizionale di questa carta dei Tarocchi è la coltivazione: l'atteggiamento lento e costante vince la gara. Non importa quanto possa essere frustrante, abbi pazienza e sii fiducioso nei tuoi sforzi. Il Sette di Denari è una carta "senza scuse" - il suo messaggio è di tenere la testa bassa nel presente e finire ciò che hai iniziato. Ricorda che più sei impegnato nelle tue responsabilità, più è probabile che tu ottenga i risultati desiderati.`,
      letturaFuturo:`Il Sette di Denari riguarda lo svolgere il lavoro che è richiesto. Il concetto tradizionale di questa carta dei Tarocchi è la coltivazione: il suo messaggio è di tenere la testa bassa in futuro e finire ciò che hai iniziato. Non importa quanto possa essere frustrante, ricorda che il successo si ottiene con la perseveranza. Quindi concentrati sul lungo periodo. Guarda oltre questa settimana o questo mese e sii risoluto nell'uso del tuo tempo e della tua energia. Il Sette di Denari esemplifica la magia dell'interesse composto, al contrario del tentativo di vincere alla lotteria. Piuttosto che fare affidamento sulla fortuna, genererai risultati molto migliori con un investimento lento e costante.`,
      
    },
    {
      name: `Otto di Denari`,
      imgUrl: `../assets/images/deck/8_di_denari.png`,
      letturaPassato:`Il passato ti ha fatto capire che i beni materiali rivestono scarsa importanza per la nostra ed altrui felicità.`,
      letturaPresente:`L'Otto di Denari è una carta di lavoro e miglioramento. Ma questa carta non riguarda solo il completamento del lavoro. Si tratta di farlo bene e di cercare regolarmente modi per migliorare nel presente. Con tutta questa attenzione, però, c'è il rischio di diventare un maniaco del lavoro e sentirsi così indispensabile che potresti evitare di chiedere aiuto o delegare quando dovresti. Quando l'otto di pentacoli emerge nella tua lettura dei tarocchi, ti incoraggia a continuare ad andare avanti, ma anche a mettere energia per mantenere una vita e una prospettiva più equilibrate.`,
      letturaFuturo:`L'Otto di Denari è una carta sul lavoro e il miglioramento. Questa carta non riguarda solo il portare a termine il lavoro, ma anche fare bene il lavoro e cercare regolarmente modi per migliorare in futuro. Con tutta questa concentrazione, però, c'è il rischio di diventare un maniaco del lavoro e sentirsi così indispensabile che potresti evitare di chiedere aiuto. L'Otto di Denari in questa posizione ti consiglia di fare tutto ciò che puoi in futuro, ma non tanto che la tua salute o la qualità del lavoro ne risenta. Sei in una posizione in cui i tuoi sforzi possono fare una grande differenza, quindi applicati entro limiti ragionevoli e sarai ricompensato.`,
      
    },
    {
      name: `Nove di Denari`,
      imgUrl: `../assets/images/deck/9_di_denari.png`,
      letturaPassato:`Il tuo passato è stato caraterizzato di una certa sicurezza economica. Mentre entri in un periodo di abbondanza, che sia personale, emotiva o finanziaria, cerca dei modi per condividerlo con coloro che ti hanno aiutato lungo la strada. Ricorda di riconoscere gli amici e gli altri che ti sono stati fedeli durante i momenti difficili. `,
      letturaPresente:`Il Nove di Denari rappresenta la sicurezza finanziaria, l'autosufficienza, la realizzazione e l'indipendenza. Questa carta dei Tarocchi è in grado di sostenere la fortuna e la vita di lusso ottenuta solo dopo molto duro lavoro, tempo e sacrifici. Nel presente, anche tu stai bilanciando il duro lavoro con il riposo e la ricompensa. Il Nove di Denari è un promemoria per vivere con sicurezza, agire con grazia e dare priorità ai tuoi bisogni.`,
      letturaFuturo:`Il Nove di Denari rappresenta la sicurezza finanziaria, la realizzazione e l'indipendenza. Questa carta dei Tarocchi suggerisce che ti stai preparando per maggiori risorse che presto fluiranno nella tua direzione. Mentre entri in un periodo di abbondanza, che sia personale, emotiva o finanziaria, cerca dei modi per condividerlo con coloro che ti hanno aiutato lungo la strada. Ricorda di riconoscere gli amici e gli altri che ti sono stati fedeli durante i momenti difficili.`,
     
    },
    {
      name: `Dieci di Denari`,
      imgUrl: `../assets/images/deck/10_di_denari.png`,
      letturaPassato:`Il passato ci ha regalato un'opportunità veramente molto grande, però non è detto che sapremo coglierla. Dobbiamo fare più attenzione alle nostre scelte.`,
      letturaPresente:`Il Dieci di Denari rappresenta il risultato di sforzi a lungo termine, culminati in ricchezza, abbondanza e completamento. Questa è una carta di grande successo e orgoglio e può essere un indicatore di eredità, investimenti e conforto più avanti nella vita. Ma il Dieci di Denari è tanto una carta sulla famiglia quanto sulle finanze. Questa carta dei Tarocchi rappresenta anche la ricchezza e la conoscenza che viene tramandata di generazione in generazione. È un promemoria per pensare a lungo termine e assicurarti che tutte le tue decisioni attuali ti avvicinino ai tuoi obiettivi.`,
      letturaFuturo:`Il Dieci di Denari rappresenta il risultato di sforzi a lungo termine, culminati in ricchezza, abbondanza e completamento. Questa è una carta di grande realizzazione e orgoglio e può essere un indicatore di eredità, investimenti e conforto più avanti nella vita. Ma il Dieci di Denari è tanto una carta sulla famiglia quanto sulle finanze: rappresenta anche la ricchezza e la conoscenza che vengono tramandate di generazione in generazione. Immagina la tua potenziale generosità in futuro, poiché sarai in grado di offrire molto ad altre persone.`,
      
    },
    {
      name: `Fante di Denari`,
      imgUrl: `../assets/images/deck/fante_di_denari.png`,
      letturaPassato:`Questa carta incoraggia sempre a intraprendere una ricerca per una vita migliore con azioni apparentemente semplici nell'ambiente circostante. Non sognate un incerto futuro di giustizia ed eguaglianza - cambiate il presente per creare il mondo cui aspirate.`,
      letturaPresente:`La galanteria non è la superficie, ma la natura vera del Fante di Denari. Le sue decisioni sono prudenti e la sua comprensione dell'umanità unica. Soddisfatto del suo ambiente, il Fante non ambisce a uno schema generale di valore solo teoretico. Questa carta incoraggia sempre a intraprendere una ricerca per una vita migliore con azioni apparentemente semplici nell'ambiente circostante. Non sognate un incerto futuro di giustizia ed eguaglianza - cambiate il presente per creare il mondo cui aspirate.`,
      letturaFuturo:`Il Fante di Denari porta con se per il tuo futuro, delle buone notizie sul lato economico.`,
    },
    {
      name: `Cavaliere di Denari`,
      imgUrl: `../assets/images/deck/cavaliere_di_denari.png`,
      letturaPassato:`La forza e la flessibilità sono le caratteristiche del Cavaliere di Denari. Egli agisce con intelligenza e senza una riflessione inutilmente prolungata. Di solito porta avanti i suoi affari con considerazione e soddisfazione. Solo le emozioni delicate e i sentimenti possono confonderlo qualche volta.`,
      letturaPresente:`La forza e la flessibilità sono le caratteristiche del Cavaliere di Denari. Egli agisce con intelligenza e senza una riflessione inutilmente prolungata. Di solito porta avanti i suoi affari con considerazione e soddisfazione. Solo le emozioni delicate e i sentimenti possono confonderlo qualche volta. Cogliete le occasioni. Con le giuste azioni e decisioni potete rendere il mondo migliore - il dubbio e l'esitazione non vi porteranno da nessuna parte. Tuttavia, non dovete reprimere i vostri sentimenti. Il prezzo sarebbe troppo alto.`,
      letturaFuturo:`Nel futuro incontrerai una persona di supporto per i tuoi affari, che ti aiuterà molto per il successo personale.`,
    },
    {
      name: `Regina di Denari`,
      imgUrl: `../assets/images/deck/regina_di_denari.png`,
      letturaPassato:`Sbarazzatevi dei pensieri opprimenti e dei sogni impossibili. Accettate voi stessi e gli altri per comprendere l'ambiente circostante che forgia la vostra vita. Diffondete affetto e coglietene i frutti del seme prezioso.`,
      letturaPresente:`La virtù della calma è la qualità della Regina di Denari. Ella non vive per la spettacolarità né ricerca avventure rischiose. La devozione e la partecipazione sono le sue caratteristiche. Poiché le sue emozioni sono equilibrate, è forte supporto anche per gli altri. Sbarazzatevi dei pensieri opprimenti e dei sogni impossibili. Accettate voi stessi e gli altri per comprendere l'ambiente circostante che forgia la vostra vita. Diffondete affetto e coglietene i frutti del seme prezioso.`,
      letturaFuturo:`Troverai una persona ricca in tutti i sensi, soprattutto d’animo. Una persona che ti può decisamente aiutare a trovare la felicità.`,
    },
    {
      name: `Re di Denari`,
      imgUrl: `../assets/images/deck/re_di_denari.png`,
      letturaPassato:` Re di Denari rappresenta un legame della forza del fuoco con il potere fertile ma debole della terra. La creascita lenta ma costante accompagna questo re. Soddisfatto del suo mondo di sufficienza egli raramente esprime idee creative o aspira a orizzonti più vasti.`,
      letturaPresente:`Il Re di Denari rappresenta un legame della forza del fuoco con il potere fertile ma debole della terra. La creascita lenta ma costante accompagna questo re. Soddisfatto del suo mondo di sufficienza egli raramente esprime idee creative o aspira a orizzonti più vasti. Imparate dalla pazienza e dalla perseveranza del Re di Denari se avete di mira obbiettivi di lungo periodo. Dovreste ottenere la capacità di vedere lontano poiché le preoccupazioni della vita quotidiana sono estranee al grande schema della vita.`,
      letturaFuturo:`Il Re di Denari è un uomo ricco, di potere. E' una persona con grande attitudine agli affari, un capo carismatico. Il futuro ti riserva di possedere delle cose di valore, anche non necessariamente materiali.`,
    },
    {
      name: `Asso di Spade`,
      imgUrl: `../assets/images/deck/asso_di_spade.png`,
      letturaPassato:`Nel passato hai dimostrato forza e ambizione. Senza la paura hai ottenuto la giustizia. `,
      letturaPresente:`L'Asso di Spade rappresenta il motivo sottostante o l'ideale guida. È un simbolo ottimistico di evoluzione, progresso e speranza. Questa carta si presenta spesso quando hai lasciato qualcos'altro per iniziare una nuova impresa e hai bisogno di ulteriore chiarezza o energia per andare avanti nel presente. Quindi pensa: cos'è che ti guida? L'asso di spade è una garanzia che hai la forza per gestire ciò che ti sta davanti.`,
      letturaFuturo:`L'Asso di Spade rappresenta il tuo scopo nella vita o la visione che ti guida. È un simbolo ottimista di evoluzione e progresso, speranza e vittoria. L'asso di spade in questa posizione ti consiglia di essere stabile in futuro, mentre ti avvicini a un obiettivo importante. Questo potrebbe essere il tuo momento, quindi concentrati sull'impatto. Se metti da parte le distrazioni e colpisci il tuo obiettivo, sarai ricompensato con intuizione e chiarezza.`,
    },
    {
      name: `Due di Spade`,
      imgUrl: `../assets/images/deck/2_di_spade.png`,
      letturaPassato:`Hai ritrovato la persona leale, un compagno che ti aiuterà a superare le difficoltà.`,
      letturaPresente:`Il Due di Spade è una carta decisionale. Rappresenta idee contrastanti che devono essere riconciliate prima di arrivare alla fine a una risoluzione. Quando sorge il Due di Spade, suggerisce che potresti avere a che fare con segnali contrastanti o incomprensioni nel presente, lasciandoti incerto su quale strada prendere. Per andare oltre questo stato di limbo, il Due di Spade ti consiglia di avvicinarti agli altri con franchezza.`,
      letturaFuturo:`Il Due di Spade è una carta decisionale. Rappresenta idee contrastanti che devono essere riconciliate per arrivare a un luogo armonioso. Quando il Due di Spade emerge nella tua lettura dei Tarocchi, suggerisce che potresti avere a che fare con segnali contrastanti o incomprensioni in futuro, lasciandoti incerto su quale strada prendere. Ma non permettere agli altri di spingerti oltre i tuoi confini ed evita di agire in modo impulsivo. Abbi pazienza e rimani in silenzio il più possibile mentre permetti alle cose di sistemarsi.`,
     
    },
    {
      name: `Tre di Spade`,
      imgUrl: `../assets/images/deck/3_di_spade.png`,
      letturaPassato:`Una rottura non necessariamente negativa di una relazione o di una collaborazione ti ha fatto capire quali sono le cose fondamentali nella tua vita.`,
      letturaPresente:`Il Tre di Spade è una delle carte più riconoscibili in un mazzo di Tarocchi. Questa è una carta di angoscia, separazione e dolore. Mentre l'apparizione di questa carta nella tua lettura potrebbe avvertirti di una tristezza imminente, spesso sorge quando sei già in uno stato di dolore nel presente. Sebbene sia difficile, il Tre di Spade ti incoraggia ad appoggiarti a questo dolore, a sperimentarlo e comprenderlo veramente. Muovendoti attraverso le tue emozioni, invece di evitarle, ti dai il dono della forza, della verità e della crescita.`,
      letturaFuturo:`Il Tre di Spade è una delle carte più riconoscibili in un mazzo di Tarocchi. Sebbene questa sia una carta di angoscia, separazione e tristezza, ti incoraggia ad appoggiarti a questo dolore, a sperimentarlo e comprenderlo veramente. Il Tre di Spade in questa posizione ti consiglia di far crescere una pelle più spessa. Diventa più indipendente. Separati dalle persone e dalle forze con cui non ti senti compatibile. Usa la tua creatività e immaginazione e cerca situazioni migliori, in cui la tua prospettiva abbia senso per chi ti circonda. Avvicinati a persone che possono abbracciare e apprezzare tutto ciò che hai da contribuire.`,
      
    },
    {
      name: `Quatro di Spade`,
      imgUrl: `../assets/images/deck/4_di_spade.png`,
      letturaPassato:`Il passato ti ha fatto affrontare la solitudine e con questa un conflitto interiore.`,
      letturaPresente:`Il Quattro di Spade indica che dovresti prenderti del tempo per te stesso e ritirarti in un luogo di riposo. Se vai avanti senza rilassarti o elaborare quello che stai attraversando, rischi di raggiungere uno stato di esaurimento emotivo e fisico. Il Quattro di Spade suggerisce che potresti aver bisogno di una pausa nel presente. Andrai avanti più forte, più completo e più capace se permetti a te stesso di fermarti ora e contemplare dove sei stato e dove stai andando.`,
      letturaFuturo:`Il Quattro di Spade suggerisce sentimenti di pace e quiete. Rappresenta l'atto di non fare nulla, che a volte può essere l'ultima sfida quando la società moderna ci dice che c'è sempre qualcos'altro che potremmo fare. Il Quattro di Spade è un segno che probabilmente dovrai rallentare e riposarti. Sarà un momento importante per fare un passo indietro e acquisire prospettiva, soprattutto mentre ti prepari ad affrontare un calvario o un altro grande evento in futuro: avrai bisogno di tempo per raccogliere le tue forze e centrare le tue energie.`,
     
    },
    {
      name: `Cinque di Spade`,
      imgUrl: `../assets/images/deck/5_di_spade.png`,
      letturaPassato:`Una grave perdita ti ha fatto stare in agitazione e con questo hai perso la razionalità e la tranquillità.`,
      letturaPresente:`Il Cinque di Spade è una carta che rappresenta la tensione tra vincere e perdere. Ti chiede di esaminare il valore di un conflitto che stai affrontando nel presente. Se vinci una discussione ma perdi amici, hai davvero vinto? Quando il Cinque di Spade emerge nella tua lettura dei Tarocchi, pensa a lungo e intensamente a ciò per cui stai combattendo e scegli le tue battaglie con saggezza. Oppure, se ti rendi conto di non avere quello che serve per tenere il passo con un combattimento in corso, rifletti su ciò che devi ottenere per alzarti più forte la prossima volta. Il Cinque di Spade ti ricorda di pensare prima di agire.`,
      letturaFuturo:`Il Cinque di Spade è una carta di tensione tra vincere e perdere. Ti chiede di esaminare il valore di un conflitto che dovrai affrontare in futuro. Se vinci una discussione ma perdi amici, hai davvero vinto? Cerca di non essere troppo veloce ad arrabbiarti o a saltare alle conclusioni. Solo perché gli altri possono avere un senso pessimistico o egoista del mondo, la loro realtà non deve minare la tua. Non ha senso lottare o competere con loro. La tua sfida ora è imparare come eludere il confronto ed evocare una risposta più evoluta dalle persone. Per lo meno, sii risoluto nel fissare dei limiti per te stesso.`,
      
    },
    {
      name: `Sei di Spade`,
      imgUrl: `../assets/images/deck/6_di_spade.png`,
      letturaPassato:`Il passato ti ha obbligato di fare una scelta che ti ha generato ansia ed irrequietezza.`,
      letturaPresente:`La carta dei Tarocchi del Sei di Spade spesso implica l'uscita da una situazione difficile. Allontanarsi può essere doloroso, generando paura o rimpianto nel presente. Tuttavia, per andare avanti nella tua vita, riconosci che devi anche lasciare qualcosa alle spalle. Il Sei di Spade è un messaggio che sostiene la crescita personale; è un promemoria che, alla fine, è sempre necessario un temporaneo senso di perdita per permetterti di cogliere qualcosa di nuovo.`,
      letturaFuturo:`La carta dei Tarocchi del Sei di Spade spesso implica l'uscita da una situazione difficile. Allontanarsi è spesso doloroso e potresti ritrovarti a provare paura o rimpianto in futuro. Per andare avanti nella tua vita, però, devi lasciare qualcosa alle spalle. Il tempo è essenziale: hai visto il quadro generale, quindi è necessario agire. È un dono speciale essere in grado di navigare in circostanze in rapido mutamento e imprevedibili, e una volta che inizi l'azione, gli altri ti saranno grati per il tuo pensiero chiaro e i tuoi riflessi rapidi.`,
      
    },
    {
      name: `Sette di Spade`,
      imgUrl: `../assets/images/deck/7_di_spade.png`,
      letturaPassato:`E' il fine di una vecchia strada. Dovrai affrontare un nuovo progetto che richiede molte energie.`,
      letturaPresente:`Il Sette di Spade rappresenta un inganno, anche se non necessariamente in modo negativo. Nel suo senso positivo, questa carta ti incoraggia a cercare modi unici per andare avanti. Quando emerge nella tua lettura dei Tarocchi in questo senso, è un promemoria per lavorare in modo più intelligente, non di più. Tuttavia, questa carta è anche indice di tradimento e potrebbe indicare che al momento sei vittima dei segreti o della manipolazione di qualcun altro. In questo caso, dovresti stare attento ai lupi travestiti da agnello ed evitare di credere a qualsiasi cosa senza prima fare alcune domande.`,
      letturaFuturo:`Il Sette di Spade rappresenta la preparazione mentale, sviluppata provando e visualizzando i risultati desiderati. Questa carta ti incoraggia a cercare modi unici per andare avanti: è un promemoria per lavorare in modo più intelligente, non di più. In fondo sai già cosa deve succedere. Quindi, continua a immaginare il successo. Anche se il tuo percorso cambia e le circostanze intorno a te oscurano la tua vista, mantieni il risultato desiderato chiaro e nitido nella tua mente. Disciplina te stesso per rimanere concentrato e supererai tutte le circostanze avverse.`,
     
    },
    {
      name: `Otto di Spade`,
      imgUrl: `/../assets/images/deck/8_di_spade.png`,
      letturaPassato:`Il tuo passato è stato molto dinamico. Hai ottenuto dei buoni risultati, a patto che hai lavorato profondamente mettendo tutte le tue energie nel progetto che dovevi portare a compimento.`,
      letturaPresente:`La carta Otto di Spade rappresenta quei momenti della tua vita in cui sembra che non ci sia via d'uscita. Ti senti intrappolato, legato o bloccato nei tuoi pensieri? L'Otto di Spade ricorda che la via d'uscita è in effetti attraverso la tua mente. Che siano le tue paure, supposizioni o mentalità, tutto ciò che ti trattiene è autoimposto. Il messaggio dell'Otto di Spade è quello di aprire la tua mente a una nuova prospettiva, altrimenti rischi di rimanere bloccato dove sei.`,
      letturaFuturo:`La carta Otto di Spade rappresenta quei momenti della tua vita in cui sembra che non ci sia via d'uscita. In futuro, potresti sentirti intrappolato, legato o bloccato nei tuoi pensieri. Con l'Otto di Spade in questa posizione, tuttavia, ti viene ricordato che ogni battuta d'arresto che sperimenterai è significativa e risveglia un senso di rinnovato sforzo. Questa è una situazione in cui si impara facendo; non esiste una formula. Ma un atteggiamento di mentalità aperta e ottimista ti servirà meglio di fronte a eventuali sviluppi sorprendenti. Cogli l'occasione con fiducia nelle tue capacità.`,
     
    },
    {
      name: `Nove di Spade`,
      imgUrl: `../assets/images/deck/9_di_spade.png`,
      letturaPassato:`Nel passato hai saputo destreggiarti ottimamente tra le insidie. Mantieni anche per il futuro questa tua caratteristica.`,
      letturaPresente:`Il Nove di Spade è una carta sull'ansia e la paura. Stai perdendo il sonno - a volte letteralmente - tenendoti occupato con le preoccupazioni? Potresti sentirti impotente nel presente, come se avessi perso il controllo di te stesso e dei tuoi pensieri. Quando viene visualizzata la carta Nove di Spade, però, è un promemoria che gran parte del tuo stress è frutto della tua mente. Preoccuparsi non aiuterà la tua situazione.`,
      letturaFuturo:`Il Nove di Spade è una carta sull'ansia e la paura. In futuro, potresti sentirti impotente, come se avessi perso il controllo di te stesso e dei tuoi pensieri. Ma questa carta ti consiglia di affrontare le tue paure e riconoscere come ti hanno limitato. Per motivi di sicurezza, potresti aver abbassato inutilmente i tuoi standard. Forse hai negoziato creatività e gioia per evitare di essere sfidato. Questi tipi di compromessi non funzionano mai. Fortunatamente, questo potrebbe essere il momento per ridurre le tue perdite. Se riesci a farlo, guarderai indietro a questo momento della tua vita come a un punto di svolta, quando ti sei liberato di un pesante fardello che ti stava appesantendo.`,
      
    },
    {
      name: `Dieci di Spade`,
      imgUrl: `../assets/images/deck/10_di_spade.png`,
      letturaPassato:`Nel passato hai avuto il massimo livello di desiderio di primeggiare, di conquistare, di guadagnare a tutti i costi. E questo ti ha portato ad affrontare sempre più nuove sfide.`,
      letturaPresente:`Il Dieci di Spade rappresenta la finalità. Il limite è stato raggiunto, una linea è stata superata e non si può tornare indietro. Questa può essere percepita come una tragica perdita nel tuo presente, ma abbi speranza, poiché spesso porta con sé un senso di rilascio e chiusura. Non c'è più ambiguità perché l'attesa è finita. Quando il Dieci di Spade compare nella tua lettura dei Tarocchi, sai che puoi lasciarlo andare e andare avanti.`,
      letturaFuturo:`Il Dieci di Spade rappresenta la finalità. Il limite è stato raggiunto, una linea è stata superata e non si può tornare indietro. Questa può essere percepita come una tragica perdita nel tuo futuro, ma spesso porta con sé un senso di rilascio e chiusura. Il Dieci di Spade in questa posizione consiglia di mantenere un profilo basso e di tenerti il più al sicuro possibile fino a quando il dramma, o anche un possibile trauma, non si risolverà. Di fronte a tale imprevedibilità, è meglio proteggersi e aspettare. A volte, una svolta estrema degli eventi funge da valvola di sfogo della pressione per tutta l'energia inespressa e irrisolta che si era accumulata.`,
      
    },
    {
      name: `Fante di Spade`,
      imgUrl: `../assets/images/deck/fante_di_spade.png`,
      letturaPassato:`Il Fante di Spade è un simbolo forte di attività. Come membro della famiglia delle Spade anche il Fante è dominato dal potere del pensiero razionale. Egli è sempre efficace nelle sue azioni, spesso agisce impetuosamente e senza troppa considerazione.`,
      letturaPresente:`Il Fante di Spade è un simbolo forte di attività. Come membro della famiglia delle Spade anche il Fante è dominato dal potere del pensiero razionale. Egli è sempre efficace nelle sue azioni, spesso agisce impetuosamente e senza troppa considerazione. Nelle questioni di sentimenti dovete seguire il Fante di Spade solo con grande prudenza. Egli è incline alla vendetta e manca di sensibilità. Se - d'altra parte - avete la necessità di un avanzamento pratico l'ausilio del Fante di Spade è prezioso.`,
      letturaFuturo:`Nel futuro devi stare attento alle soddisfazioni provenienti da azioni scorrette. Proverai una forte attrazione proibita nei confronti di un’altra persona. Queste azioni sono contro la morale o il senso comune, ma molto appaganti proprio per la loro rarità e per il gusto del proibito.`,
    },
    {
      name: `Cavaliere di Spade`,
      imgUrl: `../assets/images/deck/cavaliere_di_spade.png`,
      letturaPassato:`L'incarnazione della mente umana prende il nome del Cavaliere di Spade. I suoi pensieri sono forgiati dalla logica, i suoi progetti sono attentamente pianificati e messi in atto. Questo Cavaliere è ricco di idee e propositi, ma spesso rimane intrappolato dal pensiero, incapace di agire.`,
      letturaPresente:`L'incarnazione della mente umana prende il nome del Cavaliere di Spade. I suoi pensieri sono forgiati dalla logica, i suoi progetti sono attentamente pianificati e messi in atto. Questo Cavaliere è ricco di idee e propositi, ma spesso rimane intrappolato dal pensiero, incapace di agire. Interpretate il significato del Cavaliere di Spade in relazione alle altre carte. Se l'insieme è favorevole i suoi poteri indicano che i piani e i progetti cui aspirate si svilupperanno secondo i vostri disegni. Altrimenti la sola velleità e l'inerzia saranno il suo contributo alla lettura.`,
      letturaFuturo:`Nel futuro hai a tuo fianco una persona pronta a prendere le tue difese, agendo anche in modo molto duro contro i possibili ostaccoli della vita.`,
    },
    {
      name: `Regina di Spade`,
      imgUrl: `../assets/images/deck/regina_di_spade.png`,
      letturaPassato:`La Regina di Spade è il simbolo della riflessione chiara e profonda della mente femminile. È sicura di sé e non può essere ingannata con facilità. In ogni situazione ella mantiene l'equilibrio e preserva la sua dignità.`,
      letturaPresente:`La Regina di Spade è il simbolo della riflessione chiara e profonda della mente femminile. È sicura di sé e non può essere ingannata con facilità. In ogni situazione ella mantiene l'equilibrio e preserva la sua dignità. Cercate di comprendere al di là della superficie visibile. Indagate le motivazioni e i sentimenti di coloro che vengono in contatto con voi. Una comprensione profonda deve dominare le vostre azioni, prevalga la gioia o la delusione.`,
      letturaFuturo:`Il futuro ti riserva di incontrare una donna leale e combattiva. Questa donna è da prendere come esempio e di cui seguire i consigli se vogliamo migliorare la nostra situazione. `,
    },
    {
      name: `Re di Spade`,
      imgUrl: `../assets/images/deck/re_di_spade.png`,
      letturaPassato:`L'acume e la vitalità sono gli attributi del Re di Spade. La sua forte mente è libera. Nessuno è in grado di influenzare il suo giudizio ponderato. Quindi in lui il potere del pensiero si associa al desiderio di azione.`,
      letturaPresente:`L'acume e la vitalità sono gli attributi del Re di Spade. La sua forte mente è libera. Nessuno è in grado di influenzare il suo giudizio ponderato. Quindi in lui il potere del pensiero si associa al desiderio di azione. Il Re di Spade è un alleato potente. Seguitelo per la sua strada fatta di pensiero indipendente e realizzate i vostri progetti. Se questo Re dovesse mai apparire come nemico non dovete sottovalutarlo. Preparatevi a contrattaccare i suoi ingegnosi piani.`,
      letturaFuturo:`Il futuro ti farà incontrare una persona importante, un possibile alleato, persona di stimolo su di noi che ci motiva ad agire.`,
    },
    {
      name: `Asso di Bastoni`,
      imgUrl: `../assets/images/deck/asso_di_bastoni.png`,
      letturaPassato:`Sei una persona molto creativa ed intuitiva e questo ti ha aiutato nel passato alla creazione nuove idee che ti hanno dato dei risultati sul lungo termine.`,
      letturaPresente:`L'Asso di Bastoni simboleggia un atto fondamentale o un passo fatidico che scatenerà gli eventi che ti porteranno verso l'obiettivo desiderato. Nel presente, potresti sperimentare l'inizio di un nuovo progetto creativo o avventura. L'asso di bastoni indica un momento di ispirazione e motivazione e sei incoraggiato a fare un passo avanti.`,
      letturaFuturo:`L'Asso di Bastoni simboleggia un atto fondamentale o un passo fatidico che darà inizio a una nuova passione o avventura. In questa posizione, questa carta incoraggia il movimento energico verso l'attività. Preparati e preparati a entrare in azione. Potrebbe essere necessario fare presto la tua mossa in futuro, quindi assicurati di essere completamente preparato. Fidati del tuo istinto e sii spontaneo. Quando si presenterà l'occasione, vorrai coglierla senza esitazione. Quindi accelera i tuoi sensi: c'è eccitazione nell'aria, supporta le tue ambizioni immediate.`,
    },
    {
      name: `Due di Bastoni`,
      imgUrl: `../assets/images/deck/2_di_bastoni.png`,
      letturaPassato:`Nel passato hai avuto una persona importante su cui poter contare, di supporto. E questo ti ha aiutato a superare tutti gli ostacoli. `,
      letturaPresente:`Il Due di Bastoni rappresenta il secondo passo di un'avventura o di un viaggio creativo, quando è il momento di pianificare una vera linea d'azione. Nel presente, questo significa che potresti essere fuori dalla tua zona di comfort mentre prendi una decisione necessaria. Il Due di Bastoni ti invita ad essere realistico, ma anche a guardare a lungo termine e a pensare in grande.`,
      letturaFuturo:`Il Due di Bastoni rappresenta il secondo passo di un'avventura o di un viaggio creativo, quando è il momento di pianificare una vera linea d'azione. In questa posizione, questa carta ti consiglia di rispettare il tuo processo decisionale. Invece di criticare te stesso per l'indecisione, apprezza le varie implicazioni delle possibili scelte. Evita di spingerti a prendere un impegno. Ad un certo punto avrai abbastanza informazioni: il processo decisionale sarà finito e la scelta sarà chiara.`,
     
    },
    {
      name: `Tre di Bastoni`,
      imgUrl: `../assets/images/deck/3_di_bastoni.png`,
      letturaPassato:`Nel passato hai avuto una persona molto cara che ti proteggeva in qualsiasi situazione. Infatti, i tre bastoni formano una sorta di scudo a nostra protezione.`,
      letturaPresente:`Il Tre di Bastoni simboleggia un equilibrio interiore che ti permette di provare ottimismo riguardo a nuovi progetti creativi o avventure. Hai dubbi sull'assunzione di impegni? Sii paziente e fiducioso nel presente. Il Tre di Bastoni è un promemoria per essere aperti e fiduciosi nelle proprie idee e capacità, per cercare opportunità e per pensare in grande.`,
      letturaFuturo:`Il Tre di Bastoni simboleggia un equilibrio interiore che ti permetterà di provare ottimismo riguardo a nuovi sforzi creativi o avventure in futuro. In questa posizione, questa carta ti consiglia di agire rapidamente e con forza su un'idea o un desiderio che hai sentito. Questa carta suggerisce il tempismo ideale, quindi è una buona idea rimanere nel momento e rispondere ai tuoi istinti. Ogni fibra del tuo essere potrebbe dire che c’è una grande opportunità, anche se chi ti circonda non è così convinto. Ma non c'è niente da perdere nell'assumersi un rischio e sarà un grande momento della tua crescita. Fai la tua mossa e risolvi i dettagli più tardi.`,
      
    },
    {
      name: `Quatro di Bastoni`,
      imgUrl: `../assets/images/deck/4_di_bastoni.png`,
      letturaPassato:`Nel passato hai avuto dei piccoli successi appaganti che ti hanno stimolato ad andare avanti per la tua strada.`,
      letturaPresente:`Il Quattro di Bastoni è la carta del lavoro di squadra, con l'obiettivo di unirsi per creare qualcosa di positivo. Nel presente, potresti gettare le basi per una nuova avventura o impresa creativa. Il Quattro di Bastoni è un promemoria per celebrare grandi vittorie e piccole vittorie mentre getti le basi.`,
      letturaFuturo:`Il Quattro di Bastoni è la carta del lavoro di squadra, è l'obiettivo di unirsi per creare qualcosa di positivo per il futuro. In questa posizione, questa carta supporta le tue idee buone, produttive ed evolutive. Concentrati sulla connessione con gli altri: usa il tuo carisma e il tuo potere per attrarre persone che la pensano allo stesso modo in modo da poter aumentare la tua sfera di influenza: più puoi ottenere, meglio è. Man mano che condividi più liberamente ciò che hai in mente, gli altri vedranno sè stessi nella tua visione e otterrai naturalmente approvazione e assistenza.`,
     
    },
    {
      name: `Cinque di Bastoni`,
      imgUrl: `../assets/images/deck/5_di_bastoni.png`,
      letturaPassato:`Il tuo passato si è rivelato molto instabile con situazioni di grandi tensioni, ma con la tua tenaccia sei riuscito a superarle.`,
      letturaPresente:`Il Cinque di Bastoni simboleggia le lotte causate dall'ambizione e dalla competizione. Nel presente, potresti sperimentare conflitti, perdite o qualche altra forma di avversità su un progetto personale o creativo. Anche quando il tuo unico motivo è essere migliore di te stesso, il Cinque di Bastoni ti incoraggia a ridurre al minimo il numero di ego feriti mentre procedi.`,
      letturaFuturo:`Il Cinque di Bastoni simboleggia le lotte causate dall'ambizione e dalla competizione. In futuro, potresti sperimentare conflitti, perdite o avversità in un progetto appassionato o in uno sforzo creativo. Il Cinque di Bastoni in questa posizione ti incoraggia a trovare la tua naturale ambizione, anche quando sei stanco o scoraggiato. Identifica per cosa combatteresti e per cosa sei appassionato. Sforzati di mettere al centro de tuo tempo ciò che ti dà energia.`,
     
    },
    {
      name: `Sei di Bastoni`,
      imgUrl: `../assets/images/deck/6_di_bastoni.png`,
      letturaPassato:`Il passato ti ha riservato una situazione generale positiva per il tuo agire con delle condizioni esterne favorevoli. Questo ti ha aiutato a mettere delle buone basi per il futuro.`,
      letturaPresente:`Il Sei di Bastoni rappresenta il rispetto e il riconoscimento per gli sforzi che hai fatto. Nel presente, probabilmente stai riuscendo in un progetto personale o creativo, superando le sfide e dimostrando chiarezza sotto pressione. Il Sei di Bastoni è un messaggio per credere in te stesso, tenere la testa alta e accettare le lodi con grazia.`,
      letturaFuturo:`Il Sei di Bastoni rappresenta il rispetto e il riconoscimento per gli sforzi che hai compiuto. In questa posizione, questa carta consiglia di agire in base alle tue convinzioni più forti. Di solito la prima persona che si distacca dal pensiero convenzionale è quella che definisce una nuova tendenza. Quindi continua ad articolare e definire te stesso alla luce della torcia che stai portando. Ciò ispirerà gli altri a concepire alcune nuove idee proprie e potresti ritrovarti a diventare un leader in futuro. Date le circostanze, presto ci sarà un forte bisogno di una nuova voce e visione, quindi fai la tua mossa. Quelli intorno a te che sono pronti per il cambiamento sosterranno la tua leadership.`,
     
    },
    {
      name: `Sette di Bastoni`,
      imgUrl: `../assets/images/deck/7_di_bastoni.png`,
      letturaPassato:`Nel passato sei riuscito a sbloccarti da una brutta situazione, trovando cosi delle sorprese positive inattese.`,
      letturaPresente:`Il Sette di Bastoni rappresenta qualcuno che ha spesso successo ed è generalmente realizzato, a volte fino a un punto di compiacimento. Nel presente, potresti cogliere un'opportunità in modo aggressivo o resistere a qualche forma di pressione su un progetto creativo. Quando il Sette di Bastoni emerge in una lettura dei Tarocchi, tuttavia, è importante ricordare che avere successo non ti rende invincibile, né ti rende immune all'errore.`,
      letturaFuturo:`Il Sette di Bastoni rappresenta qualcuno che ha spesso successo ed è generalmente realizzato. In questa posizione, questa scheda suggerisce che il tuo futuro includerà un momento per le massime prestazioni. Spingiti oltre i tuoi soliti limiti, pensando in termini più ampi e aumentando la tua natura competitiva. Il tempo e gli sforzi spesi nella preparazione potrebbero ripagarti profumatamente. Potresti essere quello che volteggia proprio sopra le teste di coloro che pensavano di poterti superare. Quindi vai oltre la retorica e le sfide verbali. Presto sarai in un momento per dimostrare cosa ti mette al di sopra degli altri dimostrandolo in azione.`,
     
    },
    {
      name: `Otto di Bastoni`,
      imgUrl: `../assets/images/deck/8_di_bastoni.png`,
      letturaPassato:`Equilibrio è la parola che definisce il tuo passato. Nonostante le azioni la situazione era ferma.`,
      letturaPresente:`L'Otto di Bastoni è una carta di lavoro e cambiamento: non puoi controllare cosa ti sta succedendo ora o quanto velocemente sta accadendo. Nel presente, gli eventi relativi a un progetto personale o creativo si stanno svolgendo rapidamente. L'Otto di Bastoni ti ricorda che il cambiamento è necessario, anche se devi sfidare te stesso per tenere il passo.`,
      letturaFuturo:`L'Otto di Bastoni è una carta di lavoro e cambiamento, quando non puoi controllare cosa ti sta accadendo o quanto velocemente sta accadendo. In questa posizione, questa carta ti consiglia di imparare tutto ciò che puoi dalle recenti esperienze di successo. Prendi nota di ciò che ha funzionato e non ha funzionato prima. Sentiti sicuro della tua libertà di lanciarti in nuove direzioni e non aggrapparti solo ai successi passati e ai risultati precedenti.`,
      
    },
    {
      name: `Nove di Bastoni`,
      imgUrl: `../assets/images/deck/9_di_bastoni.png`,
      letturaPassato:`Seguite il percorso intrapreso. Il Nove di Bastoni vi indica che la forza necessaria per il successo è con voi. Non abbiate timore e non stimate troppo le vostre preoccupazioni. Nei temi emotivi la Forza suggerisce sicurezza e libertà.`,
      letturaPresente:`Il Nove di Bastoni indica quasi invariabilmente la necessità di riposarsi, riparare le ferite e ripristinare l'energia. Nel presente, potresti sentire il bisogno di concederti del tempo prima di affrontare gli ostacoli creativi. Quando la carta Nove di Bastoni compare nella tua lettura dei Tarocchi, è un invito a rimanere forte e ad attingere alle tue riserve nascoste di energia.`,
      letturaFuturo:`Il Nove di Bastoni indica quasi invariabilmente un bisogno di riposo, un po’ di tempo per riparare le ferite e ripristinare l'energia. In questa posizione, questa carta suggerisce che avrai fatto tutto il possibile per portare una situazione a una conclusione positiva. L'intera gamma di possibilità sarà esaurita e tutta la creatività disponibile sarà già stata utilizzata. Quindi potrebbe essere un buon momento per esprimere le tue preoccupazioni e prenderti del tempo per riposarti. Non ci sarà più nulla da offrire a meno che non ripristini l'energia. Prendi una pausa. Nessuno potrà biasimarti per questo.`,
      
    },
    {
      name: `Dieci di Bastoni`,
      imgUrl: `../assets/images/deck/10_di_bastoni.png`,
      letturaPassato:`In passato hai dato il massimo della forza per portare a compimento le tue azioni, dimostrando cosi una grande energia e dinamismo.`,
      letturaPresente:`Il Dieci di Bastoni appare in una lettura dei Tarocchi quando non sei in grado di riposare e devi arrivare alla fine. Nel presente, potresti trovarti a fare uno sforzo totale su un progetto personale o creativo che richiede tutto ciò che hai. Non importa quanto siano difficili le cose, stai facendo quello che serve per raggiungere il completamento. Ma il Dieci di Bastoni ti ricorda che la prossima volta, cerca di non affrontare così tanto in una volta.`,
      letturaFuturo:`Il Dieci di Bastoni appare in una lettura dei Tarocchi quando non sei in grado di riposare, anche se stai lottando per arrivare alla fine. In futuro, potresti dover entrare in profondità in te stesso e identificare i tuoi impulsi più puri. Questa carta ti incoraggia a ricordare lo spirito semplice della tua giovinezza e tutto l'idealismo che conteneva. Mentre lo fai, consenti al tuo lato ottimista di vedere cosa c'è di buono nel mondo. Guarda oltre le sfide, le delusioni e le frustrazioni che tendi a vedere così facilmente. Quando risveglierai il tuo spirito, inizierai a sperimentare la vita quotidiana con un senso di gioia e di scopo di nuovo.`,
     
    },
    {
      name: `Fante di Bastoni`,
      imgUrl: `../assets/images/deck/fante_di_bastoni.png`,
      letturaPassato:`Il Fante di Bastoni è giovane e pieno di forza. Egli rappresenta il desiderio che si risveglia, la forza e la vivacità. Il suo punto debole è la tendenza a decisioni affrettate. Spesso le sue azioni possono essere scusate perché frutto della giovanile inesperienza e della precipitosità.`,
      letturaPresente:`Il Fante di Bastoni è giovane e pieno di forza. Egli rappresenta il desiderio che si risveglia, la forza e la vivacità. Il suo punto debole è la tendenza a decisioni affrettate. Spesso le sue azioni possono essere scusate perché frutto della giovanile inesperienza e della precipitosità. Se desiderio di azione ed emozioni forti si incontrano, il Fante di Bastoni non può essere lontano. Arrendetevi alla tentazione se vi sentite sicuri e forti. Se avvertite il pericolo o vi assalgono dubbi siate tuttavia prudenti. Giocare col fuoco può essere pericoloso.`,
      letturaFuturo:`Nel futuro conoscerai una persona più giovane e positivamente impetuosa. Possibili errori d'inesperienza.`,
    },
    {
      name: `Cavaliere di Bastoni`,
      imgUrl: `../assets/images/deck/cavaliere_di_bastoni.png`,
      letturaPassato:`Il percorso è più importante per il coraggioso Cavaliere di Bastoni della destinazione finale. Con audacia senza pari egli accetta le sfide più grandi. Ahimè, poiché spesso egli è distratto, rischia di non portare a termine ciò che ha intrapreso con promettente entusiasmo.`,
      letturaPresente:`Il percorso è più importante per il coraggioso Cavaliere di Bastoni della destinazione finale. Con audacia senza pari egli accetta le sfide più grandi. Ahimè, poiché spesso egli è distratto, rischia di non portare a termine ciò che ha intrapreso con promettente entusiasmo. Sfruttate i vostri talenti e usateli con motivazione. Non dovreste mai dimenticare che vi siete posti una meta meritevole di essere raggiunta altrimenti potreste rimanere fermi. Non fatevi gioco delle emozioni altrui solo perché ne avete facile opportunità.`,
      letturaFuturo:`Il futuro ti riserva di incontrare una persona protettiva nei vostri confronti, pronta a prendere le vostre difese concretamente. Successo meritato.`,
    },
    {
      name: `Regina di Bastoni`,
      imgUrl: `../assets/images/deck/regina_di_bastoni.png`,
      letturaPassato:`Traboccante della pura virtù dell'elemento fuoco, la Regina di Bastoni è un simbolo arcaico dell'istinto femminile e della forza. Il suo temperamento la porta a picchi di emozione e sensazione. Ella segue la sua intuizione e si fida solamente del suo giudizio.`,
      letturaPresente:`Traboccante della pura virtù dell'elemento fuoco, la Regina di Bastoni è un simbolo arcaico dell'istinto femminile e della forza. Il suo temperamento la porta a picchi di emozione e sensazione. Ella segue la sua intuizione e si fida solamente del suo giudizio. Vivete con il potere meraviglioso della Regina di Bastoni. Se vi appare, potete sperimentare grandi emozioni e godere della più piena soddisfazione. Non accettate facilmente le decisioni degli altri e non vi scoraggiate se avete fede in voi stessi.`,
      letturaFuturo:`La Regina di Bastoni rappresenta una donna eccezionale, carismatica e di forte influsso. Il futuro ti riserva dei aiuti inaspettati ed supporto tangibile dall’esterno.`,
    },
    {
      name: `Re di Bastoni`,
      imgUrl: `../assets/images/deck/re_di_bastoni.png`,
      letturaPassato:`La passione governa il carattere di questa potente carta. Questo re persegue i suoi disegni senza riserve. Spesso le sue idee sono irrazionali e dominate da forti emozioni. Il Re dei Bastoni accetta ogni sfida e lotta fino a che il premio è nelle sue mani.`,
      letturaPresente:`La passione governa il carattere di questa potente carta. Questo re persegue i suoi disegni senza riserve. Spesso le sue idee sono irrazionali e dominate da forti emozioni. Il Re dei Bastoni accetta ogni sfida e lotta fino a che il premio è nelle sue mani. Lasciatevi andare - sentite il calore e la passione che c'è in voi. Non vi arrendete, dovreste invece essere sicuri di voi stessi e fieri. Se le vostre aspettative non sono irragiungibili, il Re di Bastoni vi accompagnerà fino alla vetta.`,
      letturaFuturo:`Il Re di Bastoni rappresenta il potere acquisito col duro lavoro. Uomo di animo buono, tollerante nonostante la propria forza. E' un uomo di successo, maturo ed intelligente, sicuro di sé al punto da non dover ostentare nulla. Ti aspetta un futuro pieno di conquiste.`,
    }
  ];
  