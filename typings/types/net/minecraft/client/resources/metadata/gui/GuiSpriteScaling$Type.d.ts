import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class GuiSpriteScaling$Type extends Enum<GuiSpriteScaling$Type> implements StringRepresentable {
    static CODEC: Codec<GuiSpriteScaling$Type>;
    static NINE_SLICE: GuiSpriteScaling$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRETCH: GuiSpriteScaling$Type;
    static TILE: GuiSpriteScaling$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GuiSpriteScaling$Type;
    static values(): GuiSpriteScaling$Type[];
    private constructor(key: string, codec: MapCodec<GuiSpriteScaling>)
    // private codec: MapCodec<GuiSpriteScaling>;
    // private key: string;
    codec(): MapCodec<GuiSpriteScaling>;
    getSerializedName(): string;
    name(): "STRETCH" | "TILE" | "NINE_SLICE";
}