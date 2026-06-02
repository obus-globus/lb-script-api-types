import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class EXTDebugLabel extends Object {
    static GL_BUFFER_OBJECT_EXT: number;
    static GL_PROGRAM_OBJECT_EXT: number;
    static GL_PROGRAM_PIPELINE_OBJECT_EXT: number;
    static GL_QUERY_OBJECT_EXT: number;
    static GL_SHADER_OBJECT_EXT: number;
    static GL_VERTEX_ARRAY_OBJECT_EXT: number;
    static glGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glLabelObjectEXT(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static glLabelObjectEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static nglGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglLabelObjectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}