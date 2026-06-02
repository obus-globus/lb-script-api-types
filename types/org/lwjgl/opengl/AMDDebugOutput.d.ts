import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { GLDebugMessageAMDCallbackI } from '../../../org/lwjgl/opengl/GLDebugMessageAMDCallbackI.d.ts'
export class AMDDebugOutput extends Object {
    static GL_DEBUG_CATEGORY_API_ERROR_AMD: number;
    static GL_DEBUG_CATEGORY_APPLICATION_AMD: number;
    static GL_DEBUG_CATEGORY_DEPRECATION_AMD: number;
    static GL_DEBUG_CATEGORY_OTHER_AMD: number;
    static GL_DEBUG_CATEGORY_PERFORMANCE_AMD: number;
    static GL_DEBUG_CATEGORY_SHADER_COMPILER_AMD: number;
    static GL_DEBUG_CATEGORY_UNDEFINED_BEHAVIOR_AMD: number;
    static GL_DEBUG_CATEGORY_WINDOW_SYSTEM_AMD: number;
    static GL_DEBUG_LOGGED_MESSAGES_AMD: number;
    static GL_DEBUG_SEVERITY_HIGH_AMD: number;
    static GL_DEBUG_SEVERITY_LOW_AMD: number;
    static GL_DEBUG_SEVERITY_MEDIUM_AMD: number;
    static GL_MAX_DEBUG_LOGGED_MESSAGES_AMD: number;
    static GL_MAX_DEBUG_MESSAGE_LENGTH_AMD: number;
    static glDebugMessageCallbackAMD(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg1: number): void;
    static glDebugMessageEnableAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static glDebugMessageEnableAMD(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: boolean): void;
    static glDebugMessageEnableAMD(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: boolean): void;
    static glDebugMessageInsertAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: CharSequence): void;
    static glDebugMessageInsertAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glGetDebugMessageLogAMD(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: ByteBuffer): number;
    static glGetDebugMessageLogAMD(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: ByteBuffer): number;
    static nglDebugMessageCallbackAMD(paramarg0: number, paramarg1: number): void;
    static nglDebugMessageEnableAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean): void;
    static nglDebugMessageInsertAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetDebugMessageLogAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    constructor()
}