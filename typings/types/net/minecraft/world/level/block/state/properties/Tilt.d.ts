import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Tilt extends Enum<Tilt> implements StringRepresentable {
    static FULL: Tilt;
    static NONE: Tilt;
    static PARTIAL: Tilt;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNSTABLE: Tilt;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Tilt;
    static values(): Tilt[];
    private constructor(name: string, causesVibration: boolean)
    // private causesVibration: boolean;
    // private name: string;
    causesVibration(): boolean;
    getSerializedName(): string;
    name(): "NONE" | "UNSTABLE" | "PARTIAL" | "FULL";
}