import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH265DecPicBufMgr } from '../../../../org/lwjgl/vulkan/video/StdVideoH265DecPicBufMgr.d.ts'
import type { StdVideoH265HrdParameters } from '../../../../org/lwjgl/vulkan/video/StdVideoH265HrdParameters.d.ts'
import type { StdVideoH265ProfileTierLevel } from '../../../../org/lwjgl/vulkan/video/StdVideoH265ProfileTierLevel.d.ts'
import type { StdVideoH265VpsFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH265VpsFlags.d.ts'
export class StdVideoH265VideoParameterSet extends Struct<StdVideoH265VideoParameterSet> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PDECPICBUFMGR: number;
    static PHRDPARAMETERS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPROFILETIERLEVEL: number;
    static RESERVED1: number;
    static RESERVED2: number;
    static RESERVED3: number;
    static SIZEOF: number;
    static VPS_MAX_SUB_LAYERS_MINUS1: number;
    static VPS_NUM_TICKS_POC_DIFF_ONE_MINUS1: number;
    static VPS_NUM_UNITS_IN_TICK: number;
    static VPS_TIME_SCALE: number;
    static VPS_VIDEO_PARAMETER_SET_ID: number;
    static calloc(): StdVideoH265VideoParameterSet;
    static calloc(paramarg0: MemoryStack): StdVideoH265VideoParameterSet;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265VideoParameterSet;
    static create(paramarg0: number): StdVideoH265VideoParameterSet;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265VideoParameterSet;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265VideoParameterSet;
    static malloc(paramarg0: MemoryStack): StdVideoH265VideoParameterSet;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): StdVideoH265VpsFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH265VpsFlags): void;
    static npDecPicBufMgr(paramarg0: number): StdVideoH265DecPicBufMgr;
    static npDecPicBufMgr(paramarg0: number, paramarg1: StdVideoH265DecPicBufMgr): void;
    static npHrdParameters(paramarg0: number): StdVideoH265HrdParameters;
    static npHrdParameters(paramarg0: number, paramarg1: StdVideoH265HrdParameters): void;
    static npProfileTierLevel(paramarg0: number): StdVideoH265ProfileTierLevel;
    static npProfileTierLevel(paramarg0: number, paramarg1: StdVideoH265ProfileTierLevel): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nreserved2(paramarg0: number): number;
    static nreserved2(paramarg0: number, paramarg1: number): void;
    static nreserved3(paramarg0: number): number;
    static nreserved3(paramarg0: number, paramarg1: number): void;
    static nvps_max_sub_layers_minus1(paramarg0: number): number;
    static nvps_max_sub_layers_minus1(paramarg0: number, paramarg1: number): void;
    static nvps_num_ticks_poc_diff_one_minus1(paramarg0: number): number;
    static nvps_num_ticks_poc_diff_one_minus1(paramarg0: number, paramarg1: number): void;
    static nvps_num_units_in_tick(paramarg0: number): number;
    static nvps_num_units_in_tick(paramarg0: number, paramarg1: number): void;
    static nvps_time_scale(paramarg0: number): number;
    static nvps_time_scale(paramarg0: number, paramarg1: number): void;
    static nvps_video_parameter_set_id(paramarg0: number): number;
    static nvps_video_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265VideoParameterSet;
    flags(): StdVideoH265VpsFlags;
    flags(arg0: (param0: StdVideoH265VpsFlags) => void): StdVideoH265VideoParameterSet;
    flags(arg0: StdVideoH265VpsFlags): StdVideoH265VideoParameterSet;
    pDecPicBufMgr(): StdVideoH265DecPicBufMgr;
    pDecPicBufMgr(arg0: StdVideoH265DecPicBufMgr): StdVideoH265VideoParameterSet;
    pHrdParameters(): StdVideoH265HrdParameters;
    pHrdParameters(arg0: StdVideoH265HrdParameters): StdVideoH265VideoParameterSet;
    pProfileTierLevel(): StdVideoH265ProfileTierLevel;
    pProfileTierLevel(arg0: StdVideoH265ProfileTierLevel): StdVideoH265VideoParameterSet;
    set(arg0: StdVideoH265VideoParameterSet): StdVideoH265VideoParameterSet;
    set(arg0: StdVideoH265VpsFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: StdVideoH265DecPicBufMgr, arg7: StdVideoH265HrdParameters, arg8: StdVideoH265ProfileTierLevel): StdVideoH265VideoParameterSet;
    sizeof(): number;
    vps_max_sub_layers_minus1(): number;
    vps_max_sub_layers_minus1(arg0: number): StdVideoH265VideoParameterSet;
    vps_num_ticks_poc_diff_one_minus1(): number;
    vps_num_ticks_poc_diff_one_minus1(arg0: number): StdVideoH265VideoParameterSet;
    vps_num_units_in_tick(): number;
    vps_num_units_in_tick(arg0: number): StdVideoH265VideoParameterSet;
    vps_time_scale(): number;
    vps_time_scale(arg0: number): StdVideoH265VideoParameterSet;
    vps_video_parameter_set_id(): number;
    vps_video_parameter_set_id(arg0: number): StdVideoH265VideoParameterSet;
}