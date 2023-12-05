import {suite, should} from "../asset/protest.js";
import mathutils from "../src/mathutils.js";

suite('Should sum of parameters be equal to expected', () => {
    should(mathutils.sum(2,2)).be(4); //un cas de test
    should(mathutils.sum(0,0)).be(1);
});