import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientClockManager$ClockInstance } from '../../../net/minecraft/client/ClientClockManager$ClockInstance.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ClockManager } from '../../../net/minecraft/world/clock/ClockManager.d.ts'
import type { ClockNetworkState } from '../../../net/minecraft/world/clock/ClockNetworkState.d.ts'
import type { WorldClock } from '../../../net/minecraft/world/clock/WorldClock.d.ts'
export class ClientClockManager extends Object implements ClockManager {
    constructor()
    // private clocks: JavaMap<Holder<WorldClock>, ClientClockManager$ClockInstance>;
    // private lastTickGameTime: number;
    // private getInstance(definition: Holder<WorldClock>): ClientClockManager$ClockInstance;
    getTotalTicks(definition: Holder<WorldClock>): number;
    handleUpdates(gameTime: number, updates: JavaMap<Holder<WorldClock>, ClockNetworkState>): void;
    tick(gameTime: number): void;
}