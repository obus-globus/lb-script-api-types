import type { Format } from '../../../../../java/text/Format.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FormatFactory extends Object{
    getFormat(arg0: string, arg1: string, arg2: Locale): Format;
}