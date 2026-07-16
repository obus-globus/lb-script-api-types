import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResolverStyle extends Enum<ResolverStyle> {
    static LENIENT: ResolverStyle;
    static SMART: ResolverStyle;
    static STRICT: ResolverStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResolverStyle;
    static values(): ResolverStyle[];
    private constructor()
    name(): "STRICT" | "SMART" | "LENIENT";
}