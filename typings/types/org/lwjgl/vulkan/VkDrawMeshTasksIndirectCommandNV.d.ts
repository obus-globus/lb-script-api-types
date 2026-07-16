import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrawMeshTasksIndirectCommandNV extends Struct<VkDrawMeshTasksIndirectCommandNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTTASK: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TASKCOUNT: number;
    static calloc(): VkDrawMeshTasksIndirectCommandNV;
    static calloc(paramarg0: MemoryStack): VkDrawMeshTasksIndirectCommandNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDrawMeshTasksIndirectCommandNV;
    static create(paramarg0: number): VkDrawMeshTasksIndirectCommandNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrawMeshTasksIndirectCommandNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDrawMeshTasksIndirectCommandNV;
    static malloc(paramarg0: MemoryStack): VkDrawMeshTasksIndirectCommandNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstTask(paramarg0: number): number;
    static nfirstTask(paramarg0: number, paramarg1: number): void;
    static ntaskCount(paramarg0: number): number;
    static ntaskCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDrawMeshTasksIndirectCommandNV;
    firstTask(): number;
    firstTask(arg0: number): VkDrawMeshTasksIndirectCommandNV;
    set(arg0: number, arg1: number): VkDrawMeshTasksIndirectCommandNV;
    set(arg0: VkDrawMeshTasksIndirectCommandNV): VkDrawMeshTasksIndirectCommandNV;
    sizeof(): number;
    taskCount(): number;
    taskCount(arg0: number): VkDrawMeshTasksIndirectCommandNV;
}