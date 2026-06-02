import type { Object } from '../../../java/lang/Object.d.ts'
export class TrieConfig extends Object {
    constructor()
    readonly allowOverlaps: boolean;
    readonly caseInsensitive: boolean;
    readonly onlyWholeWords: boolean;
    readonly onlyWholeWordsWhiteSpaceSeparated: boolean;
    readonly stopOnHit: boolean;
    isAllowOverlaps(): boolean;
    isCaseInsensitive(): boolean;
    isOnlyWholeWords(): boolean;
    isOnlyWholeWordsWhiteSpaceSeparated(): boolean;
    isStopOnHit(): boolean;
    setAllowOverlaps(arg0: boolean): void;
    setCaseInsensitive(arg0: boolean): void;
    setOnlyWholeWords(arg0: boolean): void;
    setOnlyWholeWordsWhiteSpaceSeparated(arg0: boolean): void;
    setStopOnHit(arg0: boolean): void;
}