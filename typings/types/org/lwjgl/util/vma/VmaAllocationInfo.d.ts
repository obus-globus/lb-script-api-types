import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VmaAllocationInfo extends Struct<VmaAllocationInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEMEMORY: number;
    static MEMORYTYPE: number;
    static OFFSET: number;
    static PMAPPEDDATA: number;
    static PNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSERDATA: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VmaAllocationInfo;
    static calloc(paramarg0: MemoryStack): VmaAllocationInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaAllocationInfo;
    static create(paramarg0: number): VmaAllocationInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaAllocationInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaAllocationInfo;
    static malloc(paramarg0: MemoryStack): VmaAllocationInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceMemory(paramarg0: number): number;
    static nmemoryType(paramarg0: number): number;
    static noffset(paramarg0: number): number;
    static npMappedData(paramarg0: number): number;
    static npName(paramarg0: number): ByteBuffer;
    static npNameString(paramarg0: number): string;
    static npUserData(paramarg0: number): number;
    static nsize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaAllocationInfo;
    deviceMemory(): number;
    memoryType(): number;
    offset(): number;
    pMappedData(): number;
    pName(): ByteBuffer;
    pNameString(): string;
    pUserData(): number;
    size(): number;
    sizeof(): number;
}