﻿define(
({
		viewer: {
			loading: {
				step1: "LASTER INN PROGRAM",
				step2: "LASTER INN DATA",
				step3: "INITIALISERER OMVISNINGEN",
				loadBuilder: "BYTTER TIL MODUS FOR BYGGEVERKTØY",
				fail: "Beklager, innlastingen av kartomvisningen mislyktes",
				failButton: "Prøv på nytt"
			},
			errors: {
				boxTitle: "Det har oppstått en feil",
				portalSelf: "Alvorlig feil: Kan ikke hente portalkonfigurasjon",
				invalidConfig: "Alvorlig feil: Ugyldig konfigurasjon",
				invalidConfigOwner: "Alvorlig feil: Ugyldig konfigurasjon (autorisert eier kreves)",
				invalidConfigNoWebmap: "Alvorlig feil: Ugyldig konfigurasjon (webkart- eller applikasjons-ID ikke angitt i index.html)",
				createMap: "Kan ikke opprette kart",
				invalidApp: "Alvorlig feil: Kan ikke laste inn applikasjonen",
				noLayer: "Webkartet inneholder ikke noe gyldig datalag for Map Tour.",
				noLayerMobile: "Velkommen til webapplikasjonen Map Tour. Applikasjonen er ikke konfigurert. Map Tour-byggeren støttes ikke på mobile enheter.",
				noLayerView: "Velkommen til webapplikasjonen Map Tour.<br />Applikasjonen er ikke konfigurert ennå.",
				appSave: "Feil under lagring av webapplikasjonen",
				mapSave: "Feil under lagring av webkartet",
				featureServiceLoad: "Feil ved innlasting av geoobjektstjeneste",
				notAuthorized: "Du har ikke tillatelse til å bruke denne applikasjonen",
				oldBrowserTitle: "Webleseren støttes ikke fullt ut",
				noBuilderIE8: "Map Tour-byggeren støttes ikke på Internet Explorer før versjon 9.",
				ie10Win7Explain: "Det interaktive byggeverktøyet for Map Tour støttes ikke i Internet Explorer 10 på Windows 7 når datakilden er en geoobjektstjeneste med vedlegg. For å bruke en geoobjektstjeneste med vedlegg må du <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manuelt tvinge dokumentmodusen til å bruke Internet Explorer 9-standarder</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>nedgradere til Internet Explorer 9</a> eller oppgradere til Windows 8.",
				oldBrowserExplain: "Denne nettleseren støtter ikke automatisk generering av miniatyrbilder fra bildene du laster inn i map tour. Du kan opprette map tour med denne nettleseren, men du må oppgi et eget miniatyrbilde for hvert av bildene du laster opp.",
				oldBrowserExplain2: "Hvis du vil få en bedre opplevelse, kan du <a href='http://browsehappy.com/' target='_blank'>oppgradere webleseren</a> eller <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>aktivere Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserExplain3: "Byggeverktøyet for Map Tour fungerer ikke med Internet Explorer 10 på Windows XP.",
				oldBrowserClose: "Lukk"
			},
			mobileHTML: {
				showIntro: "VIS TITTEL",
				hideIntro: "SKJUL TITTEL",
				navList: "Liste",
				navMap: "Kart",
				navInfo: "Bilder",
				introStartBtn: "Start"
			},
			desktopHTML: {
				storymapsText: "Et fortellingskart",
				builderButton: "Gå over til byggermodus",
				bitlyTooltip: "Få en kort kobling til applikasjonen"
			},
			builderHTML: {
				panelHeader: "KONFIGURASJON AV APPLIKASJON",
				buttonSave: "LAGRE",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Innstillinger",
				buttonView: "Visningsmodus",
				buttonItem: "Åpne webapplikasjonselementet",
				buttonHelp: "Hjelp",
				buttonOrganize: "Organiser",
				buttonAdd: "Legg til",
				buttonImport: "Importer",
				buttonImportDisabled: "Importfunksjonen er ikke tilgjengelig når du bruker en geoobjektstjeneste med vedlegg",
				dataEditionDisabled: "Dataredigering er deaktivert i CSV-datakilden",
				dataSourceWarning: "Map Tour-datalaget er endret. Hvis ID-ene for geoobjektene er endret, må du tilbakestille rekkefølgen og skjulte punkt ved hjelp av <b>Organiser</b>. Hvis feltnavnene er endret, må du tilbakestille feltinnstillingene i <b>kategorien Data i Innstillinger</b>.",
				dataPicError0a: "Denne omvisningen har <b>%NB%</b> bilde-URLer som ikke samsvarer.",
				dataPicError0b: "Denne omvisningen kan ha <b>%NB%</b> bilde-URLer som ikke samsvarer.",
				dataPicError1: "Map Tour krever nå at en bilde-URL slutter med en av de følgende etternavnene: .jp(e)g, .png, .gif eller .bmp.",
				dataPicError2: "Dette kravet påvirker ikke Map Tours som allerede er publisert. For å bruke den interaktive byggeren må du imidlertid først løse URL-problemet ved å gjøre ett av følgende:",
				dataPicError3: "Rediger URLer",
				dataPicError4: "Dette legger til <i>#isPicture</i> helt til slutt i bilde-URLer som ikke støttes. De fleste servere støtter tillegg til URLer, men så fort du har utført denne handlingen, bør du kontrollere at de oppdaterte bilde-URLene fungerer ved å navigere gjennom punktene. Hvis hvert bilde lastes inn, kan du nå lagre Map Tour.Hvis <b>bildene er ødelagt, lagrer du ikke Map Tour</b>. Da laster du inn byggeren på nytt og utfører den andre handlingen.",
				dataPicError5: "Begrens omvisningen til bilder",
				dataPicError6: "Dette alternativet gjør at alle URLene regnes som bilder, men du kan ikke legge til videoen med den interaktive byggeren. Denne handlingen kan angres hvis du bestemmer deg for å legge til video i fremtiden.",
				dataPicError7: "Din Map Tour er begrenset til bilder, videoer kan ikke brukes. Hvis du bestemmer deg for å fjerne den begrensningen, kontrollerer du at bildene fortsatt lastes inn korrekt før du lagrer Map Tour. Du kan gjenopprette begrensningen senere hvis du har behov for det.",
				dataPicError8: "Fjern bildebegrensning",
				dataPicError9: "Hvis disse URLene peker mot videoer, kan du ignorere denne advarselen. Hvis de peker mot et bilde, må du utføre en av disse to handlingene:",
				modalCancel: "Avbryt",
				modalApply: "Bruk",
				organizeHeader: "Organiser omvisningen",
				organizeGeneralCaption: "Bruk dra og slipp for å sortere omvisningspunkter",
				organizeDelete: "Slett",
				organizeHide: "Skjul",
				organizeReset: "Tilbakestill rekkefølge og skjulte punkt",
				addMaxPointReached: "Du har nådd maksimalt antall punkter som er tillatt av ikonene som er valgt, og kan ikke legge til flere omvisningspunkter.<br /><br />Vær oppmerksom på at du må laste inn applikasjonen på nytt hvis du sletter eksisterende punkter.",
				addMaxPointReachedMobile: "Beklager, du har nådd det maksimale antallet autoriserte punkter og kan ikke legge til dette bildet.",
				addClose: "Lukk",
				addHeader: "Legg til et nytt omvisningspunkt",
				addTabPicture: "Medier",
				addTabInformation: "Informasjon",
				addTabLocation: "Plassering",
				addSelectCaption: "Velg eller slipp bilde",
				addNoteVideo: "Se i Hjelp for instrukser om å bruke videoer",		
				addSelectCaptionNoFileReader: "Velg bilde",
				addChangePhoto: "Endre bilde og miniatyrbilde",
				addPictureResolutionIntro: "Bildeoppløsningen er høyere enn nødvendig:",
				addPictureResolutionOldBrowser: "Bildeoppløsningen er høyere enn nødvendig. Få mest mulig ut av Map Tour ved å angi en oppløsning som er lavere enn %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Endre bildeoppløsningen til %RESOLUTION%",
				addPictureResolutionKeep: "Behold den opprinnelige bildeoppløsningen på %RESOLUTION%",
				addSelectThumbnail: "Velg miniatyrbilde",
				addNoThumbSelected: "Du har ikke valgt noe miniatyrbilde",
				addThumbSelected: "Valgt",
				addCameraSettingsHeader: "KAMERAINNSTILLINGER",
				addThumbnailHeader: "MINIATYRBILDE",
				addLabelPicUrl: "Bilde",
				addLabelThumbUrl: "Miniatyrbilde",
				addTextPlaceholderUrl: "Angi en bilde-URL",
				addTextPlaceholderUrl2: "Angi URL for YouTube-side",
				addTextPlaceholderUrl3: "Angi URL for Vimeo-side",
				addTextPlaceholderUrl4: "Angi URL for innebygging av video",
				addLabelVideo: "Video",
				addMediaVideoOther: "Annet",
				addMediaVideoHelp: "Kontroller URL-en, og hent standard miniatyrbilde",
				addMediaVideoHelpTooltip1: "Kontrollen var vellykket",
				addMediaVideoHelpTooltip2: "Kontrollen mislyktes",
				addMediaVideoHelpTooltip4: "Finn alternativet for å bygge inn videoen, og kopier video-URL-en som finnes i koden",
				addLabelName: "Navn",
				addLabelDescription: "Undertekst",
				addTextPlaceholder: "Skriv noe",
				addLocatePlaceholder: "Finn en adresse eller et sted",
				addPinColor: "Farge",
				addLatitude: "Breddegrad",
				addLongitude: "Lengdegrad",
				addLatitudePlaceholder: "f.eks. 34.056",
				addLongitudePlaceholder: "f.eks. -117.195",
				addUploading: "Laster opp omvisningspunkt",
				addSave: "Legg til omvisningspunkt",
				addMobileUploading: "Laster opp bilde",
				addMobileName: "Angi et navn",
				addMobileNameMandatory: "Feil, angi et navn.",
				addMobileError: "Beklager, noe gikk galt.",
				settingsHeader: "Applikasjonsinnstillinger",
				settingsTabLayout: "Utforming",
				settingsTabColor: "Farger",
				settingsTabLogo: "Overskrift",
				settingsTabFields: "Data",
				settingsTabExtent: "Utstrekning",
				settingsTabZoom: "Zoomnivå",
				settingsLayoutExplain: "Velg det programoppsettet du ønsker.",
				settingsLayoutProfessional: "Utforming med tre paneler",
				settingsLayoutModern: "Integrert utforming",
				settingsLayoutSelected: "Valgt utforming",
				settingsLayoutSelect: "Velg denne utformingen",
				settingsLayoutNote: "Legg merke til at for punkter som bruker video, plasseres oppslaget alltid under videoen, selv om det ikke er merket av for dette alternativet.",
				settingsColorExplain: "Endre utseende ved å velge et forhåndsdefinert tema eller opprette ditt eget.",
				settingsLabelColor: "Farge på topptekst, innhold og bunntekst",
				settingsLogoExplain: "Tilpass logoen øverst (maks. 250 x 50 piksler).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Ingen logo",
				settingsLogoCustom: "Tilpasset logo",
				settingsLogoCustomPlaceholder: "Bilde-URL",
				settingsLogoCustomTargetPlaceholder: "Gjennomklikkingskobling",
				settingsLogoSocialExplain: "Tilpass overskriftkoblingen øverst til høyre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Kobling",
				settingsLogoSocialDisabled: "Administratoren har deaktivert denne funksjonen",
				settingsDataFieldsExplain: "Velg bildenavn, tekst og fargefelter.",
				settingsDataFieldsError: "Kan ikke finne riktig navn, tekst eller fargedata. Velg feltene som skal brukes her. Disse innstillingene kan endres senere.",
				settingsFieldsLabelName: "Navn",
				settingsFieldsLabelDescription: "Undertekst",
				settingsFieldsLabelColor: "Farge",
				settingsFieldsReset: "Tilbakestill feltvalg",
				settingsExtentExplain: "Velg den opprinnelige utstrekningen av Map Tour gjennom det interaktive kartet nedenfor.",
				settingsExtentExplainBottom: "Utstrekningen du definerer, endrer webkartets opprinnelige utstrekning. Legg merke til at denne utstrekningen ikke brukes hvis den ikke omfatter det første punktet i omvisningen. I slike tilfeller åpnes kartomvisningen sentrert på det første punktet.",
				settingsExtentDateLineError: "Utstrekningen kan ikke være over den 180. lengdegraden",
				settingsExtentDateLineError2: "Feil ved beregning av utstrekningen",
				settingsExtentDrawBtn: "Tegn en ny utstrekning",
				settingsExtentModifyBtn: "Rediger utstrekningen",
				settingsExtentApplyBtn: "Forhåndsvis på Map Tour",
				settingsExtentUseMainMap: "Bruk Map Tour-utstrekning",
				settingsZoomExplain: "Angi zoomnivå for fortellingspunkter etter innledningen (valgfritt).",
				settingsLabelZoom: "Målestokk/nivå",
				settingsZoomFirstValue: "Ingen",
				settingsFieldError: "Velg et felt i hver liste",
				dataExplain: "Geoobjektstjenesten blir lagt til i webkartet ditt. Den blir ikke delt med noen, og bare du kan legge til, redigere og slette tilgangsrettigheter.<br /><br />Hvis du endrer programmets delingstillatelser, spør systemet om du vil oppdatere konfigurasjonen for deling av geoobjektstjenesten. Det er nødvendig for at brukerne skal få tilgang til dataene. Du vil fortsatt være den eneste med redigeringsrettigheter.",
				dataNameLbl: "Tjenestenavn",
				dataFolderListLbl: "Mappe",
				dataFolderListFetching: "Henter mapper...",
				dataRootFolder: "Rot",
				dataNameError: "Angi et navn for geoobjektstjenesten",
				dataFolderError: "Velg en gyldig mappe",
				dataSrcContainsInvalidChar: "Navnet på geoobjektstjenesten inneholder ett eller flere ugyldige tegn (-, <, >, #, %, :, \", ?, &, +, / eller \).",
				dataSrvAlreadyExistsError: "Det finnes allerede en tjeneste med det navnet i organisasjonen. Velg et annet navn.",
				dataBtnSave: "Opprett tjenesten",
				dataFooterProgress: "Opprettelse pågår",
				dataFooterSucceed: "Opprettelsen er fullført. Laster inn.",
				dataFooterError: "Opprettelsen mislyktes. Prøv på nytt.",
				tabError: "Se etter feil i alle faner",
				introRecordBtn: "Intro",
				introRecordActivate: "Bruk første punkt som innledning (vises ikke i karusell)"
			},
			addPopupJS: {
				uploadingPicture: "Laster opp bilde",
				uploadSuccess: "Opplastingen er fullført",
				uploadError: "Feil under opplasting av bildet",
				notJpg: "Velg et JPEG-bilde du vil laste opp",
				errorNoPhoto: "Velg et bilde du vil laste opp",
				errorNoThumbnail: "Velg et miniatyrbilde du vil laste opp",
				errorInvalidPicUrl: "Skriv inn et gyldig bilde (begynner med http(s)://, slutter med jpg, png, gif eller bmp). Du kan avslutte URLen med \"#isPicture\" for å omgå den regelen.",
				errorInvalidThumbUrl: "Angi et gyldig miniatyrbilde (begynner med http(s)://, slutter med jpg, png, gif eller bmp).",
				errorInvalidVideoUrl: "Angi en gyldig video-URL (starter med http(s)://)",
				errorNoName: "Angi et navn for dette omvisningspunktet",
				errorNoDescription: "Angi en tekst for dette omvisningspunktet",
				errorNoLocation: "Angi et sted for dette omvisningspunktet"
			},
			builderJS: {
				noPendingChange: "Ingen ventende endring",
				unSavedChangeSingular: "1 ulagret endring",
				unSavedChangePlural: "ulagrede endringer",
				popoverDiscard: "Er du sikker på at du vil forkaste endringer som ikke er lagret?",
				yes: "Ja",
				no: "Nei",
				popoverLoseSave: "Dersom du åpner viseren, mister du endringer som ikke er lagret",
				ok: "Ok",
				popoverSaveWhenDone: "Ikke glem å lagre når du er ferdig",
				closeWithPendingChange: "Er du sikker på at du vil bekrefte handlingen? Du mister da endringene du har gjort.",
				gotIt: "Ok",
				savingApplication: "Lagrer applikasjonen",
				saveSuccess: "Applikasjonen er lagret",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				dragColorPicker: "Flytt på meg<br />eller endre fargen min",
				dataWarningExtent: "Du har data utenfor webkartets utstrekning. Disse dataene blir ikke brukt som omvisningspunkter. Endre kartets utstrekning hvis du vil bruke dem.",
				dataWarningVisibi: "Map Tour-laget er ikke synlig med den gjeldende utstrekningen for webkartet. Bekreft at Map Tour-laget er synlig med et %MAPSIZE% stort kart.",
				dataWarningEdit: "Rediger webkart",
				dataWarningClose: "Lukk",
				signIn: "Logg på med en konto på",
				signInTwo: "for å lagre applikasjonen."
			},
			organizePopupJS: {
				messageStart: "Du har valgt å slette",
				messageSinglePoint: "ett omvisningspunkt",
				messageMultiPoint: "omvisningspunkter",
				messagePermantRemove: "Dette fører til permanent fjerning av",
				messageRecord: "posten",
				messageRecordPlural: "poster",
				messageConfirm: "fra databasen. Vil du fortsette?",
				labelButtonShow: "Vis",
				labelButtonHide: "Skjul"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Dette vil slette bildet og miniatyrbildet permanent",
				popoverDeleteWarningThumb: "Dette vil slette miniatyrbildet permanent",
				popoverUploadingPhoto: "Laster opp bilde og miniatyrbilde",
				popoverUploadingThumbnail: "Laster opp miniatyrbilde",
				popoverUploadSuccessful: "Opplastingen er fullført",
				popoverUploadError: "Opplastingen mislyktes, prøv på nytt",
				changePicAndThumb: "Endre bilde",
				changeThumb: "Endre miniatyrbilde",
				selectPic: "Endre medier",
				selectThumb: "Endre miniatyrbilde",
				uploadPicAndThumb: "Bruk"
			},
			headerJS:{
				editMe: "Rediger meg!",
				templateTitle: "Angi tittel på malen",
				templateSubtitle: "Angi undertittel for malen"
			},
			crossFaderJS:{
				setPicture: "Angi bildetittel",
				setCaption: "Angi bildetekst"
			},
			importPopup: {
				title: "Importer",
				prevBtn: "Bak",
				nextBtn: "Neste"
			},
			importPopupHome: {
				header: "Hvor har du lagret bildene dine?"
			},
			onlinePhotoSharingCommon: {
				disabled: "Administratoren har deaktivert denne funksjonen",
				disabledPortal: "Denne funksjonen er deaktivert på Portal for ArcGIS",
				header1: "Bildene må være delt offentlig.",
				header2: "Importen begrenses til %NB1% bilder for å overholde grensen på %NB2% punkter per omvisning.",
				emptyDataset: "Feil; ingen bilder funnet",
				footerImport: "Importer",
				selectAlbum: "Velg et offentlig album",
				selectAlbum2: "Velg et album",
				pleaseChoose: "Velg",
				userLookup: "Slå opp",
				userLookingup: "Slår opp",
				csv: "Vist til i en CSV",
				fromScratch: "Start fra bunnen av",
				select: "Foreta et valg",
				locUse: "Bruk bildeplasseringen",
				locExplain: "Du vil kanskje ikke bruke bildeplasseringen, ettersom de kan være overtatt fra albumet. Det fører i tilfelle til at alle bildene får samme plassering."
			},
			viewFlickr: {
				header: "Angi et brukernavn for Flickr og velg et bildesett eller en tagg som skal importeres.",
				userInputLbl: "Angi et brukernavn",
				signInMsg2: "Finner ikke bruker",
				selectSet: "Velg et bildesett",
				selectTag: "eller velg en tagg",
				footerImportTag: "Importer den valgte taggen",
				footerImportSet: "Importer det valgte settet"
			},
			viewFacebook: {
				header: "Godkjenn med en brukerkonto for Facebook, eller bruk en fellesside. Private albumer kan brukes til å opprette en offentlig kartomvisning som ikke krever brukergodkjenning via Facebook. Det gjør det mulig å holde kommentarer og likes privat.",
				leftHeader: "Facebook-bruker",
				rightHeader: "Facebook-side",
				pageExplain: "En Facebook-side er for et offisielt merke, et produkt eller en kjendis, for eksempel <b>esrigis</b>. Du finner navnet på siden etter første / i sidens URL-adresse.",
				pageInputLbl: "Angi et sidenavn",
				lookupMsgError: "Finner ikke siden"
			},
			viewPicasa: {
				header: "Angi e-postadressen eller ID-en til en konto på Picasa eller Google+.",
				userInputLbl: "Angi en e-postadresse eller ID",
				signInMsg2: "Finner ikke kontoen",
				howToFind: "Slik finner du en konto-ID",
				howToFind2: "Kopier tallene mellom første og andre/ på en tilfeldig side på Picasa eller G+"
			},
			viewCSV: {
				uploadBtn: "Velg eller dropp en CSV-fil",
				resultHeaderEmpty: "CSV-filen er tom",
				resultHeaderSuccess: "Innlastingen av %NB_POINTS% punkter var vellykket",
				resultHasBeenLimited: "Importen er blitt begrenset til de første %VAL1% punktene av %VAL2% for å overholde grensen på %VAL3% punkter per omvisning",
				browserSupport: "Du bruker en nettleser som ikke støttes. For å bruke en CSV må du <a href='http://browsehappy.com/' target='_blank'>oppgradere nettleseren</a> eller bruke visningsprogrammet for webkart på ArcGIS.com (se Hjelp).",
				errorLatLng: "Finner ikke bredde- og lengdegradfeltene. Mulige verdier for breddegrad er: <i>%LAT%</i> og for lengdegrad: <i>%LONG%</i>.",
				errorFieldsExplain: "Innlastingen mislyktes ettersom følgende obligatoriske felter ikke ble funnet",
				errorFieldsName: "<b>Navn</b> mulige verdier er: %VAL%",
				errorFieldsDesc: "<b>Beskrivelse</b> mulige verdier er: %VAL%",
				errorFieldsUrl: "<b>Bilde-URL</b> mulige verdier er: %VAL%",
				errorFieldsThumb: "<b>URL-adresse til miniatyrbilde</b> mulige verdier er: %VAL%",
				errorFields2Explain: "Innlastingen mislyktes ettersom CSV-filen ikke bruker samme attributter som laget, for følgende attributter",
				errorFields2Name: "<b>Navn</b> bruk %VAL1% i stedet for %VAL2%",
				errorFields2Desc: "<b>Beskrivelse</b> bruk %VAL1% i stedet for %VAL2%",
				errorFields2Url: "<b>Bilde-URL</b> bruk %VAL1% i stedet for %VAL2%",
				errorFields2Thumb: "<b>URL-adresse til miniatyrbilde</b> bruk %VAL1% i stedet for %VAL2%",
				resultFieldsAll: "Alle attributter er blitt importert",
				resultFieldsNotAll: "Følgende attributter er ikke blitt importert fordi de ikke finnes i kartlaget",
				resultFieldsNotAll2: "Følgende attributter er blitt importert",
				footerNextBtnResult: "Importer til webkart",
				footerProgress: "Import pågår",
				footerSucceed: "Import fullført. Laster inn"
			},
			viewGeoTag: {
				header: "Klikk eller trykk på bildene du vil importere, for å finne dem.",
				headerMore: "Hvorfor blir ikke bildene mine funnet?",
				headerExplain: "Hvis bildene har en gyldig plassering, blir de automatisk funnet på kartet og ført opp under den andre fanen.<br /><br />Picasa og Flickr bruker som standard ikke metadataene for bildenes EXIF-plassering. Kontroller innstillingene for Flickr/Picasa under fanen Personvern for å aktivere bruk av bildeplassering. Det kan hende du må importere alle bildene til Flickr/Picasa på nytt.<br /><br />For Facebook må du gå til hvert enkelt bilde, klikke på Rediger og velge plasseringen blant de foreslåtte valgene som er basert på bildenes EXIF-metadata.",
				leftPanelTab1: "For å finne",
				leftPanelTab2: "Funnet",
				clickOrTap: "Klikk eller trykk på kartet for å finne",
				clickDrop: "Ikke importer",
				footerImport: "Importer",
				footerProgress: "Import pågår",
				footerSucceed: "Import fullført. Laster inn ...",
				loading: "Laster inn",
				error: "Importen av bildenes lokasjon mislyktes, lokasjonene er blitt ignorert."
			},
			initPopup: {
				title: "Velkommen til byggeverktøyet for Map Tour",
				prevBtn: "Bak",
				nextBtn: "Neste"
			},
			initPopupHome: {
				header2: "Denne assistenten hjelper deg med å bygge en Map Tour fra bilder som allerede er lagret online, eller den importerer dem til kontoen din på ArcGIS Online for Organization.",
				title1: "Bildene mine er allerede lagt ut på en vertsserver",
				title2: "Jeg trenger en vertsserver til bildene mine",
				hostedFsNA: "Bare tilgjengelig for brukere av ArcGIS for Organization med utgiver- eller administratorrettigheter",
				footer1: "Når du er ferdig, må du ikke glemme å dele Map Tour med publikum via  siden for programelementer.",
				footer2: "Hjelp for Map Tour",
				footer3: "Last ned CSV-malen",
				footer4: "\"Lagre som\" hvis det ikke lastes ned",
				footerProgress: "Opprettelse pågår",
				footerSucceed: "Opprettelsen er fullført. Laster inn ..."
			},
			helpPopup: {
				title: "Hjelp",
				close: "Lukk",
				tab1: {
					title: "Innledning",
					div1: "Map Tour-malen er utarbeidet for å presentere geografisk informasjon i de tilfellene der fortellingen du vil formidle, har et sterkt fotografisk element.",
					div2: "Malen produserer et tiltalende og brukervennlig webprogram som gjør at du kan presentere et lite sett av lokasjoner på et kart i nummerert rekkefølge, som brukerne kan bla gjennom. Malen er beregnet for bruk i alle nettlesere og på alle typer enheter, også smarttelefoner og nettbrett.",
					div3: "Denne hjelpen fører deg gjennom prosedyren for å publisere en Map Tour, f.eks.:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs Map Tour</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Beste mountain biking i Nederland county</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Los Angeles River Map Tour</a></li></ul>",
					div5: "Vi vil gjerne høre fra deg! Vent ikke med å dele din Map Tour med oss:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>Webområdet StoryMaps</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Har du funnet en feil, eller ønsker du deg en ny funksjon? Gi oss beskjed ved å sende en melding til  <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'> prosjektsiden for GitHub pr</a>."
				},
				tab2: {
					title: "Data",
					div1: "Det viktigste å tenke på når du skal bygge en Map Tour, er hvor du skal lagre bildene dine. Map Tour kan bruke bilder som er lagret på større bildedelingstjenester, på alle webservere eller som vedlegg til en geoobjektstjeneste.",
					div1a: "Se den siste delen av denne fanen for detaljer om støttede bilde- og videoformater.",
					div2: "Det interaktive verktøyet gir deg to alternativer for bildebehandling i Map Tour:",
					div3: "<ul><li>Du kan bruke <b>bilder som allerede er lagret online</b>, for eksempel bilder som er lagret på et bildedelingsområde som Flickr, eller bilder som du har lagret på ditt eget webområde. Disse bildene blir referert til med URL-adresser i Map Tour</li><li>Du kan også <b>laste opp bilder fra datamaskinen</b> direkte til Map Tour. Dette opplastingsalternativet krever at du har en ArcGIS Online-konto, og at du har en utgiver- eller administratorkonto fordi det automatisk opprettes en vertsbasert geoobjektstjeneste for deg, der bildene blir lagret som vedlegg</li></ul>",
					div4: "De viktigste brukertilfellene er:",
					div4b: "<b>Bildene dine er ikke driftet</b> ennå, og du har et ArcGIS Online-abonnement: Det beste er å bruke en vertsbasert geoobjektstjeneste. I likhet med offentlige bildedelingstjenester optimaliserer vi bildene slik at de lastes raskt, og du får tilgang til alle funksjonene for administrasjon og databehandling på ArcGIS-plattformen.",
					div5: "<b>Du er ikke medlem av en organisasjon</b>: Du må først laste opp bildene dine på et bildedelingsområde eller på din egen webserver. Veiviseren gir deg deretter hjelp til å bruke disse bildene, som fortsatt blir liggende på den opprinnelige plasseringen.",
					div6: "<b>Du prøver å gjenbruke en eksisterende geoobjektstjeneste</b> der bildene dine er lagret som vedlegg, eller som refererer til eksterne bilder: Les det mer utfyllende avsnittet nedenfor.",
					div7: "<b>Du bruker en tidligere versjon av</b> Map Tour-malen og har allerede en CSV som refererer til bildene og miniatyrbildene dine: Du kan importere den og forbedre dataene. Byggeren støtter bare CSV som bruker attributter for bredde- og lengdegrader; adressebasert CSV kan fortsatt brukes gjennom webkartet (se avsnitt nedenfor).",
					div8: "Importere fra bildedelingstjenester online",
					div9: "Importoperasjonen refererer til bilder som allerede er vertsbaserte, ved å lagre URL-adressene i en samling av webkartfunksjoner. Bildene lagres ikke i ArcGIS Online. Hvis driftingen av bildene avbrytes, blir de ikke lenger tilgjengelige i kartomvisningen og et \"Bilde ikke tilgjengelig\"-bilde blir brukt. Det avhenger av tjenesteleverandøren om kartomvisningen importerer bildenes navn, beskrivelse og plassering, eller ikke. De attributttene er lagret i webkartet, og eventuelle redigeringer av online-tjenestene gjenspeiles ikke i kartomvisningen.",
					div10: "Lagre bildene på en webserver",
					div11: "Hvis du velger å drifte bildene selv, må du opprette miniatyrer av bildene manuelt. Hvis du bruker bilder med maksimal oppløsning til miniatyrene, reduseres ytelsen. Derfor anbefaler vi på det sterkeste å bruke en online bildedelingstjeneste eller en geoobjektstjeneste til dette.",
					div12: "Bruke en eksisterende geoobjektstjeneste eller shapefil",
					div13: "Enhver geoobjektstjeneste eller shapefil kan brukes som datakilde for Map Tour. Du må bare legge den til som et lag i webkartet ved hjelp av kartvisningsprogrammet på arcgis.com. Hvis programmet finner de forventede attributtene i laget, vil alle byggeverktøyets funksjoner være tilgjengelige.",
					div14: "De forventede feltene er (skiller ikke mellom små og store bokstaver):",
					div151: "Navn",
					div152: "Beskrivelse",
					div153: "Bilde",
					div154: "Miniatyrbilde",
					div155: "Farger (valgfritt)",
					div16: "Feltene Navn og Beskrivelse er obligatoriske. Hvis programmet ikke finner felter som samsvarer ved å bruke en geoobjektstjeneste, vil visningsprogrammet ikke fungere før du har konfigurert feltene som skal brukes, med byggeverktøyet. CSV- og shapefillag som er lagt til webkartet, må inneholde alle obligatoriske felter for at byggeverktøyet skal fungere.",
					div162: "Når du bruker en geoobjektstjeneste som lagrer bildene som vedlegg, <b>brukes bare geoobjektene med to vedlegg</b>. Det første vedlegge definerer hovedbilde, mens det andre vedlegget definerer miniatyrbildet.",
					div17: "Feltene Bilde og Miniatyrbilde er obligatoriske for geoobjektstjenester uten vedlegg, og valgfrie (men anbefales sterkt) for geoobjektstjenester med vedlegg. Hvis vedlegg er aktivert for tjenesten din, lar byggeverktøyet deg laste opp bilder som vedlegg. Hvis ikke kan du bare redigere bildet og miniatyrbildet via URL-adressen.",
					div172: "Når de er til stede, brukes bilde- og minatyrbildefeltene alltid, og geoobjekttjenestetilleggene blir ikke søkt opp.",
					div173: "Eksempel-CSV- og shapefiler kan lastes ned fra",
					div18: "Opprette en vertsbasert geoobjektstjeneste fra CSV eller shapefil",
					div19: "Når du oppretter en vertsbasert geoobjektstjeneste fra en CSV- eller shapefil, er vedlegg som standard ikke aktivert. Du kan aktivere dem ved å åpne siden for geoobjektstjenesteelementer og klikke på den lille pilen i lagdelen for å vise alternativet. Map Tour vil deretter fortsette å bruke de bildene og miniatyrbildene som du har referert til ved attributter. Hvis du heller vil laste opp bildene som vedlegg til en geoobjektstjeneste, kan du gjøre det ved hjelp av to knapper på bildepanelet (\"Bytt bilde\" og \"Bytt miniatyrbilde\").",
					div20: "Støttede bildeformater og videoer",
					div21: "Støttede bildeformater er: <b>.jpg, .jpeg, .png, .gif og .bmp</b>. Hvis mediene dine ikke slutter med dette etternavnet, regner Map Tpur med at det er en video, bortsett fra når du bruker en geoobjektstjeneste (se nedenfor).",
					div22: "Map Tour-malen inkluderer ingen videospiller, så du må bruke den eksterne videospilleren fra favorittvideovertstjenesten din (finn alternativet for å bygge inn videoen, og kopier URLen som gis i den koden som oppgis). Hvis du vil drifte videoen selv, kan du opprette en HTML-side som inneholder en videospiller som <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "Den interaktive byggeren har ingen dialog for å ta med video ved bruk av geoobjektstjenester med vedlegg, men det er mulig å gjøre det ved å redigere dataene utenfor den interaktive byggeren. I arcgis.com-kartvisningen kan du endre bildefeltene slik at de peker mot en ekstern video og legge til en egen parameter til slutt i URLen (#isVideo), slik at mediene dine regnes som en video.",
					div24: "Merk at du fortsatt må ha to gyldige bildevedlegg, eller blir ikke punktet brukt. Det er ikke mulig å bruke videoer med geoobjektstjenestevedlegg uten bilde- og miniatyrbildefeltene."
				},
				tab3: {
					title: "Tilpasning",
					div1: "Byggeverktøyet inneholder flere alternativer for tilpasning, som er tilgjengelige via knappen INNSTILLINGER i toppanelet. Hvis du ikke finner alternativet du forventer, leverer vi også en nedlastbar versjon som du kan distribuere på din egen webserver og forbedre slik du ønsker.",
					div2: "Vi anbefaler å bruke den vertsbaserte versjonen, med mindre:",
					div3: "<li>Den ikke tilbyr en grensesnittilpasning som du gjerne vil ha, for eksempel å kunne bruke et bakgrunnsbilde i overskriften.</li><li>Du er en utvikler og ønsker å forbedre programmet.</li>",
					div4: "Du kan konfigurere den nedlastbare versjonen gjennom en webkart- eller webkartapplikasjons-ID. De viktigste bruksområdene er:",
					div41: "Du bygger Map Tour ved å bruke den interaktive byggeren i det vertsbaserte miljøet, og konfigurerer malen med webkartapplikasjonsidentifikatoren. Innstillingene du har definert med den interaktive byggeren, blir brukt.",
					div42: "Du bygger webkartet utenfor den interaktive byggeren og konfigurerer malen med webkartidentifikatoren. Du må lese dokumentasjonen for å se hvordan du skal konfigurere malen.",
					div43: "Merk at den interaktive byggeren er tilgjengelig i den nedlastbare versjonen, men med noen tekniske begrensninger i nettlesere som Internet Explorer som er eldre enn versjon 10.",
					div5: "Gå til <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>prosjektsiden for GitHub</a> hvis du vil vite mer om den nedlastbare versjonen."
				},
				tab4: {
					title: "Tips",
					div0: "Støttede nettlesere",
					div0a: "Map Tour-viseren støttes på IE8+. Den interaktive byggeren støttes på IE9+. Vi tester aktivt i alle større nettlesere, men hvis du opplever problemer, anbefaler vi at du bruker Chrome.",
					div0b: "Hvis du opplever problemer, må du varsle oss. I mellomtiden kan du begrense samhandlingen med byggergrensesnittet ved å bygge Map Tour med CSV-malen.",
					div1: "Bilder",
					div2: "Vi anbefaler å bruke liggende bilder fremfor stående. Stående bilder kan brukes, men på mindre skjermer som på en iPad, kan en stor del av bildet bli skjult bak underteksten, fordi teksten opptar mer plass når den vises på et høyt område sammenlignet med et bredt område. Selv om bilder med forskjellige størrelse, form og retning kan brukes i én og samme Map Tour, anbefaler vi å bruke nøyaktig samme størrelse og form på alle bildene. På den måten slipper brukerne å bli distrahert av bilder av ulik størrelse når de følger omvisningen.",
					div2a: "Hvis du er vert for bildene selv, anbefaler vi en største oppløsning på <b>1090x725</b> for hovedbilder og <b>140x93</b> for miniatyrbilder.",
					div3: "Formatere underteksten med HTML-koder",
					div4: "Underteksten kan inneholde HTML-koder som definerer formatering og koblinger. Denne koden legger f.eks. til en gul kobling:",
					div5: "Støttelag",
					div6: "Du kan legge til ekstra støttelag i kartet for å gi kontekst i Map Tour. Disse lagene kan inneholde andre geoobjekter du vil at kartet skal vise i tillegg til Map Tour-punktene, f.eks. et studieområde, en gå- eller kjørerute som kobler omvisningspunktene sammen osv. Map Tour-malen viser disse ekstra støttelagene ved å bruke symbolene du angir i webkartet, men oppsprettvinduene er ikke tilgjengelige.",
					div7: "Gjør omvisningen kort og hyggelig",
					div8: "Det er en grense på 99 punkter per omvisning. De fleste omvisninger vil selvsagt være atskillig kortere en det. Ikke forvent at publikum har lyst til å gå gjennom altfor mange omvisningspunkter. Du synes kanskje emnet er uendelig fascinerende, men det er ikke sikkert at alle andre synes det samme!",
					div9: "Du kan finne ut mer ved å se <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>den detaljerte veiledningen</a>.",
					div10: "Innbyggingsmetode",
					div11: "Hvis du vil bygge inn malen i en annen nettside med en iframe, legger du til den ekstra parameteren \"&embed\" til slutt i URLen for å fjerne headeren. Denne modusen kan også stilles inn i den nedlastbare versjonen gjennom en konfigurasjonsfil." 
				},
				tab5: {
					title: "Publisere",
					div1: "Når du er ferdig, må du ikke glemme å dele Map Tour via siden for programelementer i ArcGIS Online. I løpet av prosessen vil ArcGIS Online be deg om å oppdatere eventuelle tilknyttede ressurser (webkart, geoobjektstjeneste) som ikke har de samme delingstillatelsene. Hvis Map Tour er offentlig og en av ressursene ikke deles med publikummet ditt, blir brukerne sendt til påloggingssiden for ArcGIS Online.",
					div2: "Hvis du bruker en vertsbasert geoobjektstjeneste som er opprettet med byggeverktøyet for Map Tour, tar programmet hånd om sikkerheten til tjenesten, og du vil fortsatt være den eneste med redigeringsrettigheter, selv om du har delt tjenesten offentlig.",
					div3: "Før du deler en kartomvisning offentlig, må du kontrollere at den fungerer også når du ikke er logget på kontoen din på ArcGIS.com.",
					div4: "Det er lurt å se hvordan kartomvisningen ser ut på en iPad i liggende retning. Da kan du se om underteksten dekker for mye av bildene."
				}
			}
        }
    })
);
