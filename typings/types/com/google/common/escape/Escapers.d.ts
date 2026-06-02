import type { CharEscaper } from '../../../../com/google/common/escape/CharEscaper.d.ts'
import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
import type { Escapers$Builder } from '../../../../com/google/common/escape/Escapers$Builder.d.ts'
import type { UnicodeEscaper } from '../../../../com/google/common/escape/UnicodeEscaper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Escapers extends Object {
    static builder(): Escapers$Builder;
    static computeReplacement(paramescaper: CharEscaper, paramc: string): string;
    static computeReplacement(paramescaper: UnicodeEscaper, paramcp: number): string;
    static nullEscaper(): Escaper;
    private constructor()
}