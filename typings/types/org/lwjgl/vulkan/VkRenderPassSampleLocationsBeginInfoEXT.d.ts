import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassSampleLocationsBeginInfoEXT extends Struct<VkRenderPassSampleLocationsBeginInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTINITIALSAMPLELOCATIONSCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PATTACHMENTINITIALSAMPLELOCATIONS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POSTSUBPASSSAMPLELOCATIONSCOUNT: number;
    static PPOSTSUBPASSSAMPLELOCATIONS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassSampleLocationsBeginInfoEXT;
    static calloc(paramarg0: MemoryStack): VkRenderPassSampleLocationsBeginInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassSampleLocationsBeginInfoEXT;
    static create(paramarg0: number): VkRenderPassSampleLocationsBeginInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassSampleLocationsBeginInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassSampleLocationsBeginInfoEXT;
    static malloc(paramarg0: MemoryStack): VkRenderPassSampleLocationsBeginInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentInitialSampleLocationsCount(paramarg0: number): number;
    static nattachmentInitialSampleLocationsCount(paramarg0: number, paramarg1: number): void;
    static npAttachmentInitialSampleLocations(paramarg0: number): (Object | null)[];
    static npAttachmentInitialSampleLocations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPostSubpassSampleLocations(paramarg0: number): (Object | null)[];
    static npPostSubpassSampleLocations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npostSubpassSampleLocationsCount(paramarg0: number): number;
    static npostSubpassSampleLocationsCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentInitialSampleLocationsCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassSampleLocationsBeginInfoEXT;
    pAttachmentInitialSampleLocations(): (Object | null)[];
    pAttachmentInitialSampleLocations(arg0: (Object | null)[]): VkRenderPassSampleLocationsBeginInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkRenderPassSampleLocationsBeginInfoEXT;
    pPostSubpassSampleLocations(): (Object | null)[];
    pPostSubpassSampleLocations(arg0: (Object | null)[]): VkRenderPassSampleLocationsBeginInfoEXT;
    postSubpassSampleLocationsCount(): number;
    sType(): number;
    sType(arg0: number): VkRenderPassSampleLocationsBeginInfoEXT;
    sType$Default(): VkRenderPassSampleLocationsBeginInfoEXT;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: (Object | null)[]): VkRenderPassSampleLocationsBeginInfoEXT;
    set(arg0: VkRenderPassSampleLocationsBeginInfoEXT): VkRenderPassSampleLocationsBeginInfoEXT;
    sizeof(): number;
}