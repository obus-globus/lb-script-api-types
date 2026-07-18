import type { Class } from '../../../java/lang/Class.d.ts'
import type { LinkageError } from '../../../java/lang/LinkageError.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MissingReflectionRegistrationError extends LinkageError {
    constructor(message: string, elementType: Class<Object>, declaringClass: Class<Object>, elementName: string, parameterTypes: Class<Object>[])
    readonly declaringClass: Class<Object>;
    readonly elementName: string;
    readonly elementType: Class<Object>;
    readonly parameterTypes: Class<Object>[];
    getDeclaringClass(): Class<Object>;
    getElementName(): string;
    getElementType(): Class<Object>;
    getParameterTypes(): Class<Object>[];
}