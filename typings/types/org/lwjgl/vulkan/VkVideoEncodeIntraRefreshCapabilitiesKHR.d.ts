import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeIntraRefreshCapabilitiesKHR extends Struct<VkVideoEncodeIntraRefreshCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INTRAREFRESHMODES: number;
    static MAXINTRAREFRESHACTIVEREFERENCEPICTURES: number;
    static MAXINTRAREFRESHCYCLEDURATION: number;
    static NONRECTANGULARINTRAREFRESHREGIONS: number;
    static PARTITIONINDEPENDENTINTRAREFRESHREGIONS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static create(paramarg0: number): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nintraRefreshModes(paramarg0: number): number;
    static nmaxIntraRefreshActiveReferencePictures(paramarg0: number): number;
    static nmaxIntraRefreshCycleDuration(paramarg0: number): number;
    static nnonRectangularIntraRefreshRegions(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npartitionIndependentIntraRefreshRegions(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    intraRefreshModes(): number;
    maxIntraRefreshActiveReferencePictures(): number;
    maxIntraRefreshCycleDuration(): number;
    nonRectangularIntraRefreshRegions(): boolean;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    partitionIndependentIntraRefreshRegions(): boolean;
    sType(): number;
    sType(arg0: number): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    sType$Default(): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    set(arg0: VkVideoEncodeIntraRefreshCapabilitiesKHR): VkVideoEncodeIntraRefreshCapabilitiesKHR;
    sizeof(): number;
}