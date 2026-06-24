import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class LanguageCodePage extends Record {
    constructor(languageId: number, codePage: number)
    // private codePage: number;
    // private languageId: number;
    codePage(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    languageId(): number;
    toString(): string;
}