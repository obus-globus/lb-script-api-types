import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Languages$LanguageSet extends Object {
    static from(paramarg0: string[]): Languages$LanguageSet;
    constructor()
    contains(arg0: string): boolean;
    getAny(): string;
    isEmpty(): boolean;
    isSingleton(): boolean;
    merge(arg0: Languages$LanguageSet): Languages$LanguageSet;
    restrictTo(arg0: Languages$LanguageSet): Languages$LanguageSet;
}