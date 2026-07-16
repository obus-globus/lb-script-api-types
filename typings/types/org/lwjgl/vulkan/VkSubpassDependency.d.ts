import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSubpassDependency extends Struct<VkSubpassDependency> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPENDENCYFLAGS: number;
    static DSTACCESSMASK: number;
    static DSTSTAGEMASK: number;
    static DSTSUBPASS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCSTAGEMASK: number;
    static SRCSUBPASS: number;
    static calloc(): VkSubpassDependency;
    static calloc(paramarg0: MemoryStack): VkSubpassDependency;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassDependency;
    static create(paramarg0: number): VkSubpassDependency;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDependency;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassDependency;
    static malloc(paramarg0: MemoryStack): VkSubpassDependency;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndependencyFlags(paramarg0: number): number;
    static ndependencyFlags(paramarg0: number, paramarg1: number): void;
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstStageMask(paramarg0: number): number;
    static ndstStageMask(paramarg0: number, paramarg1: number): void;
    static ndstSubpass(paramarg0: number): number;
    static ndstSubpass(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static nsrcSubpass(paramarg0: number): number;
    static nsrcSubpass(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSubpassDependency;
    dependencyFlags(): number;
    dependencyFlags(arg0: number): VkSubpassDependency;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkSubpassDependency;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkSubpassDependency;
    dstSubpass(): number;
    dstSubpass(arg0: number): VkSubpassDependency;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkSubpassDependency;
    set(arg0: VkSubpassDependency): VkSubpassDependency;
    sizeof(): number;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkSubpassDependency;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkSubpassDependency;
    srcSubpass(): number;
    srcSubpass(arg0: number): VkSubpassDependency;
}