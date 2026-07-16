import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LootTableSource extends Enum<LootTableSource> {
    static DATA_PACK: LootTableSource;
    static MOD: LootTableSource;
    static REPLACED: LootTableSource;
    static VANILLA: LootTableSource;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LootTableSource;
    static values(): LootTableSource[];
    private constructor(arg2: boolean)
    readonly builtin: boolean;
    isBuiltin(): boolean;
    name(): "VANILLA" | "MOD" | "DATA_PACK" | "REPLACED";
}