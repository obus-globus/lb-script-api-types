import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberingSystem extends Object {
    static LATIN: NumberingSystem;
    static getAvailableNames(): string[];
    static getInstance(): NumberingSystem;
    static getInstance(paramarg0: ULocale): NumberingSystem;
    static getInstance(paramarg0: number, paramarg1: boolean, paramarg2: string): NumberingSystem;
    static getInstance(paramarg0: Locale): NumberingSystem;
    static getInstanceByName(paramarg0: string): NumberingSystem;
    static isValidDigitString(paramarg0: string): boolean;
    constructor()
    readonly algorithmic: boolean;
    // private desc: string;
    readonly name: string;
    readonly radix: number;
    getDescription(): string;
    getName(): string;
    getRadix(): number;
    isAlgorithmic(): boolean;
}