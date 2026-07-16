import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ARBVertexBufferObject extends Object {
    static GL_ARRAY_BUFFER_ARB: number;
    static GL_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_BUFFER_ACCESS_ARB: number;
    static GL_BUFFER_MAPPED_ARB: number;
    static GL_BUFFER_MAP_POINTER_ARB: number;
    static GL_BUFFER_SIZE_ARB: number;
    static GL_BUFFER_USAGE_ARB: number;
    static GL_COLOR_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_DYNAMIC_COPY_ARB: number;
    static GL_DYNAMIC_DRAW_ARB: number;
    static GL_DYNAMIC_READ_ARB: number;
    static GL_EDGE_FLAG_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_ELEMENT_ARRAY_BUFFER_ARB: number;
    static GL_ELEMENT_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_FOG_COORDINATE_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_INDEX_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_NORMAL_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_READ_ONLY_ARB: number;
    static GL_READ_WRITE_ARB: number;
    static GL_SECONDARY_COLOR_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_STATIC_COPY_ARB: number;
    static GL_STATIC_DRAW_ARB: number;
    static GL_STATIC_READ_ARB: number;
    static GL_STREAM_COPY_ARB: number;
    static GL_STREAM_DRAW_ARB: number;
    static GL_STREAM_READ_ARB: number;
    static GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_VERTEX_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_WEIGHT_ARRAY_BUFFER_BINDING_ARB: number;
    static GL_WRITE_ONLY_ARB: number;
    static glBindBufferARB(paramarg0: number, paramarg1: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: DoubleBuffer, paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: FloatBuffer, paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static glBufferDataARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer): void;
    static glDeleteBuffersARB(paramarg0: number): void;
    static glDeleteBuffersARB(paramarg0: number[]): void;
    static glDeleteBuffersARB(paramarg0: IntBuffer): void;
    static glGenBuffersARB(): number;
    static glGenBuffersARB(paramarg0: number[]): void;
    static glGenBuffersARB(paramarg0: IntBuffer): void;
    static glGetBufferParameteriARB(paramarg0: number, paramarg1: number): number;
    static glGetBufferParameterivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetBufferParameterivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetBufferPointerARB(paramarg0: number, paramarg1: number): number;
    static glGetBufferPointervARB(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer): void;
    static glIsBufferARB(paramarg0: number): boolean;
    static glMapBufferARB(paramarg0: number, paramarg1: number): ByteBuffer;
    static glMapBufferARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): ByteBuffer;
    static glMapBufferARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): ByteBuffer;
    static glUnmapBufferARB(paramarg0: number): boolean;
    static nglBufferDataARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglDeleteBuffersARB(paramarg0: number, paramarg1: number): void;
    static nglGenBuffersARB(paramarg0: number, paramarg1: number): void;
    static nglGetBufferParameterivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetBufferPointervARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetBufferSubDataARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMapBufferARB(paramarg0: number, paramarg1: number): number;
    constructor()
}