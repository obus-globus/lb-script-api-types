import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineCacheHeaderVersionOne extends Struct<VkPipelineCacheHeaderVersionOne> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEID: number;
    static HEADERSIZE: number;
    static HEADERVERSION: number;
    static PIPELINECACHEUUID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VENDORID: number;
    static calloc(): VkPipelineCacheHeaderVersionOne;
    static calloc(paramarg0: MemoryStack): VkPipelineCacheHeaderVersionOne;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineCacheHeaderVersionOne;
    static create(paramarg0: number): VkPipelineCacheHeaderVersionOne;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCacheHeaderVersionOne;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineCacheHeaderVersionOne;
    static malloc(paramarg0: MemoryStack): VkPipelineCacheHeaderVersionOne;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceID(paramarg0: number): number;
    static ndeviceID(paramarg0: number, paramarg1: number): void;
    static nheaderSize(paramarg0: number): number;
    static nheaderSize(paramarg0: number, paramarg1: number): void;
    static nheaderVersion(paramarg0: number): number;
    static nheaderVersion(paramarg0: number, paramarg1: number): void;
    static npipelineCacheUUID(paramarg0: number, paramarg1: number): number;
    static npipelineCacheUUID(paramarg0: number): ByteBuffer;
    static npipelineCacheUUID(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npipelineCacheUUID(paramarg0: number, paramarg1: ByteBuffer): void;
    static nvendorID(paramarg0: number): number;
    static nvendorID(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineCacheHeaderVersionOne;
    deviceID(): number;
    deviceID(arg0: number): VkPipelineCacheHeaderVersionOne;
    headerSize(): number;
    headerSize(arg0: number): VkPipelineCacheHeaderVersionOne;
    headerVersion(): number;
    headerVersion(arg0: number): VkPipelineCacheHeaderVersionOne;
    pipelineCacheUUID(): ByteBuffer;
    pipelineCacheUUID(arg0: ByteBuffer): VkPipelineCacheHeaderVersionOne;
    pipelineCacheUUID(arg0: number): number;
    pipelineCacheUUID(arg0: number, arg1: number): VkPipelineCacheHeaderVersionOne;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ByteBuffer): VkPipelineCacheHeaderVersionOne;
    set(arg0: VkPipelineCacheHeaderVersionOne): VkPipelineCacheHeaderVersionOne;
    sizeof(): number;
    vendorID(): number;
    vendorID(arg0: number): VkPipelineCacheHeaderVersionOne;
}