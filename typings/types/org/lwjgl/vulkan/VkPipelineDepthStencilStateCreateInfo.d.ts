import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkStencilOpState } from '../../../org/lwjgl/vulkan/VkStencilOpState.d.ts'
export class VkPipelineDepthStencilStateCreateInfo extends Struct<VkPipelineDepthStencilStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BACK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHBOUNDSTESTENABLE: number;
    static DEPTHCOMPAREOP: number;
    static DEPTHTESTENABLE: number;
    static DEPTHWRITEENABLE: number;
    static FLAGS: number;
    static FRONT: number;
    static MAXDEPTHBOUNDS: number;
    static MINDEPTHBOUNDS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILTESTENABLE: number;
    static STYPE: number;
    static calloc(): VkPipelineDepthStencilStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineDepthStencilStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineDepthStencilStateCreateInfo;
    static create(paramarg0: number): VkPipelineDepthStencilStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineDepthStencilStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineDepthStencilStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineDepthStencilStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nback(paramarg0: number): VkStencilOpState;
    static nback(paramarg0: number, paramarg1: VkStencilOpState): void;
    static ndepthBoundsTestEnable(paramarg0: number): number;
    static ndepthBoundsTestEnable(paramarg0: number, paramarg1: number): void;
    static ndepthCompareOp(paramarg0: number): number;
    static ndepthCompareOp(paramarg0: number, paramarg1: number): void;
    static ndepthTestEnable(paramarg0: number): number;
    static ndepthTestEnable(paramarg0: number, paramarg1: number): void;
    static ndepthWriteEnable(paramarg0: number): number;
    static ndepthWriteEnable(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nfront(paramarg0: number): VkStencilOpState;
    static nfront(paramarg0: number, paramarg1: VkStencilOpState): void;
    static nmaxDepthBounds(paramarg0: number): number;
    static nmaxDepthBounds(paramarg0: number, paramarg1: number): void;
    static nminDepthBounds(paramarg0: number): number;
    static nminDepthBounds(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilTestEnable(paramarg0: number): number;
    static nstencilTestEnable(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    back(): VkStencilOpState;
    back(arg0: (param0: VkStencilOpState) => void): VkPipelineDepthStencilStateCreateInfo;
    back(arg0: VkStencilOpState): VkPipelineDepthStencilStateCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineDepthStencilStateCreateInfo;
    depthBoundsTestEnable(): boolean;
    depthBoundsTestEnable(arg0: boolean): VkPipelineDepthStencilStateCreateInfo;
    depthCompareOp(): number;
    depthCompareOp(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    depthTestEnable(): boolean;
    depthTestEnable(arg0: boolean): VkPipelineDepthStencilStateCreateInfo;
    depthWriteEnable(): boolean;
    depthWriteEnable(arg0: boolean): VkPipelineDepthStencilStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    front(): VkStencilOpState;
    front(arg0: (param0: VkStencilOpState) => void): VkPipelineDepthStencilStateCreateInfo;
    front(arg0: VkStencilOpState): VkPipelineDepthStencilStateCreateInfo;
    maxDepthBounds(): number;
    maxDepthBounds(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    minDepthBounds(): number;
    minDepthBounds(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineDepthStencilStateCreateInfo;
    sType$Default(): VkPipelineDepthStencilStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: VkStencilOpState, arg9: VkStencilOpState, arg10: number, arg11: number): VkPipelineDepthStencilStateCreateInfo;
    set(arg0: VkPipelineDepthStencilStateCreateInfo): VkPipelineDepthStencilStateCreateInfo;
    sizeof(): number;
    stencilTestEnable(): boolean;
    stencilTestEnable(arg0: boolean): VkPipelineDepthStencilStateCreateInfo;
}