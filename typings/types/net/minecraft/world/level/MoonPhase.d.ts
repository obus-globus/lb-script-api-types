import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
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