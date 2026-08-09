import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { JumpEffectMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/jumpeffect/JumpEffectMode.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleJumpEffect extends ClientModule {
    static INSTANCE: ModuleJumpEffect;
    readonly circles: Vec3[];
    readonly modes: ModeValueGroup<JumpEffectMode>;
    getModes(): ModeValueGroup<JumpEffectMode>;
    readonly playerJumpHandler: EventHook<PlayerJumpEvent>;
    onDisabled(): void;
}