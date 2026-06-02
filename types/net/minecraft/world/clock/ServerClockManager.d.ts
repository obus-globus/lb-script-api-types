import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClientboundSetTimePacket } from '../../../../net/minecraft/network/protocol/game/ClientboundSetTimePacket.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ClockManager } from '../../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { ClockTimeMarker } from '../../../../net/minecraft/world/clock/ClockTimeMarker.d.ts'
import type { PackedClockStates } from '../../../../net/minecraft/world/clock/PackedClockStates.d.ts'
import type { ServerClockManager$ClockInstance } from '../../../../net/minecraft/world/clock/ServerClockManager$ClockInstance.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { SavedData } from '../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class ServerClockManager extends SavedData implements ClockManager {
    static TYPE: SavedDataType<ServerClockManager>;
    private constructor(packedClockStates: PackedClockStates)
    // private clocks: Map<Holder<WorldClock>, ServerClockManager$ClockInstance>;
    // private packedClockStates: PackedClockStates;
    // private server: MinecraftServer;
    addTicks(clock: Holder<WorldClock>, ticks: number): void;
    commandTimeMarkersForClock(clock: Holder<WorldClock>): Stream<ResourceKey<ClockTimeMarker>>;
    createFullSyncPacket(): ClientboundSetTimePacket;
    // private getGameTime(): number;
    // private getInstance(definition: Holder<WorldClock>): ServerClockManager$ClockInstance;
    getTotalTicks(definition: Holder<WorldClock>): number;
    init(server: MinecraftServer): void;
    isAtTimeMarker(clock: Holder<WorldClock>, timeMarkerId: ResourceKey<ClockTimeMarker>): boolean;
    // private modifyClock(clock: Holder<WorldClock>, action: (param0: ServerClockManager$ClockInstance) => void): void;
    moveToTimeMarker(clock: Holder<WorldClock>, timeMarkerId: ResourceKey<ClockTimeMarker>): boolean;
    packState(): PackedClockStates;
    // private registerTimeMarker(timeMarkerId: ResourceKey<ClockTimeMarker>, timeMarker: ClockTimeMarker): void;
    setPaused(clock: Holder<WorldClock>, paused: boolean): void;
    setRate(clock: Holder<WorldClock>, rate: number): void;
    setTotalTicks(clock: Holder<WorldClock>, totalTicks: number): void;
    tick(): void;
}