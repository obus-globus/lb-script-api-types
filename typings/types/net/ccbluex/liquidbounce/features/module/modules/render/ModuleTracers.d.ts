import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { GenericColorMode } from '../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Tracers module
 *
 * Draws a line to every entity a certain radius.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTracers.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTracers.kt:48}
 */
export class ModuleTracers extends ClientModule {
    static INSTANCE: ModuleTracers;
    // private lineWidth: number;
    // private /*not mapped: */ getLineWidth(): number;
    // private maximumDistance: number;
    // private /*not mapped: */ getMaximumDistance(): number;
    // private modes: ModeValueGroup<GenericColorMode<LivingEntity>>;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    onDisabled(): void;
    onEnabled(): void;
}