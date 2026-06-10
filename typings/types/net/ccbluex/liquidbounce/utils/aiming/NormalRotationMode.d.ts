import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationMode } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationMode.d.ts'
import type { RotationsValueGroup } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
export class NormalRotationMode extends RotationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<RotationMode>, module: ClientModule, priority: Priority, aimAfterInstantAction: boolean)
    // private aimAfterInstantAction: boolean;
    readonly ignoreOpenInventory: boolean;
    readonly priority: Priority;
    readonly rotations: RotationsValueGroup;
    rotate(rotation: Rotation, isFinished: () => boolean, onFinished: () => void): void;
}