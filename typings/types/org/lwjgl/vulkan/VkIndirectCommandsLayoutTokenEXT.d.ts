import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkIndirectCommandsTokenDataEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsTokenDataEXT.d.ts'
import type { VkPushConstantBankInfoNV } from '../../../org/lwjgl/vulkan/VkPushConstantBankInfoNV.d.ts'
export class VkIndirectCommandsLayoutTokenEXT extends Struct<VkIndirectCommandsLayoutTokenEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkIndirectCommandsLayoutTokenEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutTokenEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsLayoutTokenEXT;
    static create(paramarg0: number): VkIndirectCommandsLayoutTokenEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsLayoutTokenEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsLayoutTokenEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutTokenEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkIndirectCommandsTokenDataEXT;
    static ndata(paramarg0: number, paramarg1: VkIndirectCommandsTokenDataEXT): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsLayoutTokenEXT;
    data(): VkIndirectCommandsTokenDataEXT;
    data(arg0: (param0: VkIndirectCommandsTokenDataEXT) => void): VkIndirectCommandsLayoutTokenEXT;
    data(arg0: VkIndirectCommandsTokenDataEXT): VkIndirectCommandsLayoutTokenEXT;
    offset(): number;
    offset(arg0: number): VkIndirectCommandsLayoutTokenEXT;
    pNext(): number;
    pNext(arg0: number): VkIndirectCommandsLayoutTokenEXT;
    pNext(arg0: VkPushConstantBankInfoNV): VkIndirectCommandsLayoutTokenEXT;
    sType(): number;
    sType(arg0: number): VkIndirectCommandsLayoutTokenEXT;
    sType$Default(): VkIndirectCommandsLayoutTokenEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkIndirectCommandsTokenDataEXT, arg4: number): VkIndirectCommandsLayoutTokenEXT;
    set(arg0: VkIndirectCommandsLayoutTokenEXT): VkIndirectCommandsLayoutTokenEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkIndirectCommandsLayoutTokenEXT;
}