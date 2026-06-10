import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleHitFX$Particle extends Enum<ModuleHitFX$Particle> implements Tagged {
    static BLOOD: ModuleHitFX$Particle;
    static CRITS: ModuleHitFX$Particle;
    static Companion: Tagged$Companion;
    static FIRE: ModuleHitFX$Particle;
    static HEART: ModuleHitFX$Particle;
    static MAGIC: ModuleHitFX$Particle;
    static SMOKE: ModuleHitFX$Particle;
    static WATER: ModuleHitFX$Particle;
    static getEntries(): ModuleHitFX$Particle[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleHitFX$Particle;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLOOD" | "FIRE" | "HEART" | "WATER" | "SMOKE" | "MAGIC" | "CRITS";
}