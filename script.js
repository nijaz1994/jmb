const p = document.getElementById("p");

const func = () => {
    const val = document.getElementById("jmb").value;
    const len = val.length;
    if (len !== 13) {
        p.innerText = "Niste unijeli valjan JMB. JMB ima 13 cifri.";
    } else {
        const day = val[0] + val[1];
        const month = val[2] + val[3];
        const year = val[4] === "9" ? 1 + val[4] + val[5] + val[6] : 2 + val[4] + val[5] + val[6];
        let placeNums = val[7] + val[8];
        if (year < 2014) {
            switch (placeNums) {
                case "10":
                    place = "Banja Luka, Bosanska Gradiška/Gradiška, Čelinac, Jajce/Jezero, Jajce, Ključ/Ribnik, Ključ, Kotor-Varoš, Laktaši, Mrkonjić-Grad, Prnjavor, Dobretići, Skender-Vakuf/Kneževo, Srbac, Šipovo,";
                    break;
                case "11":
                    place = "Bihać, Bosanska Krupa, Bosanska Krupa/Krupa na Uni, Bosanski Petrovac, Bosanski Petrovac/Petrovac, Bosansko Grahovo/Grahovo, Cazin, Drvar/Srpski Drvar, Drvar, Velika Kladuša, Bužim,";
                    break;
                case "12":
                    place = "Doboj-Jug, Doboj-Istok, Doboj, Bosanski Brod/Srpski Brod, Bosanski Šamac/Šamac, Domaljevac/Šamac, Derventa, Gračanica, Gračanica/Petrovo, Maglaj, Modriča, Odžak/Vukosavlje, Odžak, Teslić, Tešanj, Usora,";
                    break;
                case "13":
                    place = "Goražde, Goražde/Srpsko Goražde, Čajniče, Foča, Foča/Srbinje, Rudo, Višegrad,";
                    break;
                case "14":
                    place = "Livno, Tomislavgrad, Glamoč,";
                    break;
                case "15":
                    place = "Mostar Centralni distrikt, Mostar Stari Grad, Mostar Sjever, Mostar Jugoistok, Mostar Jugozapad, Mostar Zapad, Mostar Jug, Mostar/Srpski Mostar, Bileća, Čapljina, Čitluk, Gacko, Grude, Jablanica, Konjic, Široki Brijeg, Ljubinje, Ljubuški, Neum, Nevesinje, Posušje, Prozor/Prozor-Rama, Stolac/Berkovići, Stolac, Ravno, Trebinje,";
                    break;
                case "16":
                    place = "Prijedor, Bosanska Dubica/Kozarska Dubica, Bosanski Novi/Novi Grad, Sanski Most/Srpski Sanski Most, Sanski Most, Kostajnica,";
                    break;
                case "17":
                    place = "Sarajevo-Centar, Breza, Fojnica, Hadžići, Han-Pijesak, Ilidža (FBiH), Ilidža/Srpska Ilidža, Ilijaš, Kalinovik, Kiseljak, Kreševo, Sarajevo-Novi Grad, Novo Sarajevo, Novo Sarajevo/Srpsko Novo Sarajevo, Olovo, Pale-RS, Pale-FBiH, Rogatica, Sokolac, Sarajevo-Stari Grad/Srpsko Sarajevo, Trnovo-RS, Trnovo-FBiH, Vareš, Visoko, Vogošća,";
                    break;
                case "18":
                    place = "Tuzla, Banovići, Bijeljina, Bratunac, Distrikt Zenica, Bugojno, Busovača, Donji Vakuf, Gornji Vakuf, Kakanj, Kupres, Kupres/Srpski Kupres, Novi Travnik, Travnik, Vitez, Zavidovići, ŽepčeBrčko, Gradačac, Gradačac/Pelagićevo, Kalesija, Kalesija/Osmaci, Kladanj, Lopare/Čelić, Lopare, Lukavac, Orašje, Orašje/Srpsko Orašje, Srebrenica, Srebrenik, Šekovići, Teočak, Ugljevik, Vlasenica, Sapna, Zvornik, Živinice, Milići,";
                    break;
                case "19":
                    place = "Zenica, Bugojno, Busovača, Donji Vakuf, Gornji Vakuf, Kakanj, Kupres, Kupres/Srpski Kupres, Novi Travnik, Travnik, Vitez, Zavidovići, Žepče,";
                    break;
            }
        } else {
            switch (placeNums) {
                case "11":
                    place = "Banja Luka, Čelinac, Gradiška, Istočni Drvar, Jezero, Kneževo, Kostajnica, Kotor Varoš, Kozarska Dubica, Krupa na Uni, Kupres, Laktaši, Mrkonjić Grad, Novi Grad, Oštra Luka, Petrovac, Prijedor, Prnjavor, Ribnik, Srbac i Šipovo,";
                    break;
                case "12":
                    place = "Bijeljina, Brod, Derventa, Doboj, Donji Žabar, Lopare, Modriča, Pelagićevo, Petrovo, Stanari, Teslić, Ugljevik, Vukosavlje i Šamac,";
                    break;
                case "13":
                    place = "Bileća, Berkovići, Bratunac, Čajniče, Foča, Gacko, Han Pijesak, Istočna Ilidža, Istočni Mostar, Istočni Stari Grad, Istočno Novo Sarajevo, Kalinovik, Ljubinje, Milići, Nevesinje, Novo Goražde, Osmaci, Pale, Rogatica, Rudo, Srebrenica, Sokolac, Šekovići, Trebinje, Trnovo, Višegrad, Vlasenica i Zvornik,";
                    break;
                case "14":
                    place = "Brčko Distrikt Bosne i Hercegovine,";
                    break;
                case "15":
                    place = "Čapljina, Čitluk, Grude, Jablanica, Konjic, Ljubuški, Mostar, Neum, Posušje, Prozor, Ravno, Stolac i Široki Brijeg,";
                    break;
                case "16":
                    place = "Bihać, Bosanska Krupa, Bosanski Petrovac, Bosansko Grahovo, Bužim, Cazin, Drvar, Glamoč, Ključ, Kupres, Livno, Sanski Most, Tomislavgrad i Velika Kladuša,";
                    break;
                case "17":
                    place = "Centar Sarajevo, Foča, Goražde, Hadžići, Ilidža, Ilijaš, Novo Sarajevo, Pale, Sarajevo Novi Grad, Sarajevo Stari Grad, Trnovo i Vogošća,";
                    break;
                case "18":
                    place = "Banovići, Čelić, Doboj-Istok, Domaljevac-Šamac, Gračanica, Gradačac, Kalesija, Kladanj, Lukavac, Odžak, Orašje, Sapna, Srebrenik, Teočak, Tuzla i Živinice,";
                    break;
                case "19":
                    place = "Bugojno, Breza, Busovača, Doboj-Jug, Dobretići, Donji Vakuf, Fojnica, Gornji Vakuf, Jajce, Kakanj, Kiseljak, Kreševo, Maglaj, Novi Travnik, Olovo, Travnik, Tešanj, Usora, Vareš, Visoko, Vitez, Zavidovići, Zenica i Žepče,";
                    break;
            }
        }
        const sex = Number(val[9] + val[10] + val[11]) < 500 ? "muško" : "žensko";
        p.innerText = `Rođeni ste ${day}.${month}.${year} u nekom od ovih mjesta: ${place} i vi ste ${sex}.`;
    }
}

document.getElementById("btn").addEventListener("click", func);

document.getElementById("jmb").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        func();
    }
})