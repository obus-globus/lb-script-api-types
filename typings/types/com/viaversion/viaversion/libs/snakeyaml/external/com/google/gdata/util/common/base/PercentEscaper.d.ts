import type { UnicodeEscaper } from '../../../../../../../../../../../../com/viaversion/viaversion/libs/snakeyaml/external/com/google/gdata/util/common/base/UnicodeEscaper.d.ts'
import type { Object } from '../../../../../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../../../../../java/lang/CharSequence.d.ts'
export class PercentEscaper extends UnicodeEscaper {
    static SAFECHARS_URLENCODER: string;
    static SAFEPATHCHARS_URLENCODER: string;
    static SAFEQUERYSTRINGCHARS_URLENCODER: string;
    constructor(arg0: string, arg1: boolean)
    // private plusForSpace: boolean;
    // private safeOctets: (Object | null)[];
    escape(arg0: number): string[];
    escape(arg0: string): string;
    nextEscapeIndex(arg0: CharSequence, arg1: number, arg2: number): number;
}