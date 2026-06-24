import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWriteDescriptorSetTensorARM extends Struct<VkWriteDescriptorSetTensorARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTENSORVIEWS: number;
    static SIZEOF: number;
    static STYPE: number;
    static TENSORVIEWCOUNT: number;
    static calloc(): VkWriteDescriptorSetTensorARM;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSetTensorARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteDescriptorSetTensorARM;
    static create(paramarg0: number): VkWriteDescriptorSetTensorARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSetTensorARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteDescriptorSetTensorARM;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSetTensorARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTensorViews(paramarg0: number): LongBuffer;
    static npTensorViews(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntensorViewCount(paramarg0: number): number;
    static ntensorViewCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWriteDescriptorSetTensorARM;
    pNext(): number;
    pNext(arg0: number): VkWriteDescriptorSetTensorARM;
    pTensorViews(): LongBuffer;
    pTensorViews(arg0: LongBuffer): VkWriteDescriptorSetTensorARM;
    sType(): number;
    sType(arg0: number): VkWriteDescriptorSetTensorARM;
    sType$Default(): VkWriteDescriptorSetTensorARM;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkWriteDescriptorSetTensorARM;
    set(arg0: VkWriteDescriptorSetTensorARM): VkWriteDescriptorSetTensorARM;
    sizeof(): number;
    tensorViewCount(): number;
    tensorViewCount(arg0: number): VkWriteDescriptorSetTensorARM;
}