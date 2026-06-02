import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SAXException } from '../../../../org/xml/sax/SAXException.d.ts'
export class TaggedSAXException extends SAXException {
    constructor(arg0: SAXException, arg1: Object)
    readonly cause: SAXException | null;
    readonly tag: Object;
    getTag(): Object;
}