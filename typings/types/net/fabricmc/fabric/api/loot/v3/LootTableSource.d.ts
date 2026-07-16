import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LootTableSource extends Enum<LootTableSource> {
    static DATA_PACK: LootTableSource;
    static MOD: LootTableSource;
    static REPLACED: LootTableSource;
    static VANILLA: LootTableSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LootTableSource;
    static values(): LootTableSource[];
    private constructor(arg2: boolean)
    readonly builtin: boolean;
    isBuiltin(): boolean;
    name(): "VANILLA" | "MOD" | "DATA_PACK" | "REPLACED";
}