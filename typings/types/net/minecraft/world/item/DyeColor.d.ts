import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { MapColor } from '../../../../net/minecraft/world/level/material/MapColor.d.ts'
export class DyeColor extends Enum<DyeColor> implements StringRepresentable {
    static BLACK: DyeColor;
    static BLUE: DyeColor;
    static BROWN: DyeColor;
    static CODEC: StringRepresentable$EnumCodec<DyeColor>;
    static CYAN: DyeColor;
    static GRAY: DyeColor;
    static GREEN: DyeColor;
    static LEGACY_ID_CODEC: Codec<DyeColor>;
    static LIGHT_BLUE: DyeColor;
    static LIGHT_GRAY: DyeColor;
    static LIME: DyeColor;
    static MAGENTA: DyeColor;
    static ORANGE: DyeColor;
    static PINK: DyeColor;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static PURPLE: DyeColor;
    static RED: DyeColor;
    static STREAM_CODEC: StreamCodec<ByteBuf, DyeColor>;
    static VALUES: DyeColor[];
    static WHITE: DyeColor;
    static YELLOW: DyeColor;
    static byFireworkColor(paramcolor: number): DyeColor;
    static byId(paramid: number): DyeColor;
    static byName(paramname: string, paramdef: DyeColor): DyeColor;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static getMixedColor(paramlevel: ServerLevel, paramdyeColor1: DyeColor, paramdyeColor2: DyeColor): DyeColor;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DyeColor;
    static values(): (Object | null)[];
    private constructor(id: number, name: string, textureDiffuseColor: number, mapColor: MapColor, fireworkColor: number, textColor: number)
    readonly fireworkColor: number;
    readonly id: number;
    readonly mapColor: MapColor;
    readonly textColor: number;
    readonly textureDiffuseColor: number;
    getFireworkColor(): number;
    getId(): number;
    getMapColor(): MapColor;
    getName(): string;
    getSerializedName(): string;
    getTextColor(): number;
    getTextureDiffuseColor(): number;
    toString(): string;
    name(): "WHITE" | "ORANGE" | "MAGENTA" | "LIGHT_BLUE" | "YELLOW" | "LIME" | "PINK" | "GRAY" | "LIGHT_GRAY" | "CYAN" | "PURPLE" | "BLUE" | "BROWN" | "GREEN" | "RED" | "BLACK";
}