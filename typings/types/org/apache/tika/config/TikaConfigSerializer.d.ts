import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TikaConfig } from '../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { TikaConfigSerializer$Mode } from '../../../../org/apache/tika/config/TikaConfigSerializer$Mode.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfigSerializer extends Object {
    static serialize(paramarg0: TikaConfig, paramarg1: TikaConfigSerializer$Mode, paramarg2: Writer, paramarg3: Charset): void;
    static serializeParams(paramarg0: Document, paramarg1: Element, paramarg2: Object): void;
    constructor()
}