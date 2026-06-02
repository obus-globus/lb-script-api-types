import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBVertexAttribBinding extends Object {
    static GL_MAX_VERTEX_ATTRIB_BINDINGS: number;
    static GL_MAX_VERTEX_ATTRIB_RELATIVE_OFFSET: number;
    static GL_VERTEX_ATTRIB_BINDING: number;
    static GL_VERTEX_ATTRIB_RELATIVE_OFFSET: number;
    static GL_VERTEX_BINDING_BUFFER: number;
    static GL_VERTEX_BINDING_DIVISOR: number;
    static GL_VERTEX_BINDING_OFFSET: number;
    static GL_VERTEX_BINDING_STRIDE: number;
    static glBindVertexBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexArrayBindVertexBufferEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexArrayVertexAttribBindingEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexArrayVertexAttribFormatEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean, paramarg5: number): void;
    static glVertexArrayVertexAttribIFormatEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexArrayVertexAttribLFormatEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexArrayVertexBindingDivisorEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribBinding(paramarg0: number, paramarg1: number): void;
    static glVertexAttribFormat(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: number): void;
    static glVertexAttribIFormat(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexAttribLFormat(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexBindingDivisor(paramarg0: number, paramarg1: number): void;
    constructor()
}