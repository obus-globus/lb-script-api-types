import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMicromapCreateInfoEXT extends Struct<VkMicromapCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CREATEFLAGS: number;
    static DEVICEADDRESS: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkMicromapCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMicromapCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMicromapCreateInfoEXT;
    static create(paramarg0: number): VkMicromapCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMicromapCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMicromapCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMicromapCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static ncreateFlags(paramarg0: number): number;
    static ncreateFlags(paramarg0: number, paramarg1: number): void;
    static ndeviceAddress(paramarg0: number): number;
    static ndeviceAddress(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkMicromapCreateInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMicromapCreateInfoEXT;
    createFlags(): number;
    createFlags(arg0: number): VkMicromapCreateInfoEXT;
    deviceAddress(): number;
    deviceAddress(arg0: number): VkMicromapCreateInfoEXT;
    offset(): number;
    offset(arg0: number): VkMicromapCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkMicromapCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkMicromapCreateInfoEXT;
    sType$Default(): VkMicromapCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VkMicromapCreateInfoEXT;
    set(arg0: VkMicromapCreateInfoEXT): VkMicromapCreateInfoEXT;
    size(): number;
    size(arg0: number): VkMicromapCreateInfoEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkMicromapCreateInfoEXT;
}