import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassSubpassFeedbackInfoEXT extends Struct<VkRenderPassSubpassFeedbackInfoEXT> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POSTMERGEINDEX: number;
    static SIZEOF: number;
    static SUBPASSMERGESTATUS: number;
    static create(paramarg0: number): VkRenderPassSubpassFeedbackInfoEXT;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassSubpassFeedbackInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static npostMergeIndex(paramarg0: number): number;
    static nsubpassMergeStatus(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkRenderPassSubpassFeedbackInfoEXT;
    description(): ByteBuffer;
    descriptionString(): string;
    postMergeIndex(): number;
    sizeof(): number;
    subpassMergeStatus(): number;
}