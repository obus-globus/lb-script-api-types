import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAirJump$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAirJump$Mode.d.ts'
export class ModuleAirJump extends ClientModule {
    static INSTANCE: ModuleAirJump;
    readonly allowJump: boolean;
    // private doubleJump: boolean;
    readonly handleBlockBox: EventHook<BlockShapeEvent>;
    readonly jumpEvent: EventHook<PlayerJumpEvent>;
    readonly mode: ModuleAirJump$Mode;
    readonly repeatable: EventHook<GameTickEvent>;
}