import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Strictness extends Enum<Strictness> {
    static LEGACY_STRICT: Strictness;
    static LENIENT: Strictness;
    static STRICT: Strictness;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Strictness;
    static values(): Strictness[];
    private constructor()
    name(): "LENIENT" | "LEGACY_STRICT" | "STRICT";
}