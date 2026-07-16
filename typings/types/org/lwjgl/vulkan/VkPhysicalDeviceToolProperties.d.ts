import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceToolProperties extends Struct<VkPhysicalDeviceToolProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static LAYER: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PURPOSES: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERSION: number;
    static calloc(): VkPhysicalDeviceToolProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceToolProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceToolProperties;
    static create(paramarg0: number): VkPhysicalDeviceToolProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceToolProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceToolProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceToolProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nlayer(paramarg0: number): ByteBuffer;
    static nlayerString(paramarg0: number): string;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npurposes(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nversion(paramarg0: number): ByteBuffer;
    static nversionString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceToolProperties;
    description(): ByteBuffer;
    descriptionString(): string;
    layer(): ByteBuffer;
    layerString(): string;
    name(): ByteBuffer;
    nameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceToolProperties;
    purposes(): number;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceToolProperties;
    sType$Default(): VkPhysicalDeviceToolProperties;
    set(arg0: number, arg1: number): VkPhysicalDeviceToolProperties;
    set(arg0: VkPhysicalDeviceToolProperties): VkPhysicalDeviceToolProperties;
    sizeof(): number;
    version(): ByteBuffer;
    versionString(): string;
}