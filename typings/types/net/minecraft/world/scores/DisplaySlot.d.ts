import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class DisplaySlot extends Enum<DisplaySlot> implements StringRepresentable {
    static BELOW_NAME: DisplaySlot;
    static BY_ID: (param0: number) => DisplaySlot;
    static CODEC: StringRepresentable$EnumCodec<DisplaySlot>;
    static LIST: DisplaySlot;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SIDEBAR: DisplaySlot;
    static TEAM_AQUA: DisplaySlot;
    static TEAM_BLACK: DisplaySlot;
    static TEAM_BLUE: DisplaySlot;
    static TEAM_DARK_AQUA: DisplaySlot;
    static TEAM_DARK_BLUE: DisplaySlot;
    static TEAM_DARK_GRAY: DisplaySlot;
    static TEAM_DARK_GREEN: DisplaySlot;
    static TEAM_DARK_PURPLE: DisplaySlot;
    static TEAM_DARK_RED: DisplaySlot;
    static TEAM_GOLD: DisplaySlot;
    static TEAM_GRAY: DisplaySlot;
    static TEAM_GREEN: DisplaySlot;
    static TEAM_LIGHT_PURPLE: DisplaySlot;
    static TEAM_RED: DisplaySlot;
    static TEAM_WHITE: DisplaySlot;
    static TEAM_YELLOW: DisplaySlot;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DisplaySlot;
    static values(): DisplaySlot[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    name(): "LIST" | "SIDEBAR" | "BELOW_NAME" | "TEAM_BLACK" | "TEAM_DARK_BLUE" | "TEAM_DARK_GREEN" | "TEAM_DARK_AQUA" | "TEAM_DARK_RED" | "TEAM_DARK_PURPLE" | "TEAM_GOLD" | "TEAM_GRAY" | "TEAM_DARK_GRAY" | "TEAM_BLUE" | "TEAM_GREEN" | "TEAM_AQUA" | "TEAM_RED" | "TEAM_LIGHT_PURPLE" | "TEAM_YELLOW" | "TEAM_WHITE";
}