import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Theme$Origin extends Enum<Theme$Origin> implements Tagged {
    static Companion: Tagged$Companion;
    static LOCAL: Theme$Origin;
    static MARKETPLACE: Theme$Origin;
    static REMOTE: Theme$Origin;
    static RESOURCE: Theme$Origin;
    static getEntries(): Theme$Origin[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Theme$Origin;
    static values(): Theme$Origin[];
    private constructor(tag: string, external: boolean)
    readonly external: boolean;
    readonly tag: string;
    name(): "RESOURCE" | "LOCAL" | "MARKETPLACE" | "REMOTE";
}