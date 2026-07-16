import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { GuiSpriteScaling$NineSlice$Border } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling$NineSlice$Border.d.ts'
import type { GuiSpriteScaling$Type } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling$Type.d.ts'
export class GuiSpriteScaling$NineSlice extends Record implements GuiSpriteScaling {
    static CODEC: MapCodec<GuiSpriteScaling$NineSlice>;
    static DEFAULT: GuiSpriteScaling;
    constructor(width: number, height: number, border: GuiSpriteScaling$NineSlice$Border, stretchInner: boolean)
    // private border: GuiSpriteScaling$NineSlice$Border;
    // private height: number;
    // private stretchInner: boolean;
    // private width: number;
    border(): GuiSpriteScaling$NineSlice$Border;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    stretchInner(): boolean;
    toString(): string;
    type(): GuiSpriteScaling$Type;
    width(): number;
}