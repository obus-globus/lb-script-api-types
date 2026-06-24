import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDataGraphProcessingEngineCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphProcessingEngineCreateInfoARM.d.ts'
export class VkCommandPoolCreateInfo extends Struct<VkCommandPoolCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUEFAMILYINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCommandPoolCreateInfo;
    static calloc(paramarg0: MemoryStack): VkCommandPoolCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandPoolCreateInfo;
    static create(paramarg0: number): VkCommandPoolCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandPoolCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandPoolCreateInfo;
    static malloc(paramarg0: MemoryStack): VkCommandPoolCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndex(paramarg0: number): number;
    static nqueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandPoolCreateInfo;
    flags(): number;
    flags(arg0: number): VkCommandPoolCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkCommandPoolCreateInfo;
    pNext(arg0: VkDataGraphProcessingEngineCreateInfoARM): VkCommandPoolCreateInfo;
    queueFamilyIndex(): number;
    queueFamilyIndex(arg0: number): VkCommandPoolCreateInfo;
    sType(): number;
    sType(arg0: number): VkCommandPoolCreateInfo;
    sType$Default(): VkCommandPoolCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkCommandPoolCreateInfo;
    set(arg0: VkCommandPoolCreateInfo): VkCommandPoolCreateInfo;
    sizeof(): number;
}