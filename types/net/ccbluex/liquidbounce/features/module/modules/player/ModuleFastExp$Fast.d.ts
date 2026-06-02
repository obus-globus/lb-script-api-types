import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleFastExp$ThrowMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp$ThrowMode.d.ts'
export class ModuleFastExp$Fast extends ModuleFastExp$ThrowMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFastExp$Fast;
    // private itemsPerTick: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getItemsPerTick(): ClosedFloatingPointRange<number>;
    nextTickItems(): number;
}