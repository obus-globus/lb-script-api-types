import type { ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
export class ModuleScaffold$ScaffoldRotationValueGroup extends RotationsValueGroup {
    static INSTANCE: ModuleScaffold$ScaffoldRotationValueGroup;
    readonly considerInventory: boolean;
    readonly rotationTiming: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
}