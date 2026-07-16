import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1ColorConfigFlags extends Struct<StdVideoAV1ColorConfigFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1ColorConfigFlags;
    static calloc(paramarg0: MemoryStack): StdVideoAV1ColorConfigFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1ColorConfigFlags;
    static create(paramarg0: number): StdVideoAV1ColorConfigFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1ColorConfigFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1ColorConfigFlags;
    static malloc(paramarg0: MemoryStack): StdVideoAV1ColorConfigFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static ncolor_description_present_flag(paramarg0: number): number;
    static ncolor_description_present_flag(paramarg0: number, paramarg1: number): void;
    static ncolor_range(paramarg0: number): number;
    static ncolor_range(paramarg0: number, paramarg1: number): void;
    static nmono_chrome(paramarg0: number): number;
    static nmono_chrome(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nseparate_uv_delta_q(paramarg0: number): number;
    static nseparate_uv_delta_q(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    color_description_present_flag(): boolean;
    color_description_present_flag(arg0: boolean): StdVideoAV1ColorConfigFlags;
    color_range(): boolean;
    color_range(arg0: boolean): StdVideoAV1ColorConfigFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1ColorConfigFlags;
    mono_chrome(): boolean;
    mono_chrome(arg0: boolean): StdVideoAV1ColorConfigFlags;
    separate_uv_delta_q(): boolean;
    separate_uv_delta_q(arg0: boolean): StdVideoAV1ColorConfigFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoAV1ColorConfigFlags;
    set(arg0: StdVideoAV1ColorConfigFlags): StdVideoAV1ColorConfigFlags;
    sizeof(): number;
}