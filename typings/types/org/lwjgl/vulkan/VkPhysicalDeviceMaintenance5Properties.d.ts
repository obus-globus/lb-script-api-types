import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMaintenance5Properties extends Struct<VkPhysicalDeviceMaintenance5Properties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHSTENCILSWIZZLEONESUPPORT: number;
    static EARLYFRAGMENTMULTISAMPLECOVERAGEAFTERSAMPLECOUNTING: number;
    static EARLYFRAGMENTSAMPLEMASKTESTBEFORESAMPLECOUNTING: number;
    static NONSTRICTSINGLEPIXELWIDELINESUSEPARALLELOGRAM: number;
    static NONSTRICTWIDELINESUSEPARALLELOGRAM: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POLYGONMODEPOINTSIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance5Properties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5Properties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance5Properties;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance5Properties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance5Properties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance5Properties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5Properties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepthStencilSwizzleOneSupport(paramarg0: number): number;
    static nearlyFragmentMultisampleCoverageAfterSampleCounting(paramarg0: number): number;
    static nearlyFragmentSampleMaskTestBeforeSampleCounting(paramarg0: number): number;
    static nnonStrictSinglePixelWideLinesUseParallelogram(paramarg0: number): number;
    static nnonStrictWideLinesUseParallelogram(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npolygonModePointSize(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance5Properties;
    depthStencilSwizzleOneSupport(): boolean;
    earlyFragmentMultisampleCoverageAfterSampleCounting(): boolean;
    earlyFragmentSampleMaskTestBeforeSampleCounting(): boolean;
    nonStrictSinglePixelWideLinesUseParallelogram(): boolean;
    nonStrictWideLinesUseParallelogram(): boolean;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance5Properties;
    polygonModePointSize(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance5Properties;
    sType$Default(): VkPhysicalDeviceMaintenance5Properties;
    set(arg0: number, arg1: number): VkPhysicalDeviceMaintenance5Properties;
    set(arg0: VkPhysicalDeviceMaintenance5Properties): VkPhysicalDeviceMaintenance5Properties;
    sizeof(): number;
}