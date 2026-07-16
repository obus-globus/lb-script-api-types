import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OptionStability extends Enum<OptionStability> {
    static EXPERIMENTAL: OptionStability;
    static STABLE: OptionStability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): OptionStability;
    static values(): OptionStability[];
    private constructor()
    name(): "STABLE" | "EXPERIMENTAL";
}