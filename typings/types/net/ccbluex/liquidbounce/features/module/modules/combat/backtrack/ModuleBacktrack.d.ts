import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { PercentageChance } from '../../../../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { TickPacketProcessEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { TrackedEntityPosition } from '../../../../../../../../net/ccbluex/liquidbounce/features/blink/TrackedEntityPosition.d.ts'
import type { BlinkEspData } from '../../../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspData.d.ts'
import type { BlinkEspMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspMode.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBacktrack$Mode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/backtrack/ModuleBacktrack$Mode.d.ts'
import type { ModuleBacktrack$PauseOnHurtTime } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/backtrack/ModuleBacktrack$PauseOnHurtTime.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleBacktrack extends ClientModule {
    static INSTANCE: ModuleBacktrack;
    // private attackChronometer: Chronometer;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private chance: PercentageChance<number>;
    // private chancePassed: boolean;
    // private chronometer: Chronometer;
    currentDelay: number;
    readonly delay: { start: number; endInclusive: number; step: number };
    // private espMode: ModeValueGroup<BlinkEspMode>;
    // private lastAttackTimeToWork: number;
    // private /*not mapped: */ getLastAttackTimeToWork(): number;
    // private nextBacktrackDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getNextBacktrackDelay(): { start: number; endInclusive: number; step: number };
    // private pauseOnHurtTime: ModuleBacktrack$PauseOnHurtTime;
    // private position: TrackedEntityPosition;
    // private queuePacketHandler: EventHook<BlinkPacketEvent>;
    // private range: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRange(): ClosedFloatingPointRange<number>;
    // private rangeTargetHandler: EventHook<GameTickEvent>;
    // private shouldPause: boolean;
    // private target: Entity | null;
    // private targetMode: ModuleBacktrack$Mode;
    // private /*not mapped: */ getTargetMode(): ModuleBacktrack$Mode;
    // private tickPacketProcessHandler: EventHook<TickPacketProcessEvent>;
    // private trackingBuffer: number;
    // private /*not mapped: */ getTrackingBuffer(): number;
    // private trackingBufferChronometer: Chronometer;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private clear(handlePackets: boolean, clearOnly: boolean, resetChronometer: boolean): void;
    // private getEspData(): BlinkEspData | null;
    // private hasQueuedIncoming(): boolean;
    isLagging(): boolean;
    onDisabled(): void;
    onEnabled(): void;
    // private processTarget(enemy: Entity): void;
    // private shouldBacktrack(target: Entity): boolean;
    shouldCancelPackets(): boolean;
    // private shouldPause(): boolean;
}