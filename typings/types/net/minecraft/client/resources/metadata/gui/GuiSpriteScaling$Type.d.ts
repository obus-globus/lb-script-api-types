import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class GuiSpriteScaling$Type extends Enum<GuiSpriteScaling$Type> implements StringRepresentable {
    static CODEC: Codec<GuiSpriteScaling$Type>;
    static NINE_SLICE: GuiSpriteScaling$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRETCH: GuiSpriteScaling$Type;
    static TILE: GuiSpriteScaling$Type;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GuiSpriteScaling$Type;
    static values(): (Object | null)[];
    private constructor(key: string, codec: MapCodec<GuiSpriteScaling>)
    // private codec: MapCodec<GuiSpriteScaling>;
    // private key: string;
    codec(): MapCodec<GuiSpriteScaling>;
    getSerializedName(): string;
    name(): "STRETCH" | "TILE" | "NINE_SLICE";
}