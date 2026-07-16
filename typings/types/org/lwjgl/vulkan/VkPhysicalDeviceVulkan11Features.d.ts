import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceVulkan11Features extends Struct<VkPhysicalDeviceVulkan11Features> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MULTIVIEW: number;
    static MULTIVIEWGEOMETRYSHADER: number;
    static MULTIVIEWTESSELLATIONSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PROTECTEDMEMORY: number;
    static SAMPLERYCBCRCONVERSION: number;
    static SHADERDRAWPARAMETERS: number;
    static SIZEOF: number;
    static STORAGEBUFFER16BITACCESS: number;
    static STORAGEINPUTOUTPUT16: number;
    static STORAGEPUSHCONSTANT16: number;
    static STYPE: number;
    static UNIFORMANDSTORAGEBUFFER16BITACCESS: number;
    static VARIABLEPOINTERS: number;
    static VARIABLEPOINTERSSTORAGEBUFFER: number;
    static calloc(): VkPhysicalDeviceVulkan11Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkan11Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVulkan11Features;
    static create(paramarg0: number): VkPhysicalDeviceVulkan11Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVulkan11Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVulkan11Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkan11Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmultiview(paramarg0: number): number;
    static nmultiview(paramarg0: number, paramarg1: number): void;
    static nmultiviewGeometryShader(paramarg0: number): number;
    static nmultiviewGeometryShader(paramarg0: number, paramarg1: number): void;
    static nmultiviewTessellationShader(paramarg0: number): number;
    static nmultiviewTessellationShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprotectedMemory(paramarg0: number): number;
    static nprotectedMemory(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamplerYcbcrConversion(paramarg0: number): number;
    static nsamplerYcbcrConversion(paramarg0: number, paramarg1: number): void;
    static nshaderDrawParameters(paramarg0: number): number;
    static nshaderDrawParameters(paramarg0: number, paramarg1: number): void;
    static nstorageBuffer16BitAccess(paramarg0: number): number;
    static nstorageBuffer16BitAccess(paramarg0: number, paramarg1: number): void;
    static nstorageInputOutput16(paramarg0: number): number;
    static nstorageInputOutput16(paramarg0: number, paramarg1: number): void;
    static nstoragePushConstant16(paramarg0: number): number;
    static nstoragePushConstant16(paramarg0: number, paramarg1: number): void;
    static nuniformAndStorageBuffer16BitAccess(paramarg0: number): number;
    static nuniformAndStorageBuffer16BitAccess(paramarg0: number, paramarg1: number): void;
    static nvariablePointers(paramarg0: number): number;
    static nvariablePointers(paramarg0: number, paramarg1: number): void;
    static nvariablePointersStorageBuffer(paramarg0: number): number;
    static nvariablePointersStorageBuffer(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVulkan11Features;
    multiview(): boolean;
    multiview(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    multiviewGeometryShader(): boolean;
    multiviewGeometryShader(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    multiviewTessellationShader(): boolean;
    multiviewTessellationShader(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVulkan11Features;
    protectedMemory(): boolean;
    protectedMemory(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVulkan11Features;
    sType$Default(): VkPhysicalDeviceVulkan11Features;
    samplerYcbcrConversion(): boolean;
    samplerYcbcrConversion(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean): VkPhysicalDeviceVulkan11Features;
    set(arg0: VkPhysicalDeviceVulkan11Features): VkPhysicalDeviceVulkan11Features;
    shaderDrawParameters(): boolean;
    shaderDrawParameters(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    sizeof(): number;
    storageBuffer16BitAccess(): boolean;
    storageBuffer16BitAccess(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    storageInputOutput16(): boolean;
    storageInputOutput16(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    storagePushConstant16(): boolean;
    storagePushConstant16(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    uniformAndStorageBuffer16BitAccess(): boolean;
    uniformAndStorageBuffer16BitAccess(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    variablePointers(): boolean;
    variablePointers(arg0: boolean): VkPhysicalDeviceVulkan11Features;
    variablePointersStorageBuffer(): boolean;
    variablePointersStorageBuffer(arg0: boolean): VkPhysicalDeviceVulkan11Features;
}