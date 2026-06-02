import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { TpAuraMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/tpaura/TpAuraMode.d.ts'
import type { Clicker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { TargetSelector } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetSelector.d.ts'
import type { WireframePlayer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/WireframePlayer.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleTpAura extends ClientModule {
    static INSTANCE: ModuleTpAura;
    // private attackRange: number;
    // private /*not mapped: */ getAttackRange(): number;
    // private attackRepeatable: EventHook<GameTickEvent>;
    readonly clicker: Clicker<ModuleTpAura>;
    desyncPlayerPosition: Vec3 | null;
    readonly mode: ModeValueGroup<TpAuraMode>;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    readonly stuckChronometer: Chronometer;
    readonly targetSelector: TargetSelector;
    // private wireframePlayer: WireframePlayer;
}