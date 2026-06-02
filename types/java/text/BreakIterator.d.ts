import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export abstract class BreakIterator extends Object implements Cloneable {
    static DONE: number;
    static getAvailableLocales(): (Object | null)[];
    static getCharacterInstance(): BreakIterator;
    static getCharacterInstance(paramarg0: Locale): BreakIterator;
    static getLineInstance(): BreakIterator;
    static getLineInstance(paramarg0: Locale): BreakIterator;
    static getSentenceInstance(): BreakIterator;
    static getSentenceInstance(paramarg0: Locale): BreakIterator;
    static getWordInstance(): BreakIterator;
    static getWordInstance(paramarg0: Locale): BreakIterator;
    constructor()
    clone(): Object;
    protected clone(): Object;
    current(): number;
    first(): number;
    following(arg0: number): number;
    getText(): CharacterIterator;
    isBoundary(arg0: number): boolean;
    last(): number;
    next(): number;
    next(arg0: number): number;
    preceding(arg0: number): number;
    previous(): number;
    setText(arg0: CharacterIterator): void;
    setText(arg0: string): void;
}