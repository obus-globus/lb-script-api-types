import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export class AbstractOrigin$CharSequenceOrigin extends AbstractOrigin<CharSequence, AbstractOrigin$CharSequenceOrigin> {
    constructor(arg0: CharSequence)
    getByteArray(): number[];
    getByteArray(arg0: number, arg1: number): number[];
    getCharSequence(arg0: Charset): CharSequence;
    getInputStream(arg0: OpenOption[]): InputStream;
    getReader(arg0: Charset): Reader;
    size(): number;
}