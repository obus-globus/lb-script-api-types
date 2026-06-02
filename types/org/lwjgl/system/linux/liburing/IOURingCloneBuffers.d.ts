import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingCloneBuffers extends Struct<IOURingCloneBuffers> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DST_OFF: number;
    static FLAGS: number;
    static NR: number;
    static PAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRC_FD: number;
    static SRC_OFF: number;
    static calloc(): IOURingCloneBuffers;
    static calloc(paramarg0: MemoryStack): IOURingCloneBuffers;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingCloneBuffers;
    static create(paramarg0: number): IOURingCloneBuffers;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingCloneBuffers;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingCloneBuffers;
    static malloc(paramarg0: MemoryStack): IOURingCloneBuffers;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndst_off(paramarg0: number): number;
    static ndst_off(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nnr(paramarg0: number): number;
    static nnr(paramarg0: number, paramarg1: number): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): IntBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: IntBuffer): void;
    static nsrc_fd(paramarg0: number): number;
    static nsrc_fd(paramarg0: number, paramarg1: number): void;
    static nsrc_off(paramarg0: number): number;
    static nsrc_off(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingCloneBuffers;
    dst_off(): number;
    dst_off(arg0: number): IOURingCloneBuffers;
    flags(): number;
    flags(arg0: number): IOURingCloneBuffers;
    nr(): number;
    nr(arg0: number): IOURingCloneBuffers;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): IOURingCloneBuffers;
    set(arg0: IOURingCloneBuffers): IOURingCloneBuffers;
    sizeof(): number;
    src_fd(): number;
    src_fd(arg0: number): IOURingCloneBuffers;
    src_off(): number;
    src_off(arg0: number): IOURingCloneBuffers;
}