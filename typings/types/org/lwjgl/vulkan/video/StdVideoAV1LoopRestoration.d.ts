import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1LoopRestoration extends Struct<StdVideoAV1LoopRestoration> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMERESTORATIONTYPE: number;
    static LOOPRESTORATIONSIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1LoopRestoration;
    static calloc(paramarg0: MemoryStack): StdVideoAV1LoopRestoration;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1LoopRestoration;
    static create(paramarg0: number): StdVideoAV1LoopRestoration;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1LoopRestoration;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1LoopRestoration;
    static malloc(paramarg0: MemoryStack): StdVideoAV1LoopRestoration;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nFrameRestorationType(paramarg0: number, paramarg1: number): number;
    static nFrameRestorationType(paramarg0: number): IntBuffer;
    static nFrameRestorationType(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nFrameRestorationType(paramarg0: number, paramarg1: IntBuffer): void;
    static nLoopRestorationSize(paramarg0: number): ShortBuffer;
    static nLoopRestorationSize(paramarg0: number, paramarg1: number): number;
    static nLoopRestorationSize(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nLoopRestorationSize(paramarg0: number, paramarg1: ShortBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FrameRestorationType(): IntBuffer;
    FrameRestorationType(arg0: IntBuffer): StdVideoAV1LoopRestoration;
    FrameRestorationType(arg0: number): number;
    FrameRestorationType(arg0: number, arg1: number): StdVideoAV1LoopRestoration;
    LoopRestorationSize(): ShortBuffer;
    LoopRestorationSize(arg0: ShortBuffer): StdVideoAV1LoopRestoration;
    LoopRestorationSize(arg0: number): number;
    LoopRestorationSize(arg0: number, arg1: number): StdVideoAV1LoopRestoration;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1LoopRestoration;
    set(arg0: IntBuffer, arg1: ShortBuffer): StdVideoAV1LoopRestoration;
    set(arg0: StdVideoAV1LoopRestoration): StdVideoAV1LoopRestoration;
    sizeof(): number;
}