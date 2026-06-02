import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { EXTDebugProcI } from '../../../org/lwjgl/openal/EXTDebugProcI.d.ts'
export class EXTDebug extends Object {
    static ALC_CONTEXT_DEBUG_BIT_EXT: number;
    static ALC_CONTEXT_FLAGS_EXT: number;
    static AL_AUXILIARY_EFFECT_SLOT_EXT: number;
    static AL_BUFFER_EXT: number;
    static AL_CONTEXT_DEBUG_BIT_EXT: number;
    static AL_CONTEXT_FLAGS_EXT: number;
    static AL_DEBUG_CALLBACK_FUNCTION_EXT: number;
    static AL_DEBUG_CALLBACK_USER_PARAM_EXT: number;
    static AL_DEBUG_LOGGED_MESSAGES_EXT: number;
    static AL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_EXT: number;
    static AL_DEBUG_OUTPUT_EXT: number;
    static AL_DEBUG_SEVERITY_HIGH_EXT: number;
    static AL_DEBUG_SEVERITY_LOW_EXT: number;
    static AL_DEBUG_SEVERITY_MEDIUM_EXT: number;
    static AL_DEBUG_SEVERITY_NOTIFICATION_EXT: number;
    static AL_DEBUG_SOURCE_API_EXT: number;
    static AL_DEBUG_SOURCE_APPLICATION_EXT: number;
    static AL_DEBUG_SOURCE_AUDIO_SYSTEM_EXT: number;
    static AL_DEBUG_SOURCE_OTHER_EXT: number;
    static AL_DEBUG_SOURCE_THIRD_PARTY_EXT: number;
    static AL_DEBUG_TYPE_DEPRECATED_BEHAVIOR_EXT: number;
    static AL_DEBUG_TYPE_ERROR_EXT: number;
    static AL_DEBUG_TYPE_MARKER_EXT: number;
    static AL_DEBUG_TYPE_OTHER_EXT: number;
    static AL_DEBUG_TYPE_PERFORMANCE_EXT: number;
    static AL_DEBUG_TYPE_POP_GROUP_EXT: number;
    static AL_DEBUG_TYPE_PORTABILITY_EXT: number;
    static AL_DEBUG_TYPE_PUSH_GROUP_EXT: number;
    static AL_DEBUG_TYPE_UNDEFINED_BEHAVIOR_EXT: number;
    static AL_DONT_CARE_EXT: number;
    static AL_EFFECT_EXT: number;
    static AL_FILTER_EXT: number;
    static AL_MAX_DEBUG_GROUP_STACK_DEPTH_EXT: number;
    static AL_MAX_DEBUG_LOGGED_MESSAGES_EXT: number;
    static AL_MAX_DEBUG_MESSAGE_LENGTH_EXT: number;
    static AL_MAX_LABEL_LENGTH_EXT: number;
    static AL_SOURCE_EXT: number;
    static AL_STACK_OVERFLOW_EXT: number;
    static AL_STACK_UNDERFLOW_EXT: number;
    static alDebugMessageCallbackDirectEXT(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => void, paramarg2: number): void;
    static alDebugMessageCallbackEXT(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => void, paramarg1: number): void;
    static alDebugMessageControlDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[], paramarg5: boolean): void;
    static alDebugMessageControlDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer, paramarg5: boolean): void;
    static alDebugMessageControlEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: boolean): void;
    static alDebugMessageControlEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: boolean): void;
    static alDebugMessageInsertDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: CharSequence): void;
    static alDebugMessageInsertDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): void;
    static alDebugMessageInsertEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: CharSequence): void;
    static alDebugMessageInsertEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static alGetDebugMessageLogDirectEXT(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[], paramarg6: ByteBuffer): number;
    static alGetDebugMessageLogDirectEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer, paramarg6: ByteBuffer): number;
    static alGetDebugMessageLogEXT(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: ByteBuffer): number;
    static alGetDebugMessageLogEXT(paramarg0: IntBuffer, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: ByteBuffer): number;
    static alGetObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: ByteBuffer): void;
    static alGetObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: ByteBuffer): void;
    static alGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static alGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static alGetPointerDirectEXT(paramarg0: number, paramarg1: number): number;
    static alGetPointerEXT(paramarg0: number): number;
    static alGetPointervDirectEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static alGetPointervEXT(paramarg0: number, paramarg1: PointerBuffer): void;
    static alObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: CharSequence): void;
    static alObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static alObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static alObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static alPopDebugGroupDirectEXT(paramarg0: number): void;
    static alPopDebugGroupEXT(): void;
    static alPushDebugGroupDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: CharSequence): void;
    static alPushDebugGroupDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static alPushDebugGroupEXT(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static alPushDebugGroupEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static nalDebugMessageCallbackDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalDebugMessageCallbackEXT(paramarg0: number, paramarg1: number): void;
    static nalDebugMessageControlDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static nalDebugMessageControlEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static nalDebugMessageInsertDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nalDebugMessageInsertEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalGetDebugMessageLogDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static nalGetDebugMessageLogEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static nalGetObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalGetObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalGetPointervDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetPointervEXT(paramarg0: number, paramarg1: number): void;
    static nalObjectLabelDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalObjectLabelEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalPushDebugGroupDirectEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalPushDebugGroupEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}