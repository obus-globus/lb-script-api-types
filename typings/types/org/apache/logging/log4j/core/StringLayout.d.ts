import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../org/apache/logging/log4j/core/Layout.d.ts'
export interface StringLayout extends Object, Layout<string>{
    getCharset(): Charset;
}