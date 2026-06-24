import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265VpsFlags extends Struct<StdVideoH265VpsFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265VpsFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH265VpsFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265VpsFlags;
    static create(paramarg0: number): StdVideoH265VpsFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265VpsFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265VpsFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH265VpsFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nvps_poc_proportional_to_timing_flag(paramarg0: number): number;
    static nvps_poc_proportional_to_timing_flag(paramarg0: number, paramarg1: number): void;
    static nvps_sub_layer_ordering_info_present_flag(paramarg0: number): number;
    static nvps_sub_layer_ordering_info_present_flag(paramarg0: number, paramarg1: number): void;
    static nvps_temporal_id_nesting_flag(paramarg0: number): number;
    static nvps_temporal_id_nesting_flag(paramarg0: number, paramarg1: number): void;
    static nvps_timing_info_present_flag(paramarg0: number): number;
    static nvps_timing_info_present_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265VpsFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoH265VpsFlags;
    set(arg0: StdVideoH265VpsFlags): StdVideoH265VpsFlags;
    sizeof(): number;
    vps_poc_proportional_to_timing_flag(): boolean;
    vps_poc_proportional_to_timing_flag(arg0: boolean): StdVideoH265VpsFlags;
    vps_sub_layer_ordering_info_present_flag(): boolean;
    vps_sub_layer_ordering_info_present_flag(arg0: boolean): StdVideoH265VpsFlags;
    vps_temporal_id_nesting_flag(): boolean;
    vps_temporal_id_nesting_flag(arg0: boolean): StdVideoH265VpsFlags;
    vps_timing_info_present_flag(): boolean;
    vps_timing_info_present_flag(arg0: boolean): StdVideoH265VpsFlags;
}