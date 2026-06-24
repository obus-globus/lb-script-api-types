import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRefreshCycleDurationGOOGLE extends Struct<VkRefreshCycleDurationGOOGLE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REFRESHDURATION: number;
    static SIZEOF: number;
    static calloc(): VkRefreshCycleDurationGOOGLE;
    static calloc(paramarg0: MemoryStack): VkRefreshCycleDurationGOOGLE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRefreshCycleDurationGOOGLE;
    static create(paramarg0: number): VkRefreshCycleDurationGOOGLE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRefreshCycleDurationGOOGLE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRefreshCycleDurationGOOGLE;
    static malloc(paramarg0: MemoryStack): VkRefreshCycleDurationGOOGLE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nrefreshDuration(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRefreshCycleDurationGOOGLE;
    refreshDuration(): number;
    sizeof(): number;
}