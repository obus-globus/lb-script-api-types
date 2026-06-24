import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkLatencyTimingsFrameReportNV extends Struct<VkLatencyTimingsFrameReportNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRIVERENDTIMEUS: number;
    static DRIVERSTARTTIMEUS: number;
    static GPURENDERENDTIMEUS: number;
    static GPURENDERSTARTTIMEUS: number;
    static INPUTSAMPLETIMEUS: number;
    static OSRENDERQUEUEENDTIMEUS: number;
    static OSRENDERQUEUESTARTTIMEUS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTENDTIMEUS: number;
    static PRESENTID: number;
    static PRESENTSTARTTIMEUS: number;
    static RENDERSUBMITENDTIMEUS: number;
    static RENDERSUBMITSTARTTIMEUS: number;
    static SIMENDTIMEUS: number;
    static SIMSTARTTIMEUS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkLatencyTimingsFrameReportNV;
    static calloc(paramarg0: MemoryStack): VkLatencyTimingsFrameReportNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkLatencyTimingsFrameReportNV;
    static create(paramarg0: number): VkLatencyTimingsFrameReportNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkLatencyTimingsFrameReportNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkLatencyTimingsFrameReportNV;
    static malloc(paramarg0: MemoryStack): VkLatencyTimingsFrameReportNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndriverEndTimeUs(paramarg0: number): number;
    static ndriverStartTimeUs(paramarg0: number): number;
    static ngpuRenderEndTimeUs(paramarg0: number): number;
    static ngpuRenderStartTimeUs(paramarg0: number): number;
    static ninputSampleTimeUs(paramarg0: number): number;
    static nosRenderQueueEndTimeUs(paramarg0: number): number;
    static nosRenderQueueStartTimeUs(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentEndTimeUs(paramarg0: number): number;
    static npresentID(paramarg0: number): number;
    static npresentStartTimeUs(paramarg0: number): number;
    static nrenderSubmitEndTimeUs(paramarg0: number): number;
    static nrenderSubmitStartTimeUs(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsimEndTimeUs(paramarg0: number): number;
    static nsimStartTimeUs(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkLatencyTimingsFrameReportNV;
    driverEndTimeUs(): number;
    driverStartTimeUs(): number;
    gpuRenderEndTimeUs(): number;
    gpuRenderStartTimeUs(): number;
    inputSampleTimeUs(): number;
    osRenderQueueEndTimeUs(): number;
    osRenderQueueStartTimeUs(): number;
    pNext(): number;
    pNext(arg0: number): VkLatencyTimingsFrameReportNV;
    presentEndTimeUs(): number;
    presentID(): number;
    presentStartTimeUs(): number;
    renderSubmitEndTimeUs(): number;
    renderSubmitStartTimeUs(): number;
    sType(): number;
    sType(arg0: number): VkLatencyTimingsFrameReportNV;
    sType$Default(): VkLatencyTimingsFrameReportNV;
    set(arg0: number, arg1: number): VkLatencyTimingsFrameReportNV;
    set(arg0: VkLatencyTimingsFrameReportNV): VkLatencyTimingsFrameReportNV;
    simEndTimeUs(): number;
    simStartTimeUs(): number;
    sizeof(): number;
}