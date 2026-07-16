import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBClearBufferObject extends Object {
    static glClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static glClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): void;
    static glClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static glClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ShortBuffer): void;
    static glClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static glClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer): void;
    static glClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: FloatBuffer): void;
    static glClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: IntBuffer): void;
    static glClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ShortBuffer): void;
    static glClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static glClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): void;
    static glClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static glClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ShortBuffer): void;
    static glClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static glClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer): void;
    static glClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: FloatBuffer): void;
    static glClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: IntBuffer): void;
    static glClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ShortBuffer): void;
    static nglClearBufferData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglClearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglClearNamedBufferDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglClearNamedBufferSubDataEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}