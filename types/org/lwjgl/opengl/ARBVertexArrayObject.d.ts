import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBVertexArrayObject extends Object {
    static GL_VERTEX_ARRAY_BINDING: number;
    static glBindVertexArray(paramarg0: number): void;
    static glDeleteVertexArrays(paramarg0: number): void;
    static glDeleteVertexArrays(paramarg0: number[]): void;
    static glDeleteVertexArrays(paramarg0: IntBuffer): void;
    static glGenVertexArrays(): number;
    static glGenVertexArrays(paramarg0: number[]): void;
    static glGenVertexArrays(paramarg0: IntBuffer): void;
    static glIsVertexArray(paramarg0: number): boolean;
    static nglDeleteVertexArrays(paramarg0: number, paramarg1: number): void;
    static nglGenVertexArrays(paramarg0: number, paramarg1: number): void;
    constructor()
}