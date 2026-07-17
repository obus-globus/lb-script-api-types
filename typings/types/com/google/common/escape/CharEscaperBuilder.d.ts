import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharEscaperBuilder extends Object {
    constructor()
    // private map: JavaMap<string, string>;
    // private max: number;
    addEscape(c: string, r: string): CharEscaperBuilder;
    addEscapes(cs: string[], r: string): CharEscaperBuilder;
    toArray(): string[][];
    toEscaper(): Escaper;
}