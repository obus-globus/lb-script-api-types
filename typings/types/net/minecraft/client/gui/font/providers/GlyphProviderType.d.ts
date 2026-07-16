import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GlyphProviderDefinition } from '../../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class GlyphProviderType extends Enum<GlyphProviderType> implements StringRepresentable {
    static BITMAP: GlyphProviderType;
    static CODEC: Codec<GlyphProviderType>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REFERENCE: GlyphProviderType;
    static SPACE: GlyphProviderType;
    static TTF: GlyphProviderType;
    static UNIHEX: GlyphProviderType;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GlyphProviderType;
    static values(): GlyphProviderType[];
    private constructor(name: string, codec: MapCodec<GlyphProviderDefinition>)
    // private codec: MapCodec<GlyphProviderDefinition>;
    // private name: string;
    getSerializedName(): string;
    mapCodec(): MapCodec<GlyphProviderDefinition>;
    name(): "BITMAP" | "TTF" | "SPACE" | "UNIHEX" | "REFERENCE";
}