import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleCategory extends Object implements Tagged {
    static Companion: Tagged$Companion;
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    constructor(tag: string)
    /**
     * @deprecated For script compatibility only. Use choiceName instead Use `choiceName`.
     */
    readonly readableName: string;
    readonly tag: string;
}