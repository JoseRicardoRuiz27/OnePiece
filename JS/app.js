import {fetchLuffyGears} from "./luffyGears.js"
import { fetchFruits } from "./fruits.js";
import { fetchChars } from "./characters.js";

document.getElementById('gear-button').addEventListener('click', () => fetchLuffyGears() );
document.getElementById('fruits-button').addEventListener('click', () => fetchFruits() );
document.getElementById('chars-button').addEventListener('click', () => fetchChars() );