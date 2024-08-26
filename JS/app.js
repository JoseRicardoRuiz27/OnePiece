import {fetchLuffyGears} from "./luffyGears.js"
import { fetchFruits } from "./fruits.js";

document.getElementById('gear-button').addEventListener('click', () => fetchLuffyGears() );
document.getElementById('fruits-button').addEventListener('click', () => fetchFruits() );
