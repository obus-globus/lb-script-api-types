import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TickPacketProcessEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { TrackedEntityPosition } from '../../../../../../../../../net/ccbluex/liquidbounce/features/blink/TrackedEntityPosition.d.ts'
import type { BlinkEspData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspData.d.ts'
import type { BlinkEspMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspMode.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
import type { VelocityReduce$Debug } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReduce$Debug.d.ts'
import type { VelocityReduce$ReleaseReason } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReduce$ReleaseReason.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Attack Reduce
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReduce.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReduce.kt:64}
 */
export class VelocityReduce extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityReduce;
    // private attackCount: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getAttackCount(): { start: number; endInclusive: number; step: number };
    readonly backtrackBlocked: boolean;
    // private /*not mapped: */ getCanLag(): boolean;
    // private currentGameTick: number;
    // private debug: VelocityReduce$Debug;
    // private espMode: ModeValueGroup<BlinkEspMode>;
    // private forwardInputAttackGameTick: number;
    // private horizontal: number;
    // private /*not mapped: */ getHorizontal(): number;
    // private lagMaxDelay: number;
    // private /*not mapped: */ getLagMaxDelay(): number;
    // private lagRequireKillAura: boolean;
    // private /*not mapped: */ getLagRequireKillAura(): boolean;
    // private lagTargetRange: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getLagTargetRange(): ClosedFloatingPointRange<number>;
    // private lagTicks: number;
    // private movementInputEventHandler: EventHook<MovementInputEvent>;
    readonly ownsIncomingBlinkQueue: boolean;
    // private packetEventHandler: EventHook<PacketEvent>;
    // private queuePacketHandler: EventHook<BlinkPacketEvent>;
    // private receiveDamage: boolean;
    // private releaseReason: VelocityReduce$ReleaseReason | null;
    readonly remainingAttackCount: number;
    // private renderTarget: Entity | null;
    // private renderTargetPos: TrackedEntityPosition | null;
    // private target: Entity | null;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tickPacketProcessEventHandler: EventHook<TickPacketProcessEvent>;
    // private vertical: number;
    // private /*not mapped: */ getVertical(): number;
    disable(): void;
    enable(): void;
    // private findTarget(): void;
    // private getEspData(): BlinkEspData | null;
    // private hasLostReduceTarget(): boolean;
    // private resetRenderState(): void;
}