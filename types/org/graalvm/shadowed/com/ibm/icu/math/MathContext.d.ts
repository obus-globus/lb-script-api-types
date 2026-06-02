import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MathContext extends Object implements Serializable {
    static DEFAULT: MathContext;
    static ENGINEERING: number;
    static PLAIN: number;
    static ROUND_CEILING: number;
    static ROUND_DOWN: number;
    static ROUND_FLOOR: number;
    static ROUND_HALF_DOWN: number;
    static ROUND_HALF_EVEN: number;
    static ROUND_HALF_UP: number;
    static ROUND_UNNECESSARY: number;
    static ROUND_UP: number;
    static SCIENTIFIC: number;
    constructor(setdigits: number)
    constructor(setdigits: number, setform: number)
    constructor(setdigits: number, setform: number, setlostdigits: boolean)
    constructor(setdigits: number, setform: number, setlostdigits: boolean, setroundingmode: number)
    digits: number;
    form: number;
    lostDigits: boolean;
    roundingMode: number;
    getDigits(): number;
    getForm(): number;
    getLostDigits(): boolean;
    getRoundingMode(): number;
    toString(): string;
}