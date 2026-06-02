import type { Object } from '../../../java/lang/Object.d.ts'
import type { SAXParseException } from '../../../org/xml/sax/SAXParseException.d.ts'
export interface ErrorHandler extends Object{
    error(arg0: SAXParseException): void;
    fatalError(arg0: SAXParseException): void;
    warning(arg0: SAXParseException): void;
}