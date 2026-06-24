import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeRateControlInfoKHR extends Struct<VkVideoEncodeRateControlInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static INITIALVIRTUALBUFFERSIZEINMS: number;
    static LAYERCOUNT: number;
    static PLAYERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RATECONTROLMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIRTUALBUFFERSIZEINMS: number;
    static calloc(): VkVideoEncodeRateControlInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeRateControlInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeRateControlInfoKHR;
    static create(paramarg0: number): VkVideoEncodeRateControlInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeRateControlInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeRateControlInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeRateControlInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninitialVirtualBufferSizeInMs(paramarg0: number): number;
    static ninitialVirtualBufferSizeInMs(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static npLayers(paramarg0: number): (Object | null)[];
    static npLayers(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrateControlMode(paramarg0: number): number;
    static nrateControlMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvirtualBufferSizeInMs(paramarg0: number): number;
    static nvirtualBufferSizeInMs(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeRateControlInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoEncodeRateControlInfoKHR;
    initialVirtualBufferSizeInMs(): number;
    initialVirtualBufferSizeInMs(arg0: number): VkVideoEncodeRateControlInfoKHR;
    layerCount(): number;
    pLayers(): (Object | null)[];
    pLayers(arg0: (Object | null)[]): VkVideoEncodeRateControlInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeRateControlInfoKHR;
    rateControlMode(): number;
    rateControlMode(arg0: number): VkVideoEncodeRateControlInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeRateControlInfoKHR;
    sType$Default(): VkVideoEncodeRateControlInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[], arg5: number, arg6: number): VkVideoEncodeRateControlInfoKHR;
    set(arg0: VkVideoEncodeRateControlInfoKHR): VkVideoEncodeRateControlInfoKHR;
    sizeof(): number;
    virtualBufferSizeInMs(): number;
    virtualBufferSizeInMs(arg0: number): VkVideoEncodeRateControlInfoKHR;
}