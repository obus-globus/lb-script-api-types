import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Locator } from '../../../org/xml/sax/Locator.d.ts'
import type { SAXException } from '../../../org/xml/sax/SAXException.d.ts'
export class SAXParseException extends SAXException {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number)
    constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: Exception)
    constructor(arg0: string, arg1: Locator)
    constructor(arg0: string, arg1: Locator, arg2: Exception)
    readonly columnNumber: number;
    readonly lineNumber: number;
    readonly publicId: string;
    readonly systemId: string;
    getColumnNumber(): number;
    getLineNumber(): number;
    getPublicId(): string;
    getSystemId(): string;
    // private init(arg0: string, arg1: string, arg2: number, arg3: number): void;
    toString(): string;
}