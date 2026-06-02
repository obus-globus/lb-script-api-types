import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBDrawInstanced extends Object {
    static glDrawArraysInstancedARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number): void;
    static glDrawElementsInstancedARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static glDrawElementsInstancedARB(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static glDrawElementsInstancedARB(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static nglDrawElementsInstancedARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}