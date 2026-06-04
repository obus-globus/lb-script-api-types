import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleCategory extends Object implements Tagged {
    static Companion: Tagged$Companion;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    constructor(tag: string)
    /**
     * @deprecated For script compatibility only. Use choiceName instead Use `choiceName`.
     */
    readonly readableName: string;
    readonly tag: string;
}