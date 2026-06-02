import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class NameAbbreviator extends Object {
    static getAbbreviator(parampattern: string): NameAbbreviator;
    static getDefaultAbbreviator(): NameAbbreviator;
    constructor()
    abbreviate(original: string, destination: StringBuilder): void;
}