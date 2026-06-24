import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDrmPropertiesEXT extends Struct<VkPhysicalDeviceDrmPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HASPRIMARY: number;
    static HASRENDER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMARYMAJOR: number;
    static PRIMARYMINOR: number;
    static RENDERMAJOR: number;
    static RENDERMINOR: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDrmPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDrmPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDrmPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDrmPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDrmPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDrmPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDrmPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhasPrimary(paramarg0: number): number;
    static nhasRender(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprimaryMajor(paramarg0: number): number;
    static nprimaryMinor(paramarg0: number): number;
    static nrenderMajor(paramarg0: number): number;
    static nrenderMinor(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDrmPropertiesEXT;
    hasPrimary(): boolean;
    hasRender(): boolean;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDrmPropertiesEXT;
    primaryMajor(): number;
    primaryMinor(): number;
    renderMajor(): number;
    renderMinor(): number;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDrmPropertiesEXT;
    sType$Default(): VkPhysicalDeviceDrmPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceDrmPropertiesEXT;
    set(arg0: VkPhysicalDeviceDrmPropertiesEXT): VkPhysicalDeviceDrmPropertiesEXT;
    sizeof(): number;
}