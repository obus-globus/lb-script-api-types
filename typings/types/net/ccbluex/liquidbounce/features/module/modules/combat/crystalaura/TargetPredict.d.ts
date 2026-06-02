import type { PredictFeature } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.d.ts'
import type { PredictFeature$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$Companion.d.ts'
import type { Player } from '../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TargetPredict extends PredictFeature {
    static Companion: PredictFeature$Companion;
    static INSTANCE: TargetPredict;
    getSnapshotPos(player: Player | null, ticks: number): Vec3;
}