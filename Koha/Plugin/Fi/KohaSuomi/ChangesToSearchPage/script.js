/// ALKU ///
/* Näillä rimpsuilla tehdään tiedonhakuun Indeksointi-työryhmän päättämät muutokset. Asetetaan otsikot eri kielillä aineistotyyppi-, hyllytarkenne- ja ikärajavälilehdille tiedonhaussa. Lisätään alasvetovalikoihin YKL, UDK, Päivittyvä julkaisu ja Kausijulkaisu */
$(document).ready(function () {

    if (window.location.href.indexOf("catalogue/search.pl") > -1) {

        if ($('html').attr('lang') == 'fi-FI') {
            $("a#advsearch-tab-mtype-tab").text("Aineistotyyppi"); /* MTYPE auktorisoituarvo tarkassa haussa */
            $("a#advsearch-tab-subloc-tab").text("Hyllytarkenne"); /* SUBLOC auktorisoituarvo tarkassa haussa */
            $("a#advsearch-tab-agelevel-tab").text("Ikärajat"); /* AGELEVEL auktorisoituarvo tarkassa haussa */
            $("a#advsearch-tab-bib-level-tab").text("Emokohde/Osakohde"); /* bib-level auktorisoituarvo tarkassa haussa */
            $("#searchterms .advsearch").append(new Option('YKL-luokitus', 'other-classification')); /* Lisää uuden valinnan YKL-luokitus */
            $("#searchterms .advsearch").append(new Option('UDK-luokitus', 'udc-classification')); /* Lisää uuden valinnan UDK-luokitus */
            $("#subtype select option[value='mus:i'").parent().append(new Option('Päivittyvä julkaisu', 'bib-level:i')); /*Lisää lisärajoitukset valikkoon uuden arvon */
            $("#subtype select option[value='mus:i'").parent().append(new Option('Kausijulkaisu', 'bib-level:s')); /*Lisää lisärajoitukset valikkoon uuden arvon */
        }
        else if ($('html').attr('lang') == 'sv-SE') {
            $("a#advsearch-tab-mtype-tab").text("Materialtyp");
            $("a#advsearch-tab-subloc-tab").text("Underplats");
            $("a#advsearch-tab-agelevel-tab").text("Åldersgränser");
            $("a#advsearch-tab-bib-level-tab").text("Huvudobjekt/Delobjekt");
            $("#searchterms .advsearch").append(new Option('YKL-klassification', 'other-classification'));
            $("#searchterms .advsearch").append(new Option('UDC-klassification', 'udc-classification'));
            $("#subtype select option[value='mus:i'").parent().append(new Option('Publikation som uppdateras', 'bib-level:i'));
            $("#subtype select option[value='mus:i'").parent().append(new Option('Seriell publikation', 'bib-level:s'));
        }
        else if ($('html').attr('lang') == 'en') {
            $("a#advsearch-tab-mtype-tab").text("Material type");
            $("a#advsearch-tab-subloc-tab").text("Sub location");
            $("a#advsearch-tab-agelevel-tab").text("Age levels");
            $("a#advsearch-tab-bib-level-tab").text("Child/monographic record");
            $("#searchterms .advsearch").append(new Option('Other classification', 'other-classification'));
            $("#searchterms .advsearch").append(new Option('UDC classification', 'udc-classification'));
            $("#subtype select option[value='mus:i'").parent().append(new Option('Integrating resource', 'bib-level:i'));
            $("#subtype select option[value='mus:i'").parent().append(new Option('Serial', 'bib-level:s'));
        }
    };
});
/// LOPPU ///

$(document).ready(function () {
    if (window.location.href.indexOf("catalogue/search.pl?advsearch=1&edit_search=1") > -1) {
        $("#searchterms select option[value='location']").val('loc'); /* Muuttaa location-arvon loc-arvoksi "Hakusanat"-valikossa, kun hakua mennään muokkaamaan*/
    }
});

/// LOPPU ///
