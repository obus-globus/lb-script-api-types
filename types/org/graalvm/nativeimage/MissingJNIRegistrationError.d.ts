import type { Class } from '../../../java/lang/Class.d.ts'
import type { LinkageError } from '../../../java/lang/LinkageError.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MissingJNIRegistrationError extends LinkageError {
    constructor(message: string, elementType: Class<Object>, declaringClass: Class<Object>, elementName: string, signature: string)
    readonly declaringClass: Class<Object>;
    readonly elementName: string;
    readonly elementType: Class<Object>;
    readonly signature: string;
    getDeclaringClass(): Class<Object>;
    getElementName(): string;
    getElementType(): Class<Object>;
    getSignature(): string;
}