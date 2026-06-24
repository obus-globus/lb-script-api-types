import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM extends Struct<VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PERVIEWRENDERAREACOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPERVIEWRENDERAREAS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static create(paramarg0: number): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPerViewRenderAreas(paramarg0: number): (Object | null)[];
    static npPerViewRenderAreas(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nperViewRenderAreaCount(paramarg0: number): number;
    static nperViewRenderAreaCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    pPerViewRenderAreas(): (Object | null)[];
    pPerViewRenderAreas(arg0: (Object | null)[]): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    perViewRenderAreaCount(): number;
    sType(): number;
    sType(arg0: number): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    sType$Default(): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    set(arg0: VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM): VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM;
    sizeof(): number;
}