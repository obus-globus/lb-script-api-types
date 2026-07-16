import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassPerformanceCountersByRegionBeginInfoARM extends Struct<VkRenderPassPerformanceCountersByRegionBeginInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNTERADDRESSCOUNT: number;
    static COUNTERINDEXCOUNT: number;
    static PCOUNTERADDRESSES: number;
    static PCOUNTERINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SERIALIZEREGIONS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static calloc(paramarg0: MemoryStack): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static create(paramarg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static malloc(paramarg0: MemoryStack): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncounterAddressCount(paramarg0: number): number;
    static ncounterAddressCount(paramarg0: number, paramarg1: number): void;
    static ncounterIndexCount(paramarg0: number): number;
    static ncounterIndexCount(paramarg0: number, paramarg1: number): void;
    static npCounterAddresses(paramarg0: number, paramarg1: number): LongBuffer;
    static npCounterAddresses(paramarg0: number, paramarg1: LongBuffer): void;
    static npCounterIndices(paramarg0: number, paramarg1: number): IntBuffer;
    static npCounterIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nserializeRegions(paramarg0: number): number;
    static nserializeRegions(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    counterAddressCount(): number;
    counterAddressCount(arg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    counterIndexCount(): number;
    counterIndexCount(arg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    pCounterAddresses(arg0: LongBuffer): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    pCounterAddresses(arg0: number): LongBuffer;
    pCounterIndices(arg0: IntBuffer): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    pCounterIndices(arg0: number): IntBuffer;
    pNext(): number;
    pNext(arg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    sType(): number;
    sType(arg0: number): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    sType$Default(): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    serializeRegions(): boolean;
    serializeRegions(arg0: boolean): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: boolean, arg5: number, arg6: IntBuffer): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    set(arg0: VkRenderPassPerformanceCountersByRegionBeginInfoARM): VkRenderPassPerformanceCountersByRegionBeginInfoARM;
    sizeof(): number;
}