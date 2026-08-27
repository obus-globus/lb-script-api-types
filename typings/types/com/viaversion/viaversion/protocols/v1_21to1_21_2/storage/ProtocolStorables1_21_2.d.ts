import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { BundleStateTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/BundleStateTracker.d.ts'
import type { ChunkLoadTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/ChunkLoadTracker.d.ts'
import type { ClientVehicleStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/ClientVehicleStorage.d.ts'
import type { GroundFlagTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/GroundFlagTracker.d.ts'
import type { LastExplosionPowerStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/LastExplosionPowerStorage.d.ts'
import type { PlayerPositionStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/PlayerPositionStorage.d.ts'
import type { TeleportAckCancelStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/TeleportAckCancelStorage.d.ts'
export class ProtocolStorables1_21_2 extends ProtocolStorablesBase {
    constructor()
    // private bundleStateTracker: BundleStateTracker;
    // private teleportAckCancelStorage: TeleportAckCancelStorage;
    bundleStateTracker(): BundleStateTracker;
    chunkLoadTracker(): ChunkLoadTracker;
    clientVehicleStorage(): ClientVehicleStorage;
    groundFlagTracker(): GroundFlagTracker;
    lastExplosionPowerStorage(): LastExplosionPowerStorage;
    playerPositionStorage(): PlayerPositionStorage;
    setChunkLoadTracker(arg0: ChunkLoadTracker): void;
    setClientVehicleStorage(arg0: ClientVehicleStorage): void;
    setGroundFlagTracker(arg0: GroundFlagTracker): void;
    setLastExplosionPowerStorage(arg0: LastExplosionPowerStorage): void;
    setPlayerPositionStorage(arg0: PlayerPositionStorage): void;
    teleportAckCancelStorage(): TeleportAckCancelStorage;
}