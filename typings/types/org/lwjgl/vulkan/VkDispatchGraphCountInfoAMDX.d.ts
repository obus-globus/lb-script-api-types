import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstAMDX } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstAMDX.d.ts'
export class VkDispatchGraphCountInfoAMDX extends Struct<VkDispatchGraphCountInfoAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNT: number;
    static INFOS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static calloc(): VkDispatchGraphCountInfoAMDX;
    static calloc(paramarg0: MemoryStack): VkDispatchGraphCountInfoAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDispatchGraphCountInfoAMDX;
    static create(paramarg0: number): VkDispatchGraphCountInfoAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDispatchGraphCountInfoAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDispatchGraphCountInfoAMDX;
    static malloc(paramarg0: MemoryStack): VkDispatchGraphCountInfoAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncount(paramarg0: number): number;
    static ncount(paramarg0: number, paramarg1: number): void;
    static ninfos(paramarg0: number): VkDeviceOrHostAddressConstAMDX;
    static ninfos(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstAMDX): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    count(): number;
    count(arg0: number): VkDispatchGraphCountInfoAMDX;
    create(arg0: number, arg1: ByteBuffer): VkDispatchGraphCountInfoAMDX;
    infos(): VkDeviceOrHostAddressConstAMDX;
    infos(arg0: (param0: VkDeviceOrHostAddressConstAMDX) => void): VkDispatchGraphCountInfoAMDX;
    infos(arg0: VkDeviceOrHostAddressConstAMDX): VkDispatchGraphCountInfoAMDX;
    set(arg0: number, arg1: VkDeviceOrHostAddressConstAMDX, arg2: number): VkDispatchGraphCountInfoAMDX;
    set(arg0: VkDispatchGraphCountInfoAMDX): VkDispatchGraphCountInfoAMDX;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): VkDispatchGraphCountInfoAMDX;
}