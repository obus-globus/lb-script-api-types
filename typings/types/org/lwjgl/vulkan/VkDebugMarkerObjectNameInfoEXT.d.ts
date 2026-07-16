import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDebugMarkerObjectNameInfoEXT extends Struct<VkDebugMarkerObjectNameInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OBJECT: number;
    static OBJECTTYPE: number;
    static PNEXT: number;
    static POBJECTNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugMarkerObjectNameInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDebugMarkerObjectNameInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugMarkerObjectNameInfoEXT;
    static create(paramarg0: number): VkDebugMarkerObjectNameInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugMarkerObjectNameInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugMarkerObjectNameInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDebugMarkerObjectNameInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nobject(paramarg0: number): number;
    static nobject(paramarg0: number, paramarg1: number): void;
    static nobjectType(paramarg0: number): number;
    static nobjectType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npObjectName(paramarg0: number): ByteBuffer;
    static npObjectName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npObjectNameString(paramarg0: number): string;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDebugMarkerObjectNameInfoEXT;
    object(): number;
    object(arg0: number): VkDebugMarkerObjectNameInfoEXT;
    objectType(): number;
    objectType(arg0: number): VkDebugMarkerObjectNameInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDebugMarkerObjectNameInfoEXT;
    pObjectName(): ByteBuffer;
    pObjectName(arg0: ByteBuffer): VkDebugMarkerObjectNameInfoEXT;
    pObjectNameString(): string;
    sType(): number;
    sType(arg0: number): VkDebugMarkerObjectNameInfoEXT;
    sType$Default(): VkDebugMarkerObjectNameInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ByteBuffer): VkDebugMarkerObjectNameInfoEXT;
    set(arg0: VkDebugMarkerObjectNameInfoEXT): VkDebugMarkerObjectNameInfoEXT;
    sizeof(): number;
}