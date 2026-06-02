import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class NVCommandList extends Object {
    static GL_ALPHA_REF_COMMAND_NV: number;
    static GL_ATTRIBUTE_ADDRESS_COMMAND_NV: number;
    static GL_BLEND_COLOR_COMMAND_NV: number;
    static GL_DRAW_ARRAYS_COMMAND_NV: number;
    static GL_DRAW_ARRAYS_INSTANCED_COMMAND_NV: number;
    static GL_DRAW_ARRAYS_STRIP_COMMAND_NV: number;
    static GL_DRAW_ELEMENTS_COMMAND_NV: number;
    static GL_DRAW_ELEMENTS_INSTANCED_COMMAND_NV: number;
    static GL_DRAW_ELEMENTS_STRIP_COMMAND_NV: number;
    static GL_ELEMENT_ADDRESS_COMMAND_NV: number;
    static GL_FRONT_FACE_COMMAND_NV: number;
    static GL_LINE_WIDTH_COMMAND_NV: number;
    static GL_NOP_COMMAND_NV: number;
    static GL_POLYGON_OFFSET_COMMAND_NV: number;
    static GL_SCISSOR_COMMAND_NV: number;
    static GL_STENCIL_REF_COMMAND_NV: number;
    static GL_TERMINATE_SEQUENCE_COMMAND_NV: number;
    static GL_UNIFORM_ADDRESS_COMMAND_NV: number;
    static GL_VIEWPORT_COMMAND_NV: number;
    static glCallCommandListNV(paramarg0: number): void;
    static glCommandListSegmentsNV(paramarg0: number, paramarg1: number): void;
    static glCompileCommandListNV(paramarg0: number): void;
    static glCreateCommandListsNV(): number;
    static glCreateCommandListsNV(paramarg0: number[]): void;
    static glCreateCommandListsNV(paramarg0: IntBuffer): void;
    static glCreateStatesNV(): number;
    static glCreateStatesNV(paramarg0: number[]): void;
    static glCreateStatesNV(paramarg0: IntBuffer): void;
    static glDeleteCommandListsNV(paramarg0: number): void;
    static glDeleteCommandListsNV(paramarg0: number[]): void;
    static glDeleteCommandListsNV(paramarg0: IntBuffer): void;
    static glDeleteStatesNV(paramarg0: number): void;
    static glDeleteStatesNV(paramarg0: number[]): void;
    static glDeleteStatesNV(paramarg0: IntBuffer): void;
    static glDrawCommandsAddressNV(paramarg0: number, paramarg1: LongBuffer, paramarg2: IntBuffer): void;
    static glDrawCommandsAddressNV(paramarg0: number, paramarg1: number[], paramarg2: number[]): void;
    static glDrawCommandsNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: number[]): void;
    static glDrawCommandsNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: IntBuffer): void;
    static glDrawCommandsStatesAddressNV(paramarg0: LongBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glDrawCommandsStatesAddressNV(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: number[]): void;
    static glDrawCommandsStatesNV(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number[], paramarg3: number[], paramarg4: number[]): void;
    static glDrawCommandsStatesNV(paramarg0: number, paramarg1: PointerBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): void;
    static glGetCommandHeaderNV(paramarg0: number, paramarg1: number): number;
    static glGetStageIndexNV(paramarg0: number): number;
    static glIsCommandListNV(paramarg0: number): boolean;
    static glIsStateNV(paramarg0: number): boolean;
    static glListDrawCommandsStatesClientNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static glListDrawCommandsStatesClientNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer): void;
    static glStateCaptureNV(paramarg0: number, paramarg1: number): void;
    static nglCreateCommandListsNV(paramarg0: number, paramarg1: number): void;
    static nglCreateStatesNV(paramarg0: number, paramarg1: number): void;
    static nglDeleteCommandListsNV(paramarg0: number, paramarg1: number): void;
    static nglDeleteStatesNV(paramarg0: number, paramarg1: number): void;
    static nglDrawCommandsAddressNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglDrawCommandsNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglDrawCommandsStatesAddressNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglDrawCommandsStatesNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglListDrawCommandsStatesClientNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}