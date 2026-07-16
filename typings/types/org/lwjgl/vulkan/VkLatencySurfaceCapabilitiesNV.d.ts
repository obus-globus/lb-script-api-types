import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkLatencySurfaceCapabilitiesNV extends Struct<VkLatencySurfaceCapabilitiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTMODES: number;
    static PRESENTMODECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkLatencySurfaceCapabilitiesNV;
    static calloc(paramarg0: MemoryStack): VkLatencySurfaceCapabilitiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkLatencySurfaceCapabilitiesNV;
    static create(paramarg0: number): VkLatencySurfaceCapabilitiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkLatencySurfaceCapabilitiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkLatencySurfaceCapabilitiesNV;
    static malloc(paramarg0: MemoryStack): VkLatencySurfaceCapabilitiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentModes(paramarg0: number): IntBuffer;
    static npPresentModes(paramarg0: number, paramarg1: IntBuffer): void;
    static npresentModeCount(paramarg0: number): number;
    static npresentModeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkLatencySurfaceCapabilitiesNV;
    pNext(): number;
    pNext(arg0: number): VkLatencySurfaceCapabilitiesNV;
    pPresentModes(): IntBuffer;
    pPresentModes(arg0: IntBuffer): VkLatencySurfaceCapabilitiesNV;
    presentModeCount(): number;
    presentModeCount(arg0: number): VkLatencySurfaceCapabilitiesNV;
    sType(): number;
    sType(arg0: number): VkLatencySurfaceCapabilitiesNV;
    sType$Default(): VkLatencySurfaceCapabilitiesNV;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkLatencySurfaceCapabilitiesNV;
    set(arg0: VkLatencySurfaceCapabilitiesNV): VkLatencySurfaceCapabilitiesNV;
    sizeof(): number;
}