import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrmFormatModifierProperties2EXT extends Struct<VkDrmFormatModifierProperties2EXT> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRMFORMATMODIFIER: number;
    static DRMFORMATMODIFIERPLANECOUNT: number;
    static DRMFORMATMODIFIERTILINGFEATURES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): VkDrmFormatModifierProperties2EXT;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrmFormatModifierProperties2EXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndrmFormatModifier(paramarg0: number): number;
    static ndrmFormatModifierPlaneCount(paramarg0: number): number;
    static ndrmFormatModifierTilingFeatures(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDrmFormatModifierProperties2EXT;
    drmFormatModifier(): number;
    drmFormatModifierPlaneCount(): number;
    drmFormatModifierTilingFeatures(): number;
    sizeof(): number;
}