import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265ProfileTierLevelFlags extends Struct<StdVideoH265ProfileTierLevelFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265ProfileTierLevelFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH265ProfileTierLevelFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265ProfileTierLevelFlags;
    static create(paramarg0: number): StdVideoH265ProfileTierLevelFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265ProfileTierLevelFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265ProfileTierLevelFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH265ProfileTierLevelFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static ngeneral_frame_only_constraint_flag(paramarg0: number): number;
    static ngeneral_frame_only_constraint_flag(paramarg0: number, paramarg1: number): void;
    static ngeneral_interlaced_source_flag(paramarg0: number): number;
    static ngeneral_interlaced_source_flag(paramarg0: number, paramarg1: number): void;
    static ngeneral_non_packed_constraint_flag(paramarg0: number): number;
    static ngeneral_non_packed_constraint_flag(paramarg0: number, paramarg1: number): void;
    static ngeneral_progressive_source_flag(paramarg0: number): number;
    static ngeneral_progressive_source_flag(paramarg0: number, paramarg1: number): void;
    static ngeneral_tier_flag(paramarg0: number): number;
    static ngeneral_tier_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265ProfileTierLevelFlags;
    general_frame_only_constraint_flag(): boolean;
    general_frame_only_constraint_flag(arg0: boolean): StdVideoH265ProfileTierLevelFlags;
    general_interlaced_source_flag(): boolean;
    general_interlaced_source_flag(arg0: boolean): StdVideoH265ProfileTierLevelFlags;
    general_non_packed_constraint_flag(): boolean;
    general_non_packed_constraint_flag(arg0: boolean): StdVideoH265ProfileTierLevelFlags;
    general_progressive_source_flag(): boolean;
    general_progressive_source_flag(arg0: boolean): StdVideoH265ProfileTierLevelFlags;
    general_tier_flag(): boolean;
    general_tier_flag(arg0: boolean): StdVideoH265ProfileTierLevelFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): StdVideoH265ProfileTierLevelFlags;
    set(arg0: StdVideoH265ProfileTierLevelFlags): StdVideoH265ProfileTierLevelFlags;
    sizeof(): number;
}