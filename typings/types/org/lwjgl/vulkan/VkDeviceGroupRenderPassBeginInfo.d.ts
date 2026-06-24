import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceGroupRenderPassBeginInfo extends Struct<VkDeviceGroupRenderPassBeginInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEMASK: number;
    static DEVICERENDERAREACOUNT: number;
    static PDEVICERENDERAREAS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceGroupRenderPassBeginInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupRenderPassBeginInfo;
    static create(paramarg0: number): VkDeviceGroupRenderPassBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupRenderPassBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupRenderPassBeginInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceMask(paramarg0: number): number;
    static ndeviceMask(paramarg0: number, paramarg1: number): void;
    static ndeviceRenderAreaCount(paramarg0: number): number;
    static ndeviceRenderAreaCount(paramarg0: number, paramarg1: number): void;
    static npDeviceRenderAreas(paramarg0: number): (Object | null)[];
    static npDeviceRenderAreas(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupRenderPassBeginInfo;
    deviceMask(): number;
    deviceMask(arg0: number): VkDeviceGroupRenderPassBeginInfo;
    deviceRenderAreaCount(): number;
    pDeviceRenderAreas(): (Object | null)[];
    pDeviceRenderAreas(arg0: (Object | null)[]): VkDeviceGroupRenderPassBeginInfo;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupRenderPassBeginInfo;
    sType(): number;
    sType(arg0: number): VkDeviceGroupRenderPassBeginInfo;
    sType$Default(): VkDeviceGroupRenderPassBeginInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkDeviceGroupRenderPassBeginInfo;
    set(arg0: VkDeviceGroupRenderPassBeginInfo): VkDeviceGroupRenderPassBeginInfo;
    sizeof(): number;
}