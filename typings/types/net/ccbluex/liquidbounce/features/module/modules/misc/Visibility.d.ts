import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Visibility extends Enum<Visibility> implements Tagged {
    static Companion: Tagged$Companion;
    static FOOTER: Visibility;
    static HEADER: Visibility;
    static NAME_ONLY: Visibility;
    static getEntries(): Visibility[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Visibility;
    static values(): Visibility[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "HEADER" | "FOOTER" | "NAME_ONLY";
}