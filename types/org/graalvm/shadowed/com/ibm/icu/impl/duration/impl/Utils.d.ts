import type { Locale } from '../../../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Utils$ChineseDigits } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/Utils$ChineseDigits.d.ts'
export class Utils extends Object {
    static chineseNumber(paramn: number, paramzh: Utils$ChineseDigits): string;
    static localeFromString(params: string): Locale;
    constructor()
}