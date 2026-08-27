import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { PlayerVehicleTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/storage/PlayerVehicleTracker.d.ts'
export class ProtocolStorables1_19_4 extends ProtocolStorablesBase {
    constructor()
    playerVehicleTracker(): PlayerVehicleTracker;
    setPlayerVehicleTracker(arg0: PlayerVehicleTracker): void;
}