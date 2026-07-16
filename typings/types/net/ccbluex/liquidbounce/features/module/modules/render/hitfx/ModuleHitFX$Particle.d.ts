import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleHitFX$Particle;
    static values(): ModuleHitFX$Particle[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLOOD" | "FIRE" | "HEART" | "WATER" | "SMOKE" | "MAGIC" | "CRITS";
}