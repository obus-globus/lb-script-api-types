import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { GLDebugMessageCallbackI } from '../../../org/lwjgl/opengl/GLDebugMessageCallbackI.d.ts'
export class KHRDebug extends Object {
    static GL_BUFFER: number;
    static GL_CONTEXT_FLAG_DEBUG_BIT: number;
    static GL_DEBUG_CALLBACK_FUNCTION: number;
    static GL_DEBUG_CALLBACK_USER_PARAM: number;
    static GL_DEBUG_GROUP_STACK_DEPTH: number;
    static GL_DEBUG_LOGGED_MESSAGES: number;
    static GL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH: number;
    static GL_DEBUG_OUTPUT: number;
    static GL_DEBUG_OUTPUT_SYNCHRONOUS: number;
    static GL_DEBUG_SEVERITY_HIGH: number;
    static GL_DEBUG_SEVERITY_LOW: number;
    static GL_DEBUG_SEVERITY_MEDIUM: number;
    static GL_DEBUG_SEVERITY_NOTIFICATION: number;
    static GL_DEBUG_SOURCE_API: number;
    static GL_DEBUG_SOURCE_APPLICATION: number;
    static GL_DEBUG_SOURCE_OTHER: number;
    static GL_DEBUG_SOURCE_SHADER_COMPILER: number;
    static GL_DEBUG_SOURCE_THIRD_PARTY: number;
    static GL_DEBUG_SOURCE_WINDOW_SYSTEM: number;
    static GL_DEBUG_TYPE_DEPRECATED_BEHAVIOR: number;
    static GL_DEBUG_TYPE_ERROR: number;
    static GL_DEBUG_TYPE_MARKER: number;
    static GL_DEBUG_TYPE_OTHER: number;
    static GL_DEBUG_TYPE_PERFORMANCE: number;
    static GL_DEBUG_TYPE_POP_GROUP: number;
    static GL_DEBUG_TYPE_PORTABILITY: number;
    static GL_DEBUG_TYPE_PUSH_GROUP: number;
    static GL_DEBUG_TYPE_UNDEFINED_BEHAVIOR: number;
    static GL_DISPLAY_LIST: number;
    static GL_MAX_DEBUG_GROUP_STACK_DEPTH: number;
    static GL_MAX_DEBUG_LOGGED_MESSAGES: number;
    static GL_MAX_DEBUG_MESSAGE_LENGTH: number;
    static GL_MAX_LABEL_LENGTH: number;
    static GL_PROGRAM: number;
    static GL_PROGRAM_PIPELINE: number;
    static GL_QUERY: number;
    static GL_SAMPLER: number;
    static GL_SHADER: number;
    static glDebugMessageCallback(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => void, paramarg1: number): void;
    static glDebugMessageControl(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean): void;
    static glDebugMessageControl(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: boolean): void;
    static glDebugMessageControl(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: boolean): void;
    static glDebugMessageInsert(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: CharSequence): void;
    static glDebugMessageInsert(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glGetDebugMessageLog(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[], paramarg6: ByteBuffer): number;
    static glGetDebugMessageLog(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer, paramarg6: ByteBuffer): number;
    static glGetObjectLabel(paramarg0: number, paramarg1: number): string;
    static glGetObjectLabel(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static glGetObjectLabel(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetObjectLabel(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glGetObjectPtrLabel(paramarg0: number): string;
    static glGetObjectPtrLabel(paramarg0: number, paramarg1: number): string;
    static glGetObjectPtrLabel(paramarg0: number, paramarg1: number[], paramarg2: ByteBuffer): void;
    static glGetObjectPtrLabel(paramarg0: number, paramarg1: IntBuffer, paramarg2: ByteBuffer): void;
    static glObjectLabel(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static glObjectLabel(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glObjectPtrLabel(paramarg0: number, paramarg1: CharSequence): void;
    static glObjectPtrLabel(paramarg0: number, paramarg1: ByteBuffer): void;
    static glPopDebugGroup(): void;
    static glPushDebugGroup(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static glPushDebugGroup(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static nglDebugMessageCallback(paramarg0: number, paramarg1: number): void;
    static nglDebugMessageControl(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static nglDebugMessageInsert(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglGetDebugMessageLog(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static nglGetObjectLabel(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetObjectPtrLabel(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglObjectLabel(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglObjectPtrLabel(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglPushDebugGroup(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}