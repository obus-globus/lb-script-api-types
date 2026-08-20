import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class WorldParticlesMode$AnimBy extends Enum<WorldParticlesMode$AnimBy> implements Tagged {
    static AGE: WorldParticlesMode$AnimBy;
    static Companion: Tagged$Companion;
    static PROGRESS: WorldParticlesMode$AnimBy;
    static getEntries(): WorldParticlesMode$AnimBy[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WorldParticlesMode$AnimBy;
    static values(): WorldParticlesMode$AnimBy[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PROGRESS" | "AGE";
}