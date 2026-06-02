import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { XmlStreamReader } from '../../../../../org/apache/commons/io/input/XmlStreamReader.d.ts'
export class XmlStreamReader$Builder extends AbstractStreamBuilder<XmlStreamReader, XmlStreamReader$Builder> {
    constructor()
    // private httpContentType: string;
    // private lenient: boolean;
    // private nullCharset: boolean;
    get(): XmlStreamReader;
    setCharset(arg0: Charset): XmlStreamReader$Builder;
    setCharset(arg0: string): XmlStreamReader$Builder;
    setHttpContentType(arg0: string): XmlStreamReader$Builder;
    setLenient(arg0: boolean): XmlStreamReader$Builder;
}