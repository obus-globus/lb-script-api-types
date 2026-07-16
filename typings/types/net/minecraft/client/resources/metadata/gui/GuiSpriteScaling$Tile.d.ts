import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { GuiSpriteScaling$Type } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling$Type.d.ts'
export class GuiSpriteScaling$Tile extends Record implements GuiSpriteScaling {
    static CODEC: MapCodec<GuiSpriteScaling$Tile>;
    static DEFAULT: GuiSpriteScaling;
    constructor(width: number, height: number)
    // private height: number;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    type(): GuiSpriteScaling$Type;
    width(): number;
}