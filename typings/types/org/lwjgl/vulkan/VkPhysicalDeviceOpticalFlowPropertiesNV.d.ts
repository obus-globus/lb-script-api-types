import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceOpticalFlowPropertiesNV extends Struct<VkPhysicalDeviceOpticalFlowPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BIDIRECTIONALFLOWSUPPORTED: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COSTSUPPORTED: number;
    static GLOBALFLOWSUPPORTED: number;
    static HINTSUPPORTED: number;
    static MAXHEIGHT: number;
    static MAXNUMREGIONSOFINTEREST: number;
    static MAXWIDTH: number;
    static MINHEIGHT: number;
    static MINWIDTH: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDHINTGRIDSIZES: number;
    static SUPPORTEDOUTPUTGRIDSIZES: number;
    static calloc(): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceOpticalFlowPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbidirectionalFlowSupported(paramarg0: number): number;
    static ncostSupported(paramarg0: number): number;
    static nglobalFlowSupported(paramarg0: number): number;
    static nhintSupported(paramarg0: number): number;
    static nmaxHeight(paramarg0: number): number;
    static nmaxNumRegionsOfInterest(paramarg0: number): number;
    static nmaxWidth(paramarg0: number): number;
    static nminHeight(paramarg0: number): number;
    static nminWidth(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedHintGridSizes(paramarg0: number): number;
    static nsupportedOutputGridSizes(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bidirectionalFlowSupported(): boolean;
    close(): void;
    costSupported(): boolean;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceOpticalFlowPropertiesNV;
    globalFlowSupported(): boolean;
    hintSupported(): boolean;
    maxHeight(): number;
    maxNumRegionsOfInterest(): number;
    maxWidth(): number;
    minHeight(): number;
    minWidth(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceOpticalFlowPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceOpticalFlowPropertiesNV;
    sType$Default(): VkPhysicalDeviceOpticalFlowPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceOpticalFlowPropertiesNV;
    set(arg0: VkPhysicalDeviceOpticalFlowPropertiesNV): VkPhysicalDeviceOpticalFlowPropertiesNV;
    sizeof(): number;
    supportedHintGridSizes(): number;
    supportedOutputGridSizes(): number;
}