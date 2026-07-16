import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EnchantingContext extends Enum<EnchantingContext> {
    static ACCEPTABLE: EnchantingContext;
    static PRIMARY: EnchantingContext;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EnchantingContext;
    static values(): EnchantingContext[];
    private constructor()
    name(): "ACCEPTABLE" | "PRIMARY";
}