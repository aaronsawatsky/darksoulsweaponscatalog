const dataSet = 'https://jgalat.github.io/ds-weapons-api/';
const weaponsForm = document.querySelector('.weapon-form');
const table = document.querySelector('.tg');
const weaponsDataList = document.querySelector('#weapons');
const input = document.querySelector('.input');
const body = document.querySelector('body');
const btn = document.querySelector('.submit');
const reset = document.querySelector('.reset-filter');
const resetUpgrades = document.querySelector('.reset-upgrades');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const upgradeNum = document.querySelector('.upgrade-num');
const typeFilter = document.querySelector('#type-filter');
const upgradeFilter = document.querySelector("#upgrade-filter");
const bossWeaponFilter = document.querySelector("#boss-weapon");
const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.side-bar');
const sideBarContent = document.querySelector('.side-bar-content');
const damagePhysical = document.querySelector('.damage-physical');
const ascensions = document.querySelector('.ascension-list');
const upgradeOptions = document.querySelector('.upgrade-options');
const upgrades = document.querySelectorAll('.upgrade');
const regularUpgrade = document.querySelector('#regular-upgrade');
const twinklingUpgrade = document.querySelector('.twinkling-upgrade');
const demonUpgrade = document.querySelector('.demon-upgrade');
const dragonScales = document.querySelector('.dragon-scales');
const lightning = document.querySelector('.lightning');
const crystal = document.querySelector('.crystal');
const raw = document.querySelector('.raw');
const magic = document.querySelector('.magic');
const enchanted = document.querySelector('.enchanted');
const divine = document.querySelector('.divine');
const occult = document.querySelector('.occult');
const fire = document.querySelector('.fire');
const chaos = document.querySelector('.chaos');

