import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleDamageParticles$TrackMode extends Enum<ModuleDamageParticles$TrackMode> implements Tagged {
    static Companion: Tagged$Companion;
    static ON_TICK: ModuleDamageParticles$TrackMode;
    static ON_UPDATE: ModuleDamageParticles$TrackMode;
    static getEntries(): ModuleDamageParticles$TrackMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleDamageParticles$TrackMode;
    static values(): ModuleDamageParticles$TrackMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ON_TICK" | "ON_UPDATE";
}