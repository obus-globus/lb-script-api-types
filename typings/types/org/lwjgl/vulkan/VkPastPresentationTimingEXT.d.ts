import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPastPresentationTimingEXT extends Struct<VkPastPresentationTimingEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTSTAGES: number;
    static PRESENTID: number;
    static PRESENTSTAGECOUNT: number;
    static REPORTCOMPLETE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TARGETTIME: number;
    static TIMEDOMAIN: number;
    static TIMEDOMAINID: number;
    static calloc(): VkPastPresentationTimingEXT;
    static calloc(paramarg0: MemoryStack): VkPastPresentationTimingEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPastPresentationTimingEXT;
    static create(paramarg0: number): VkPastPresentationTimingEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPastPresentationTimingEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPastPresentationTimingEXT;
    static malloc(paramarg0: MemoryStack): VkPastPresentationTimingEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentStages(paramarg0: number): (Object | null)[];
    static npresentId(paramarg0: number): number;
    static npresentStageCount(paramarg0: number): number;
    static nreportComplete(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntargetTime(paramarg0: number): number;
    static ntimeDomain(paramarg0: number): number;
    static ntimeDomainId(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPastPresentationTimingEXT;
    pNext(): number;
    pNext(arg0: number): VkPastPresentationTimingEXT;
    pPresentStages(): (Object | null)[];
    presentId(): number;
    presentStageCount(): number;
    reportComplete(): boolean;
    sType(): number;
    sType(arg0: number): VkPastPresentationTimingEXT;
    sType$Default(): VkPastPresentationTimingEXT;
    set(arg0: number, arg1: number): VkPastPresentationTimingEXT;
    set(arg0: VkPastPresentationTimingEXT): VkPastPresentationTimingEXT;
    sizeof(): number;
    targetTime(): number;
    timeDomain(): number;
    timeDomainId(): number;
}