import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EnchantmentSource extends Enum<EnchantmentSource> {
    static DATA_PACK: EnchantmentSource;
    static MOD: EnchantmentSource;
    static VANILLA: EnchantmentSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EnchantmentSource;
    static values(): EnchantmentSource[];
    private constructor(arg2: boolean)
    readonly builtin: boolean;
    isBuiltin(): boolean;
    name(): "VANILLA" | "MOD" | "DATA_PACK";
}