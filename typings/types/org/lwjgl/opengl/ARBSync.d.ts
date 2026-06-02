import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBSync extends Object {
    static GL_ALREADY_SIGNALED: number;
    static GL_CONDITION_SATISFIED: number;
    static GL_MAX_SERVER_WAIT_TIMEOUT: number;
    static GL_OBJECT_TYPE: number;
    static GL_SIGNALED: number;
    static GL_SYNC_CONDITION: number;
    static GL_SYNC_FENCE: number;
    static GL_SYNC_FLAGS: number;
    static GL_SYNC_FLUSH_COMMANDS_BIT: number;
    static GL_SYNC_GPU_COMMANDS_COMPLETE: number;
    static GL_SYNC_STATUS: number;
    static GL_TIMEOUT_EXPIRED: number;
    static GL_TIMEOUT_IGNORED: number;
    static GL_UNSIGNALED: number;
    static GL_WAIT_FAILED: number;
    static glClientWaitSync(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glDeleteSync(paramarg0: number): void;
    static glFenceSync(paramarg0: number, paramarg1: number): number;
    static glGetInteger64(paramarg0: number): number;
    static glGetInteger64v(paramarg0: number, paramarg1: LongBuffer): void;
    static glGetInteger64v(paramarg0: number, paramarg1: number[]): void;
    static glGetSynci(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static glGetSynciv(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): void;
    static glGetSynciv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glIsSync(paramarg0: number): boolean;
    static glWaitSync(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglClientWaitSync(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglGetInteger64v(paramarg0: number, paramarg1: number): void;
    static nglGetSynciv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglIsSync(paramarg0: number): boolean;
    static nglWaitSync(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}