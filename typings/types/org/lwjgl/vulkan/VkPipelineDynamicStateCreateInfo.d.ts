import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineDynamicStateCreateInfo extends Struct<VkPipelineDynamicStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DYNAMICSTATECOUNT: number;
    static FLAGS: number;
    static PDYNAMICSTATES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineDynamicStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineDynamicStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineDynamicStateCreateInfo;
    static create(paramarg0: number): VkPipelineDynamicStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineDynamicStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineDynamicStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineDynamicStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndynamicStateCount(paramarg0: number): number;
    static ndynamicStateCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npDynamicStates(paramarg0: number): IntBuffer;
    static npDynamicStates(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineDynamicStateCreateInfo;
    dynamicStateCount(): number;
    flags(): number;
    flags(arg0: number): VkPipelineDynamicStateCreateInfo;
    pDynamicStates(): IntBuffer;
    pDynamicStates(arg0: IntBuffer): VkPipelineDynamicStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineDynamicStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineDynamicStateCreateInfo;
    sType$Default(): VkPipelineDynamicStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkPipelineDynamicStateCreateInfo;
    set(arg0: VkPipelineDynamicStateCreateInfo): VkPipelineDynamicStateCreateInfo;
    sizeof(): number;
}