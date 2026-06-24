import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPresentTimingSurfaceCapabilitiesEXT extends Struct<VkPresentTimingSurfaceCapabilitiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTATABSOLUTETIMESUPPORTED: number;
    static PRESENTATRELATIVETIMESUPPORTED: number;
    static PRESENTSTAGEQUERIES: number;
    static PRESENTTIMINGSUPPORTED: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPresentTimingSurfaceCapabilitiesEXT;
    static calloc(paramarg0: MemoryStack): VkPresentTimingSurfaceCapabilitiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentTimingSurfaceCapabilitiesEXT;
    static create(paramarg0: number): VkPresentTimingSurfaceCapabilitiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentTimingSurfaceCapabilitiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentTimingSurfaceCapabilitiesEXT;
    static malloc(paramarg0: MemoryStack): VkPresentTimingSurfaceCapabilitiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentAtAbsoluteTimeSupported(paramarg0: number): number;
    static npresentAtRelativeTimeSupported(paramarg0: number): number;
    static npresentStageQueries(paramarg0: number): number;
    static npresentTimingSupported(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentTimingSurfaceCapabilitiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPresentTimingSurfaceCapabilitiesEXT;
    presentAtAbsoluteTimeSupported(): boolean;
    presentAtRelativeTimeSupported(): boolean;
    presentStageQueries(): number;
    presentTimingSupported(): boolean;
    sType(): number;
    sType(arg0: number): VkPresentTimingSurfaceCapabilitiesEXT;
    sType$Default(): VkPresentTimingSurfaceCapabilitiesEXT;
    set(arg0: number, arg1: number): VkPresentTimingSurfaceCapabilitiesEXT;
    set(arg0: VkPresentTimingSurfaceCapabilitiesEXT): VkPresentTimingSurfaceCapabilitiesEXT;
    sizeof(): number;
}