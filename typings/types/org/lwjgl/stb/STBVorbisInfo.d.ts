import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBVorbisInfo extends Struct<STBVorbisInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHANNELS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAX_FRAME_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLE_RATE: number;
    static SETUP_MEMORY_REQUIRED: number;
    static SETUP_TEMP_MEMORY_REQUIRED: number;
    static SIZEOF: number;
    static TEMP_MEMORY_REQUIRED: number;
    static calloc(): STBVorbisInfo;
    static calloc(paramarg0: MemoryStack): STBVorbisInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBVorbisInfo;
    static create(paramarg0: number): STBVorbisInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBVorbisInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBVorbisInfo;
    static malloc(paramarg0: MemoryStack): STBVorbisInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchannels(paramarg0: number): number;
    static nmax_frame_size(paramarg0: number): number;
    static nsample_rate(paramarg0: number): number;
    static nsetup_memory_required(paramarg0: number): number;
    static nsetup_temp_memory_required(paramarg0: number): number;
    static ntemp_memory_required(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    channels(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBVorbisInfo;
    max_frame_size(): number;
    sample_rate(): number;
    setup_memory_required(): number;
    setup_temp_memory_required(): number;
    sizeof(): number;
    temp_memory_required(): number;
}