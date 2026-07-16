import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { TextColor } from '../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { DisplaySlot } from '../../../../net/minecraft/world/scores/DisplaySlot.d.ts'
export class TeamColor extends Enum<TeamColor> implements StringRepresentable {
    static AQUA: TeamColor;
    static BLACK: TeamColor;
    static BLUE: TeamColor;
    static CODEC: StringRepresentable$EnumCodec<TeamColor>;
    static DARK_AQUA: TeamColor;
    static DARK_BLUE: TeamColor;
    static DARK_GRAY: TeamColor;
    static DARK_GREEN: TeamColor;
    static DARK_PURPLE: TeamColor;
    static DARK_RED: TeamColor;
    static GOLD: TeamColor;
    static GRAY: TeamColor;
    static GREEN: TeamColor;
    static LIGHT_PURPLE: TeamColor;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RED: TeamColor;
    static STREAM_CODEC: StreamCodec<ByteBuf, TeamColor>;
    static VALUES: TeamColor[];
    static WHITE: TeamColor;
    static YELLOW: TeamColor;
    static byName(paramname: string): TeamColor;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TeamColor;
    static values(): TeamColor[];
    private constructor(id: number, name: string, format: TextColor, displaySlot: DisplaySlot)
    // private displaySlot: DisplaySlot;
    // private format: TextColor;
    // private id: number;
    // private name: string;
    displaySlot(): DisplaySlot;
    getSerializedName(): string;
    rgb(): number;
    textColor(): TextColor;
    name(): "BLACK" | "DARK_BLUE" | "DARK_GREEN" | "DARK_AQUA" | "DARK_RED" | "DARK_PURPLE" | "GOLD" | "GRAY" | "DARK_GRAY" | "BLUE" | "GREEN" | "AQUA" | "RED" | "LIGHT_PURPLE" | "YELLOW" | "WHITE";
}