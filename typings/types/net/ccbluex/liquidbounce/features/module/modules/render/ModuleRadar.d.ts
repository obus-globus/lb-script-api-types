import type { CurveValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleRadar$PointerMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleRadar$PointerMode.d.ts'
import type { ModuleRadar$TiltMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleRadar$TiltMode.d.ts'
import type { GenericColorMode } from '../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Radar module
 *
 * Shows the direction of rendered entities on GUI.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRadar.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRadar.kt:60}
 */
export class ModuleRadar extends ClientModule {
    static INSTANCE: ModuleRadar;
    // private alpha: CurveValue;
    // private colorModes: ModeValueGroup<GenericColorMode<LivingEntity>>;
    // private onlyPlayers: boolean;
    // private /*not mapped: */ getOnlyPlayers(): boolean;
    // private pointerModes: ModeValueGroup<ModuleRadar$PointerMode>;
    // private radius: number;
    // private /*not mapped: */ getRadius(): number;
    // private renderHandler: EventHook<OverlayRenderEvent>;
    // private tiltModes: ModeValueGroup<ModuleRadar$TiltMode>;
    onDisabled(): void;
    onEnabled(): void;
}