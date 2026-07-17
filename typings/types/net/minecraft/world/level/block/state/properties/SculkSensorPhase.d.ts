import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SculkSensorPhase extends Enum<SculkSensorPhase> implements StringRepresentable {
    static ACTIVE: SculkSensorPhase;
    static COOLDOWN: SculkSensorPhase;
    static INACTIVE: SculkSensorPhase;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SculkSensorPhase;
    static values(): SculkSensorPhase[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "INACTIVE" | "ACTIVE" | "COOLDOWN";
}