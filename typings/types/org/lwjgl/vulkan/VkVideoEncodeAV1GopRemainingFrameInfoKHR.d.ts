import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeAV1GopRemainingFrameInfoKHR extends Struct<VkVideoEncodeAV1GopRemainingFrameInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GOPREMAININGBIPREDICTIVE: number;
    static GOPREMAININGINTRA: number;
    static GOPREMAININGPREDICTIVE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USEGOPREMAININGFRAMES: number;
    static calloc(): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static create(paramarg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ngopRemainingBipredictive(paramarg0: number): number;
    static ngopRemainingBipredictive(paramarg0: number, paramarg1: number): void;
    static ngopRemainingIntra(paramarg0: number): number;
    static ngopRemainingIntra(paramarg0: number, paramarg1: number): void;
    static ngopRemainingPredictive(paramarg0: number): number;
    static ngopRemainingPredictive(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuseGopRemainingFrames(paramarg0: number): number;
    static nuseGopRemainingFrames(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    gopRemainingBipredictive(): number;
    gopRemainingBipredictive(arg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    gopRemainingIntra(): number;
    gopRemainingIntra(arg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    gopRemainingPredictive(): number;
    gopRemainingPredictive(arg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    sType$Default(): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    set(arg0: VkVideoEncodeAV1GopRemainingFrameInfoKHR): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
    sizeof(): number;
    useGopRemainingFrames(): boolean;
    useGopRemainingFrames(arg0: boolean): VkVideoEncodeAV1GopRemainingFrameInfoKHR;
}