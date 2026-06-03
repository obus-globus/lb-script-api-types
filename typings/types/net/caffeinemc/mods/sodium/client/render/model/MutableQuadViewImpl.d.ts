import type { BakedQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/BakedQuadView.d.ts'
import type { ExtendedMutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/wrapper/ExtendedMutableQuadViewImpl.d.ts'
import type { MutableQuadViewWrapper } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/wrapper/MutableQuadViewWrapper.d.ts'
import type { ListStorage } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/helper/ListStorage.d.ts'
import type { QuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/QuadViewImpl.d.ts'
import type { SodiumQuadAtlas } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumQuadAtlas.d.ts'
import type { SodiumShadeMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumShadeMode.d.ts'
import type { SodiumSpriteFinder } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinder.d.ts'
import type { BlockStateModelPart } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BakedQuad } from '../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { TriState } from '../../../../../../../net/minecraft/util/TriState.d.ts'
export abstract class MutableQuadViewImpl extends QuadViewImpl implements ExtendedMutableQuadViewImpl, ListStorage {
    constructor()
    // private cachedList: BlockStateModelPart[];
    // private cachedSprite: TextureAtlasSprite;
    readonly wrapper: MutableQuadViewWrapper;
    cachedSprite(): TextureAtlasSprite;
    cachedSprite(arg0: TextureAtlasSprite): void;
    clear(): void;
    clearAndGet(): BlockStateModelPart[];
    copyFrom(arg0: QuadViewImpl): MutableQuadViewImpl;
    emitDirectly(): void;
    fromBakedQuad(arg0: BakedQuad): MutableQuadViewImpl;
    // private fromVanillaInternal(arg0: BakedQuadView): void;
    getWrapper(): MutableQuadViewWrapper;
    load(): void;
    normalFlags(): number;
    normalFlags(arg0: number): void;
    populateMissingNormals(): void;
    setAmbientOcclusion(arg0: TriState): MutableQuadViewImpl;
    setAnimated(arg0: boolean): MutableQuadViewImpl;
    setColor(arg0: number, arg1: number): MutableQuadViewImpl;
    setCullFace(arg0: Direction): MutableQuadViewImpl;
    setDiffuseShade(arg0: boolean): MutableQuadViewImpl;
    setEmissive(arg0: boolean): MutableQuadViewImpl;
    setGlint(arg0: ItemStackRenderState$FoilType): MutableQuadViewImpl;
    setItemRenderType(arg0: RenderType): MutableQuadViewImpl;
    setLight(arg0: number, arg1: number): MutableQuadViewImpl;
    setNominalFace(arg0: Direction): MutableQuadViewImpl;
    setNormal(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadViewImpl;
    setPos(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadViewImpl;
    setQuadAtlas(arg0: SodiumQuadAtlas): MutableQuadViewImpl;
    setRenderType(arg0: ChunkSectionLayer): MutableQuadViewImpl;
    setShadeMode(arg0: SodiumShadeMode): MutableQuadViewImpl;
    setTag(arg0: number): MutableQuadViewImpl;
    setTintIndex(arg0: number): MutableQuadViewImpl;
    setUV(arg0: number, arg1: number, arg2: number): MutableQuadViewImpl;
    sprite(arg0: SodiumSpriteFinder): TextureAtlasSprite;
    spriteBake(arg0: TextureAtlasSprite, arg1: number): MutableQuadViewImpl;
    translate(arg0: number, arg1: number, arg2: number): MutableQuadViewImpl;
}