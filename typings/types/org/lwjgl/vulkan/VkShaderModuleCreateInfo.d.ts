import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkShaderModuleValidationCacheCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderModuleValidationCacheCreateInfoEXT.d.ts'
import type { VkValidationFeaturesEXT } from '../../../org/lwjgl/vulkan/VkValidationFeaturesEXT.d.ts'
export class VkShaderModuleCreateInfo extends Struct<VkShaderModuleCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CODESIZE: number;
    static FLAGS: number;
    static PCODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkShaderModuleCreateInfo;
    static calloc(paramarg0: MemoryStack): VkShaderModuleCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkShaderModuleCreateInfo;
    static create(paramarg0: number): VkShaderModuleCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkShaderModuleCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkShaderModuleCreateInfo;
    static malloc(paramarg0: MemoryStack): VkShaderModuleCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncodeSize(paramarg0: number): number;
    static ncodeSize(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npCode(paramarg0: number): ByteBuffer;
    static npCode(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    codeSize(): number;
    create(arg0: number, arg1: ByteBuffer): VkShaderModuleCreateInfo;
    flags(): number;
    flags(arg0: number): VkShaderModuleCreateInfo;
    pCode(): ByteBuffer;
    pCode(arg0: ByteBuffer): VkShaderModuleCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkShaderModuleCreateInfo;
    pNext(arg0: VkShaderModuleValidationCacheCreateInfoEXT): VkShaderModuleCreateInfo;
    pNext(arg0: VkValidationFeaturesEXT): VkShaderModuleCreateInfo;
    sType(): number;
    sType(arg0: number): VkShaderModuleCreateInfo;
    sType$Default(): VkShaderModuleCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): VkShaderModuleCreateInfo;
    set(arg0: VkShaderModuleCreateInfo): VkShaderModuleCreateInfo;
    sizeof(): number;
}