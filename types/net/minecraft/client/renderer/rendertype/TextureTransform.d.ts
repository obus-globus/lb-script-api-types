import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class TextureTransform extends Object {
    static ARMOR_ENTITY_GLINT_TEXTURING: TextureTransform;
    static DEFAULT_TEXTURING: TextureTransform;
    static ENTITY_GLINT_TEXTURING: TextureTransform;
    static GLINT_TEXTURING: TextureTransform;
    static MAX_ENCHANTMENT_GLINT_SPEED_MILLIS: number;
    constructor(name: string, matrix: () => Matrix4f)
    // private name: string;
    // private supplier: () => Matrix4f;
    getMatrix(): Matrix4f;
    toString(): string;
}