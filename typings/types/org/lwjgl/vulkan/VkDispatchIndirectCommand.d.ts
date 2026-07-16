import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDispatchIndirectCommand extends Struct<VkDispatchIndirectCommand> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X: number;
    static Y: number;
    static Z: number;
    static calloc(): VkDispatchIndirectCommand;
    static calloc(paramarg0: MemoryStack): VkDispatchIndirectCommand;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDispatchIndirectCommand;
    static create(paramarg0: number): VkDispatchIndirectCommand;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDispatchIndirectCommand;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDispatchIndirectCommand;
    static malloc(paramarg0: MemoryStack): VkDispatchIndirectCommand;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static nz(paramarg0: number): number;
    static nz(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDispatchIndirectCommand;
    set(arg0: number, arg1: number, arg2: number): VkDispatchIndirectCommand;
    set(arg0: VkDispatchIndirectCommand): VkDispatchIndirectCommand;
    sizeof(): number;
    x(): number;
    x(arg0: number): VkDispatchIndirectCommand;
    y(): number;
    y(arg0: number): VkDispatchIndirectCommand;
    z(): number;
    z(arg0: number): VkDispatchIndirectCommand;
}