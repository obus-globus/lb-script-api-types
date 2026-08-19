import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class TotemEffectSoul$AnimBy extends Enum<TotemEffectSoul$AnimBy> implements Tagged {
    static AGE: TotemEffectSoul$AnimBy;
    static Companion: Tagged$Companion;
    static PROGRESS: TotemEffectSoul$AnimBy;
    static getEntries(): TotemEffectSoul$AnimBy[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TotemEffectSoul$AnimBy;
    static values(): TotemEffectSoul$AnimBy[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PROGRESS" | "AGE";
}