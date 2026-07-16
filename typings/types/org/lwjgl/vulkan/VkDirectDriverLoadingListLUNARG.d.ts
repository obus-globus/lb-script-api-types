import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDirectDriverLoadingListLUNARG extends Struct<VkDirectDriverLoadingListLUNARG> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRIVERCOUNT: number;
    static MODE: number;
    static PDRIVERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDirectDriverLoadingListLUNARG;
    static calloc(paramarg0: MemoryStack): VkDirectDriverLoadingListLUNARG;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDirectDriverLoadingListLUNARG;
    static create(paramarg0: number): VkDirectDriverLoadingListLUNARG;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDirectDriverLoadingListLUNARG;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDirectDriverLoadingListLUNARG;
    static malloc(paramarg0: MemoryStack): VkDirectDriverLoadingListLUNARG;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndriverCount(paramarg0: number): number;
    static ndriverCount(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npDrivers(paramarg0: number): (Object | null)[];
    static npDrivers(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDirectDriverLoadingListLUNARG;
    driverCount(): number;
    mode(): number;
    mode(arg0: number): VkDirectDriverLoadingListLUNARG;
    pDrivers(): (Object | null)[];
    pDrivers(arg0: (Object | null)[]): VkDirectDriverLoadingListLUNARG;
    pNext(): number;
    pNext(arg0: number): VkDirectDriverLoadingListLUNARG;
    sType(): number;
    sType(arg0: number): VkDirectDriverLoadingListLUNARG;
    sType$Default(): VkDirectDriverLoadingListLUNARG;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkDirectDriverLoadingListLUNARG;
    set(arg0: VkDirectDriverLoadingListLUNARG): VkDirectDriverLoadingListLUNARG;
    sizeof(): number;
}