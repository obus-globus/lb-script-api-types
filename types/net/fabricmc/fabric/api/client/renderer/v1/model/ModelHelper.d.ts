import type { Transparency } from '../../../../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class ModelHelper extends Object {
    static NULL_FACE_ID: number;
    static computeMaterialFlags(paramarg0: QuadView): number;
    static computeTransparency(paramarg0: TextureAtlasSprite, paramarg1: QuadView): Transparency;
    static faceFromIndex(paramarg0: number): Direction;
    static toFaceIndex(paramarg0: Direction): number;
    private constructor()
}