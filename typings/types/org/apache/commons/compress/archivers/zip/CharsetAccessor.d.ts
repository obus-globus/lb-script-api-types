import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CharsetAccessor extends Object{
    getCharset(): Charset;
}