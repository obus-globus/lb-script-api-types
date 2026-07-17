import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleDamageParticles$TrackMode extends Enum<ModuleDamageParticles$TrackMode> implements Tagged {
    static Companion: Tagged$Companion;
    static ON_TICK: ModuleDamageParticles$TrackMode;
    static ON_UPDATE: ModuleDamageParticles$TrackMode;
    static getEntries(): ModuleDamageParticles$TrackMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleDamageParticles$TrackMode;
    static values(): ModuleDamageParticles$TrackMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ON_TICK" | "ON_UPDATE";
}