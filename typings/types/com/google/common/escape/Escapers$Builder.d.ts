import type { Escapers$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Escapers$Builder extends Object {
    private constructor()
    constructor(arg0: Escapers$1)
    // private replacementMap: { [key: string]: string };
    // private safeMax: string;
    // private safeMin: string;
    // private unsafeReplacement: string;
    addEscape(c: string, replacement: string): Escapers$Builder;
    build(): Escaper;
    setSafeRange(safeMin: string, safeMax: string): Escapers$Builder;
    setUnsafeReplacement(unsafeReplacement: string): Escapers$Builder;
}