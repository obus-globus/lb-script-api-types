import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export interface ContentHandlerFactory extends Serializable, Object{
    getNewContentHandler(): ContentHandler;
    getNewContentHandler(arg0: OutputStream, arg1: Charset): ContentHandler;
}