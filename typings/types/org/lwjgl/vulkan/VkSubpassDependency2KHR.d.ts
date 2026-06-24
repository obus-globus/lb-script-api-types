import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryBarrier2 } from '../../../org/lwjgl/vulkan/VkMemoryBarrier2.d.ts'
import type { VkMemoryBarrier2KHR } from '../../../org/lwjgl/vulkan/VkMemoryBarrier2KHR.d.ts'
import type { VkMemoryBarrierAccessFlags3KHR } from '../../../org/lwjgl/vulkan/VkMemoryBarrierAccessFlags3KHR.d.ts'
import type { VkSubpassDependency2 } from '../../../org/lwjgl/vulkan/VkSubpassDependency2.d.ts'
export class VkSubpassDependency2KHR extends VkSubpassDependency2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPENDENCYFLAGS: number;
    static DSTACCESSMASK: number;
    static DSTSTAGEMASK: number;
    static DSTSUBPASS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCSTAGEMASK: number;
    static SRCSUBPASS: number;
    static STYPE: number;
    static VIEWOFFSET: number;
    static calloc(): VkSubpassDependency2;
    static calloc(paramarg0: MemoryStack): VkSubpassDependency2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSubpassDependency2KHR;
    static calloc(paramarg0: MemoryStack): VkSubpassDependency2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassDependency2;
    static create(paramarg0: number): VkSubpassDependency2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSubpassDependency2KHR;
    static create(paramarg0: number): VkSubpassDependency2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDependency2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassDependency2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassDependency2;
    static malloc(paramarg0: MemoryStack): VkSubpassDependency2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSubpassDependency2KHR;
    static malloc(paramarg0: MemoryStack): VkSubpassDependency2KHR;
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
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static nsrcSubpass(paramarg0: number): number;
    static nsrcSubpass(paramarg0: number, paramarg1: number): void;
    static nviewOffset(paramarg0: number): number;
    static nviewOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSubpassDependency2KHR;
    dependencyFlags(): number;
    dependencyFlags(arg0: number): VkSubpassDependency2KHR;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkSubpassDependency2KHR;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkSubpassDependency2KHR;
    dstSubpass(): number;
    dstSubpass(arg0: number): VkSubpassDependency2KHR;
    pNext(): number;
    pNext(arg0: number): VkSubpassDependency2KHR;
    pNext(arg0: VkMemoryBarrier2): VkSubpassDependency2;
    pNext(arg0: VkMemoryBarrier2KHR): VkSubpassDependency2;
    pNext(arg0: VkMemoryBarrierAccessFlags3KHR): VkSubpassDependency2;
    sType(): number;
    sType(arg0: number): VkSubpassDependency2KHR;
    sType$Default(): VkSubpassDependency2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): VkSubpassDependency2KHR;
    set(arg0: VkSubpassDependency2): VkSubpassDependency2;
    set(arg0: VkSubpassDependency2KHR): VkSubpassDependency2KHR;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkSubpassDependency2KHR;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkSubpassDependency2KHR;
    srcSubpass(): number;
    srcSubpass(arg0: number): VkSubpassDependency2KHR;
    viewOffset(): number;
    viewOffset(arg0: number): VkSubpassDependency2KHR;
}