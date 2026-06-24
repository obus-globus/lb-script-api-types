import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH265SessionParametersGetInfoKHR extends Struct<VkVideoEncodeH265SessionParametersGetInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STDPPSID: number;
    static STDSPSID: number;
    static STDVPSID: number;
    static STYPE: number;
    static WRITESTDPPS: number;
    static WRITESTDSPS: number;
    static WRITESTDVPS: number;
    static calloc(): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH265SessionParametersGetInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdPPSId(paramarg0: number): number;
    static nstdPPSId(paramarg0: number, paramarg1: number): void;
    static nstdSPSId(paramarg0: number): number;
    static nstdSPSId(paramarg0: number, paramarg1: number): void;
    static nstdVPSId(paramarg0: number): number;
    static nstdVPSId(paramarg0: number, paramarg1: number): void;
    static nwriteStdPPS(paramarg0: number): number;
    static nwriteStdPPS(paramarg0: number, paramarg1: number): void;
    static nwriteStdSPS(paramarg0: number): number;
    static nwriteStdSPS(paramarg0: number, paramarg1: number): void;
    static nwriteStdVPS(paramarg0: number): number;
    static nwriteStdVPS(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH265SessionParametersGetInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    sType$Default(): VkVideoEncodeH265SessionParametersGetInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: number, arg7: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    set(arg0: VkVideoEncodeH265SessionParametersGetInfoKHR): VkVideoEncodeH265SessionParametersGetInfoKHR;
    sizeof(): number;
    stdPPSId(): number;
    stdPPSId(arg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    stdSPSId(): number;
    stdSPSId(arg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    stdVPSId(): number;
    stdVPSId(arg0: number): VkVideoEncodeH265SessionParametersGetInfoKHR;
    writeStdPPS(): boolean;
    writeStdPPS(arg0: boolean): VkVideoEncodeH265SessionParametersGetInfoKHR;
    writeStdSPS(): boolean;
    writeStdSPS(arg0: boolean): VkVideoEncodeH265SessionParametersGetInfoKHR;
    writeStdVPS(): boolean;
    writeStdVPS(arg0: boolean): VkVideoEncodeH265SessionParametersGetInfoKHR;
}