import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH265ProfileTierLevelFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH265ProfileTierLevelFlags.d.ts'
export class StdVideoH265ProfileTierLevel extends Struct<StdVideoH265ProfileTierLevel> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static GENERAL_LEVEL_IDC: number;
    static GENERAL_PROFILE_IDC: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265ProfileTierLevel;
    static calloc(paramarg0: MemoryStack): StdVideoH265ProfileTierLevel;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265ProfileTierLevel;
    static create(paramarg0: number): StdVideoH265ProfileTierLevel;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265ProfileTierLevel;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265ProfileTierLevel;
    static malloc(paramarg0: MemoryStack): StdVideoH265ProfileTierLevel;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): StdVideoH265ProfileTierLevelFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH265ProfileTierLevelFlags): void;
    static ngeneral_level_idc(paramarg0: number): number;
    static ngeneral_level_idc(paramarg0: number, paramarg1: number): void;
    static ngeneral_profile_idc(paramarg0: number): number;
    static ngeneral_profile_idc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265ProfileTierLevel;
    flags(): StdVideoH265ProfileTierLevelFlags;
    flags(arg0: (param0: StdVideoH265ProfileTierLevelFlags) => void): StdVideoH265ProfileTierLevel;
    flags(arg0: StdVideoH265ProfileTierLevelFlags): StdVideoH265ProfileTierLevel;
    general_level_idc(): number;
    general_level_idc(arg0: number): StdVideoH265ProfileTierLevel;
    general_profile_idc(): number;
    general_profile_idc(arg0: number): StdVideoH265ProfileTierLevel;
    set(arg0: StdVideoH265ProfileTierLevel): StdVideoH265ProfileTierLevel;
    set(arg0: StdVideoH265ProfileTierLevelFlags, arg1: number, arg2: number): StdVideoH265ProfileTierLevel;
    sizeof(): number;
}