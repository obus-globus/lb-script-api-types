import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ARBDrawElementsBaseVertex extends Object {
    static glDrawElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glDrawElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number): void;
    static glDrawElementsBaseVertex(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static glDrawElementsBaseVertex(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static glDrawElementsBaseVertex(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static glDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number): void;
    static glDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): void;
    static glDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: number): void;
    static glDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer, paramarg4: number): void;
    static glMultiDrawElementsBaseVertex(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: PointerBuffer, paramarg4: number[]): void;
    static glMultiDrawElementsBaseVertex(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: PointerBuffer, paramarg4: IntBuffer): void;
    static nglDrawElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglDrawElementsInstancedBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglDrawRangeElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglMultiDrawElementsBaseVertex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}