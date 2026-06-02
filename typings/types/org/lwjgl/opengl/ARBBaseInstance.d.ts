import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBBaseInstance extends Object {
    static glDrawArraysInstancedBaseInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number, paramarg3: number): void;
    static glDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: IntBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglDrawElementsInstancedBaseInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglDrawElementsInstancedBaseVertexBaseInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}