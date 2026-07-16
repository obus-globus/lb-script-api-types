import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_PaintColrGlyph } from '../../../../org/lwjgl/util/freetype/FT_PaintColrGlyph.d.ts'
import type { FT_PaintColrLayers } from '../../../../org/lwjgl/util/freetype/FT_PaintColrLayers.d.ts'
import type { FT_PaintComposite } from '../../../../org/lwjgl/util/freetype/FT_PaintComposite.d.ts'
import type { FT_PaintGlyph } from '../../../../org/lwjgl/util/freetype/FT_PaintGlyph.d.ts'
import type { FT_PaintLinearGradient } from '../../../../org/lwjgl/util/freetype/FT_PaintLinearGradient.d.ts'
import type { FT_PaintRadialGradient } from '../../../../org/lwjgl/util/freetype/FT_PaintRadialGradient.d.ts'
import type { FT_PaintRotate } from '../../../../org/lwjgl/util/freetype/FT_PaintRotate.d.ts'
import type { FT_PaintScale } from '../../../../org/lwjgl/util/freetype/FT_PaintScale.d.ts'
import type { FT_PaintSkew } from '../../../../org/lwjgl/util/freetype/FT_PaintSkew.d.ts'
import type { FT_PaintSolid } from '../../../../org/lwjgl/util/freetype/FT_PaintSolid.d.ts'
import type { FT_PaintSweepGradient } from '../../../../org/lwjgl/util/freetype/FT_PaintSweepGradient.d.ts'
import type { FT_PaintTransform } from '../../../../org/lwjgl/util/freetype/FT_PaintTransform.d.ts'
import type { FT_PaintTranslate } from '../../../../org/lwjgl/util/freetype/FT_PaintTranslate.d.ts'
export class FT_COLR_Paint extends Struct<FT_COLR_Paint> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static U: number;
    static U_COLR_GLYPH: number;
    static U_COLR_LAYERS: number;
    static U_COMPOSITE: number;
    static U_GLYPH: number;
    static U_LINEAR_GRADIENT: number;
    static U_RADIAL_GRADIENT: number;
    static U_ROTATE: number;
    static U_SCALE: number;
    static U_SKEW: number;
    static U_SOLID: number;
    static U_SWEEP_GRADIENT: number;
    static U_TRANSFORM: number;
    static U_TRANSLATE: number;
    static calloc(): FT_COLR_Paint;
    static calloc(paramarg0: MemoryStack): FT_COLR_Paint;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_COLR_Paint;
    static create(paramarg0: number): FT_COLR_Paint;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_COLR_Paint;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_COLR_Paint;
    static malloc(paramarg0: MemoryStack): FT_COLR_Paint;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nformat(paramarg0: number): number;
    static nu_colr_glyph(paramarg0: number): FT_PaintColrGlyph;
    static nu_colr_layers(paramarg0: number): FT_PaintColrLayers;
    static nu_composite(paramarg0: number): FT_PaintComposite;
    static nu_glyph(paramarg0: number): FT_PaintGlyph;
    static nu_linear_gradient(paramarg0: number): FT_PaintLinearGradient;
    static nu_radial_gradient(paramarg0: number): FT_PaintRadialGradient;
    static nu_rotate(paramarg0: number): FT_PaintRotate;
    static nu_scale(paramarg0: number): FT_PaintScale;
    static nu_skew(paramarg0: number): FT_PaintSkew;
    static nu_solid(paramarg0: number): FT_PaintSolid;
    static nu_sweep_gradient(paramarg0: number): FT_PaintSweepGradient;
    static nu_transform(paramarg0: number): FT_PaintTransform;
    static nu_translate(paramarg0: number): FT_PaintTranslate;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_COLR_Paint;
    format(): number;
    sizeof(): number;
    u_colr_glyph(): FT_PaintColrGlyph;
    u_colr_layers(): FT_PaintColrLayers;
    u_composite(): FT_PaintComposite;
    u_glyph(): FT_PaintGlyph;
    u_linear_gradient(): FT_PaintLinearGradient;
    u_radial_gradient(): FT_PaintRadialGradient;
    u_rotate(): FT_PaintRotate;
    u_scale(): FT_PaintScale;
    u_skew(): FT_PaintSkew;
    u_solid(): FT_PaintSolid;
    u_sweep_gradient(): FT_PaintSweepGradient;
    u_transform(): FT_PaintTransform;
    u_translate(): FT_PaintTranslate;
}