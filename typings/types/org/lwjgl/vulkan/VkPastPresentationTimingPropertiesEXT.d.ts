import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPastPresentationTimingPropertiesEXT extends Struct<VkPastPresentationTimingPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTATIONTIMINGS: number;
    static PRESENTATIONTIMINGCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static TIMEDOMAINSCOUNTER: number;
    static TIMINGPROPERTIESCOUNTER: number;
    static calloc(): VkPastPresentationTimingPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPastPresentationTimingPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPastPresentationTimingPropertiesEXT;
    static create(paramarg0: number): VkPastPresentationTimingPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPastPresentationTimingPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPastPresentationTimingPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPastPresentationTimingPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentationTimings(paramarg0: number): (Object | null)[];
    static npresentationTimingCount(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntimeDomainsCounter(paramarg0: number): number;
    static ntimingPropertiesCounter(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPastPresentationTimingPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPastPresentationTimingPropertiesEXT;
    pPresentationTimings(): (Object | null)[];
    presentationTimingCount(): number;
    sType(): number;
    sType(arg0: number): VkPastPresentationTimingPropertiesEXT;
    sType$Default(): VkPastPresentationTimingPropertiesEXT;
    set(arg0: number, arg1: number): VkPastPresentationTimingPropertiesEXT;
    set(arg0: VkPastPresentationTimingPropertiesEXT): VkPastPresentationTimingPropertiesEXT;
    sizeof(): number;
    timeDomainsCounter(): number;
    timingPropertiesCounter(): number;
}