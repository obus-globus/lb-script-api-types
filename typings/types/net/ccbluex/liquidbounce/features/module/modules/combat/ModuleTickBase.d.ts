import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTickBase$TickBaseCall } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase$TickBaseCall.d.ts'
import type { ModuleTickBase$TickBaseMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase$TickBaseMode.d.ts'
import type { ModuleTickBase$TickData } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase$TickData.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
/**
 * TickBase
 *
 * Calls tick function to speed up, when needed
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTickBase.kt:50}
 */
export class ModuleTickBase extends ClientModule {
    static INSTANCE: ModuleTickBase;
    // private balanceMaxValue: number;
    // private /*not mapped: */ getBalanceMaxValue(): number;
    // private balanceRecoveryIncrement: number;
    // private /*not mapped: */ getBalanceRecoveryIncrement(): number;
    // private call: ModuleTickBase$TickBaseCall;
    // private /*not mapped: */ getCall(): ModuleTickBase$TickBaseCall;
    // private cooldown: number;
    // private /*not mapped: */ getCooldown(): number;
    // private forceGround: boolean;
    // private /*not mapped: */ getForceGround(): boolean;
    // private inputHandler: EventHook<MovementInputEvent>;
    // private lineColor: Color4b;
    // private /*not mapped: */ getLineColor(): Color4b;
    // private maxTicksAtATime: number;
    // private /*not mapped: */ getMaxTicksAtATime(): number;
    // private mode: ModuleTickBase$TickBaseMode;
    // private /*not mapped: */ getMode(): ModuleTickBase$TickBaseMode;
    // private packetHandler: EventHook<PacketEvent>;
    // private pause: number;
    // private /*not mapped: */ getPause(): number;
    // private pauseOnFlag: boolean;
    // private /*not mapped: */ getPauseOnFlag(): boolean;
    // private playerTickHandler: EventHook<PlayerTickEvent>;
    // private range: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRange(): ClosedFloatingPointRange<number>;
    // private reachedTheLimit: boolean;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private requiresKillAura: boolean;
    // private /*not mapped: */ getRequiresKillAura(): boolean;
    // private tickBalance: number;
    // private tickBuffer: ModuleTickBase$TickData[];
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticksToSkip: number;
    onDisabled(): void;
}