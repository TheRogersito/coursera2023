let llista={
    htmlCss:`<ul>
    <li><button onClick="canviResta(html.intro)">Intro</button></li>
    <li><button onClick="canviResta(html.cssSelector)">CSS selectors</button></li>
    <li><button onClick="canviResta(html.cssLayout)">CSS layouts</button></li>
    <li><button onClick="canviResta(html.efectes)">Efectes</button></li>
    <li><button onClick="canviResta(html.formularis)">Formularis</button></li>
    <li><button onClick="canviResta(html.media)">Media</button></li>
    <li><button onClick="canviResta(html.debugging)">Debugging</button></li>
</ul>`,
    http:`<ul>
    <li><button onClick="canviResta(http.http)">Intro</button></li>
    <li><button onClick="canviResta(http.tags)">Tags</button></li>
    <li><button onClick="canviResta(http.css)">CSS</button></li>
    <li><button onClick="canviResta(http.bootstrap)">Bootstrap</button></li>
    <li><button onClick="canviResta(http.react)">React introducció</button></li>
</ul>`,
    javas:`<ul>
    <li><button onClick="canviResta(javas.intera)">Interactivitat</button></li>
    <li><button onClick="canviResta(javas.errors)">Errors</button></li>
    <li><button onClick="canviResta(javas.testejat)">Testejat</button></li>
</ul>`,
    git:`<ul>
    <li><button onClick="canviResta(versi.intro)">Introducció a control de versions</button></li>
    <li><button onClick="canviResta(versi.git)">Git i Github</button></li>
    <li><button onClick="canviResta(versi.comandes)">Comandes de Unix</button></li>
</ul>`,
    disseny:`<ul>
    <li><button onClick="canviResta(disseny.intro)">Introducció a disseny</button></li>
    <li><button onClick="canviResta(disseny.aplicat)">Disseny aplicat</button></li>
    <li><button onClick="canviResta(disseny.lamevaui)">La meva UI</button></li>
    <li><button onClick="canviResta(disseny.evaluacio)">Evaluació de disseny</button></li>
</ul>`,
    react:`<ul>
    <li><button onClick="canviResta(react.intro)">React intro</button></li>
    <li><button onClick="canviResta(react.nav)">Navegació</button></li>
    <li><button onClick="canviResta(react.estilat)">Ús i estilat</button></li>
    <li><button onClick="canviResta(react.events)">Events</button></li>
    <li><button onClick="canviResta(react.concep)">Conceptes avançats</button></li>
    <li><button onClick="canviResta(react.jsx)">Jsx</button></li>
    <li><button onClick="canviResta(react.hooks)">Hooks</button></li>
</ul>`,
    final:`<ul>
    <li><button onClick="canviResta(final.intro)">Introducció a entrevistes</button></li>
    <li><button onClick="canviResta(final.dades)">Estructures de dades</button></li>
    <li><button onClick="canviResta(final.algo)">Algoritmes</button></li>
</ul>`
}
let html={
    intro:`<div class="row"><h1>HTML i CSS avançat</h1><p>En aquest mòdul, s'extén el coneixement sobre HTML i CSS. Sobretot en les següents àrees:</p><ul><li>Ús de HTML en el món real</li><li>Inputs d'usuari i formularis</li>
            <li>Elements media(video, audio...)</li>
            <li>Molt més de CSS</li>
            <li>Interactivitat amb CSS</li>
            <li>Efectes i animacions</li>
            <li>Testejat i debugging amb el navegador</li>
        </ul>
        <div class="col-12 col-lg-6">
            <h2>Resum d'etiquetes de HTML</h2>
            <p>Revisitem les etiquetes de html més bàsiques:</p>
            <ul>
                <li>header: conté la part de dalt de la plana, logo, títol i tal</li>
                <li>nav: sol contenir els links de la web</li>
                <li>footer: la part de baix de la plana, copyrightm links secundaris, olítica de privacitat i tal</li>
                <li>main: secció principal de la web, la del mig</li>
                <li>aside: secció d'algún costat de la web fora del main</li>
                <li>article: bloc de contingut semi-independent</li>
                <li>section: secció que sol estar dins un article per a separar contingut</li>
                <li>figcaption: descripció d'una imatge</li>
                <li>menu: el mateix que ul</li>
                <li>p: paràgraf de text</li>
                <li>a: enllaç</li>
                <li>br: efecte de "intro" en un text(nova línea)</li>
                <li>time: el contingut és una data o hora o els dos</li>
                <li>code: el contingut és codi de computadora</li>
                <li>data: el contingut és dades que pot llegir una màquina</li>
                <li>audio: es fa servir per a posar arxius d'àudio a la plana</li>
                <li>canvas: renderitza contingut en 2D o 3D</li>
                <li>embed: conté un element que proveeix una aplicació externa, com un reproductor de vídeo o alguna altre cosa</li>
                <li>iframe: conté una pàgina web nestejada</li>
                <li>video: es fa servir per a posar arxius de vídeo a la plana</li>
                <li>picture: fa com el "img" però requereix un "source" per a funcionar</li>
                <li>source: marca l'arxiu que es veurà amb el "audio", "video" o "picture"</li>
            </ul>
        </div>
        <div class="col-12 col-lg-6">
            <h2>Metadata</h2>
            <p>La metadata és informació que hi ha al html que no apareix visualment. S'inclou dins d'etiquetes "meta" dins de "head". Serveixen per a millorar l'experiència i tenir millors resultats per a buscadors</p>
            <p>Les etiquetes "meta" solen tenir dos propietats: name i content. Name seria el tipus de contingut que comunica i content les dades en si. Les metadades més destacades serien</p>
            <ul><li>description: ofereix una descripció breu de la web</li><li>title: títol de la web</li><li>author: indica l'autor de la web</li><li>language: indica l'idioma de la web</li><li>robots: indicacions per als buscadors quan valoren la pàgina</li><li>rating: és per a indicar el tipus d'audiència a la que va dirigida la web</li><li>copyright: especifica el copyright</li><li>viewport: especifíca l'àrea de la web depenent de la mida del navegador que fa servir l'usuari</li></ul><p>Hi ha un tipus d'etiqueta "meta" especial que s'especialitza en donar informació a xarxes socials. Requereixen que es fagin servir les 4 alhora i tenen les propietats "property" i "content". Són aquestes:</p><ul><li>og:title: defineix el títol de la pròpia web</li><li>og:type: indica el tipus d'arxiu, que pot ser "website", "video", "music" o "article"</li><li>og:url: especifica la url de la pròpia web per a que la xarxa social ho utilitzi</li><li>og:image: és la imatge que es veurà quan la web pròpia sigui compartida</li></ul><p>A part d'aquestes propietats hi ha d'altres opcionals, per exemple "og:description", "og:locale" o "og:site_name"</p><p>Aquestes etiquetes "meta" especials construeixen les social media cards, que són tarjetes que apareixen a xarxes socials i que redireccionen a la pàgina web a la que fan referència</p><h2>Dissenys estàndar</h2><p>Hi ha moltes pàgines web, i moltes d'elles fan servir un disseny similar en quant a estructura. Mira algunes estructures estàndar:</p><ul><li>Top navbar: és l'idea de combinar el "nav" i el "header" fent que títol, buscardor intern i enllaços, entre d'altres, es mostrin en una sola línea</li><li>Carousel: És un element de la plana que va rotant entre diferents continguts un cop passa cert temps</li><li>Disseny de blog: En aquest disseny, els continguts estan posats en caixes i el tamany de la caixa depèn de l'importància del que conté</li><li>Dashboard: se sol utilitzar quan l'usuari ha de canviar de continguts ràpidament. L'idea seria posar l'accés a diverses planes a un aside</li></ul></div></div>`
,
cssSelector:`<div class="row">
<h1>Selectors CSS</h1>
<p>Els selectors CSS són la part del css que diu on s'aplicaràn les edicions establertes. Els més utilitzats són els d'element, de id i de classe</p>
<div class="col-12 col-lg-6">
    <h2>Altres selectors de CSS</h2>
    <p>A part dels que hem vist hi ha selectors de css més complicadets, serien aquests:</p>
    <ul>
        <li>Per tenència de propietat: es fa seleccionant certs elements que tenen certa propietat, independentment del valor de la propietat. Exemple: a[class]{}; això afectaria a totes les etiquetes "a" que tinguin una propietat class</li>
        <li>Per propietat amb valor aproximat: se selecciona elements que tenen una propietat que conté un valor que conté els caràcters especificats. Exemple: a[href*="google"]{}; això afectaria a les etiquetes "a" que tinguin la propietat href i que el valor d'aquest href contingui la paraula "google" on sigui</li>
        <li>Per propietat de valor exacte: se selecciona elements que tenen una propietat amb un valor en específic. Exemple: a[href="www.google.com"]{}; afectaria a les etiquetes "a" amb la propietat "href" que tingui el valor concret "www.google.com"</li>
        <li>Per propietat amb valor que comença: se selecciona elements que tenen una propietat amb un valor que comença amb uns caràcters específics. Exemple: a[href^="www."]{}</li>
        <li>Per propietat amb valor que acaba: se selecciona elements que tenen una propietat amb un valor que acaba amb uns caràcters específics. Exemple: a[href$=".com"]{}</li>
        <li>Per element repetit: l'element seleccionat és el que té certa posició dins una llista d'elements dins un mateix element parent. Exemple: li:nth-child(2){}; afectaria a cada segon "li" d'un conjunt de "li"</li>
        <li>Universar: afecta a tots els elements. Exemple: *{}; afecta a absolutament tots</li>
        <li>Per grup: és combinar una llista de normes CSS a diferents selectors. Per exemple: a, p{}; afectaria a totes les etiquetes "a" i "p"</li>
    </ul>
    <h2>Combinacions de selectors</h2>
    <p>En el CSS podem combinar selectors per a aconseguir selectors encara més específics. Es poden combinar de 4 maneres diferents:</p>
    <ul>
        <li>Selectors per descendència: seleccionem elements específics que siguin descendents d'un altre element específic. Exemple: #carta h2{}; Se selecciona tots els elements h2 dins d'una etiqueta que té de id "carta"</li>
        <li>Selectors child: és semblant al selector per descendència, però només afecta als descendents directes. Exemple: #par > h2{}; Afectaria només als h2 que siguin descendents directes de l'etiqueta de id "par", si hi ha un h2 dins d'una altre etiqueta no es veurà afectat</li>
        <li>Selectors siblings: selecciona els elements que estiguin dins d'una mateixa etiqueta i que estiquin escrits després. Exemple: h1 ~ p{}; Això afecta als elements "p" dins de la mateixa etiqueta on està un element "h1" i que estiguin escrits després d'aquest "h1"</li>
        <li>Selectors siblings adjacents: és com l'anterior però només selecciona un element, el més proper. Exemple: h1 + p{}; Seleccionaria l'element "p" que va després d'un element "h1" sense tocar els altres</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Pseudoclasses</h2>
    <p>Les pseudoclasses són classes dins del CSS que només apliquen sota certes circumstàncies. S'escriuen així: selector:pseudo-classe{};. Aquí alguns exemples:</p>
    <ul>
        <li>hover: aplica quan l'usuari té el ratolí a sobre sense clicar</li>
        <li>active: aplica quan l'usuari està fent clic sobre l'element</li>
        <li>disabled i enabled: actúa sobre botons en un formulari, quan estan marcats o sense marcar</li>
        <li>checked i indeterminat: actúa sobre checkboxes en formulari, quan estan o no marcades</li>
        <li>valid i invalid: també en formularis, quan les dades posades són vàlides o no</li>
        <li>optional i required: també en formularis, aplica a elements requerits o no requerits</li>
        <li>first-of-type i last-of-type: en un conjunt d'etiquetes en comú, afecta a la primera o última etiqueta</li>
        <li>link: només és vàlida amb enllaços, diu com han de ser aquests enllaços sense visitar</li>
        <li>visited: també actúa sobre enllaços, però només sobre els ja visitats</li>
        <li>not(): aplica als elements que no compleixin cert requisit. No requereix selector inicial però en pot tenir</li>
        <li>empty: elements sense cap etiqueta a dins</li>
    </ul>
    <h2>Pseudoelements</h2>
    <p>Els pseudoelements són semblants a les pseudoclasses però les normes css establertes actúen només sobre certs continguts dins d'una etiqueta i no sobre tota l'etiqueta en si. S'escriuen així: selector::pseudo-element{};. Alguns d'ells són: </p>
    <ul>
        <li>first-letter: afecta a la primera lletra de l'element</li>
        <li>first-line: afecta a la primera línea de l'element</li>
        <li>selection: aplica quan es selecciona amb el ratolí</li>
        <li>marker: canvia els comptadors de les llistes, hem de posar una propietat "content" que serà la figura que el substitueix. En aquesta mateixa plana està aplicat l'efecte</li>
        <li>before i after: posa un contingut abans o després, segons el pseudoelement. Aquest contingut ha d'estar a la propietat "content"</li>
    </ul>
</div>
</div>`
,
cssLayout:`<div class="row">
<h1>CSS Layouts</h1>
<p>Les layouts CSS són maneres de mostrar el contingut html en pantalla, o en altres paraules, el display. Hi ha diversees maneres de fer-ho:</p>
<ul>
    <li>Flexbox: proporciona un disseny flexible, però només respon en una dimensió: columnes o files</li>
    <li>Grid: és semblant al flexbox, amb la diferència que crea una taula bidimensional</li>
</ul>
<div class="col-12 col-lg-6">
    <h2>Flexbox</h2>
    <p>Quan les caixes actúen en flexbox, miren primer si tenen espai en l'eix horitzontal. Si no el tenen, passen a la línea següent. Hi ha 4 propietats principals per a alinear les caixes en el flex:</p>
    <ul>
        <li>justify-content: és per a alinear les caixes en l'eix horitzontal. Podem fer que estiguin a la dreta, esquerra o al mig. Si a més posem la propietat "flex-wrap: wrap" les caixes s'adaptaràn a l'amplada de la pantalla</li>
        <li>align-items: alinea les caixes en l'eix horitzontal. Pot tenir aquests valors: flex-end, flex-start, center i stretch.</li>
        <li>align-self: s'utilitza en una o diverses caixes en concret, sense afectar la majoria. Serveix per a alinear les caixes horitzontalment de manera selectiva</li>
        <li>flex: posa la caixa en mode grid i ha de tenir 3 valors: flex-grow(créixer segons espai), flex-shrink(encongir-se segons espai) i flex-basis(com el flex agafa espai)</li>
    </ul>
    <p>Normelment, el flexbox es fa servir per a un número reduït de caixes que actúen en conjunt, com una barra de cerca, un nav o una galería d'imatges</p>
    <p>Amb el flex, podem crear gràfic de dades, es fiuen flexcharts, mira l'exemple:</p>
    <div class="container" style="display: flex; align-items: stretch; flex:1; justify-content: flex-start; text-align: center;">
        <div class="rada" style="flex-basis: 15%; background-color: red;">15</div>
        <div class="rada" style="flex-basis: 27.5%; background-color: blue; color:white">27.5</div>
        <div class="rada" style="flex-basis: 14%; background-color: yellow;">14</div>
        <div class="rada" style="flex-basis: 31.5%; background-color: green; color:white">31.5</div>
        <div class="rada" style="flex-basis: 12%; background-color: pink;">12</div>
    </div>
</div>
<div class="col-12 col-lg-6">
    <h2>Unitats de mida</h2>
    <p>En el css hi ha diverses maneres numèriques de medir i definir l'espai:</p>
    <p>Medicions de valor absolut:</p>
    <ul>
        <li>Q: quarts de milímetre</li>
        <li>mm: milímetres</li>
        <li>cm: centímetres</li>
        <li>in: polzada</li>
        <li>px: píxels</li>
    </ul>
    <p>Medicions de valor relatiu:</p>
    <ul>
        <li>em: tamany de la lletra respecte l'element que la conté</li>
        <li>rem: tamany de la lletra respecte l'element arrel</li>
        <li>vw: percentatge de l'amplada de la pantalla</li>
        <li>vh: percentatge de l'alçada de la pantalla</li>
        <li>vmin: percentatge de la mida més petita de la pantalla</li>
        <li>vmax: percentatge de la mida més gran de la pantalla</li>
        <li>%: percentatge respecte l'element que la conté</li>
    </ul>
</div>
<div>
    <h2>Grids</h2>
    <p>El grid és una manera diferent de mostrar el contingut en pantalla, ho fa creant una taula invisible que serà on es col·loquen les caixes</p>
    <p>Per a crear una taula grid, es fan servir les següents propietats css:</p>
    <ul>
        <li>display: ha de tenir el valor "grid". Determina que el contenidor està en mode grid</li>
        <li>grid-template-columns: determina la mida i quantitat de columnes. Es pot definir en px o fr, que fr seria la mida relativa respecte altres columnes</li>
        <li>grid-template-rows: fa el mateix que grid-template-columns però amb les files</li>
        <li>grid-gap: defineix l'espai entre les cel·les del grid. Podem fer que sigui només amb files o culumnes amb grid-row-gap o grid-column-gap</li>
        <li>grid-auto-columns i grid-auto-rows: es defineix un número de columnes o files de manera automàtica, però nosaltres definim la mida</li>
        <li>repeat(): és un valor que pot tenir grid-template-rows o grid-template-columns. Determina quantitat i mida comuna de files o columnes. S'utilitza així: repeat(4, 75px)</li>
    </ul>
</div>
</div>`,
efectes:`<div class="row">
<h1>Efectes CSS</h1>
<p>Els efectes són petites animacions o cosmètics en una web causats per una acció. Un efecte que ja has vist seria el "hover". Els efectes poden ajudar a destacar coses importants i millorar l'estètica, però també poden distrure l'usuari i enlentir la web</p>
<div class="col-12 col-lg-6">
    <h2>Efectes de text</h2>
    <p>Hi ha diferents efectes que podem aplicar a textos serien aquests:</p>
    <ul>
        <li>text-overflow: determina què fa el text quan no hi cap sencer a la caixa que el conté. "ellipsis" fa que quan el text acabi en punts suspensius i aparegui sencer quan es fa un hover, "scroll" fa que surti una barra de desplaçament interior, "clip" fa el mateix que "ellipsis" sense els punts suspensius</li>
        <li>writing-mode: fa que el text canviï d'orientació. Fem que sigui vertical amb "vertical-rl"</li>
        <li>word-wrap: determina com les paraules passen a la següent línea. "break-word" fa que només hi hagi una paraula a cada línea i que hi hagi tantes línies com paraules</li>
        <li>text-shadow: posa una ombra al text. El com apareix l'ombra ho posem amb 4 variables: coordenada x, coordenada y, radi de l'ombra i color. Podem posar més d'una ombra alhora</li>
    </ul>
    <h2>Transformacions i transicions</h2>
    <p>Les transformacions són canvis en l'estil de certs elements fent servir el css i les transicions són el temps que duren aquestes transformacions. Per a aplicar aquestes característiques fem servir l'atribut "transform", que seria la transformació que fa l'element i a l'atribut "transition" determinem el temps que triga la transformació en fer-se</p>
    <p>Las transicions però, no són exclusives a l'atribut "transform", es poden aplicar a qualsevol canvi provocat per una pseudoclasse, com pots comprovar al requadre de baix</p>
    <div id="exp"></div>
</div>
<div class="col-12 col-lg-6">
    <h2>Animacions</h2>
    <p>Les animacions amb css generalment es fan amb la propietat "animation", que té diferents paràmetres que la defineixen. Els 4 primers paràmetres serien en nom de l'animació, la durada, quan deixa de repetir-se i delay</p>
    <p>Després d'establir la propietat "animation" als elements que cal, s'ha de definir quina és l'animació que volem. Ho fem amb una nova regla css que serà així: @keyframes nom_de_l'animació{from {inici_de_l'animació}; to {final_de_l'animació}}</p>
    <div id="esponja"><p>ඞ</p></div>
    <h2>Tècnica mixin</h2>
    <p>Per últim, la tècnica mixin és la de combinar unes quanter normes css en un bloc per a cridar-les en múltiples instàncies en la resta del codi css, seria com guardar-les en un objecte. La sintaxi seria aquesta:</p>
    <p>@mixin nomRegles{}; element{@include nomRegles};</p>
</div>
</div>`,
formularis:`<div class="row">
<h1>Inputs i formularis</h1>
<p>Els inputs són elements HTML que requereixen que l'usuari hi introdueixi certes dades, i els formularis són un conjunt d'inputs que demanen dades relacionades entre si</p>
<div class="col-12 col-lg-6">
    <h2>Validació</h2>
    <p>Els formularis necessiten sistemes de validació que verifiquin si les dades són correctes. Hi ha dos tipus de validació:</p>
    <ul>
        <li>Validació per client: són validacions que es poden fer des del propi navegador, per a aplicar-les podem fer que cada input tingui un type específic i així el client no podrà posar unes dades que no poden ser. Un exemple seria intentar posar una URL a un input type email</li>
        <li>Validació per servidor: són validacions que requereixen certa comunicació amb el servidor, com consultar si s'intenta posar un email existent a la base de dades, passa la validació per client perquè és un email vàlid però el servidor detecta que ja existeix, per tant, no pot procedir</li>
    </ul>
    <p>Per a la validació per client, com hem comentat abans, podem fert que els inputs tinguin types específics, que serien aquests:</p>
    <ul>
        <li>Button: és una etiqueta en si, un botó clickejable</li>
        <li>Checkbox: el quadradet que es pot marcar o desmarcar</li>
        <li>Radio: el conjunt de rodonetes de les quals només podem marcar-ne una. Per a definir un conjunt indepenent, hem de fer que tots els input radio estiguin dins d'una etiqueta fieldset. Cada input ha de tenir un value, un name que sigui el mateix que el id del fieldset i si volem una opció marcada per defecte, l'etiqueta input que volguem ha d'acabar amb la paraula checked. Si posem cada input dins un label serà més fàcil de marcar</li>
        <li>Submit: És el botó que enviarà les dades al servidor un cop estigui finalitzat</li>
        <li>Text: requereix text, així de simple</li>
        <li>Password: també requereix text però el text en qüestió es mostra invisible</li>
        <li>Date: demana una data</li>
        <li>Datetime-local: demana una data, hora i minuts</li>
        <li>Email: requereix un correu electrònic vàlid</li>
        <li>File: demana pujar un arxiu</li>
        <li>Hidden: defineix un valor que no posa l'usuari però que es puja al servidor igualment</li>
        <li>Image: És com el submit, però ha de tenir un src amb una imatge</li>
        <li>Number: requereix un número. Pot tenir un mínim i un màxim</li>
        <li>Range: és com el Number però es mostra en forma de barra</li>
        <li>Reset: és un botó que si es clica el formulari torna als valors per defecte</li>
        <li>Search: és com el text però potser és estilat diferent</li>
        <li>Time: demana hora i minuts</li>
        <li>Tel: en principi demana un número de telèfon, però no valida bé. Per a validar millor es posa un pattern</li>
        <li>Url: requereix una URL vàlida</li>
        <li>Week: demana un número de setmana i any</li>
        <li>Month: demana un número de mes i any</li>
    </ul>
    <p>Per a fer que la validació per client sigui el màxim d'eficient, hem de posar "required" al final de les etiqueta input per a que siguin camps requerit i així ens estalviem enviar una petició http innecessària. També podem afegir minlengths i maxlengths per a que certs camps tinguin un número de caràcters en un rang específic</p>
    <p>Tingues en compte que podem comunicar a l'usuari que ha posat malament certes dades amb el css, fent servir la pseudoclasse input:focus:invalid</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Més formes d'inputs</h2>
    <p>Hi ha altres formes d'inputs o tècniques que poden ser útils, mira algunes:</p>
    <p>Si posem una propietat value a un input, serà el valor que per defecte tindrà el formulari però fent només això no es mostrarà, per a fer-ho hem de fer una etiqueta output just a sota de la d'input amb el valor en qüestió</p>
    <p>En un range, si volem que el número canviï a mida que movem la barra, dins de l'etiqueta input hem de posar la propietat oninput="this.nextElementSibling.value = this.value"</p>
    <p>En cas que volguem fer que un input sigui una llista de molts elements, el que hem de fer és un input sense type però amb una list i a sota una etiqueta datalist que tingui de id el mateix que la list del input. Dins de l'etiqueta datalist posem cada opció amb l'etiqueta option, que cada una ha de venir amb un value</p>
    <h2>Finalització del formulari</h2>
    <p>Un cop posades les dades al formulari, es fa clic a un botó per a que el navegador fagi alguna cosa amb les dades, aquí veurem de què es tracta</p>
    <p>Quan es fa un submit, el mètode http especificat al form s'executa, que pot ser un POST o un GET. Normalment es fa servir un HTTPS POST ja que és la manera més segura de transmetre les dades</p>
    <p>Per a decidir com actua el formulari un cop es fa clic al submit, s'han de definir certes propietats a l'etiqueta form, action i method. A action posem l'adreça del lloc on seran enviades les dades, que sol ser "/login" i a method, el mètode http amb el qual seran enviades les dades, que sol set "post"</p>
    <h2>Elements del formulari</h2>
    <p>Per acabar, aquí tens un resum dels elements o etiquetes que es poden fer servir en un formulari:</p>
    <ul>
        <li>input: l'etiqueta estàndar per a posar dades, els type els hem vist abans</li>
        <li>label: És per a descriure l'input que va a continuació. Ha de tenir una propietat for que tingui el mateix valor que la id del input que descriu</li>
        <li>select: Fa una llista d'opcions desplegable, cada opció va dins d'una etiqueta option</li>
        <li>textarea: És un requadre en el que es pot posar un text llarg</li>
        <li>button: un botó. L'acció que executa es posa a la propietat onclick</li>
        <li>fieldset: agrupa elements relacionats dins el formulari</li>
        <li>legend: Defineix un títol del fieldset</li>
        <li>datalist: especifica una llista d'opcions predefinides d'un input. A diferència d'un select, l'usuari pot posar un valor diferent dels predeterminats</li>
    </ul>
</div>
</div>`,
media:`<div class="row">
<h1>Elements media</h1>
<p>Els elements media són elements del html que permeten reproduir contingut de vídeo o d'àudio. Normalment els formats de vídeo suportats són els .mp4, .webm i .ogg, i els d'àudio són .mp3, .wav i .ogg</p>
<div class="col-12 col-lg-4">
    <h2>Etiquetes de vídeo</h2>
    <p>Les etiquetes de vídeo permeten l'implementació i l'ús d'arxius de vídeo. L'etiqueta és "video" i necessita una etiqueta source a dins amb dos atributs: "src", que seria l'adreça de l'arxiu i "type" hem de posar "video/format(mp4, webm... el que sigui)". Si posem l'atribut "controls" a l'etiqueta de video, farem que l'usuari pugui controlar-lo i si posem l'atribut "muted" estarà silenciat per defecte</p>
</div>
<div class="col-12 col-lg-4">
    <h2>Etiquetes d'àudio</h2>
    <p>Les etiquetes de video s'implementen igual que les d'àudio però fent servir l'etiqueta "audio". Podem fer que l'àudio es repeteixi infinitament posant la propietat loop dins de l'etiqueta "audio"</p>
</div>
<div class="col-12 col-lg-4">
    <h2>Etiquetes d'imatge</h2>
    <p>Les etiquetes d'imatge a diferència de les de vídeo i àudio, no es tanquen; tenen l'atribut "src" elles mateixes sense necessitar una altre etiqueta "source". Per a millorar l'accessibilitat, podem posar un atribut "alt" amb un títol de la foto. Per a encara més accessibilitat, hem de posar l'etiqueta "img" abans d'una etiqueta "figcaption" que seria el peu de la foto i els dos dins d'una etiqueta "figure"</p>
    <p>Els formats d'imatge suportats pels navegadors són: .apng, .avif, .gif, .jpeg/.jpg, .png, .svg, .webp</p>
</div>
<div class="col-12 col-lg-6">
    <h2>iFrames</h2>
    <p>Els iFrames són etiquetes que són literalment peces d'altres webs que permeten l'execució d'aquestes altres webs de manera reduïda a la web en la que les implementem. Els atributs principals de iframe són:</p>
    <ul>
        <li>allow: Prohibeix permisos de la web anclada.Exemple: allow="camera 'none'; microphone 'none"</li>
        <li>sandbox: preveu o permet descàrreges i pop-ups. Exemple: allow-downloads, allow-forms</li>
        <li>name: el nom del iFrame: Exemple: name="closca"</li>
        <li>height i width: defineixen la mida del iFrame en px en alçada i amplada</li>
        <li>referrerpolicy: política per a comunicar a la web anclada qui l'està carregant. Pot tenir 3 valors:</li>
        <ul>
            <li>no-referrer: l'informació no serà compartida</li>
            <li>origin: l'informació serà compartida</li>
            <li>strict-origin: l'informació serà compartida només si es fa servir el mateix protocol de seguretat(http o https)</li>
        </ul>
        <li>src: origen de la web anclada. Exemple: src="google.com"</li>
        <li>loading: diu si el iFrame es carega quan la web en si es carregada(eager) o quan es mostra en pantalla(lazy)</li>
        <li>title: el títol del iFrame</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Elements canvas</h2>
    <p>Els elements canvas són un tipus especial de media que permet renderització en temps real. Hi ha 4 principalment:</p>
    <ul>
        <li>GIF i webP: són animacions que no donen cap interactivitat</li>
        <li>2DCanvas: permet animacions bidimensionals a la web amb interactivitat. Se sol fer servir per a fer videojocs en 2D i animacions</li>
        <li>WebGL: permet animacions 2D més complicades i videojocs en 3D perquè té accés a la GPU de l'ordinador</li>
    </ul>
</div>
</div>`,
debugging:`<div class="row">
<h1>Debugging</h1>
<p>El debugging és el procés de correcció del codi per a que quedi lliure d'errors</p>
<div class="col-12 col-lg-6">
    <h2>Tipus d'errors</h2>
    <p>Generalment hi ha 3 tipus d'errors que es cometen durant l'escriptura del codi:</p>
    <ul>
        <li>Skill: són errors en "l'ortografia" del codi com no posar un ";", no tancar un parèntesi...</li>
        <li>Rule: són errors que apareixen quan no se segueixen les normes generals de codi, com posar un número com a primer caràcter del nom d'una class del html</li>
        <li>Knowledge: no són errors en si, més aviat complicacions en el codi per la falta de cert coneixement o mètode</li>
    </ul>
    <p>Una manera d'evitar errors en css és fer servir el menor nombre d'atributs possible o tenir en compte l'especificitat de les normes css, evitant posar selectors massa específics. També hem d'intentar recordar posar un ";" després de cada atribut.</p>
    <h2>Tractament d'errors en css</h2>
    <p>Normalment el css no detecta errors en el seu codi. Per a detectar-los quasi sempre hem de dependre d'una eina externa anomenada "linter tool" que detecta males praxis i patrons problemàtics en el codi</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Css específic de navegadors</h2>
    <p>Cada navegador d'internet té les seves pròpies normes css per defecte, com certs marges, tipografia de la lletra, tamany de títols, etc...</p>
    <p>També hi ha diferències entre navegadors en quant a compatibilitat, ja que alguns navegadors no suporten certs atributs css en algunes actualitzacions. Afortunadament hi ha algunes llibreries que faciliten la compatibilitat entre navegadors com Modernizer, Reset.css i Normalize.css</p>
    <h2>Testejat de UI</h2>
    <p>El testejat de UI és el provar com funciona la UI en cert moment. El mètode més comú de testejat és el cross device testing, que prova la mateixa UI en diferents dispositius per a comprovar la seva flexibilitat i fluidesa. El navegador en si té eines per a facilitar aquest tipus de testejat</p>
</div>
</div>`
}
let http={
    http:`<div class="row">
    <div class="col-12">
        <h1>HTTP</h1>
        <p>HTTP és una acció que executa un client cap a un servidor o al revés. Una acció HTTP està composada per el mètode, el recurs o info i la versió. Mira l'exemple: GET /home.html HTTP/1.1</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Mètodes</h2>
        <p>El mètode indicaria l'objectiu de l'acció HTTP</p>
        <ul>
            <li>GET: el client solicita info de la web</li>
            <li>POST: el client penja info a la web</li>
            <li>PUT: el client modifica info de la web</li>
            <li>DELETE: el client esborra info de la web</li>
            <li>PATCH: el client modifica un recurs de la web(no s'indica diferència amb el PUT)</li>
        </ul>
        <p>El recurs seria l'arxiu sobre el qual actuem i la versió és la versió en qüestió del HTTP, que normalment és 1.1 o 2.0</p>
        <h2>Codis d'estatus</h2>
        <p>Els codis d'estatus són la resposta que dóna el servidor a una acció HTTP, es divideixen en diverses categories, mira-les:</p>
        <ol>
            <li>1XX: Informació</li>
            <ul>
                <li>100: El servidor ha rebut els headers i està esperant al body</li>
                <li>101: El client ha solicitat canviar protocols i el servidor ha acceptat</li>
            </ul>
            <li>2XX: Èxit</li>
            <ul>
                <li>200: L'acció ha tingut complet èxit</li>
                <li>201: S'ha creat el recurs que es volia al servidor(per exemple, un nou arxiu)</li>
                <li>202: L'acció s'ha acceptat però encara no està completada</li>
                <li>204: L'acció s'ha acceptat però no hi ha contingut</li>
            </ul>
            <li>3XX: Redirecció</li>
            <ul>
                <li>301: El recurs solicitat s'ha mogut permanentment i serà la solicitud redirigida</li>
                <li>302: La solicitud es redirigeix al lloc correcte</li>
            </ul>
            <li>4XX: Error de client</li>
            <ul>
                <li>400: Solicitud incorrecte o dades enviades massa grans</li>
                <li>401: El client s'ha d'autenticar per a accedir</li>
                <li>403: El client no té permisos per a accedir al recurs</li>
                <li>404: El recurs solicitat no s'ha trobat</li>
                <li>405: El mètode utilitzat no és suportat pel servidor</li>
            </ul>
            <li>5XX:</li>
            <ul>
                <li>500: Error genèric del propi servidor, alguna cosa no ha anat bé</li>
                <li>502: El servidor web ha rebut una resposta invàlida per part del servidor de l'aplicació</li>
                <li>503: El servidor web no pot processar la solicitud</li>
            </ul>
        </ol>
    </div>
    <div class="col-12 col-lg-6">
    <h2>Headers en solicitud</h2>
    <p>Els headers són informació que facilita el client sobre si mateix en la acció HTTP, mira l'exemple:</p>
    <ul class="invisibleDots">
        <li>Host: example.com</li>
        <li>User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</li>
        <li>Accept: */*</li>
        <li>Accept-Language: en</li>
        <li>Content-type: text/json</li>
    </ul>
    <p>Aquest header té aquestes 5 categories, que vindrien a ser: </p>
    <ul>
        <li>Host: especifica des d'on es solicita el recurs</li>
        <li>User-Agent: especifica informació de l'aplicació que solicita les dades, sol ser el sistema operatiu, versió i nom de l'aplicació</li>
        <li>Accept: indica quin tipus de contingut acceptarà el client</li>
        <li>Accept-Language: és l'idioma de preferència del client</li>
        <li>Content-type: és el tipus de contingut transmès al request body</li>
    </ul>
        <h2>Body en solicitud</h2>
        <p>El request body és el contingut que s'envia quan es fa un PUT o un POST. mira l'exemple:</p>
        <ul class="invisibleDots">
            <li>PUT /users/1 HTTP/1.1</li>
            <li>Host: example.com</li>
            <li>Content-type: text/json</li>
            <li> </li>
            <li>{"key1":"value1"}</li>
        </ul>
        <h2>Headers en resposta</h2>
        <p>Són com els headers en solicitud però en resposta(duh). Aquest cop, n'hi ha 4:</p>
        <ul>
            <li>Date: indica el moment en el qual s'ha generat la resposta</li>
            <li>Server: Descriu el programari del servidor web</li>
            <li>Content-Length: és la llargada de la resposta</li>
            <li>Content-Type: és el tipus de recurs retornat al client</li>
        </ul>
        <p>Un header en resposta seria similar a això:</p>
        <ul class="invisibleDots">
            <li>Date: Fri, 11 Feb 2022 15:00:00 GMT+2</li>
            <li>Server: Apache/2.2.14 (Linux)</li>
            <li>Content-Length: 84</li>
            <li>Content-Type: text/html</li>
        </ul>
        <h2>Body en resposta</h2>
        <p>El body en resposta seria les dades que retorna el servidor al client, així de simple</p>
    </div>
    <h2>Altres protocols</h2>
    <td>A internet hi ha uns quants protocols</td>
    <table class="table">
        <tr>
            <td>DHCP</td>
            <td>Assigna una IP al client</td>
        </tr>
        <tr>
            <td>DNS</td>
            <td>tradueix les IPs dels servidors en URLs</td>
        </tr>
        <tr>
            <td>IMAP</td>
            <td>Desa els mails del client en un servidor</td>
        </tr>
        <tr>
            <td>SMTP</td>
            <td>Permet l'enviament de emails</td>
        </tr>
        <tr>
            <td>POP</td>
            <td>Fa el mateix que el IMAP, però esborra els mails un cop el client els ha descarregat</td>
        </tr>
        <tr>
            <td>FTP</td>
            <td>Permet l'enviament, la recepció, i el esborrar arxius d'un servidor web des d'un cient</td>
        </tr>
        <tr>
            <td>SSH</td>
            <td>És una manera segura de connectar un client amb un servidor</td>
        </tr>
        <tr>
            <td>SFTP</td>
            <td>Funciona com el FTP però és segur</td>
        </tr>
    </table>
</div>`,
css:`<div class="row">
<h1>CSS</h1>
<p>El css és per a decorar i estilar la web, se sol aplicar posant les dades del css en un document .css a part</p>
<div class="col-12 col-lg-6">
    <h2>Bloc de declaració</h2>
    <p>El bloc de declaració és un bloc en el qual posem els estils que volem aplicar i de nom té l'element que rebrà aquest estil, mira l'exemple</p>
    <p>
        h2{<br>
            color: red;<br>
        }
    </p>
    <p>En aquest cas, tots els elements h2 tindrien aplicat l'efecte color:red</p>
    <h3>Parts del bloc de declaració</h3>
    <ul>
        <li>Selector: a l'exemple anterior seria el h2, indica l'element que rebrà els efectes del bloc</li>
        <li>Declaracions: a l'exemple anterior seria el color:red, però en poden ser més. Cada efecte està composat per una propietat i un valor (propietat color, valor red)</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Tipus de selectors</h2>
    <p>Podem fer que el css apliqui els estils a més d'un element alhora, per a fer-ho hem de fer servir el selector que ens interessi:</p>
    <ul>
        <li>Per etiqueta HTML: posant el nom de l'etiqueta sola, fem que el bloc afecti a totes les etiquetes que tinguin aquest nom, per exemple tots els p: p{}</li>
        <li>Per classe: podem aplicar una classe a tots els elements HTML que volguem i amb el css seleccionar la classe en concret, per exemple tots el elements de la class caixa: .caixa{}</li>
        <li>Per ID: les IDs són propietats que només es poden aplicar a un element en concret del HTML, al css podem fer un bloc que només afecti a aquest element, per exemple l'element de id loginDret: #loginDret{}</li>
        <li>Per combinació: la combinació es fa quan volem que l'efecte s'apliqui a un grup reduït d'una classe, per exemple tots els p de la classe textpetit: p.textpetit{}</li>
        <li>Per descendència: l'efecte seria aplicat específicament a certs elements dins d'altres elements, per exemple tots els h2 dins de l'element d'id pag4: #pag4 h2</li>
        <li>Per descendent directe: funciona similar a l'anterior però sense afectar elements més recursius, per exemple tots els p que estiguin directament dins de l'element d'id plana2: #plana2 > p</li>
        <li>Pseudoclasses: l'efecte seria aplicat depenent d'una acció com passar el ratolí per sobre o fer un clic, per exemple fer un clic a un h1: h1:active{}</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Propietats de color i text</h2>
    <h3>Color</h3>
    <p>Per a representar el color hi ha diverses maneres, les veurem per sobre:</p>
    <ul>
        <li>RGB(A): nivell de vermell, verd i blau(de 0 a 255), amb un quart número opcional que seria opacitat(de 0 a 1)</li>
        <li>HSL: nivell de color(0 vermell, 120 verd i 240 blau), saturació(en %) i brillantor(en %)</li>
        <li>Hexadecimal: semblant al RGB, però representat amb un valor hexadecimal</li>
        <li>Predefinits: hi ha alguns números per defecte del css, com red, aqua, gold, green, maroon i molts més</li>
    </ul>
    <h3>Text</h3>
    <p>Aquí hi ha alguns exemples de com podem decorar text:</p>
    <ul>
        <li>Color: seria el color del text, la propietat es diu "color" i el valor es defineix com hem vist a l'apartat anterior</li>
        <li>Font: pot definir la font i la mida del text, les propietats es diuen "font-family" per a la font(per exemple Times New Roman) i "font-size" que es defineix numeralment</li>
        <li>Transform: defineix si el text està en majúscules, minúscules i tal, la propietat es diu "text-transform" i el valor pot ser "uppercase", "lowercase", "capitalize" i "none"</li>
        <li>Decoration: és per a decorar el text amb un subrallat, la propietat es diu "text-decoration" i pot tenir fins a 4 valors que serien on és la línea(underline, overline o line-through), el seu color, l'estil(solid, double, dotted, dashed o wavy) i gruixudesa, definida amb valor numèric</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Block contra Inline</h2>
    <p>Els block level elements són elements que ocupen tota l'amplada de la plana, mentre que els inline elements tenen una amplada més reduïda i poden tenir altres elements als costats</p>
    <p>Alguns block level elements són: div, form, h1, h2, h3, h4...</p>
    <p>Alguns inline elements són: a, img, input, label, b, i, em, span...</p>
    <p>Podem canviar la categoria dels elements amb el css, per a fer-ho hem d'aplicar la propietat "display" amb el valor "block" o "inline" segons el que ens interessi</p>
    <h2>Alineament</h2>
    <p>Per a alinear text, hem de posar la propietat "text-align" que pot tenir el valor left, right, center o justify</p>
    <p>Per a alinear un div, hem de fer que el margin sigui auto si el volem centrar o float left o right si el volem a algun costat</p>
</div>
</div>`,
bootstrap:`<div class="row">
<div class="col-12">
    <h1>Llibreries</h1>
    <p>Abans de veure què és el bootstrap, hem d'entendre el concepte d'una llibreria, que seria un conjunt de codi creat per a ser compartit i que molta gent el fagi servir</p>
    <p>La llibreria més famosa de css és el Bootsrap, adjuntat a aquesta pàgina per a que es pugui veure de què és capaç, mira el botó d'abaix com a exemple</p>
    <button type="button" class="btn btn-primary">Botó de prova</button>
    <p>Aquest botó està estilat fent servir codi del bootstrap, lo únic que hem fet ha sigut aplicar la classe corresponent</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Disseny responsiu</h2>
    <p>El disseny responsiu és l'idea d'adaptar el disseny de la web al tamany de la pantalla, es suporta sobretot amb 3 subidees</p>
    <ul>
        <li>Flexible grids: defineix el contingut de la plana en columnes que s'adapten a l'amplada de la pantalla segons percentatge</li>
        <li>Imatges fluides: consistiria en adaptar el tamany d'una imatge segons l'element que la conté, fent que mai sobresurti</li>
        <li>Media queries: són selectors especials del css que fan que certes propietats només apliquin quan hi ha cert tamany de pantalla, orientació o relació d'aspecte</li>
    </ul>
    <p>Els breakpoints serien punts dels media queries en els quals la web passa d'un estil a un altre</p>
</div>
<div class="col-12 col-lg-6">
    <h1>Bootstrap</h1>
    <p>Per a crear una web senzilla amb el Bootstrap, hem de fer un doc html que tingui com a referència l'arxiu de bootstrap, ja sigi local o online</p>
    <p>A continuació, hem de fer servir les classes ja definides al bootstrap creant elements amb aquestes classes(com container, row, column...), mira l'exemple</p>
</div>
<div class="col-12 col-lg-9">
    <h3>Noms</h3>
    <p>Taula</p>
    <p>Una cosa plana, 4 potes</p>
    <img src="taula.jpg" alt="Taula" class="img-fluid"/>
    <p>Cadira</p>
    <p>Dues coses planes, 4 potes</p>
    <img src="cadira.png" alt="Cadira" class="img img-fluid"/>
</div>
<div class="col-12 col-lg-3">
    <h3>Preus</h3>
    <table class="table">
        <tr>
            <td>Taula</td>
            <td>100€</td>
        </tr>
        <tr>
            <td>Cadira</td>
            <td>25€</td>
        </tr>
    </table>
</div>
<div class="col-12 col-lg-6">
    <h2>Estils al Bootstrap</h2>
    <p>Hi ha classes del bootstrap dissenyades per a afectar segons disseny responsiu, seguirien aquest criteri</p>
    <table class="table">
        <tr>
            <th>Punt</th>
            <th>Nom de classe</th>
            <th>Tamany</th>
        </tr>
        <tr>
            <td>Extra petit</td>
            <td>xs(per defecte)</td>
            <td>més petit que 576px</td>
        </tr>
        <tr>
            <td>Petit</td>
            <td>sm</td>
            <td>entre 576px i 767px</td>
        </tr>
        <tr>
            <td>Mitjà</td>
            <td>md</td>
            <td>entre 768px i 991px</td>
        </tr>
        <tr>
            <td>Gran</td>
            <td>lg</td>
            <td>entre 992px i 1199px</td>
        </tr>
        <tr>
            <td>Extra gran</td>
            <td>xl</td>
            <td>entre 1200px i 1399px</td>
        </tr>
        <tr>
            <td>Extra extra gran</td>
            <td>xxl</td>
            <td>més gran que 1399px</td>
        </tr>
    </table>
    <p>Aquests noms de classes de la taula s'apliquen a les classes seguins aquest exemple: col-sm-4. Després mirem què seria aquest 4</p>
    <p>El boostrap també té uns colors per defecte depenent de la classe que indiquem. Aquests són anomenars modificadors, i són aquests: primary, secondary, success, info, warning, danger, light i dark. ara veurem un div amb un d'aquests modificadors</p>
    <div class="alert alert-secondary" role="alert">Alerta amb el modificador secondary</div>
</div>
<div class="col-12 col-lg-6">
    <h2>Bootstrap grid</h2>
    <p>Imagina la plana com un conjunt de 12 columnes. El sistema gri del boostrap fa que certes classes agafin cert número de columnes segons necessitat</p>
    <p>Seguint l'exemple d'abans, el col-sm-4, faria que la clase agafés 4 columnes de les 12 en les que hem dividit la web amb el sistena grid</p>
    <p>Per a fer-ho servir, hem de fer primer un div de la classe "container", un altre div a dins amb la classe "row" i al div dins d'aquest ja podem aplicar la classe que utilitza el grid</p>
    <p>Un exemple molt bo de com funcionaria, seria el contingut de Noms i preus que has vist abans a la web, si la fas més estreta, el contingut canvia de posició</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Components del Bootstrap</h2>
    <p>Podem fer que un div sigui vist com una tarjeta a la web fent servir el conjunt de classes "card" del bootstrap. S'ha de posar la class "card" al div que contingui les coses que volem dins la tarjeta i les classes "card-body", "card-title" i "card-text" on convingui</p>
    <p>A continuació tens l'enllaç on pots consultar tota la documentació del bootstrap:</p>
    <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" class="p-3 text-light bg-primary border border-primary rounded-3" style="text-decoration: none;">Enllaç a documentació del bootstrap</a>
    <p style="padding-top:14px">Aquí pots mirar tot el que té el bootstrap fàcilment</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Altres Llibreries</h2>
    <p>A part del bootstrap, hi ha altres llibreries de css que es poden utilitzar:</p>
    <ul>
        <li>Foundation: és bastant semblant al bootstrap, la diferència més gran és que pot estilar contingut per ser enviat per email</li>
        <li>Pure.css: No és tan avançat com el bootstrap, el que fa que sigui més ràpid de carregar</li>
        <li>Tailwind CSS: proveeix un fotimer de classes d'un sol propòsit, el que fa que el disseny de la web sigui ultraflexible. Això però, també fa que el treball en equip sigui més complicat</li>
        <li>UIKit: té una petita sèrie de components responsius. Bastant simple però en teoria fàcil de fer servir</li>
        <li>MVP.css: aquesta llibreria no deèn de classes, únicament de les etiquetes HTML. Això fa que la plana web es vegi maca, però no és ni de lluny tan versàtil com les altres</li>
    </ul>
</div>
</div>`,
tags:`<div class="row">
<h1>Etiquetes HTML</h1>
<p>Aquí veurem unes quantes etiquetes HTML, més que res un repàs</p>
<div class="col-12 col-lg-6">
    <h2>Headings</h2>
    <p>Són els h1, h2, h3... que es solen fer servir per fer un títol, mira l'exemple</p>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
    <p>el heading més petit és el h6, no hi ha h7</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Paràgrafs</h2>
    <p>Són per posar text i l'etiqueta és "p". Aquest text mateix està dins un "p"</p>
    <h3>Nova líniea</h3>
    <p>"br" és per a iniciar una nova línia dins un "p"<br>és una etiqueta que no s'ha de tancar</p>
    <h3>Strong</h3>
    <p>"strong" es fa servir per a indicar que una part del text és <strong>important</strong></p>
    <h3>Bold</h3>
    <p>"b" fa el <b>mateix</b> que strong</p>
    <h3>Italics i emphasis</h3>
    <p>Les dues etiquetes "em" i "i" posen en <em>cursiva</em> la part del text que <i>interessa</i></p>
</div>
<div class="col-12 col-lg-6">
    <h2>Llistes</h2>
    <p>Les llistes es fan amb "ul" i "ol", depenent si volem que estiguin numerades o no</p>
    <ol>
        <li>Les llistes numerades es fan amb "ol" i les no numerades amb "ul"</li>
        <li>Cada element nou de la llista ha d'estar dins de l'etiqueta "li"</li>
        <ul>
            <li>Recorda també que podem fer llistes dins d'altres llistes</li>
            <li>Així de fàcil</li>
        </ul>
    </ol>
</div>
<div class="col-12 col-lg-6">
    <h2>Div</h2>
    <p>L'etiqueta "div" és una caixa, se sol fer servir per a contenir tot tipus de contingut i per a jugar amb ell amb el css</p>
    <!-- Hola jo sóc un comentari que no apareix a la web -->
    <h2>Hiperlinks</h2>
    <p>
        Els hiperlinks són per a redirigir l'usuari a una nova plana, ja sigui del website o de fora. Es fan amb l'etiqueta "a", mira l'exemple<br>
        <a href="index.html">Trencaclosques</a>
    </p>
</div>
<div class="col-12 col-lg-6">
    <h2>Imatges</h2>
    <p>les imatges es posen amb l'etiqueta "img" i han de tenir l'atribut "src" fent referència a l'imatge, és una etiqueta que no s'ha de tancar</p>
    <img src="gango.png">
    <p>A les imatges es poden posar els atributs "alt" per a proveir informació extra a la web, útil per al servidor o serveis d'audiodescripció</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Taules</h2>
    <p>
        Les taules es fab amb l'etiqueta "table", i fem una fila de la taula amb "tr" i cada cel·la amb "td"<br>
        Per a fer la primera fila, es recomana fer cada cel·la amb l'etiqueta "th", ja que això fa que destaqui
    </p>
    <table>
        <tr>
            <th>Hola</th>
            <th>Maco</th>
        </tr>
        <tr>
            <td>Cel·la 1</td>
            <td>Cel·la 2</td>
        </tr>
        <tr>
            <td>Cel·la 3</td>
            <td>Cel·la 4</td>
        </tr>
    </table>
</div>
<div class="col-12 col-lg-6">
    <h2>Formularis</h2>
    <p>Els formularis es fan amb l'etiqueta "form", requereixen una acció amb l'atribut "action" i un mètode HTTP amb l'atribut "method" que sol ser POST o GET</p>
    <p>Cada part del formulari on l'usuari pot posar dades, es fa amb l'etiqueta "input", que requereix un "type"<br>
    També es recomana posar una etiqueta "label" juntament amb cada element del formulari per a indicar a l'usuari què ha de posar</p>
    <p>De inputs hi ha diversos tipus, que són: </p>
    <ul>
        <li>Text: requereix text que es pot veure</li>
        <li>Password: requereix text que no es pot veure</li>
        <li>Submit: És el botó que executa l'acció del formulari</li>
        <li>Checkbox: és una caixa marcable</li>
        <li>Radio: són els cercles dels quals només podem marcar un</li>
        <li>Number: requereix un número</li>
        <li>Email: requereix un correu electrònic</li>
        <li>File: solicita que es pengi un arxiu</li>
        <li>Textarea: Aquest és especial perquè és la seva pròpia etiqueta, es fa servir per a text que pot ser de diverses línies</li>
        <li>Select: Aquest també és la seva pròpia etiqueta i cada nova opció ha d'estar dins de l'etiqueta "option". És un menú desplegable</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>DOM</h2>
    <p>L'idea del DOM és la d'un arbre tenint les seves branques amb el document HTML i les etiquetes de dins(les branques són les etiquetes dins d'altres etiquetes)</p>
</div>
</div>`,
react:`<div class="row">
<h1>React</h1>
<div class="col-12 col-lg-6">
    <h2>Contingut estàtic o dinàmic</h2>
    <p>El contingut d'una web pot ser estàtic o dinàmic, la diferència seria el com és generat el contingut</p>
    <p>El contingut estàtic és el contingut que s'envia al client tal qual està desat al servidor</p>
    <p>El contingut dinàmic és generat en el moment en el que el servidor ha rebut la petició HTTP per part del client, per tant no ha sigut escrit per una persona, sinó autogenerat</p>
    <p>Aquest contingut és generat internament pel servidor d'aplicació, que està al darrere del servidor web. Per a generar la web del contingut dinàmic, el servidor d'aplicació és més complexe perquè ha d'aplicar llògica, comunicar-se amb bases de dades i consultar permisos</p>
</div>
<div class="col-12 col-lg-6">
    <h2>SPA</h2>
    <p>Les SPA són webs que tenen una sola plana per a fer que el contingut vagi més ràpid. Està composada per 1 sol document HTML(+els CSS i Javascript que calguin)</p>
    <p>Si vols veure una web que funciona així, consulta <a href="https://therogersito.github.io/coursera2023/LoTemps/">aquí</a></p>
</div>
<div class="col-12 col-lg-6">
    <h2>Introducció a React</h2>
    <p>React és un Framework Javascript que facilita la creació d'aplicacions web tant per ordinadors com per mòbils</p>
    <p>Es fa servir sobretot per crear SPAs i app. L'avantatge és que el programador no necessita fer tant de codi per a que tot funcioni i que sigui fàcil de mantenir</p>
    <p>El react està composat per diversos components que serien peces de la interfície d'usuari, cada component és part de la llibreria corresponent</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Funcionament del React</h2>
    <p>Cada component del React té el seu propi DOM virtual paral·lel al DOM del HTML, per a executar canvis ho faria així:</p>
    <ol>
        <li>El DOM virtual s'actualitza</li>
        <li>El DOM virtual actual és comparat amb el DOM anterior i es detecten els canvis</li>
        <li>Els canvis detectats són actualitzats al DOM del navegador</li>
        <li>La web del navegador és actualitzada per a que sigui igual a l'ultima versió del DOM del navegador</li>
    </ol>
    <p>Per a optimitzar el navegador, hi ha una eina anomenada React Fiber Architecture, que el que fa és prioritzar canvis a la web per a millorar el rendiment: prioritza primer els canvis visibles per a l'usuari i carrega més tard els canvis que l'usuari encara no veu</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Jerarquía dels components</h2>
    <p>Els components del React tenen certa jerarquía, que seria definida seguint un esquema així:</p>
    <ol>
        <li>App: seria el component que engloba tota l'aplicació web</li>
        <li>Header, main i bottom: serien les 3 parts de la web que engloben el contingut superior, l'inferior i el principal</li>
        <li>Contingut: és cada element de contingut que està dins del header, main, o bottom, com els títols, paràgrafs, imatges, videos, menús... Aquests components poden tenir alhora altres components a dins</li>
    </ol>
</div>
<div class="col-12 col-lg-6">
    <h2>Alternantives a React</h2>
    <p>Al igual que el Bootstrap, React també té competència. Existeixen altres frameworks que fan coses semblants al React:</p>
    <ul>
        <li>Lodash: proveeix una llibreria per a aplicar llògica amb números</li>
        <li>Luxon: és una llibreria Javascript especialitzada en funcions de dates</li>
        <li>Redux: ajuda amb funcions que segueixin l'estat de l'aplicació web, com per exemple un carro de compra virtual</li>
        <li>Axios: simplifica l'enviament de peticions HTTP a APIs</li>
        <li>Jest: ajuda a crear tests automatitzats per a webs</li>
    </ul>
</div>
</div>`
}
let javas={
    intera:`<div class="row">
    <h1>Interactivitat</h1>
    <div class="col-6 col-lg-12">
        <h2>Mòduls</h2>
        <p>Els mòduls són una manera d'aplicar part d'un arxiu javascript a un html. Per a fer-ho, hem d'expressar amb la paraula "export" les dades exportables de l'arxiu javascript i "import" dins l'element script type="module" al document html</p>
    </div>
    <div class="col-6 col-lg-12">
        <h2>Manipulació del DOM</h2>
        <p>El document html pot ser modificat des del javascript seguint el model del DOM html</p>
        <p>Un exemple per a fer-ho seria: "const h2 = document.createElement('h2')"<br>
            Amb això hem creat un objecte desat en la constant h2, objecte el qual podem modificar les variables de dins com el innerText o el mètode setAttribute()<br>
            Finalment per a afegir això al document podem fer servir la comanda: "document.body.appendChild(h2)"
        </p>
    </div>
    <div class="col-6 col-lg-12">
        <h2>Selectors Javascript</h2>
        <p>Podem seleccionar elements concrets del html amb comandes del javascript:</p>
        <ul>
            <li>document.querySelector('p'): selecciona la primera etiqueta que tingui de nom el paràmetre. Una comanda similar, el document.querySelectorAll('p') retorna un array amb totes les etiquetes en qüestió</li>
            <li>document.getElementById('id'): selecciona l'etiqueta que tingui de id el paràmetre especificat.</li>
            <li>document.getElementsByClassName('class'): seleciona les etiquetes que tinguin de classe el paràmetre especificat</li>
        </ul>
    </div>
    <div class="col-6 col-lg-12">
        <h2>Events</h2>
        <p>Els events són funcions que s'executen quan hi ha alguna altre acció en específic. Poden aplicar-se de dues maneres</p>
        <ul>
            <li>Afegint el mètode addEventListener a l'objecte de l'etiqueta seleccionat: document.querySelector('p').addEventListener('acció','funció')</li>
            <li>Fent que l'element tingui un atribut d'event, com el onclick. onclick="funcio()"</li>
        </ul>
    </div>
</div>`,
errors:`<div class="row">
<h1>Errors al Javascript</h1>
<p>Aquí veurem un repàs dels errors del javascript</p>
<div class="col-12 col-lg-6">
    <h2>Testejat d'errors</h2>
    <p>Per a testejar errors al Javascript, hem de fer servir el try...catch(err) ja que els errors fora d'aquest bloc pararien tot el codi</p>
    <p>Per a fer-ho, hem de posar l'error dins del try i un cop salti l'error, s'executarà el codi de catch(err) i després la resta de codi de fora. Podem forçar un error amb la línea: throw new Error();. Mira l'exemple</p>
    <p>
        try {<br>
            throw new Error();<br>
        } catch(err){<br>
            console.log("Línea executant-se quan hi ha l'error del try. L'error en questió és el paràmetre "+err)<br>
        }<br>
        console.log("Aquesta línea s'executa igualment al final");
    </p>
</div>
<div class="col-12 col-lg-6">
    <h2>Tipus d'errors</h2>
    <p>El Javascript té uns quants tipus d'errors, aquests serien:</p>
    <ul>
        <li>ReferenceError: s'intenta utilitzar una variable no definida</li>
        <li>SyntaxError: es posa un codi invàlid, per exemple un string sense cometes que el tanquin</li>
        <li>TypeError: s'intenta fer servir un mètode amb el tipus incorrecte, per exemple un toExponential() a un string</li>
        <li>RangeError: es fa servir un mètode fora de les capacitats del javascript, per exemple convertir un número a base 40</li>
        <li>Altres Errors: hi ha altres errors al javascript que de moment no mirem. Són aquests: AggregateError, Error, InternalError, URIError</li>
    </ul>
</div>
</div>`,
testejat: `<div class="row">
<h1>Testejat</h1>
<div class="col-12 col-lg-6">
    <h2>Node i NPM</h2>
    <p>Node.js és un tipus d'arxiu javascript que funciona independent del navegador. Pot funcionar a una línea de comandes, una aplicació desktop o en Back-end. En altres paraules, es poden crear aplicacions full-stack amb només JavaScript</p>
    <p>El NPM permet als desenvolupadors fer servir llibreries i frameworks al node.js en forma de mòduls o paquets NPM. L'aplicació npm en si permet la descarrega de les llibreries i els frameworks pel node.js</p>
</div>
<div class="col-12 col-lg-6">
    <h2>Testejat en general</h2>
    <p>Una manera de testejar un codi, seria posar el codi a testejar en una funció i comentar la crida de la funció amb el resultat esperat. No obstant, aquesta manera pot ser ambigua</p>
    <p>Una altre manera seria fer servir el jest que veurem més tard. Permet un testejat més específic amb la funció: expect(funcio(parametres)).toBe(resultatEsperat)</p>
    <p>Respecte el testejar, hi ha el que es coneix com a refactoritzar, que seria reescriure codi sense afectar el seu resultat per a que sigui més fàcil de llegir o més ràpid</p>
    <p>Hi ha 3 tipus de testejat:</p>
    <ul>
        <li>e2e: imitar l'acció de l'usuari per a garantitzar que l'usuari real no tingui cap problema. Per desgràcia sol sel lent</li>
        <li>Integració: testejar que parts del sistema interactuin bé entre elles. Són més ràpides i barates que les e2e</li>
        <li>Unitat: testejar les parts més petites del codi en solitari(les funcions). Són les més ràpides i barates</li>
    </ul>
</div>
<div class="col-12 col-lg-6">
    <h2>Jest</h2>
    <p>El Jest és un framework que permet un testejat de codi ràpid i fàcil. Està fet per meta, igual que React</p>
    <p>Jest dóna una característica al codi que s'anomena Code Coverage, vindria a significar la quantitat de codi que el Jest considera més vàlid, per tant quant més code coverage, menys testejat es sol requerir</p>
    <p>Jest també dona la possibilitat de fer Mocking, que és fer passar una acció com si fós del servidor per a testejar característiques que requereixen codi al back-end sense que encara hi hagi aquest codi. Així no hem d'esperar al back-end per a testejar i avançar</p>
    <p>Per a instalar-lo però, és complicat. Hem d'anar a la carpeta on hi hagi els arxius amb el terminal i instalar amb npm. Després fer un arxiu a part en aquest format: "arxiu.test.js". Millor mira el video: <a href="https://www.coursera.org/learn/programming-with-javascript/lecture/8zZEJ/writing-tests-with-jest">Explicacio del Jest</a></a></p>
</div>
<div class="col-12 col-lg-6">
    <h2>TDD</h2>
    <p>El TDD(Test-Driven Development) és una manera de desenvolupar codi prioritzant el testejat. Això implica aplicar passos diferents a un desenvolupament convencional. Seria més o menys així:</p>
    <ol>
        <li>Escriure un test mínim pel codi i executar-lo. Falla</li>
        <li>Escriure el codi mínim per a que el test passi</li>
        <li>Tornar a executar el test i veure que és vàlid</li>
        <li>Reescriure el test amb un nou requeriment i tornar a executar. Falla un altre cop</li>
        <li>Reescriure codi per a que torni a passar</li>
        <li>Tornar a executar el test i veure que és vàlid un altre cop, i així seguim fins que tenim el codi final</li>
    </ol>
    <p>El TDD es fa servir molt, ja que permet testejar de manera automatitzada i minimitza bugs</p>
</div>
</div>`
}
const versi={
    intro:`<div class="row">
    <h1>Control de versions</h1>
    <p>El control de versions és una manera de controlar el desenvolupament d'una app, tenint còpies de cada versió per si en algún moment alguna cosa va malament, poder restaurar una versió antiga</p>
    <div class="col-12 col-lg-6">
        <h2>Introducció</h2>
        <p>L'objectiu del control de versió, és fer un seguiment dels canvis fets en cada versió del producte, tenint accés a un historial amb la possibilitat de tornar enrere en qualsevol moment</p>
        <p>Normalment, això funciona fent un seguiment de quan i qui ha fet un canvi al repositori on es troba la app</p>
        <p>El control de versió té a veure amb la colaboració entre desenvolupadors, ja que normalment molta gent té accés al mateix producte, així que és fundamental saber qui fa cada cosa i quan</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Sistemes i eines</h2>
        <p>Hi ha molst sistemes de control de versió, però tots es podrien resumir en 2 tipus principals:</p>
        <ul>
            <li>Sistemes centralitzats: El codi es troba a un servidor i cada client ha de descarregar una còpia per a poder modificar-lo i pujar la còpia al servidor amb els canvis. Solen donar més control d'accés i són més fàcils d'aprendre. No obstant, són més lents</li>
            <li>Sistemes distribuits: Són semblants als sistemes centralitzats però cada client té accés al historial de canvis. Són més ràpids</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Workflow</h2>
        <p>El workflow és la fluidesa amb la que s'apliquen els canvis a l'app. Són maneres d'aplicar un control de versió òptim. Es resumiria en 3 fases:</p>
        <ul>
            <li>Continous Integration(CI): són els petits canvis efectuats en un període de temps curt, normalment un dia. Es fan per a garantitzar l'estabilitat del codi amb cada canvi individual</li>
            <li>Continous Delivery: és una extensió del CI. Un cop els canvis han sigut aplicats al codi font, empaqueta l'aplicació i la prepara per a llençar-la</li>
            <li>Continous Deployment: després de la fase del Continous Delivery, l'aplicació és testejada en un entorn segur per a localitzar errors abans d'enviar-la al públic. El període de testeig es diu Staging i el de llançament al públic Production</li>
        </ul>
    </div>
</div>`,
    git:`<div class="row">
    <h1>Git i Github</h1>
    <p>Git és un sistema de control de versions dissenyat per a facilitar la visualització de canvis entre versions. Té com a característiques principals que és ràpid, fiable, de codi obert i accessible</p>
    <p>Github en canvi, és una plataforma que utilitza tecnologia Git per a funcionar i l'expandeix facilitant una UI, control d'accés, pull requests i automació. També té algunes característiques de xarxes socials, com perfils</p>
    <div class="col-12 col-lg-6">
        <h2>Com funciona un Git</h2>
        <p>El Git funciona de la següent manera, un cop es té un usuari hem de crear un repositori que tindrà per defecte una branca "main". Aquí és on podem penjar i descarregar arxius. Un nou repositori podem fer que tingui un README.md i tots els repositoris tenen una carpeta ".git" que fa seguiment dels canvis</p>
        <p>El git té un workflow que serien les fases que segueixen les dades que es pugen al servidor:</p>
        <ol>
            <li>Directori de feina: és l'espai que es fa servir per a treballar en els canvis. Esborrar i crear carpetes i arxius compta com a canvis. Un cop acabada la fase, hem d'aplicar la comanda "git add"</li>
            <li>Staging: els canvis durant la feina han sigut localitzats. Un cop acabada la fase, hem d'aplicar la comanda "git commit"</li>
            <li>Commited: els canvis són enviats al repositori. Per a fer-ho apliquem la comanda "git push"</li>
            <li>Repositori remot: el servidor del repositori rep les dades noves i les aplica al repositori</li>
        </ol>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Comandes bàsiques de Git</h2>
        <p>Aquí veuràs algunes comandes que té git per a funcionar</p>
        <ul>
            <li>git init: crea un nou repositori local</li>
            <li>git add: fa que un arxiu o carpeta tingui seguiment per a fer canvis i sigui inclosa en el commit</li>
            <li>git restore --stage: fa el contrari que el git add, ja que desmarca l'arxiu o carpeta pel commit i deixa de tenir el seguiment</li>
            <li>git commit -m: prepara els arxius i carpetes previament preparats amb el git add per a pujar-los al servidor un cop estiguin llestos</li>
            <li>git push: puja els arxius preparats amb el commit al servidor i aplica els canvis al codi fort</li>
            <li>git pull: baixa els últims canvis fets al codi font del servidor</li>
            <li>git clone: copia tot el codi font del servidor i el baixa al local</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Branques</h2>
        <p>Les branques són extensions d'un repositori per a poder efectuar canvis sense afectar el projecte principal. Es poden crear amb la comanda "git cheackout -B branca". "git checkout" es fa servir per a saber a quina branca es troba un</p>
        <p>Per a poder enviar les dades a la nova branca, es fa amb la comanda push d'aquesta manera: "git push -u origin branca". Un cop fer, l'administrador té accés als canvis i pot decidir si aplicar-los o no a la branca principal</p>
        <h2>Remot contra local</h2>
        <p>El codi a github pot estar desat en remot o en local. En remot vol dir que el codi font es troba desat a un servidor i en local vol dir que el codi sencer es troba a una màquina client</p>
        <p>Podem treballar amb un codi en remot gràcies a git fent un repositori local enllaçat amb el del servidor</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>HEAD</h2>
        <p>HEAD és un fitxer dins de la carpeta .git que serveix per a donar la id de l'ultim commit executat a una branca. Per a canviar la branca de la qual el head doni l'ultim commit, ho fem amb la comanda "git checkout repositori". Podem consultar a quina branca apunta head amb "cat .git/HEAD" i la id de l'ultim commit de la branca amb "cat /refs/heads/main"</p>
        <h2>Comandes Diff</h2>
        <p>"git diff" és una comanda especial del git perquè informa de quins canvis s'han efectuat. Ho fa comparant la versió anterior d'un arxiu amb l'actual amb la que s'està treballant</p>
        <p>Es poden fer comparacions en diferents nivells:</p>
        <ul>
            <li>Un sol arxiu: compara només canvis en el contingut d'un arxiu. Exemple: "git diff HEAD arxiu.txt"</li>
            <li>commits anteriors: compara diferències en tots els arxius de dos commits diferents. Podem veure tots els id de commits amb "git log --pretty=oneline" i després seleccionant els dos commits que ens interessa. Exemple: "git diff idCommit1 idCommit2"</li>
            <li>Entre branques: compara diferències entre branques. Podem veure totes les branques amb "git branch" i després seleccionant les dues branques que ens interessa. Exemple: "git diff branca1 branca2"</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Blame</h2>
        <p>Blame és una comanda que permet saber l'usuari que ha fet una modificació. Es fa així "git blame arxiu.txt" i dona una llista dels canvis amb cada canvi tenint: l'usuari, la id del commit, la data, l'hora, la línea de codi on hi ha el canvi i el canvi en si</p>
        <p>Podem filtrar les dades que volem especificant les línies del codi que volem mirar ambn la flag -L. Exemple: "git blame -L 5,15 arxiu.txt" doanria només els canvis entre les línies 5 i 15</p>
        <h2>Forking</h2>
        <p>Forking és un sistema alternatiu de workflow que no funciona amb branques. A diferència de les branques, el forking crea un repositori nou paral·lel al principal copiant el contingut. Aquest repositori forkejat pot estar al dia amb l'original fent un pull i l'amo del repositori original pot agafar canvis en els forkejats si es fa una push request</p>
    </div>
</div>`,
    comandes:`<div class="row">
    <h1>Comandes de Unix</h1>
    <p>Ara toca veure comandes que es fan servir pel terminal Unix(el de Windows) i com funciona</p>
    <div class="col-12 col-lg-6">
        <h2>Comandes bàsiques</h2>
        <ul>
            <li>cd: és per a desplaçarse entre carpetes. Exemple: "cd nomCarpeta" o "cd .." per a sortir de la carpeta actual</li>
            <li>touch: es fa servir per a creat un arxiu. Exemple: "touch arxiu.txt"</li>
            <li>mkdir: la comanda per a crear carpetes. Exemple: "mkdir nomCarpeta"</li>
            <li>history: és per a visualitzar les últimes comandes executades</li>
            <li>code: obre un arxiu en Vscode. Exemple: "code arxiu.txt"</li>
            <li>man: requereix una comanda com a paràmetre i ensenya un manual de la comanda en qüestió. Exemple: "man cd"</li>
            <li>ls: mostra els continguts del directori actual</li>
            <li>pwd: mostra la ruta sencera del directori actual</li>
            <li>cp: copia arxius d'un directori a un altre</li>
            <li>mv: mou arxius o directoris d'un directori a un altre. Exemple: "mv arxiuODirectori novaRuta"</li>
            <li>clear: neteja la pantalla</li>
            <li>cat: permet veure el contingut d'un arxiu. Exemple: cat "arxiu.txt". Podem crear i escriure amb un arxiu amb "cat >"</li>
            <li>wc: compta la quantitat de paraules d'un arxiu. Exemple wc "arxiu.txt"</li>
        </ul>
        <p>En aquestes comandes(i altres) podem posar com a paràmetres el que es coneix com a "flags", s'escriurien així "-l"(símbol - i una lletra) i serveixen per a canviar una mica la funcionalitat de la comanda. Podem veure quines flags accepta una comanda fent servir la comanda "man "</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Pipes</h2>
        <p>Les Pipes són un mètode per a combinar comandes, per exemple "cat" i "wc". S'expressen així: "cat arxiu.txt | wc -w"</p>
        <h2>Redireccions</h2>
        <p>L'idea bàsica de les redireccions, és jugar amb els símbols &lt; i &gt; depenent si volem posar informació(input) o agafar-ne(output).</p>
        <ul>
            <li>&gt; té a veure amb el input i ens permet desar el resultat d'una comanda dins un arxiu nou. Exemple: "ls -l &gt; arxiu.txt" desaria el display de la comanda "ls -l" dins l'arxiu.txt</li>
            <li>&lt; té a veure amb el output, i és per a veure el contingut d'un arxiu</li>
            <li>2&gt; és per a desar un codi d'error a un arxiu, es fa servir quan se sap que hi haurà un error poder desar aquest. S'utilitza com el input</li>
        </ul>
        <h2>Grep</h2>
        <p>El grep és una manera de cercar cert contingut dins un arxiu. Per a fer-ho, fem servir la comanda "grep" així: "grep textABuscar arxiu.txt". És una comanda que té en compte majúscules i minúscules i si volem que no ho tingui en compte, hem de posar la flag "-i". Amb el mètode pipe, podem fer una cerca més extensa i precisa</p>
    </div>
</div>`
}
const disseny={
    intro:`<div class="row">
    <h1>Disseny</h1>
    <p>Per a que una web funcioni bé amb els usuaris s'ha de dissenyar bé la interfície i l'experiència</p>
    <div class="col-12 col-lg-6">
        <h2>UX</h2>
        <p>El concepte de UX és el de l'experiència de l'usuari amb el producte sense limitar-se a la web en si. Es sol millorar la UX responent preguntes de tipus: "Què necessita l'usuari?", "Com d'intuitiva és la web?", "Hi ha algún impediment en fer que l'usuari tingui el que vol?"</p>
        <p>El procés de millorar la UX es dividiria en 5 parts, que fan un bucle fins que es té la UX desitjada:</p>
        <ol>
            <li>Observar tasca: veure com es desenvolupa el procés d'ús de l'app per a que l'usuari aconsegueixi el que vol</li>
            <li>Identificar problemes: fixar-se en problemes generats durant el procés de l'ús de l'app</li>
            <li>Generar idees: proposar solucions pels problemes prèviament identificats</li>
            <li>Prototip: crear un prototip del producte aplicant les solucions proposades</li>
            <li>Testejat: testejar el prototip per a comprovar si les solucions funcionen i si hi ha nous problemes</li>
        </ol>
        <p>Es pot evaluar l'utilitat de la UX utilitzant 5 principis:</p>
        <ul>
            <li>Aprenentatge: la capacitat de l'app per a ensenyar com funciona de la manera més fàcil possible</li>
            <li>Eficiència: que l'usuari pugui fer qualsevol acció fàcilment</li>
            <li>Memorabilitat: que l'usuari no es perdi si es distreu, que tingui clar per on va sense que li resulti difícil</li>
            <li>Errors: que els errors que comet l'usuari siguin fàcils de corregir</li>
            <li>Satisfacció: fer que l'usuari se senti satisfet amb l'ús de l'app</li>
        </ul>
        <p>Una manera de poder definir la UX desitjada, és creant una o diverses "Personas", que seria un perfil genèric d'usuari que faria servir l'app buscant que la UX s'adapti a les seves necessitats</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>UI</h2>
        <p>La UI és l'interfície de la web, el que l'usuari pot veure i amb el que pot interactuar. Ajuda tenir un UI identificativa de la marca i senzilla per a no abrumar l'usuari i que tingui el que vol ràpid</p>
        <p>La UI es construeix per a comunicar l'app amb l'usuari i que l'usuari pugui comunicar-se amb l'app. L'interfície pot dividir-se en aquests 3 elements:</p>
        <ul>
            <li>Estètica: el que seria els colors, els icones, el text...</li>
            <li>Estructura: com l'informació es mostra a la pantalla</li>
            <li>Interactivitat: com respon l'app a l'acció de l'usuari</li>
        </ul>
        <p>Hi ha diversos nivells en quant al espectre de disseny. Aquí deixo una llista dels nivells en l'espectre, del més gran al més petit:</p>
        <ul>
            <li>Service design: és el disseny en quant al servei complet entre una companyia i un client, té en compte totes les possibilitats</li>
            <li>Costumer Experience design(CX): té en compte les interaccions disn d'un servei particular o branca</li>
            <li>User Experience design(UX): aquest nivell engloba les comunicacions dins d'un sol canal en particular, com una app o una web</li>
            <li>User Interface design(UI): és el disseny de la interfície del canal de comunicació</li>
        </ul>
        <h2>L'usuari</h2>
        <p>Per a crear la UX òptima primer hem de saber qui és l'usuari i com és per a poder personalitzar l'experiència. Això es fa amb entrevistes i deixant que persones reals testejin l'app. És un pas necessari ja que no podem fer assumpcions alhora de predir el comportament de l'usuari, només es pot fer amb experiències reals</p>
        <p>Fer un seguiment de què fa i com se sent l'usuari és clau per a millorar la UX, per a quedar-se amb tot podem fer un documents amb les següents dades:</p>
        <ul>
            <li>Perfil de l'usuari: com és l'usuarii quines expectives té amb l'app o el que vol aconseguir</li>
            <li>Fases de l'acció: els passos que fa l'usuari a l'app per a aconseguir el que vol, ja sigui iniciar sessió, marcar productes, finalitzar comanda...</li>
            <li>Actituds i emocions: com se sent l'usuari i com reacciona fent ús de l'app</li>
            <li>Oportunitats: què es pot canviar per a fer que l'usuari es senti millor amb usos subseqüents</li>
        </ul>
    </div>
</div>`,
    aplicat:`<div class="row">
    <h1>Disseny aplicat</h1>
    <p>Aquí aprendrem a aplicar el disseny sobretot amb figma</p>
    <div class="col-12 col-lg-6">
        <h2>Figma</h2>
        <p>Figma és l'eina que utilitzarem per fer dissenys, no és gaire divertit però farem el que podem. Primer definim alguns elements de figma:</p>
        <ul>
            <li>Frame: és el contenidor on el disseny existeix</li>
            <li>Layer: és un objecte sobre el frame, quan es posa un objecte es crea una nova layer</li>
            <li>Group: una agrupació de diferents objectes que crea una nova layer amb els objectes combinats</li>
            <li>Formes: figures geomètriques per a definir el disseny. Poden ser un quadrat, triangle, cercle, línea...</li>
            <li>Text: text literalment, dona opcions de redimensionat, canvi de font, color...</li>
            <li>Grids: els grids són una manera d'organitzar el contingut del disseny en files i columnes, fent que els elements del disseny es posicionin fàcilment seguint l'estructura definida pel grid. Es recomana definir el grid abans de posar-se a dissenyar, no evitar deixar espais en blanc i guiar-se pel sistema de 960px-grid(12 columnes de 60px cada una amb 10px al voltant de cada una)</li>
            <li>Imatges: es poden insetar imatges al disseny i manipular de manera semblant a un quadrat</li>
        </ul>
        <h2>Topografia</h2>
        <p>La topografia és la manera en la que està estructurat el text, hi ha un conjunt de bones pràctiques per a millorar el disseny</p>
        <ul>
            <li>Jerarquía: tenir textos més grans en títols i dades importants</li>
            <li>Color: Relacionar el color amb la funció, per exemple, vermell amb errors. Que el color del text destaqui respecte el fons i mantenir-se dins d'una paleta de colors còmode a la vista</li>
            <li>Amplada de línea: no fer textos amb línies massa llargues, lo ideal és que l'amplada màxima suigui el tamany del text*30(per exemple, mida de text 14px*30=amplada de línea 420px)</li>
            <li>Evitar el mur de text: Un mur de text és un text que no té espai per a descansar la vista, per a evitar-ho es pot separar les seccions en paràgrafs, posar alguna imatge per a canviar la forma del bloc de text, posar més interlineat...</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Wireframes</h2>
        <p>Els wireframes són estructures o conveptes que precedeixen a la creació del disseny, seveix per a tenir clar com anirà el disseny i quins elements volem que tinguin</p>
        <p>El wireframe no té colors ni fonts de text, només l'estructura. És com un plànol d'un edifici</p>
        <h2>Prototip ràpid</h2>
        <p>El prototip ràpid és l'idea de fer un prototip amb l'intenció de ser testejat ràpidament i sense tenir un disseny treballat, aquesta pràctica s'utilitza per a poder comprovar que les funcionalitats que es volen funcionen abans d'haver d'esperar a tenir un disseny més o menys treballat</p>
        <h2>Test d'utilitat</h2>
        <p>Els tests d'utilitat són deixar que gent real testegi el producte dissenyat i monitoritzar les seves reaccions. No es deixa al tester fer el que vulgui, se li donen una sèrie de tasques a fer amb el producte i s'observa quines dificultats té. Un test d'utilitat té 3 elements fundamentals:</p>
        <ul>
            <li>Facilitador: la persona que proporciona el producte i les tasques i monitoritza, escolta i ajuda al participant</li>
            <li>Participant: és la persona que testeja el producte</li>
            <li>Tasques: el que el participant ha d'aconseguir fer amb el producte, pot ser instruccions específiques o algo no gaire específic</li>
        </ul>
    </div>
</div>`,
    lamevaui:`<div class="row">
    <h1>La meva UI</h1>
    <p>En aquesta part aprendrem què segueix després de fer el wireframe, aplicant-hi l'estil, els colors i tota la resta</p>
    <div class="col-12 col-lg-6">
        <h2>Missatges visuals i combinacions</h2>
        <p>Cada element del disseny es pot definir com un missatge visual, que segons com sigui cau en una d'aquestes categories:</p>
        <ul>
            <li>Línea: qualsevol línea que apareix en pantalla, pot utilitzar-se per a dividir visualment l'app, de connector... L'importància de la línea és directament proporcional al seu gruix</li>
            <li>Text: text que es pot llegir, per a que sigui còmode ha de tenir configurat adequadament els següents paràmetres: tipografia, tamany, color, alçada de línea i forma</li>
            <li>Color: pràcticament tot element pot tenir cert color. El color és útil per a donar identitat a la marca, evocar emocions i destacar elements</li>
            <li>Figura: poden ser figures geomètriques tradicionals(com quadrats, cercles i triangles), figures orgàniques(no tenen vèrtex afilats, com un quadrat amb un border-radius) o firgures abstractes(representa mínimament la realitat, com un stickman)</li>
            <li>Element gràfic: imatges literalment, donen informació clara i criden l'atenció</li>
            <li>Espai: tota l'app té espai, l'espai positiu és espai ocupat per algún element i el negatiu és espai buit. Els elements es poden connectar o separar utilitzant correctament l'espai</li>
        </ul>
        <p>A part d'aquests, hi ha certes tècniques per a millorar el disseny:</p>
        <ul>
            <li>Mida: destacar elements importants fent-los grans</li>
            <li>Repetició: Els elements són més memorables quan més es repeteixen. Una repetició excessiva pot causar saturació</li>
            <li>Equilibri: Si els elements estan dividits en columnes o files, mantenir un equilibri de contingut entre elles ho fa més maco. Una simetria seria la millor manera</li>
            <li>Transparència: Un element que es difumina o transparenta més amb el fons no destaca tant</li>
            <li>Textura: Una manera d'aplicar el background, amb una textura</li>
            <li>Jerarquía: Alguns elements han de ser més important que d'altres i ho ha de semblar, si tot sembla igual d'important res ho semblarà</li>
            <li>Contrast: qualsevol element que contrasti amb el seu entorn destaca. Es pot contrastar amb color, mida, gruix...</li>
            <li>Frame: posar un marc a un element, ja sigui imatge o un requadre fa que destaqui</li>
            <li>Direcció: Definir un fluxe d'atenció fent que els elements destaquin en seqüència fa que el disseny sigui més còmode</li>
        </ul>
        <h2>Mood boards</h2>
        <p>Les mood boards són taules en les que es vol definir com s'ha de sentir el client quan està fent servir l'app, busquen establir un to i uns valors objectius en l'experiència definida</p>
        <h2>Sistemes de disseny</h2>
        <p>Un sistema de disseny és el conjunt de característiques de disseny que donen identitat al producte. El conjunt es compon de: tipografia, colors, icones, layouts, grids, estàndars de codi i convencions de nom(i també hi podriem comptar el to de veu, guia d'estil i documentació)</p>
        <p>Tenir clar aquest sistema permet a l'equip treballar en conjunt respectant l'estil</p>
        <p>Un concepte semblant als sistemes de disseny són els UI kits. Els UI kits es componen només dels components digitals que formen la UI, a diferència dels sistemes de disseny que engloben més conceptes</p>
        <p>Una manera de dissenyar amb aquests UI kits és el disseny atòmic, que consisteix en pensar en elements digitals sols(com botons o un text) en àtoms, aquests àtoms quan s'ajunten formen molècules i les molècules en conjunt formen un organisme</p>
        <p>Per a garantitzar que el sistema de disseny funciona, s'han de definir una sèrie de valors a seguir pel sistema, aquests valors han de ser:</p>
        <ul>
            <li>Principis de disseny: són una sèrie de frases simples que donen identitat al disseny. Alguns exemples serien: el moviment proveeix significat o valent, gràfic i intencional.</li>
            <li>Llenguatge i identitat de la marca: Els elements visibles de la marca com el logo, color general... I les normes que diferencien la marca de la resta, com la manera de fer les fotos i d'altres.</li>
            <li>Components i patrons: Són elements i maneres d'implementar-los que es repeteixen a l'app</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>De disseny a prototip</h2>
        <p>El prototip és com una maqueta del producte final, té moltes de les funcionalitats però realment no funciona.</p>
        <p>Un prototip pot ser muntat a figma afegint interactivitat als dissenys</p>
        <h2>Micro-interaccions</h2>
        <p>Les micro-interaccions són petites interaccions que ha de fer l'usuari que donen certa satisfacció, com donar un like, recarregar la pàgina arrossegant-la cap a avall, obrir o tancar el menú lateral...</p>
        <p>Aquestes micro-interaccions tenen com a propòsit fer l'app més intuitiva i facilitar la vida a l'usuari, el que farà que es senti més satisfet fent servir l'app i la vulgui fer servir més sovint</p>
        <h2>Micro-animacions</h2>
        <p>Les micro-animacions són semblants e les micro-interaccions en el sentit que semblen coses petites. Les micro-animacions però el que busquen és la comoditat de l'usuari fent servir animacions simples</p>
        <p>fer que una caixeta entri al carro de compra o una fletxa que desapareix i torna a aparèixer serien exemples de micro-animacions, coses que no canvien ni afegeixen funcionalitats a l'app però que agraden a l'usuari</p>
        <p>Tingues en compte que les micro-animacions han de ser curtes i simples, una massa llarga pot frustrar a l'usuari i una massa complexe el pot distreure</p>
    </div>
</div>`,
    evaluacio:`<div class="row">
    <h1>Evaluació de disseny</h1>
    <p>Evaluar un disseny és fundamental per a saber si està ben fet o mal fet, per això existeix un llistat de bones pràctiques en quant al disseny</p>
    <div class="col-12 col-lg-6">
        <h2>Llistat de bones pràctiques</h2>
        <ul>
            <li>Innovació: aplicar noves idees ajuda a destacar el disseny, un bon disseny que es repeteix infinits cops deixa de semblar bo aviat</li>
            <li>Producte útil: un bon disseny fa que el producte sembli més útil</li>
            <li>Estètica: un disseny maco fa que el client es senti còmode</li>
            <li>Entenibilitat: Que es mostrin les idees clares i fàciols d'entendre fan que el disseny sigui bo</li>
            <li>No intrusiu: un disseny intrusiu és un que dóna per fer el comportament de l'usuari, cosa que pot fer-lo sentir incòmode</li>
            <li>Honestitat: els dissenys que prometen coses que no fan sempre fallen, s'ha de ser sincer amb el consumidor</li>
            <li>Longevitat: el diseny potser dura molt de temps, per això s'ha de mantenir al dia i no semblar antiquat</li>
            <li>Detallat: s'ha de tenir en compte cada detall del disseny i no deixar res a l'atzar</li>
            <li>Eficient: Hem de mantenir un disseny que no consumeixi massa recursos</li>
            <li>Llibertat: l'usuari ha de poder fer el que vol, quan vol i fàcilment</li>
            <li>Consistència: Una utilitat que es troba a diversos llocs ha de tenir sempre la mateixa estètica, li resultarà més fàcil a l'usuari recordar de què es tracta i es conforndrà menys</li>
            <li>Flexibilitat: el dissenys ha de ser igual de còmode per a un usuari experimentat i un usuari nou</li>
            <li>Errors: s'han de minimitzar els errors i si hi ha algún, ha de quedar claríussim a l'usuari</li>
            <li>Feedback: si l'usuari fa alguna acció, se l'ha de notificar per a que li deixi constància al cap</li>
            <li>Retorn: si l'usuari fa una acció sense voler, se li ha de facilitar el mètode per a tirar enrere i desfer-la</li>
        </ul>
        <p>Aquesta seria una llista de principis en quant a bons dissenys</p>
        <h2>Pautes generals d'accessibilitat</h2>
        <p>Hi ha algunes pautes que es poden seguir per a fer que el disseny sigui molt millor, serien les següents</p>
        <ul>
            <li>Contrast entre informació i background: l'informació, ja sigui text, imatges, botons, ha de destacar respecte el background, ja que si no destaca pot passar desaparcebuda</li>
            <li>Elements identificables: Els elements importants han de destacar respecte la resta i fer un canvi amb hover ajuda</li>
            <li>Formularis: han de tenir els labels claríssims i quins requisits demana cada camp</li>
            <li>Navegació: les opcions de navegació han de ser consistents i clares, no pot ser això un laberint</li>
            <li>Separació de continguts: Uns continguts diferents d'altres han d'estar separats en pantalla per a donar a entendre que no estan relacionats</li>
            <li>Viewports: cada usuari té un dispositiu diferent, per això el disseny s'ha d'adaptar a cada un d'ells</li>
            <li>Controls: si la pantalla té algún element automàtic, com un vídeo o unes imatges que roten, hem de proveïr les eines per a que l'usuari els pari fàcilment</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Formularis</h2>
        <p>Dissenyar formularis és clau per a que funcionin bé, hi ha algunes pautes per a dissenyar-los bé:</p>
        <ul>
            <li>Mantenir el formulari simple, sense demanar info innecessària</li>
            <li>Fer que el formulari sigui d'una sola columna per a que l'usuari no perdi el fil conductor</li>
            <li>Posar un títol clar sobre el que es fa amb el formulari, com crear un compte o iniciar sessió</li>
            <li>Les parts del formulari més complexes van al final i les més simples al principi</li>
            <li>Alertar a l'usuari d'informació incorecta al moment, si l'usuari s'equivoca ho ha de saber lo abans possible</li>
            <li>El text ha d'estar alineat a l'esquerre</li>
            <li>Evitar demanar número de telèfon</li>
            <li>Aprofitar la funció d'autocompletar del navegador</li>
            <li>Fer que el formulari també sigui còmode en mòbil</li>
            <li>Els missatges d'error han de ser positius, no hem de fer sentir culpable a l'usuari</li>
            <li>Fer servir smart defaults, que són opcions per defecte que es poden treure de l'usuari sense que ho digui com la localització</li>
            <li>Si el formulari és llarg, convé posar una barra de progrés</li>
            <li>fer servir reCAPTCHA enlloc de CAPTCHA ordinaris si és necesari</li>
            <li>Permetre que l'usuari navegi pels camps del formulari amb el tabulador</li>
        </ul>
        <h2>Components i sistemes de disseny</h2>
        <p>Els components de disseny es poden definir d'una manera semblant als componens de react, són peces del disseny ordenades per llògica que es combinen entre elles per a formar components més complexos i la combinació de tots els components fan el disseny de la UI. Aquests components poden ser reutilitzats</p>
        <p>Els sistemes de disseny són un conjunt de components de disseny i patrons per a fer dissenys. Els millors sistemes de disseny tenen: guies en el procés de disseny i en el disseny en si, una llibreria de patrons de disseny i una altre llibreria de components</p>
        <h2>Icones de menú</h2>
        <p>En quant a icones per navegar, un molt icònic és el del menú, que sol desplegar un llistat lateral o superior amb opcions de navegació. Aquests serien els més utilitzats:</p>
        <p>Menú hamburguesa(<i class="fa fa-bars"></i>), menú kebab(tres punts en vertical), menú meatballs(tres punts en horitzontal), menú en quadrat(com una finestra de 9 vidres)</p>
    </div>
</div>`
}
const react={
    intro:`<div class="row">
    <h1>Introducció a React</h1>
    <p>El React és una llibreria Javascript creada per Meta per a crear UI ràpides i accessibles. Webs com Instagram, Netflix o Airbnb ho fan servir</p>
    <p>Crea una app React amb "npm init react-app nomDeLapp" i executa l'app amb "npm start"</p>
    <div class="col-12 col-lg-6">
        <h2>Mòduls</h2>
        <p>Els mòduls són part d'un arxiu javascript que es poden exportar i importar a altres arxius javascript; aquests mòduls poden ser funcions.</p>
        <p>Per a exportar, podem fer-ho amb default o anomenat. El default es fa així: "export default a" o així "function a(){elquesigui}; export default a". El anomenat s'exporta així: "export function a(){elquesigui}" o així "function a(){elquesigui}; export {a}". L'exportació anomenada la podem realitzar tants cops com volguem, l'exportació per default només un cop</p>
        <p>Per a importar, a l'arxiu on importem els mòduls fem així: "import a from 'rutadelarxiu.js'" o "import {a} from 'rutadelarxiu.js'"</p>
        <h2>Components</h2>
        <p>Els components de React són bloc de codi reutilitzables. Cada component té certes funcions que no requereixen la modificació d'altres components, cosa que fa que cada treballador pugui treballar en cert component sense alterar el component del veí. Cada component té el seu propi html, css i javascript.</p>
        <p>Els components poden ser de dos tipus:</p>
        <ul>
            <li>Funcionals: són una funció simple de javascript</li>
            <li>Per classe: funcionen de manera semblant a les classes de javascript</li>
        </ul>
        <h1>Components funcionals</h1>
        <p>Els components funcionals són components emmagatzemats dins de funcions al javascript. Aquestes funcions retornen codi JSX, una extensió del javascript que permet l'escriptura de html.</p>
        <p>El component en si és un arxiu .js que ha de començar en majúscules. Aquest arxiu té la funció(amb un nom que comença en majúscules) que retorna el codi JSX del component</p>
        <p>Per a fer que un component cridi a un altre, ho fem amb la següent sintaxi: "&lt;nomdelafuncio /&gt;"</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Estructura de projecte</h2>
        <p>El React té la seva estructura pròpia de carpetes per a organitzar els components. Aquesta estructura es crea automàticament quan iniciem el React i es composa d'aquesta manera: </p>
        <ul>
            <li>Carpeta node_modules: conté una colecció de mòduls que fan funcionar el React. De moment la ignorarem</li>
            <li>Carpeta public: conté els assets que veurà l'usuari a la web, com les imatges, icones, videos... i el més important index.html</li>
            <li>Carpeta src: conté els components essencials per a fer funcionar el React:</li>
            <ul>
                <li>App.js: és l'erxius javascript que conté les instruccions per a renderitzar la web</li>
                <li>index.js: conté codi per a diverses funcionalitats de la web</li>
                <li>App.css: conté els estils pel App.js</li>
                <li>index.css: té els estils de la web en si</li>
                <li>App.test.js, setupTests.js i reportWebVitals.js: són fitxers relacionats amb el testejat de la web</li>
                <li>logo.svg: és un logo que apareix per defecte al localhost</li>
            </ul>
            <li>.gitignore: es fa servir en el control de versions, especifica quines carpetes i arxius han de ser ignorats</li>
            <li>pachage-lock.json: llista les dependències de la versió de l'app</li>
            <li>package.json: llista informació de la app</li>
            <li>README.md: dona informació bàsica del projecte</li>
        </ul>
        <p>Per a la creació de nous components, es recomana fer una carpeta nova dins de src i posar els components js allà</p>
        <h2>Importació de components</h2>
        <p>Per a importar components i que es mostrin en pantalla, primer de tot hem de posar l'instrucció d'exportació a l'arxiu del component i després posar l'instrucció d'importació a l'arxiu App.js i posar el nom del component dins del componentn App en aquest format: &lt;Component /&gt;</p>
    </div>
</div>`,
    nav:`<div class="row">
    <h1>Navegació</h1>
    <p>Dissenyar un bon sistema de navegació d'una web és fundamental en l'experiència de l'usuari, el que s'ha d'aconseguir és que el client pensi lo mínim possible. La navegació podria definir-se com la part que permet a l'usuari accedir a diferents parts de la web</p>
    <p>La navegació en una web que funciona amb React és diferent a la web convencional, ja que enlloc de navegar diferents arxius html, el React actualitza la web sobre un sol html</p>
    <div class="col-12 col-lg-6">
        <h2>Tipus de sistemes de navegació</h2>
        <p>L'estàndar d'avui dia divideix la navegació segons on estan ubicats els enllaços, poden venir en 4 maneres:</p>
        <ul>
            <li>Barra horitzontal a dalt(o navbar)</li>
            <li>Menú vertical a un lateral(o sidebar)</li>
            <li>Menú desplegable amagat a un botó(el botó sol ser el hamburguesa)</li>
            <li>Menú horitzontal a baix de tot</li>
        </ul>
        <h2>La Navbar</h2>
        <p>Per a crear la navbar i tot el que es necessita per a enllaçar parts de la plana, no podem fer-ho com una web tradicional perquè tenim una sola plana, ho hem de fer amb una llibreria de React que es diu React Router</p>
        <p>Primer de tot hem d'instalar-lo amb la comanda "npm install react-router-dom@6" a la carpeta on estigui iniciat el react i després al index.js hem de posar la comanda "import {BrowserRouter} from 'react-router-dom'". i dins de root.render hem de posar l'etiqueta &lt;BrowserRouter&gt; englobant l'etiqueta &lt;App /&gt;</p>
        <p>Després a l'arxiu App.js, hem de posar la comanda "import {Routes, Route, Link} from 'react-router-dom'"</p>
        <p>A continuació per a posar una crida de component que es pugui renderitzar amb una ordre seria així: "&lt;Route path='/rutaQueSiguiOBuidaSiEsLaPrincipal' element={&lt;ComponentEnSi /&gt;} /&gt;". Posant tants Route com volguem i han d'estar dins de l'etiqueta &lt;Routes&gt;</p>
        <p>Finalment, per a fer una crida similar a la de l'element &lt;a&gt; de html, ho fem així: "&lt;Link to='/rutaQueSiguiOBuidaSiEsLaPrincipal'&gt;nomEnPantalla&lt;/Link&gt;". L'element Link no necessita estar dins un element en concret com l'element Route</p>
        <h2>Renderitzat condicional</h2>
        <p>El renderitzat condicional és l'idea de generar certs components en pantalla segons certes condicions i sol fer-se servir amb el condicional ternari. Mira l'exemple:</p>
        <div class="exemple">
            function MomentDelDia(){<br>
                const hora = new Date().getHours();<br>
                return(<br>
                    {hora >= 12 ? &lt;Dia /&gt; : &lt;Nit /&gt;}<br>
                )<br>
            }
        </div>
        <p>En aquest cas cridaria un component o un altre depenent del moment del dia</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Assets</h2>
        <p>Els assets són tots els fitxers que necessita una app React per a funcionar correctament, ja siguin imatges, videos, àudio...</p>
        <p>Se sol emmagatzemar els assets de dues maneres: si l'app ho necessita per a iniciar-se deixar-ho a la carpeta "public", si no es sol deixar a un carpeta "Assets" dins de "src"</p>
        <p>Un cop l'asset es troba emmagatzemat, la millor manera de fer-ho servir és tractar-lo com es faria amb el html base però cambiant certa sintaxi, per exemple per a posar una imatge seria: &lt;img src={require('/rutaDeLaImatge/foto.jpg')}&gt;</p>
        <p>Si t'hi fixes, ara necessitem una funció require per a cridar l'asset. També es pot fer amb un import, però això complicaria el codi amb un excés d'imports</p>
        <h2>Àudio i video</h2>
        <p>Per a posar videos i àudios a una app react, es pot fer servir el mètode tradicional de fer servir l'etiqueta html &lt;video&gt; però no es recomana. Per a obtenir una experiència més versàtil és millor fer servir un package de react per a posar videos anomenat "react-player"</p>
        <p>react-player ens permet posar videos locals o online com per exemple de youtube. Un cop instalat el paquet fem un import de "ReactPlayer" from "react-player" i ja el podem fer servir. Podem ser més específics i importar de "react-player/youtube", per exemple</p>
    </div>
</div>`,
    estilat:`<div class="row">
    <h1>Ús i estilat de components</h1>
    <p>En aquesta secció aprendrem com estilar els omponenets de React</p>
    <div class="col-12 col-lg-6">
        <h2>Props</h2>
        <p>Els props són els paràmetres que es poden posar a les funcions dels components. L'ús de props ens permet un contingut més dinàmic, i una manera d'utilitzar-lo és fent que la crida del component tingui cert atribut i el component contingui una crida al propi atribut. Mira l'exemple:</p>
        <div class="col-6 fl">
            ReactDOM.createRoot(<br>
            document.querySelector('#root')<br>
            ).render(&lt;App title="Welcome" /&gt;)
        </div>
        <div class="col-6 fl">
            export function App(props){<br>
            return(<br>
            &lt;h1&gt;{props.title}&lt;/h1&gt;<br>
            );};
        </div>
        <h2>Ús del JSX</h2>
        <p>Com ja saps d'abans, el JSX és una extensió del Javascript que permet incloure codi html i css. A diferència del html, no podem fer servir la propietat "class" sinò que hem d'utilitzar la propietat "className" per a aconseguir el mateix propòsit</p>
        <p>Una manera fàcil de recordar com escriure en JSX és posar els elements i llenguatge HTML lliurement i la part en Javascript s'escriu dins de {}</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Props children</h2>
        <p>L'idea del props children és la de fer que un component estigui dins un altre segons situació, que sol ser la de tenir un component que defineix uns estils css i l'altre el contingut, així podriem reciclar els estils per a altres, mira els exemples: </p>
        <div><div class="col-4 fl">
            export function Content(props){<br>
                return(<br>
                    &lt;div className="test"&gt;<br>
                        &lt;p&gt;Exemple&lt;/p&gt;<br>
                    &lt;/div&gt;<br>
                )}
        </div>
        <div class="col-4 fl">
            export function Style(props){<br>
                const est = {<br>
                    color:red;<br>
                    fontSize:44px;}<br>
                return(<br>
                    &lt;div style={est}&gt;<br>
                        {props.children}<br>
                    &lt;/div&gt;<br>
                )}
        </div>
        <div class="col-4 fl">
            export function App(props){<br>
                return(<br>
                &lt;Style&gt;<br>
                &lt;Content /&gt;<br>
                &lt;/Style&gt;<br>
                );};<br><br><br><br>
        </div></div>
        <p>En aquest cas, el component Content tindrà l'estil definit pel component Styles</p>
        <p>Una altre cosa que s'ha de saber, és que si es fa uns estils d'aquesta manera, els atributs que tenen noms amb guió, com font-size, han d'anar sense guions en format camelCase, font-size seria fontSize, margin-left seria marginLeft... També hem de posar els valors com a strings(entre cometes "") i separar cada atribut amb comes,</p>
    </div>
</div>`,
    events:`<div class="row">
    <h1>Events</h1>
    <p>Els events són moments en els que certa interactivitat de l'usuari activa l'execució d'alguna part del codi, com apretar un botó. Hi ade molts tipus: clipboard, composition, keyboard, mouse, selection, touch, wheel, animation...</p>
    <div class="col-12 col-lg-6">
        <h2>Sintaxi dels events al React</h2>
        <p>Com ja saps, React fa servir JSX i aquest s'escriu d'una manera diferent del Javascript. En aquest sentit, els events van escrits en camelCase i a la crida d'aquests no hem de posar un parèntesi final, també hem d'evitar posar cometes "" i fer servir corxeres {} emn el seu lloc, seria una cosa així: onClick={laFuncio}</p>
        <h2>Comunicació de components parents</h2>
        <p>Tenint en compte que els components poden ser cridats tants cops com volguem, l'opció de tenir un sol component quan s'hagi de repetir cert element en el document és la manera més encertada per a aplicar aquesta repetició, ja que l'edició d'aquest mateix component farà que tots els elements que el contenen siguin modificats</p>
        <h2>State data</h2>
        <p>El state data són dades contingudes dins d'un component child, a diferència dels props, que són dades contingudes al component parent. Aquests states fan que un component pugui ser de tipus diferents: stateful, que significa que el component té variables amb les que funciona(normalment amb un hook useState) i stateless, que vol dir que no té cap variable</p>
        <h2>Hooks</h2>
        <p>Els hooks són funcions que es solen fer servir per a fer seguiment de components(un boolean, número de cops que es fa algo...). El hook s'inicialitza així: import {useState} from 'react';. Tingues en compte que useState és un sol hook, hi ha d'altres també com useReaf, useContext o useMemo</p>
        <p>Després, dins del component, fora del return, hem d'inicialitzar la funció amb un array deconstruit. Un exemple seria aquest: const[state, setState] = useState(false);</p>
        <ul>
            <li>state: variable que fa el seguiment de l'estat</li>
            <li>setState: mètode que canvia l'estat</li>
            <li>useState: el hook en si, sempre és useState</li>
            <li>false: el valor per defecte que té l'estat</li>
        </ul>
        <p>Per a fer funcionar el hook després d'això, és fundamental que en algún punt hi hagi: algún element que utilitzi o que depengui del valor de "state" i una crida a la funció "setState" que canviï l'estat de "state"</p>
        </div>
        <div class="col-12 col-lg-6">
        <h2>Prop drilling</h2>
        <p>El prop drilling és l'idea de passar dades entre components fent servir props a través de més d'un nivell, com passar dades d'un component al seu child i després que aquest child el pasi al seu child. Això és poc pràctic, ja que complica les coses innecessàriament</p>
        <p>El prop drilling implica el State lifting, que vol dir passar el codi que determina l'estat d'un component al component parent per a que altres components germans hi tinguin accés(es passa codi d'un lloc a l'altre tal qual)</p>
        <h2>API Context</h2>
        <p>La context API és un api que ens permet passar els estats dels components directament als altres components on els necessitem, sense haver de fer prop drilling</p>
        <p>Per a poder-ho fer servir, hem de crear un component que englobi l'entorn on volem fer servir els estats compartits, inicialitzant en aquest component la api en si amb la comanda: "const VariableContext = React.createContext();"</p>
        <p>Després, hem de fer un array que desi els estats que ens interessa. A l'exemple li direm array1</p>
        <p>A continuació, una fonció que contigui un hook a dins, mira l'exemple:</p>
        <div class="exemple">
            const funcioProveidora = ({children}) => {<br>
                const [llista, setLlista] = React.useState(array1);<br>
                return(<br>
                    &lt;VariableContext value={{llista}}&gt;<br>
                        {children}<br>
                    &lt;VariableContext&gt;<br>
                )<br>
            }<br>
        </div>
        <p>Al final del component hem de exportar això fent: "export const funcioComEsDigui = () => React.useContext(VariableContext)"</p>
        <p>Després, al component on importem, ho fem així: "import {funcioComEsDigui} from "../rutaQueSigui" i dins de la funció del component podem desar les dades importades a una variable així: "const {variableQueSigui} = funcioComEsDigui()" i podrem fer servir les dades al component nou</p>
    </div>
</div>`,
    concep:`<div class="row">
    <h1>Conceptes avançats React</h1>
    <p>En aquest mòdul aprendrem més sobre React</p>
    <div class="col-12 col-lg-6">
        <h2>Llistes</h2>
        <p>Al React es poden fer llistes que es poden transformar amb el mètode map(), que actua sobre un array. El map() agafa els elements de l'array i filtra les dades de tots els elements per a tenir només el que ens interessa, per exemple un array amb objectes que tenen 5 variables a dins podem fer que ens doni info de2 de les variables de cada objecte</p>
        <div class="exemple">
            function Component(){<br>
                const llistaFiltrada = objectesComplets.map(objecte => {<br>
                    const objecteFiltrat = $ {objecte.nom} - $ {objecte.preu}<br>
                    return &lt;li&gt;{objecteFiltrat}&lt;/li&gt;<br>
                })<br>
                return(<br>
                    &lt;div&gt;<br>
                    &lt;ul&gt;<br>
                    {llistaFiltrada}<br>
                    &lt;/ul&gt;<br>
                    &lt;/div&gt;<br>
                )}<br>
        </div>
        <p>Aquest component retornaria una llista de l'array objectesComplets amb les dades nom i preu de cada objecte</p>
        <h2>Keys</h2>
        <p>Les keys són identificadors per a localitzar items, cosa que ajuda al react a tractar elements quan hi ha algún canvi. Les keys s'implementen com a una propietat dels elements html que gestiona React i l'ajuden a saber quins elements nous s'han creat, esborrat o mogut. Una mala implementació de les keys afecta negativament al rendiment, així que utilitza-les bé</p>
        <h2>Components controlats</h2>
        <p>Els components controlats o controlled components són components dels quals es pot controlar el seu estat(variables dins del component) mitjançant la pàgina compilada i carregada. Un exemple seria els formularis, que podem fer que l'estat canviï amb un input en qualsevol moment amb una funció handleChange. Fent això, assegurem que les dades de l'estat del react i del formulari siguin sempre equivalents i es puguin validar al moment. Això ho fem amb les següents lìnies de codi dins  l'estat del component:</p>
        <div class="exemple">
            const [value, setValue] = useState("");<br>
            const handleChange = (e) => {<br>
            setValue(e.target.value)<br>
            }<br>
        </div>
        <p>Després d'aquest codi, hem de fer que cada input executi la funció handleChange a cada canvi, cosa que fem amb la propietat onChange. Aquest tròs de codi és vàlid per un sol valor, si es vol fer més s'ha de repetir codi</p>
        <p>No obstant, hi ha alguns inputs d'un formulari que no poden ser controlats, com el type="file"</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Formularis</h2>
        <p>Com has vist abans, els formularis a React funcionen diferent, aquí veuràs una llista de característiques que ajuden a entendre-ho</p>
        <ul>
            <li>Per a donar un propósit al formulari, a l'etiqueta &lt;form&gt; hem de posar la propietat onSubmit={handleSubmit} i a l'estat del component posar aquesta funció handleSubmit i definir què farà</li>
            <li>Podem evitar que la pàgina es recarregui posant un paràmetre a la funció handleSubmit(per exemple, e) i cridar dins de la funció al mètode e.preventDefault();</li>
            <li>Buidem els camps del formulari fent un set amb un paràmetre de buit, per exemple: setName("")</li>
            <li>Podem inhabilitar el botó de submit si hi ha camps buits fent que aquest tingui la propietat disabled i com a valor un invers dels inputs requerits(amb un ! al davant)</li>
            <li>Si volem que clicar un label posi el cursor de navegació(no el ratolí) sobre el camp que descriu, posem una propietat htmlFor al label i com a valor la id de l'input</li>
        </ul>
        <p>Noteta: per a fer un if dins del html hem de fer-ho dins de {} i allà podem carregar components. Es recomana el if ternari</p>
        <h2>Context</h2>
        <p>El context és la solució al props drilling, una eina que permet passar props a un nivell baix des d'un nivell alt sense passar per tots els nivells del mig que no ho necessiten</p>
        <p>És una manera de compartir dades de manera global a tota l'app. Per a fer que funcioni, hem de fer un component que actúi com a context i posar un codi semblant a aquest:</p>
        <div class="exemple">
            import{createContext, useContext, useState} from "react";<br>
            const UserContext = createContext(undefined);<br>
            export const UserProvider = ({children}) => {<br>
                const [user] = useState({<br>
                    name: "Charlie",<br>
                    email: "charlieharper@example.com"<br>
                })<br>
                return &lt;UserContext.Provider value={{user}}&gt;&lt;/UserContext.Provider&gt;}<br>
                export const useUser = () => useContext(UserContext);
        </div>
        <p>En aquest exemple, l'objecte user l'hem creat com a exemple, normalment això requereix obtenir dades d'una altre banda fent un "fetch"</p>
        <p>Finalment, per a poder importar aquest component Context fem import de {UserProvider, useUser} from l'arxiu que sigui, hem de posar l'etiqueta &lt;UserContext.Provider&gt; wrapping el component &lt;App /&gt; dins el component Root. Finalment podem fer servir el context definint una variable que executi la funció "useUser()"</p>
        <p>Noteta: el paràmetre value que té el component a retornar &lt;ElQueSigui.Provider&gt; ha de tenir com a valor un objecte que té les variables inicialitzades abans amb la funció useState(). Mira l'exemple i segur que ho entens</p>
    </div>
</div>`,
    jsx:`<div class="row">
    <h1>JSX en profunditat</h1>
    <p>Si no recordes malament, JSX és una extensió de Javascript que és utilitzada per react per a descriure l'aparença de la UI. El que fa react per a renderitzar la web, és traduir els components en objectes javascript que anomena "elements"</p>
    <div class="col-12 col-lg-6">
        <h2>Composició de components amb children</h2>
        <p>A part de la manera tradicional de posar components dins d'altres fent que siguin children, hi ha una altre manerade fer que components siguin children</p>
        <p>Consisteix en invocar un component ja definint el seu contingut i que aquest element invocat tingui un objecte {props.children} a dins. Mira l'exemple:</p>
        <div class="exemple exempleMeitat" style="margin:5px; width:48%">
            function Dialog(props){<br>
                return(<br>
                    &lt;div className="dia"&gt;<br>
                    {props.children}<br>
                    &lt;/div&gt;<br>
                )<br>
            }
        </div>
        <div class="exemple exempleMeitat">
            function ConfirmDialog(props){<br>
                return(<br>
                    &lt;Dialog color="red"&gt;<br>
                        &lt;h1 className="Dialog-title"&gt;<br>
                        The confirmation is here<br>
                        &lt;/h1&gt;<br>
                    &lt;/Dialog&gt;<br>
                )}
        </div>
        <p>En aquest exemple, el contingut de ConfirmDialog es renderitza dins del component Dialog "substituïnt" el {props.children}</p>
        <p>El contingut de {props.children}, o el que és el mateix, el que el substitueix, pot ser qualsevol codi en JSX, que poden ser, text, funcions, variables, components... De tot</p>
        <h2>Manipulació de children</h2>
        <p>Per a manipular el contingut que apareix a {props.children}, ho podem fer amb dos APIs de React que són: React.cloneElement i React.children</p>
        <p>React.cloneElement ens permet modificar o ampliar les propietats del children i extendre la seva funcionalitat. Accepta dos arguments, el primer és l'element a clonar i el segon és un objecte que conté les propietats noves o modificades</p>
        <p>React.children permet manipular els elements dins del children tractant-los com un array. Un mètode molt utilitzat amb aquesta API és React.children.map per a tractar els elements en un bucle i actuar sobre cada un</p>
        <p>Noteta: recorda que pots fer servir el spread operator amb arrays, objectes i strings per a copiar dades dels objectes originals com a propietats</p>
        <h2>Higher Order Components</h2>
        <p>Els Higher Order Components són components que en si són una funció que agafa un component i en retorna un de nou, canviant o extenent la seva funcionalitat, podent definir llògica al HOC i compartint-la amb diversos components</p>
        <p>La sintaxi d'un HOC i de la seva invocació seria així</p>
        <div class="fl">
            <div class="exemple exempleMeitat">
                const ComponentHoc = (ComponentWrap) => {<br>
                    const nousProps = {color: blue}<br>
                    return(originalProps) => {<br>
                        return &lt;ComponentWrap nousProps={nousProps} {...originalProps} /&gt;;<br>
                    };};
            </div>
            <div class="exemple exempleMeitat">
                const ComponentMillorat = ComponentHoc(ComponentWrap);<br>
                const Component = (props) =>{<br>
                return &lt;ComponentMillorat /&gt;;}
            </div>
        </div>
        <p>Al requadre de l'esquerra hi ha el HOC i al de la dreta hi és l'aplicació del HOC al component existent anomenat ComponentWrap</p>
        <p>Els HOC han d'ampliar funcionalitat, no canviar-la, així que manre no fagin una funció HOC de nom ComponentWrap, tot anirà bé</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Render Props</h2>
        <p>La tècnica de Render Props és una manera de renderitzar dades que proporciona un component fent que aquest no retorni html sinó una funció render amb les dades com a paràmetre. Després és suficient amb posar la propietat render a la crida del component i que tingui valor una funció tenint com a paràmetre un objecte(les dades agafades del component) que retorna el html</p>
        <p>Un exemple d'implementació seria:</p>
        <div class="exemple">
            conts DataFetcher =({render,url}) => {<br>
                const [data, setData] = useState([]);<br>
                useEffect(()=>{<br>
                    setData(["pizza","hamburguesa","caldo"]);<br>
                },[]);<br>
                return render(data)<br>
            }<br>
            const Counter = () =>{<br>
            return(<br>
                &lt;DataFetcher url="www.hola.com" render={(data) => &lt;p&gt;{data.length} coses de menjar&lt;/p&gt;}/&gt;<br>
            );};
        </div>
        <h2>Llibreries de testing</h2>
        <p>El react té llibreries que automatitzen el procés de testejar el codi per a que funcioni correctament. Abans de res però, llistem algunes bones pràctiques en el testejat</p>
        <ul>
            <li>Evitar incloure detalls de l'implementació</li>
            <li>Treballar amb nòduls del DOM</li>
            <li>Simular un ús real de l'app</li>
            <li>Fer que els tests es puguin mantenir durant la major part del desenvolupament possible</li>
        </ul>
        <p>Una eina per testejar el react s'anomena Jest. Jest és una eina que automatitza tests i dóna accés a un DOM virtual propi anomenat jsdom, que és una simplificaió del DOM real. Jest té una bona velocitat d'iteració i característiques poderoses com fer Mocking per a simplificar funcions</p>
        <p>React Testing Library és una altre eina per a testejar react, té moltes utilitats i compleix les millors pràctiques de testing. Una utilitat és la de testejar components independentment sense dependre en detalls d'implementació</p>
        <p>Els tests que volem fer han de posar-se a l'arxiu App.test.js que crea el react per defecte. Un exemple d'un test seria això:</p>
        <div class="exemple">
            test("nom del test",() => {<br>
                render(&lt;App /&gt;);<br>
                const elementBuscat = screen.getTextBy("JSX en profunditat");<br>
                expect(elementBuscat).toBeInDocument();<br>
            });
        </div>
        <ul>
            <li>test():és la funció que declara el codi com un test. Accepta dos paràmetres, el nom del test i una funció amb el codi a testejar</li>
            <li>render(&lt;App /&gt;): l'invocació del componenta testejar</li>
            <li>screen.getTextBy("JSX en profunditat"): és una funció que busca cert text en pantalla, en aquest cas el text és "JSX en profunditat". Aquesta cerca s'ha desat a la variable elementBuscat</li>
            <li>expect(elementBuscat).toBeInDocument(): la part de expect(elementBuscat) és iniciar una expectativa sobre certa variable, en aquest cas elementBuscat i la part de toBeInDocument() és el que s'espera de la variable, en aquest cas estar al document</li>
        </ul>
        <h2>Integració contínua</h2>
        <p>L'integració contínua és una tècnica que fan servir els desenvolupadors en la que es puja múltiples cops el codi al servidor al dia. Això executa certs scripts automàticament que testejen el codi i intenten dir on està l'error</p>
        <p>Aquesta tècnica és popular, ja que generalment aumenta la productivitat fent que cada treballador se centri en un problema diferent a petita escala i es troben bugs més fàcilment</p>
    </div>
</div>`,
    hooks:`<div class="row">
    <h1>Hooks</h1>
    <p>En aquest apartat mirarem els hooks de React, que són funcions de react que faciliten l'escriptura i manteniment del codi</p>
    <div class="col-12 col-lg-6">
        <h2>useState</h2>
        <p>useState és un hook que controla i consulta els estats d'un component. S'inicialitza amb un array desestructurat que té com a valor el hook en si. Mira l'exemple i ho entendràs millor</p>
        <div class="exemple">
            const [variable, setVariable] = useState("tronc")
        </div>
        <p>En aquest exemple has de tenir en compte aquests 3 elements:</p>
        <ul>
            <li>variable: és el nom de la variable que forma part del state del component</li>
            <li>setVariable: és la funció que permet un canvi de valor de la variable. S'ha de posar el nou valor com a paràmetre per a que funcioni quan s'invoca</li>
            <li>useState("tronc"): és el hook en si; el paràmetre és el valor inicial de la variable</li>
        </ul>
        <p>Hi ha una manera òptima de fer servir el setVariable en objectes dels quals només volem fer un canvi, que consisteix en fer una còpia de l'objecte, fer el canvi i retornar l'objecte canviat. Mira l'exemple:</p>
        <div class="exemple">
            setVariable(prevState => {return {...prevState, name:"Joseph"}});
        </div>
        <p>A l'exemple, el paràmetre prevState és la còpia de l'objecte actual, ...prevState fa referència a tots els elements de l'objecte no alterats i a partir d'allà podem fer els canvis que volguem. Hi ha altres maneres d'alterar objectes amb el useState però aquesta és la millor</p>
        <h2>useEffect</h2>
        <p>El useEffect és un hook que gestiona efectes, que són parts d'una funció que tenen algún canvi sobre variables de fora de la funció o que criden un mètode d'una API(aquestes funcions són anomenades funcions impures i les que no criden cap API són funcions pures). Alguns exemples de crides a API són: el console.log, fer un fetch o accedir a la geolocalització</p>
        <p>La sintaxi d'un useEffect seria similar a això:</p>
        <div class="exemple">
            useEffect (() => {document.title='Pàgina de &{user.current}'}, [user.current])
        </div>
        <p>Els elements que hi ha a aquesta línia de codi tenen les segûents funcions:</p>
        <ul>
            <li>useEffect: és el hook en si, una funció que requereix com a paràmetre una altre funció a dins sense paràmetres com a primer paràmetre i un array com a segon paràmetre</li>
            <li>{document.title='Pàgina de &{user.current}'}: és la funció que executa aquest hook, en aquest cas canviar el valor de document.title</li>
            <li>[user.current]: el segon paràmetre de useEffect, anomenat dependency array. Quan la funció s'executa per primer cop useHook desa el valor de totes les variables dins d'aquest array, si la funció es torna a cridar, el hook compara el valor en aquell moment i el valor que tenia en el moment que ho ha desat abans i només executa la funció si al menys un valor ha canviat. Si deixem un array buit la funció només serà executada el primer cop</li>
        </ul>
        <h2>Regles dels hooks</h2>
        <p>Els hooks de React tenen algunes normes que s'han de seguir per a que el seu funcionament estigui garantitzat, que serien aquestes:</p>
        <ul>
            <li>Cridar hooks només dins de components i no des de fora d'un component en javascript pur</li>
            <li>Els hooks no s'han de cridar a la part d'un return d'un component, si és possible s'han de posar a les primeres línies del component</li>
            <li>Es poden fer servir múltiples state i effect hooks</li>
            <li>quan es fa una crida d'un hook amb una condició, la condició en si ha d'estar dins el hook i no al revés</li>
        </ul>
        <h2>useRef</h2>
        <p>useRef és un hook que permet crear objectes que fan referència a elements del DOM dins de react. Per a fer-ho necessitem 2 elements: </p>
        <ul>
            <li>Una variable que actúa com a l'objecte que fa referència a l'element del DOM, s'escriuria així: "const objecte = React.useRef(null)"</li>
            <li>L'etiqueta de html a la qual fa referència, s'escriuria així: "&gt;input ref={objecte} type='text' /&lt;"</li>
        </ul>
        <p>Un cop iniciats aquests codis, les funcions que es fagin servir a l'objecte "objecte" com per exemple "objecte.current.focus()" actuaràn sobre l'input al qual hem aplicat la referència</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Fetching</h2>
        <p>El fetching és l'acció de treure informació d'algún lloc per a poder-la fer servir al codi. Al javascript es fa amb la funció Fetch i utilitza molt activament la programació asincronitzada</p>
        <p>Un cop executada la funció fetch, el codi següent se segueix executant a la vegada que la funció fetch i els seus subseqüents. Mira l'exemple:</p>
        <div class="exemple">
            console.log("Primera línea")<br>
            fetch("https://www.exemple.com/api/?user=1").then(response => response.json()).then(data => console.log(data))<br>
            console.log("Línea segona")
        </div>
        <p>En aquest exemple, "Primera línea" i "Línea segona" anirien seguides i les accions del fetch se seguirien executant sense parar el codi</p>
        <p>Com pots haver deduït, el fetch fa servir una API del navegador, per tant per a fer-lo servir a react, convé ficar-lo dins d'un useEffect. La manera òptima de fer-ho seria posant el fetch en si en una funció i cridar-la dins del useEffect, mira l'exemple:</p>
        <div class="exemple">
            const fetchData = () => {<br>
                fetch("https://www.exemple.com/api/?user=1").then(response => response.json()).then(data => setUser(data))}<br>
            useEffect (() => {fetchData()};<br>
            , []);
        </div>
        <p>També cal tenir en compte que el fetch pot fallar o anar tard, així que convé que el return del component tingui un format condicional d'aquesta manera: </p>
        <div class="exemple">
            return Object.keys(dades).length > 0 ? (<br>
                &lt;div&gt;<br>
                &lt;h1&gt;Les dades són{dades.name[0]}&lt;/h1&gt;<br>
                &lt;/div&gt;<br>
            ) : (<br>
                &lt;div&gt;<br>
                &lt;h1&gt;No hi ha dades encara&lt;/h1&gt;<br>
                &lt;/div&gt;<br>
            )
        </div>
        <p>En aquest exemple, el component renderitzat és diferent si el fetch falla i no proporciona l'objecte dades</p>
        <h2>useReducer</h2>
        <p>El hook useReducer és semblant al useState però utilitza una funció personalitzada per a canviar els seus valors. Se sol fer servir amb objectes, arrays i altres variables complexes. Mira l'exemple:</p>
        <div class="exemple">
            const reducer = (estat, action) => {<br>
                if(action.type === "buy") return {money: estat.money-10};<br>
                return estat;<br>
            }<br>
            function App(){<br>
                const initialState = {money: 100};<br>
                const [state, dispatch] = useReducer(reducer, initialState)<br>
                return(<br>
                    &lt;h1&gt;Diners: {state.money}&lt;/h1&gt;<br>
                    &lt;button onClick={() => dispatch({type: "buy"})}&gt;Comprar&lt;/button&gt;<br>
                )};<br>
        </div>
        <ul>
            <li>state: variable on s'emmagatzemen els valors de l'estat</li>
            <li>dispatch: funció a la que s'ha de cridar quan es vol executar la funció del canvi de valor</li>
            <li>useReducer: hook en si</li>
            <li>reducer: funció del canvi de valor, la que s'executa quan es crida la funció dispatch als elements renderitzats</li>
            <li>initialState: valor inicial de l'estat, en aquest cas un objecte que té a dins la variable money amb valor 100</li>
            <li>estat: paràmetre de la funció reducer que és el pont d'accés als valors de state</li>
            <li>action: segon paràmetre de la funció reduce, definim de quin tipus és a la crida de dispatch i la funció reducer actuarà en conseqüència</li>
        </ul>
        <h2>Hooks personalitzats</h2>
        <p>Per a acabar amb els hooks, has de saber que es poden crear hooks personalitzats que no són més que funcions que es desen en el seu propi fitxer i que es poden importar com un component simple</p>
        <p>La diferència entre un component simple i un hook personalitzat, és que el component dona un return amb elements html renderitzables mentre que el hook personalitzat no, és una simple funció. Per a que el hook personalitzat sigui "vàlid", ha de fer servir al menys un hook de react</p>
    </div>
</div>`
}
let final={
    intro:`<div class="row">
    <h1>Introducció a l'entrevista</h1>
    <p>En aquesta part aprenem la preparació per l'entrevista i una mica de ciència computacional</p>
    <div class="col-12 col-lg-6">
        <h2>L'entrevista en si</h2>
        <p>L'entrevista pot definir-se com una evaluació tècnica en la que es resol un problema picant codi. Un es pot preparar seguint 4 principis:</p>
        <ul>
            <li>Preparar-se per a tenir l'èxit: bàsicament preparar-se, anar a l'examen havent estudiat</li>
            <li>Resoldre el problema conceptualment primer: tenir un concepte de què es vol resoldre i com abans d'escriure codi. Ajudar dividir el problema en parts i resoldre cada una per separat</li>
            <li>Fer servir les eines adequades: no inventar coses innecessàries i utilitzar solucions ja inventades</li>
            <li>Optimitzar codi: fer que el codi fagi servir el mínim de recursos possible reduint tamany de codi, número de variables i bucles innecessaris, entre d'altres</li>
        </ul>
        <p>El procés d'una entrevista pot contenir aquestes fases:</p>
        <ul>
            <li>Screening: el primer pas, l'empresa coneix el treballador i el treballador ha de mostrar interès en el rol. Unes preguntes bones que pot fer el treballador seria: Quin és el rol? Quin llenguatge de programació es fa servir a l'empresa? Quins projectes es tenen en ment? Què he d'esperar del procés d'entrevistes?</li>
            <li>Quiz: es fan preguntes de coneixement al treballador per a conèixer el nivell tècnic</li>
            <li>Test en codi: es fa l'evaluació tècnica descrita abans. Es proposa un problema i el treballador l'ha de resoldre</li>
        </ul>
        <h2>Pseudocodi</h2>
        <p>El pseudocodi és una manera de representar codi de programació en una manera més fàcil d'entendre per a persones fent servir un llenguatge més humà</p>
        <p>Es fa servir per a representar la resolució d'un problema abans d'escriure el codi en si</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Memòria</h2>
        <p>La memòria total d'un ordinador està dividida en 3 memòries:</p>
        <ul>
            <li>Memòria principal: es compon per la ROM i la RAM, emmagatzema dades que es necessiten processar ràpidament</li>
            <li>Memòria secundària: engloba tot emmagatzematge extern, ja sigui discs durs, pen drives, el núvol... És la més lenta</li>
            <li>Cache: una memòria que emmagatzema instruccions per a que si la CPU les torna a necessitar estiguin a prop i per tant ho pugui fer més ràpid</li>
        </ul>
        <h2>Complexitat de temps</h2>
        <p>Per a evaluar quan triga un procés a executar-se no es sol fer servir temps ordinari com minuts o segons, es fan servir fòrmules que defineixen com afecta a un procés l'augment d'elements. Serien aquestes fòrmules:</p>
        <ul>
            <li>O(1): el procés sempre triga el mateix independentment del nombre d'elements</li>
            <li>O(n): el procés té una durada que escala al mateix nivell que el nombre d'elements</li>
            <li>O(log(n)): el procés escala a mida que els elements augmenten però té mètodes per a que no escali tant</li>
            <li>O(n^2): el temps augmenta molt a mida que s'afegeixen elements, un sol element nou duplica el temps a trigar. Un similar seria "O(n^3)" que un element nou el triplica</li>
        </ul>
        <p>Alguna manera de reduïr la complexitat seria evitar bucles innecessaris</p>
        <h2>Complexitat d'espai</h2>
        <p>A part del temps que triga un procés, s'ha de tenir en compte també l'espai que ocupa a la memòria. Per a definir la complexitat es fa servir la mateixa notació que amb la complexitat de temps</p>
        <p>alguna manera de reduïr la complexitat seria fer funcions simples i no crear variables innecessàries</p>
    </div>
</div>`,
    dades:`<div class="row">
    <h1>Estructures de dades</h1>
    <p>En aquesta part aprenem l'evaluació d'estructures de dades que es solen trobar en entrevistes</p>
    <div class="col-12 col-lg-6">
        <h2>Dades Bàsiques</h2>
        <p>Les estructures de dades són sistemes que desen dades en forma d'objecte a la memòria. Poden ser de dos tipus:</p>
        <ul>
            <li>Mutables: tenen dades que poden ser modificades. Són més difícils de programar</li>
            <li>Immutables: tenen dades que no seràn modificades</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <p>A part d'aquests tipus, podem classificar les estructures de dades en aquestes categories:</p>
        <ul>
            <li>Estructures lineals: són estructures que emmagatzemen les dades seguint un ordre lineal</li>
            <ul>
                <li>Estructura estàtica: hi entra només l'Array</li>
                <li>Estructura dinàmica: hi entren la Queue, el Stack i la llista enllaçada</li>
            </ul>
            <li>Estructures no lineals: són l'arbre i el gràfic</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Estructures definides</h2>
        <p>Ara veurem cada estructura en el seu propi apartat exepte l'array que ja el conèixes</p>
        <h3>Llistes</h3>
        <p>Desa elements d'una manera ordenada i pot crear-se mitjançant un array o una llista enllaçada. La llista enllaçada és un conjunt d'elements en el que cada element té dos parts: el valor i l'adreça del següent element</p>
        <h3>Sets</h3>
        <p>Desa elements d'una manera desordenada, el valor i la key són el mateix. Canviar un valor dins d'un set realment el que farà és esborrar-lo i crear-ne un de nou. Els sets són molt ràpids, revisen a una eficiència de O(1)</p>
        <h3>Stacks</h3>
        <p>Els stacks són estructures que permeten l'acomulació de dades de manera lineal però que només es poden treure dades de l'últim element adherit</p>
        <h3>Queue</h3>
        <p>Les queues són semblants als stacks en el sentit que emmagatzemen en forma lineal i no es poden tocar el elements del mig, la diferència és que ara només podem treure dades del primer element adherit</p>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Estructures de dades avançades</h2>
        <h3>Arbres</h3>
        <p>Els arbres són estructures de dades complexes que desen les dades en forma d'arbre, tenint dades que actuen com a partent, altres com a childs i d'altres fent les dues coses. Aquests parents i childs estan connectats per nòduls</p>
        <p>Els nòduls que només fan de child també reben el nom de leaf, el quue fa només de parent és el root i els que comparteixen parent són siblings. La mida de l'arbre es determina pel nombre de nodes i l'alçada és la distància entre el leaf més llunyà i el root</p>
        <h3>Hash tables</h3>
        <p>Les hash tables són estructures que tenen una quantitat finita d'elements. Cada element té una key i un valor. Quan es vol afegir un element de fora, a aquest element se li aplica una funció que el comprimeix(el hashing) i entra dins la taula</p>
        <h3>Heaps</h3>
        <p>El heap es podria definir com una fusió entre l'arbre i la queue, i poden donar prioritat de dues maneres diferents: al valor més alt o al valor més baix</p>
        <h3>Gràfics</h3>
        <p>Els gràfics sòn estructures de dades que representen l'informació d'una manera molt visual. Es podrien categoritzar com a arbres sense una arrel definida i amb més interconnectivitat</p>
    </div>
</div>`,
    algo:`<div class="row">
    <h1>Algoritmes</h1>
    <p>En aquesta part aprenem el concepte i l'ús d'algoritmes i l'implementació en codi per a resoldre problemes</p>
    <div class="col-12 col-lg-6">
        <h2>Algoritmes d'ordre</h2>
        <p>Els algoritmes d'ordre actúen sobre arrays i tenen l'objectiu d'ordenar-lo en ordre ascendent o descendent. Els més bàsics són:</p>
        <ul>
            <li>Selection sort: cerca en tots els elements de la llista el més petit i el canvia amb l'element en primera posició, repeteix fins que la llista està ordenada. Sol tenir una complexitat de temps de O(N^2) i una d'espai de O(1)</li>
            <li>Insertion sort: compara dos elements junts i els canvia de posició si el de la dreta és més petit, repeteix fins que la llista està ordenada</li>
            <li>Quick sort: l'algoritme selecciona l'element del mig de l'array i ho compara amb tots els elements, posa als més grans a la dreta i als més petits a l'esquerra. En aquests dos grups repeteix el procés recursivament fins que la llista està ordenada. Sol tenir una complexitat de temps de O(N log N) i una d'espai de O(N)</li>
        </ul>
        <h2>Algoritmes de cerca</h2>
        <p>Els algoritmes de cerca busquen elements que compleixin certes condicions. Els més bàsics serien:</p>
        <ul>
            <li>Linear search: consulta cada element de manera lineal. Té una complexitat de temps entre O(1) i O(N)</li>
            <li>Binary search: divideix la llista en meitats i compara si l'element cercat pot estar a un o a l'altre costat i després fa el mateix amb la meitat escollida. Repeteix fins a localitzar l'element o retorna null. Té el desavantatge que la llista ha de ser ordenada abans. Sol tenir una complexitat de temps de O(log N)</li>
        </ul>
    </div>
    <div class="col-12 col-lg-6">
        <h2>Dividir i conquerir</h2>
        <p>El dividir i conquerir no és exactament un algoritme, és més aviat un paradigma per a resoldre problemes. Consisteix en dividir el problema(o element) en meitats recursivament i resoldre cada petita cosa individualment. Finalment si cal, es combinen totes les solucions per a formar la solució final</p>
        <h2>Recursió</h2>
        <p>L'idea de recursió és el repetir certa acció múltiples cops fins que s'arriba a la solució. Normalment en codi es fa amb una funció que tingui un format condicional i una crida a si mateixa alterant el paràmetre</p>
        <h2>Programació dinàmica</h2>
        <p>La programació dinàmica és una manera d'optimitzar la cerca de solucions mitjançant memoització(desar resultats de problemes) i dividir els problemes en parts més petites</p>
        <h2>Algoritmes avars</h2>
        <p>Els algoritmes avars busquen sempre la solució més ràpida aparent, ignorant paràmetres que podrien donar una solució més òptima</p>
    </div>
</div>`
}