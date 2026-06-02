import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Matrix3x2f } from '../../../../../../../org/joml/Matrix3x2f.d.ts'
export class ModuleRadar$TiltMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<Object>;
    transform(pose: Matrix3x2f, partialTick: number): void;
}