import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class MoonPhase extends Enum<MoonPhase> implements StringRepresentable {
    static CODEC: Codec<MoonPhase>;
    static COUNT: number;
    static FIRST_QUARTER: MoonPhase;
    static FULL_MOON: MoonPhase;
    static NEW_MOON: MoonPhase;
    static PHASE_LENGTH: number;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static THIRD_QUARTER: MoonPhase;
    static WANING_CRESCENT: MoonPhase;
    static WANING_GIBBOUS: MoonPhase;
    static WAXING_CRESCENT: MoonPhase;
    static WAXING_GIBBOUS: MoonPhase;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MoonPhase;
    static values(): MoonPhase[];
    private constructor(index: number, name: string)
    // private index: number;
    // private name: string;
    getSerializedName(): string;
    index(): number;
    startTick(): number;
    name(): "FULL_MOON" | "WANING_GIBBOUS" | "THIRD_QUARTER" | "WANING_CRESCENT" | "NEW_MOON" | "WAXING_CRESCENT" | "FIRST_QUARTER" | "WAXING_GIBBOUS";
}