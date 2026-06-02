import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationMode } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationMode.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
export class NoRotationMode extends RotationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<RotationMode>, module: ClientModule)
    readonly send: boolean;
    rotate(rotation: Rotation, isFinished: () => kotlin.Boolean, onFinished: () => void): void;
}