import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export class AbstractOrigin$ByteArrayOrigin extends AbstractOrigin<number[], AbstractOrigin$ByteArrayOrigin> {
    constructor(arg0: number[])
    getByteArray(): number[];
    getInputStream(arg0: OpenOption[]): InputStream;
    getReader(arg0: Charset): Reader;
    size(): number;
}