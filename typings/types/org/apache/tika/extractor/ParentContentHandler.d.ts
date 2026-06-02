import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ParentContentHandler extends Object {
    constructor(arg0: ContentHandler)
    readonly contentHandler: ContentHandler;
    getContentHandler(): ContentHandler;
}