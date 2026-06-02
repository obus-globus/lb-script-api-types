import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBInvalidateSubdata extends Object {
    static glInvalidateBufferData(paramarg0: number): void;
    static glInvalidateBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glInvalidateFramebuffer(paramarg0: number, paramarg1: number): void;
    static glInvalidateFramebuffer(paramarg0: number, paramarg1: number[]): void;
    static glInvalidateFramebuffer(paramarg0: number, paramarg1: IntBuffer): void;
    static glInvalidateSubFramebuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glInvalidateSubFramebuffer(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glInvalidateSubFramebuffer(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glInvalidateTexImage(paramarg0: number, paramarg1: number): void;
    static glInvalidateTexSubImage(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static nglInvalidateFramebuffer(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglInvalidateSubFramebuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}