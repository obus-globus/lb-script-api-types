import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrawMeshTasksIndirectCommandEXT extends Struct<VkDrawMeshTasksIndirectCommandEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GROUPCOUNTX: number;
    static GROUPCOUNTY: number;
    static GROUPCOUNTZ: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkDrawMeshTasksIndirectCommandEXT;
    static calloc(paramarg0: MemoryStack): VkDrawMeshTasksIndirectCommandEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDrawMeshTasksIndirectCommandEXT;
    static create(paramarg0: number): VkDrawMeshTasksIndirectCommandEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrawMeshTasksIndirectCommandEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDrawMeshTasksIndirectCommandEXT;
    static malloc(paramarg0: MemoryStack): VkDrawMeshTasksIndirectCommandEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ngroupCountX(paramarg0: number): number;
    static ngroupCountX(paramarg0: number, paramarg1: number): void;
    static ngroupCountY(paramarg0: number): number;
    static ngroupCountY(paramarg0: number, paramarg1: number): void;
    static ngroupCountZ(paramarg0: number): number;
    static ngroupCountZ(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDrawMeshTasksIndirectCommandEXT;
    groupCountX(): number;
    groupCountX(arg0: number): VkDrawMeshTasksIndirectCommandEXT;
    groupCountY(): number;
    groupCountY(arg0: number): VkDrawMeshTasksIndirectCommandEXT;
    groupCountZ(): number;
    groupCountZ(arg0: number): VkDrawMeshTasksIndirectCommandEXT;
    set(arg0: number, arg1: number, arg2: number): VkDrawMeshTasksIndirectCommandEXT;
    set(arg0: VkDrawMeshTasksIndirectCommandEXT): VkDrawMeshTasksIndirectCommandEXT;
    sizeof(): number;
}