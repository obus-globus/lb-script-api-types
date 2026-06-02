import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { GLDebugMessageARBCallbackI } from '../../../org/lwjgl/opengl/GLDebugMessageARBCallbackI.d.ts'
export class ARBDebugOutput extends Object {
    static GL_DEBUG_CALLBACK_FUNCTION_ARB: number;
    static GL_DEBUG_CALLBACK_USER_PARAM_ARB: number;
    static GL_DEBUG_LOGGED_MESSAGES_ARB: number;
    static GL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_ARB: number;
    static GL_DEBUG_OUTPUT_SYNCHRONOUS_ARB: number;
    static GL_DEBUG_SEVERITY_HIGH_ARB: number;
    static GL_DEBUG_SEVERITY_LOW_ARB: number;
    static GL_DEBUG_SEVERITY_MEDIUM_ARB: number;
    static GL_DEBUG_SOURCE_API_ARB: number;
    static GL_DEBUG_SOURCE_APPLICATION_ARB: number;
    static GL_DEBUG_SOURCE_OTHER_ARB: number;
    static GL_DEBUG_SOURCE_SHADER_COMPILER_ARB: number;
    static GL_DEBUG_SOURCE_THIRD_PARTY_ARB: number;
    static GL_DEBUG_SOURCE_WINDOW_SYSTEM_ARB: number;
    static GL_DEBUG_TYPE_DEPRECATED_BEHAVIOR_ARB: number;
    static GL_DEBUG_TYPE_ERROR_ARB: number;
    static GL_DEBUG_TYPE_OTHER_ARB: number;
    static GL_DEBUG_TYPE_PERFORMANCE_ARB: number;
    static GL_DEBUG_TYPE_PORTABILITY_ARB: number;
    static GL_DEBUG_TYPE_UNDEFINED_BEHAVIOR_ARB: number;
    static GL_MAX_DEBUG_LOGGED_MESSAGES_ARB: number;
    static GL_MAX_DEBUG_MESSAGE_LENGTH_ARB: number;
    static glDebugMessageCallbackARB(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => void, paramarg1: number): void;
    static glDebugMessageControlARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean): void;
    static glDebugMessageControlARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: boolean): void;
    static glDebugMessageControlARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: boolean): void;
    static glDebugMessageInsertARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: CharSequence): void;
    static glDebugMessageInsertARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glGetDebugMessageLogARB(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[], paramarg6: ByteBuffer): number;
    static glGetDebugMessageLogARB(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer, paramarg6: ByteBuffer): number;
    static nglDebugMessageCallbackARB(paramarg0: number, paramarg1: number): void;
    static nglDebugMessageControlARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static nglDebugMessageInsertARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetDebugMessageLogARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    constructor()
}