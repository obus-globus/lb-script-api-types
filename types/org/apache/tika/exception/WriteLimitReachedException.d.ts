import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { SAXException } from '../../../../org/xml/sax/SAXException.d.ts'
export class WriteLimitReachedException extends SAXException {
    static isWriteLimitReached(paramarg0: Throwable): boolean;
    static throwIfWriteLimitReached(paramarg0: Exception): void;
    constructor(arg0: number)
    readonly message: string | null;
    // private writeLimit: number;
}