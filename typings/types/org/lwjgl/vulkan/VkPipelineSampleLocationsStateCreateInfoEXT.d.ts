import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSampleLocationsInfoEXT } from '../../../org/lwjgl/vulkan/VkSampleLocationsInfoEXT.d.ts'
export class VkPipelineSampleLocationsStateCreateInfoEXT extends Struct<VkPipelineSampleLocationsStateCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLELOCATIONSENABLE: number;
    static SAMPLELOCATIONSINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineSampleLocationsStateCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineSampleLocationsStateCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineSampleLocationsStateCreateInfoEXT;
    static create(paramarg0: number): VkPipelineSampleLocationsStateCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineSampleLocationsStateCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineSampleLocationsStateCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineSampleLocationsStateCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsampleLocationsEnable(paramarg0: number): number;
    static nsampleLocationsEnable(paramarg0: number, paramarg1: number): void;
    static nsampleLocationsInfo(paramarg0: number): VkSampleLocationsInfoEXT;
    static nsampleLocationsInfo(paramarg0: number, paramarg1: VkSampleLocationsInfoEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineSampleLocationsStateCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineSampleLocationsStateCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineSampleLocationsStateCreateInfoEXT;
    sType$Default(): VkPipelineSampleLocationsStateCreateInfoEXT;
    sampleLocationsEnable(): boolean;
    sampleLocationsEnable(arg0: boolean): VkPipelineSampleLocationsStateCreateInfoEXT;
    sampleLocationsInfo(): VkSampleLocationsInfoEXT;
    sampleLocationsInfo(arg0: (param0: VkSampleLocationsInfoEXT) => void): VkPipelineSampleLocationsStateCreateInfoEXT;
    sampleLocationsInfo(arg0: VkSampleLocationsInfoEXT): VkPipelineSampleLocationsStateCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: VkSampleLocationsInfoEXT): VkPipelineSampleLocationsStateCreateInfoEXT;
    set(arg0: VkPipelineSampleLocationsStateCreateInfoEXT): VkPipelineSampleLocationsStateCreateInfoEXT;
    sizeof(): number;
}