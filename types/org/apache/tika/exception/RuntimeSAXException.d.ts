import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { SAXException } from '../../../../org/xml/sax/SAXException.d.ts'
export class RuntimeSAXException extends RuntimeException {
    constructor(arg0: SAXException)
}