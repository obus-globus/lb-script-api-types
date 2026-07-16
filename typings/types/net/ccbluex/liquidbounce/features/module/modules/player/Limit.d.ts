import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Limit extends Enum<Limit> implements Tagged {
    static Companion: Tagged$Companion;
    static EXPLOSION_STRENGTH: Limit;
    static PARTICLES_AMOUNT: Limit;
    static PARTICLES_SPEED: Limit;
    static getEntries(): Limit[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Limit;
    static values(): Limit[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "EXPLOSION_STRENGTH" | "PARTICLES_AMOUNT" | "PARTICLES_SPEED";
}