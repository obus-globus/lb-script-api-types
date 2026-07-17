import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
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