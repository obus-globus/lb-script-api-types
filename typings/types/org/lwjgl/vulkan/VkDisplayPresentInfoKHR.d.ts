import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
export class VkDisplayPresentInfoKHR extends Struct<VkDisplayPresentInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTRECT: number;
    static PERSISTENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCRECT: number;
    static STYPE: number;
    static calloc(): VkDisplayPresentInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDisplayPresentInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayPresentInfoKHR;
    static create(paramarg0: number): VkDisplayPresentInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayPresentInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayPresentInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDisplayPresentInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstRect(paramarg0: number): VkRect2D;
    static ndstRect(paramarg0: number, paramarg1: VkRect2D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npersistent(paramarg0: number): number;
    static npersistent(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcRect(paramarg0: number): VkRect2D;
    static nsrcRect(paramarg0: number, paramarg1: VkRect2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayPresentInfoKHR;
    dstRect(): VkRect2D;
    dstRect(arg0: (param0: VkRect2D) => void): VkDisplayPresentInfoKHR;
    dstRect(arg0: VkRect2D): VkDisplayPresentInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDisplayPresentInfoKHR;
    persistent(): boolean;
    persistent(arg0: boolean): VkDisplayPresentInfoKHR;
    sType(): number;
    sType(arg0: number): VkDisplayPresentInfoKHR;
    sType$Default(): VkDisplayPresentInfoKHR;
    set(arg0: number, arg1: number, arg2: VkRect2D, arg3: VkRect2D, arg4: boolean): VkDisplayPresentInfoKHR;
    set(arg0: VkDisplayPresentInfoKHR): VkDisplayPresentInfoKHR;
    sizeof(): number;
    srcRect(): VkRect2D;
    srcRect(arg0: (param0: VkRect2D) => void): VkDisplayPresentInfoKHR;
    srcRect(arg0: VkRect2D): VkDisplayPresentInfoKHR;
}