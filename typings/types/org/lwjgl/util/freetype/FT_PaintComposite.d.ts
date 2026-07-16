import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_OpaquePaint } from '../../../../org/lwjgl/util/freetype/FT_OpaquePaint.d.ts'
export class FT_PaintComposite extends Struct<FT_PaintComposite> {
    static ALIGNOF: number;
    static BACKDROP_PAINT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPOSITE_MODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SOURCE_PAINT: number;
    static create(paramarg0: number): FT_PaintComposite;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintComposite;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nbackdrop_paint(paramarg0: number): FT_OpaquePaint;
    static ncomposite_mode(paramarg0: number): number;
    static nsource_paint(paramarg0: number): FT_OpaquePaint;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    backdrop_paint(): FT_OpaquePaint;
    composite_mode(): number;
    create(arg0: number, arg1: ByteBuffer): FT_PaintComposite;
    sizeof(): number;
    source_paint(): FT_OpaquePaint;
}