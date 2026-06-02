import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { GuiSpriteScaling$Type } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling$Type.d.ts'
export class GuiSpriteScaling$Stretch extends Record implements GuiSpriteScaling {
    static CODEC: Codec<GuiSpriteScaling>;
    static CODEC: MapCodec<GuiSpriteScaling$Stretch>;
    static DEFAULT: GuiSpriteScaling;
    constructor()
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): GuiSpriteScaling$Type;
}