upgradeOptions.addEventListener('change', () => {
    upgrades.forEach(upgrade => {
        if (!upgrade.classList.contains('displaying')) {
            upgrade.classList.add('displaying');
        }
    })
    if (upgradeOptions.value === "Titanite") {
        if (regularUpgrade.classList.contains('displaying')) {
            regularUpgrade.classList.remove('displaying');
        } else {
            regularUpgrade.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Twinkling-Titanite") {
        if (twinklingUpgrade.classList.contains('displaying')) {
            twinklingUpgrade.classList.remove('displaying');
        } else {
            twinklingUpgrade.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Demon-Titanite") {
        if (demonUpgrade.classList.contains('displaying')) {
            demonUpgrade.classList.remove('displaying');
        } else {
            demonUpgrade.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Dragon-Scale") {
        if (dragonScales.classList.contains('displaying')) {
            dragonScales.classList.remove('displaying');
        } else {
            dragonScales.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Lightning") {
        if (lightning.classList.contains('displaying')) {
            lightning.classList.remove('displaying');
        } else {
            lightning.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Crystal") {
        if (crystal.classList.contains('displaying')) {
            crystal.classList.remove('displaying');
        } else {
            crystal.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Raw") {
        if (raw.classList.contains('displaying')) {
            raw.classList.remove('displaying');
        } else {
            raw.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Magic") {
        if (magic.classList.contains('displaying')) {
            magic.classList.remove('displaying');
        } else {
            magic.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Enchanted") {
        if (enchanted.classList.contains('displaying')) {
            enchanted.classList.remove('displaying');
        } else {
            enchanted.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Divine") {
        if (divine.classList.contains('displaying')) {
            divine.classList.remove('displaying');
        } else {
            divine.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Occult") {
        if (occult.classList.contains('displaying')) {
            occult.classList.remove('displaying');
        } else {
            occult.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Fire") {
        if (fire.classList.contains('displaying')) {
            fire.classList.remove('displaying');
        } else {
            fire.classList.add('displaying');
        }
    }
    if (upgradeOptions.value === "Chaos") {
        if (chaos.classList.contains('displaying')) {
            chaos.classList.remove('displaying');
        } else {
            chaos.classList.add('displaying');
        }
    }
})

menuButton.addEventListener('click', () => {
    if (sideBar.classList.contains('side-bar-displaying')) {
        sideBar.classList.remove('side-bar-displaying');
    } else {
        sideBar.classList.add('side-bar-displaying');
    }
})

// ----------------- Non-regular Weapons ----------------------
let uniqueWeapons = ["Astora's Straight Sword", "Black Knight Greataxe", "Black Knight Greatsword", "Black Knight Halberd", "Black Knight Sword", "Blacksmith Giant Hammer", "Channeler's Trident", "Crescent Axe", "Dark Silver Tracer", "Dragonslayer Greatbow", "Ghost Blade", "Giant's Halberd", "Gold Tracer", "Gough's Greatbow", "Grant", "Hammer of Vamos", "Jagged Ghost Blade", "Silver Knight Spear", "Silver Knight Straight Sword", "Stone Greataxe", "Stone Greatsword", "Titanite Catch Pole", "Velka's Rapier"];
let bossSoulWeapons = ["Abyss Greatsword", "Chaos Blade", "Darkmoon Bow", "Dragon Bone Fist", "Dragonslayer Spear", "Golem Axe", "Greatsword of Artorias", "Greatsword of Artorias (Cursed)", "Great Lord Greatsword", "Lifehunt Scythe", "Quelaag's Furysword", "Smough's Hammer"];
let demonTitaniteWeapons = ["Abyss Greatsword", "Chaos Blade", "Darkmoon Bow", "Demon's Spear", "Dragonslayer Spear", "Golem Axe", "Gravelord Sword", "Great Lord Greatsword", "Greatsword of Artorias", "Greatsword of Artorias (Cursed)", "Lifehunt Scythe", "Quelaag's Furysword", "Smough's Hammer"];
let dragonWeapons = ["Dragon Bone Fist", "Dragon Greatsword", "Dragon King Greataxe", "Dragon Tooth", "Drake Sword", "Moonlight Greatsword", "Obsidian Greatsword", "Priscilla's Dagger"];

// ----------------- List of all Weapons ----------------------
let weaponsList = [];

// ----------------- List of all Weapon-types ----------------------
let weaponTypes = [];
let sortedWeaponTypes = [];
let twoFilters = [];

input.addEventListener('focus', () => {
    input.value = '';
})

// ----------------- Retrieve all JSON data and make weapon lists ----------------------
fetch(dataSet)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        
        // ----------------- Setting Upgrade Path Properties ----------------------

        result.forEach(result => {
            weaponsList.push(result.name);
            weaponTypes.push(result.weapon_type);
            sortedWeaponTypes = [...new Set(weaponTypes)].sort();
            let option = document.createElement('option');
            option.value = result.name;
            weaponsDataList.appendChild(option);
        })
        result.forEach(result => {
            weaponsList.forEach(weapon => {
                if (result.name === weapon) {
                    result.upgrade_path = "Titanite";
                    result.boss_Soul_Weapon = "No";
                }
            })
            uniqueWeapons.forEach(weapon => {
                if (result.name === weapon) {
                    result.upgrade_path = "Twinkling Titanite";
                }
            })
            bossSoulWeapons.forEach(weapon => {
                if (result.name === weapon) {
                    result.boss_Soul_Weapon = "Yes";
                }
            })
            demonTitaniteWeapons.forEach(weapon => {
                if (result.name === weapon) {
                    result.upgrade_path = "Demon Titanite";
                }
            })
            dragonWeapons.forEach(weapon => {
                if (result.name === weapon) {
                    result.upgrade_path = "Dragon Scale";
                }
            })
            
        })
        reset.addEventListener('click', () => {
            table.classList.add('displaying');
            input.value = '';
            weaponsDataList.innerHTML = '';
            bossWeaponFilter.value = "placeholder";
            typeFilter.value = "placeholder";
            upgradeFilter.value = "placeholder";
            result.forEach(result => {
                let option = document.createElement('option');
                option.value = result.name;
                weaponsDataList.appendChild(option);
            })
        })
// ----------------- Filter by Weapon Type ----------------------

        typeFilter.addEventListener('change', () => {
            weaponsDataList.innerHTML = '';
            input.value = '';
            result.forEach(result => {
                if (typeFilter.value !== "placeholder" && upgradeFilter.value !== "placeholder") {
                    if (result.weapon_type === typeFilter.value && result.upgrade_path === upgradeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
                if (typeFilter.value !== "placeholder" && upgradeFilter.value === "placeholder") {
                    if (result.weapon_type === typeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                        console.log(result.name)
                    }
                }
                if (typeFilter.value === "placeholder" && upgradeFilter.value !== "placeholder") {
                    if (result.upgrade_path === upgradeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
                if (typeFilter.value !== "placeholder" && bossWeaponFilter.value === "placeholder") {
                    if (result.weapon_type === typeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
            })
        })

// ----------------- Filter by Upgrade Path ----------------------

        upgradeFilter.addEventListener('change', () => {
            weaponsDataList.innerHTML = '';
            input.value = '';
            result.forEach(result => {
                if (typeFilter.value !== "placeholder" && upgradeFilter.value !== "placeholder") {
                    if (result.weapon_type === typeFilter.value && result.upgrade_path === upgradeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
                if (upgradeFilter.value !== "placeholder" && typeFilter.value === "placeholder") {
                    if (result.upgrade_path === upgradeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
                if (upgradeFilter.value === "placeholder" && typeFilter.value !== "placeholder") {
                    if (result.weapon_type === typeFilter.value) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                    }
                }
            })
        })

// ----------------- Filter by Boss Soul Weapon ----------------------

        bossWeaponFilter.addEventListener('change', () => {
            weaponsDataList.innerHTML = '';
            input.value = '';
            result.forEach(result => {
                if (result.boss_Soul_Weapon === "Yes") {
                    let option = document.createElement('option');
                    option.value = result.name;
                    weaponsDataList.appendChild(option);
                }
                if (bossWeaponFilter.value === "placeholder" && typeFilter.value !== "placeholder") {
                    if (typeFilter.value === result.weapon_type) {
                        let option = document.createElement('option');
                        option.value = result.name;
                        weaponsDataList.appendChild(option);
                        console.log(option);
                    }
                }
                if (bossWeaponFilter.value === "placeholder") {
                    let option = document.createElement('option');
                    option.value = result.name;
                    weaponsDataList.appendChild(option);
                }
            })
        })
    })


weaponsForm.addEventListener('submit', e => {
    e.preventDefault();
    if (table.classList.contains('displaying')) {
        table.classList.remove('displaying');
    }
    fetch(dataSet)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {

// ----------------- Setting Upgrade Path Properties ----------------------

            result.forEach(result => {
                weaponsList.forEach(weapon => {
                    if (result.name === weapon) {
                        result.upgrade_path = "Titanite";
                        result.boss_Soul_Weapon = "No";
                    }
                })
                uniqueWeapons.forEach(weapon => {
                    if (result.name === weapon) {
                        result.upgrade_path = "Twinkling Titanite";
                    }
                })
                bossSoulWeapons.forEach(weapon => {
                    if (result.name === weapon) {
                        result.boss_Soul_Weapon = "Yes";
                    }
                })
                demonTitaniteWeapons.forEach(weapon => {
                    if (result.name === weapon) {
                        result.upgrade_path = "Demon Titanite";
                    }
                })
                dragonWeapons.forEach(weapon => {
                    if (result.name === weapon) {
                        result.upgrade_path = "Dragon Scale";
                    }
                })
            })

// ----------------- Generate Table and Upgrade Calculations----------------------

            result.forEach(result => {
                if (input.value === result.name) {
                table.innerHTML = 
                    `<tbody>
                    <tr>
                    <td class="tg-c3ow" colspan="4">${result.name}</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                    </tr>
                    <tr>
                    <td class="tg-0pky">PHYSICAL</td>
                    <td class="tg-0pky">MAGIC</td>
                    <td class="tg-0pky">LIGHTNING</td>
                    <td class="tg-0pky">FIRE</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow">${result.damage.physical} (${result.damage_reduction.physical})</td>
                    <td class="tg-c3ow">${result.damage.magic} (${result.damage_reduction.magic})</td>
                    <td class="tg-c3ow">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                    <td class="tg-c3ow">${result.damage.fire} (${result.damage_reduction.fire})</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow">STRENGTH</td>
                    <td class="tg-c3ow">DEXTERITY</td>
                    <td class="tg-c3ow">FAITH</td>
                    <td class="tg-c3ow">INTELLIGENCE</td>
                    </tr>
                    <tr>
                    <td class="tg-0pky">${result.requirements.strength}</td>
                    <td class="tg-0pky">${result.requirements.dexterity}</td>
                    <td class="tg-0pky">${result.requirements.faith}</td>
                    <td class="tg-0pky">${result.requirements.intelligence}</td>
                    </tr>
                    <tr>
                    <td class="tg-baqh">DURABILITY</td>
                    <td class="tg-baqh">WEIGHT</td>
                    <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                    </tr>
                    <tr>
                    <td class="tg-0lax">${result.durability}</td>
                    <td class="tg-0lax">${result.weight}</td>
                    <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                    <tr>
                    <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow">STRENGTH</td>
                    <td class="tg-c3ow">DEXTERITY</td>
                    <td class="tg-c3ow">FAITH</td>
                    <td class="tg-c3ow">INTELLIGENCE</td>
                    </tr>
                    <tr>
                    <td class="tg-c3ow">${result.bonus.strength}</td>
                    <td class="tg-c3ow">${result.bonus.dexterity}</td>
                    <td class="tg-c3ow">${result.bonus.faith}</td>
                    <td class="tg-c3ow">${result.bonus.intelligence}</td>
                    </tr>
                    </tr>
                    <tr>
                    <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                    <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                    </tr>
                    <tr>
                    <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                    <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                    </tr>
                    </tbody>`
                    regularUpgrade.addEventListener('change', () => {
                        let weaponAR = (regularUpgrade.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${weaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                        console.log(weaponAR);
                    })
                    twinklingUpgrade.addEventListener('change', () => {
                        let twinklingWeaponAR = (twinklingUpgrade.value * result.damage.physical).toFixed(0);
                        let twinklingMagicAR = (twinklingUpgrade.value * result.damage.magic).toFixed(0);
                        let twinklingLightningAR = (twinklingUpgrade.value * result.damage.lightning).toFixed(0);
                        let twinklingFireAR = (twinklingUpgrade.value * result.damage.fire).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${twinklingWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${twinklingMagicAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${twinklingLightningAR} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${twinklingFireAR} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    demonUpgrade.addEventListener('change', () => {
                        let demonWeaponAR = (demonUpgrade.value * result.damage.physical).toFixed(0);
                        let demonMagicAR = (demonUpgrade.value * result.damage.magic).toFixed(0);
                        let demonLightningAR = (demonUpgrade.value * result.damage.lightning).toFixed(0);
                        let demonFireAR = (demonUpgrade.value * result.damage.fire).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${demonWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${demonMagicAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${demonLightningAR} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${demonFireAR} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    dragonScales.addEventListener('change', () => {
                        let dragonWeaponAR = (dragonScales.value * result.damage.physical).toFixed(0);
                        let dragonMagicAR = (dragonScales.value * result.damage.magic).toFixed(0);
                        let dragonLightningAR = (dragonScales.value * result.damage.lightning).toFixed(0);
                        let dragonFireAR = (dragonScales.value * result.damage.fire).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${dragonWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${dragonMagicAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${dragonLightningAR} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${dragonFireAR} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    lightning.addEventListener('change', () => {
                        let lightningWeaponAR = (lightning.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${lightningWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${lightningWeaponAR} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    crystal.addEventListener('change', () => {
                        let crystalWeaponAR = (crystal.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${crystalWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    raw.addEventListener('change', () => {
                        let rawWeaponAR = (raw.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${rawWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    magic.addEventListener('change', () => {
                        let magicWeaponAR = (magic.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${magicWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${magicWeaponAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    enchanted.addEventListener('change', () => {
                        let enchantedWeaponAR = (enchanted.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${enchantedWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${enchantedWeaponAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    divine.addEventListener('change', () => {
                        let divineWeaponAR = (divine.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${divineWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${divineWeaponAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    occult.addEventListener('change', () => {
                        let occultWeaponAR = (occult.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${occultWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${occultWeaponAR} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${result.damage.fire} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    fire.addEventListener('change', () => {
                        let fireWeaponAR = (fire.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${fireWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${fireWeaponAR} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                    chaos.addEventListener('change', () => {
                        let chaosWeaponAR = (chaos.value * result.damage.physical).toFixed(0);
                        table.innerHTML = 
                        `<tbody>
                        <tr>
                        <td class="tg-c3ow" colspan="4">${result.name}</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">DAMAGE (REDUCTION %)</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">PHYSICAL</td>
                        <td class="tg-0pky">MAGIC</td>
                        <td class="tg-0pky">LIGHTNING</td>
                        <td class="tg-0pky">FIRE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow upgraded">${chaosWeaponAR} (${result.damage_reduction.physical})</td>
                        <td class="tg-c3ow upgraded">${result.damage.magic} (${result.damage_reduction.magic})</td>
                        <td class="tg-c3ow upgraded">${result.damage.lightning} (${result.damage_reduction.lightning})</td>
                        <td class="tg-c3ow upgraded">${chaosWeaponAR} (${result.damage_reduction.fire})</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow" colspan="4">REQUIREMENTS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-0pky">${result.requirements.strength}</td>
                        <td class="tg-0pky">${result.requirements.dexterity}</td>
                        <td class="tg-0pky">${result.requirements.faith}</td>
                        <td class="tg-0pky">${result.requirements.intelligence}</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh">DURABILITY</td>
                        <td class="tg-baqh">WEIGHT</td>
                        <td class="tg-baqh" colspan="2">WEAPON TYPE / ATTACK TYPE</td>
                        </tr>
                        <tr>
                        <td class="tg-0lax">${result.durability}</td>
                        <td class="tg-0lax">${result.weight}</td>
                        <td class="tg-0lax" colspan="2">${result.weapon_type} / ${result.attack_type}</td>
                        <tr>
                        <td class="tg-c3ow" colspan="4">PARAMETER BONUS</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">STRENGTH</td>
                        <td class="tg-c3ow">DEXTERITY</td>
                        <td class="tg-c3ow">FAITH</td>
                        <td class="tg-c3ow">INTELLIGENCE</td>
                        </tr>
                        <tr>
                        <td class="tg-c3ow">${result.bonus.strength}</td>
                        <td class="tg-c3ow">${result.bonus.dexterity}</td>
                        <td class="tg-c3ow">${result.bonus.faith}</td>
                        <td class="tg-c3ow">${result.bonus.intelligence}</td>
                        </tr>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">UPGRADE PATH</td>
                        <td class="tg-baqh" colspan="2">BOSS SOUL WEAPON</td>
                        </tr>
                        <tr>
                        <td class="tg-baqh" colspan="2">${result.upgrade_path}</td>
                        <td class="tg-baqh" colspan="2">${result.boss_Soul_Weapon}</td>
                        </tr>
                        </tbody>`
                    })
                }
            })
        })
})