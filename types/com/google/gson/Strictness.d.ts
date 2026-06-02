import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Strictness extends Enum<Strictness> {
    static LEGACY_STRICT: Strictness;
    static LENIENT: Strictness;
    static STRICT: Strictness;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Strictness;
    static values(): (Object | null)[];
    private constructor()
    name(): "LENIENT" | "LEGACY_STRICT" | "STRICT";
}