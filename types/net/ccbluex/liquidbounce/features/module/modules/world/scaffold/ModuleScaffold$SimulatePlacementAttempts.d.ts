import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleScaffold } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.d.ts'
import type { Clicker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
export class ModuleScaffold$SimulatePlacementAttempts extends ToggleableValueGroup {
    static INSTANCE: ModuleScaffold$SimulatePlacementAttempts;
    readonly clicker: Clicker<ModuleScaffold>;
    readonly failedAttemptsOnly: boolean;
}