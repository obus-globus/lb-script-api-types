import type { DimensionScaleStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/storage/DimensionScaleStorage.d.ts'
import type { PlayerRotationStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/storage/PlayerRotationStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { BundleStateTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/BundleStateTracker.d.ts'
export class ProtocolStorables1_21_9 extends ProtocolStorablesBase {
    constructor()
    // private bundleStateTracker: BundleStateTracker;
    // private dimensionScaleStorage: DimensionScaleStorage;
    // private playerRotationStorage: PlayerRotationStorage;
    bundleStateTracker(): BundleStateTracker;
    dimensionScaleStorage(): DimensionScaleStorage;
    playerRotationStorage(): PlayerRotationStorage;
}