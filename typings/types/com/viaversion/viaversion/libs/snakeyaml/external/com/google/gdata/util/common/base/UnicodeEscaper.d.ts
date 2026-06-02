import type { Escaper } from '../../../../../../../../../../../../com/viaversion/viaversion/libs/snakeyaml/external/com/google/gdata/util/common/base/Escaper.d.ts'
import type { Appendable } from '../../../../../../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../../../../../java/lang/CharSequence.d.ts'
export abstract class UnicodeEscaper extends Object implements Escaper {
    constructor()
    escape(arg0: Appendable): Appendable;
    escape(arg0: number): string[];
    escape(arg0: string): string;
    escapeSlow(arg0: string, arg1: number): string;
    nextEscapeIndex(arg0: CharSequence, arg1: number, arg2: number): number;
}