import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkOpticalFlowSessionCreatePrivateDataInfoNV extends Struct<VkOpticalFlowSessionCreatePrivateDataInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ID: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRIVATEDATA: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static calloc(paramarg0: MemoryStack): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static create(paramarg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static malloc(paramarg0: MemoryStack): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPrivateData(paramarg0: number): number;
    static npPrivateData(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    id(): number;
    id(arg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    pNext(): number;
    pNext(arg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    pPrivateData(): number;
    pPrivateData(arg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    sType(): number;
    sType(arg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    sType$Default(): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    set(arg0: VkOpticalFlowSessionCreatePrivateDataInfoNV): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    size(): number;
    size(arg0: number): VkOpticalFlowSessionCreatePrivateDataInfoNV;
    sizeof(): number;
}