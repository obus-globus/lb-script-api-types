import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ClockNetworkState } from '../../../../net/minecraft/world/clock/ClockNetworkState.d.ts'
import type { ClockState } from '../../../../net/minecraft/world/clock/ClockState.d.ts'
import type { ClockTimeMarker } from '../../../../net/minecraft/world/clock/ClockTimeMarker.d.ts'
export class ServerClockManager$ClockInstance extends Object {
    private constructor()
    // private partialTick: number;
    // private paused: boolean;
    // private rate: number;
    // private timeMarkers: JavaMap<ResourceKey<ClockTimeMarker>, ClockTimeMarker>;
    // private totalTicks: number;
    loadFrom(state: ClockState): void;
    packNetworkState(server: MinecraftServer): ClockNetworkState;
    packState(): ClockState;
    tick(): void;
}