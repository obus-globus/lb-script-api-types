import type { Transparency } from '../../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
export class BakedQuad$MaterialInfo extends Record {
    static of(parammaterial: Material$Baked, paramtransparency: Transparency, paramtintIndex: number, paramshade: boolean, paramlightEmission: number): BakedQuad$MaterialInfo;
    // private itemRenderType: RenderType;
    // private layer: ChunkSectionLayer;
    // private lightEmission: number;
    // private shade: boolean;
    // private sprite: TextureAtlasSprite;
    // private tintIndex: number;
    equals(o: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    isTinted(): boolean;
    itemRenderType(): RenderType;
    layer(): ChunkSectionLayer;
    lightEmission(): number;
    shade(): boolean;
    sprite(): TextureAtlasSprite;
    tintIndex(): number;
    toString(): string;
}