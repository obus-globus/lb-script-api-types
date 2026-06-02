import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBIndirectParameters extends Object {
    static GL_PARAMETER_BUFFER_ARB: number;
    static GL_PARAMETER_BUFFER_BINDING_ARB: number;
    static glMultiDrawArraysIndirectCountARB(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawArraysIndirectCountARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawArraysIndirectCountARB(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawArraysIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glMultiDrawElementsIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawElementsIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawElementsIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glMultiDrawElementsIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglMultiDrawArraysIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglMultiDrawElementsIndirectCountARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}