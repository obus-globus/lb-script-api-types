import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class TelemetryProperty$GameMode extends Enum<TelemetryProperty$GameMode> implements StringRepresentable {
    static ADVENTURE: TelemetryProperty$GameMode;
    static CODEC: Codec<TelemetryProperty$GameMode>;
    static CREATIVE: TelemetryProperty$GameMode;
    static HARDCORE: TelemetryProperty$GameMode;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SPECTATOR: TelemetryProperty$GameMode;
    static SURVIVAL: TelemetryProperty$GameMode;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TelemetryProperty$GameMode;
    static values(): TelemetryProperty$GameMode[];
    private constructor(key: string, id: number)
    // private id: number;
    // private key: string;
    getSerializedName(): string;
    id(): number;
    name(): "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR" | "HARDCORE";
}