import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DynamicRegistries$SyncOption extends Enum<DynamicRegistries$SyncOption> {
    static SKIP_WHEN_EMPTY: DynamicRegistries$SyncOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DynamicRegistries$SyncOption;
    static values(): DynamicRegistries$SyncOption[];
    private constructor()
    name(): "SKIP_WHEN_EMPTY";
}