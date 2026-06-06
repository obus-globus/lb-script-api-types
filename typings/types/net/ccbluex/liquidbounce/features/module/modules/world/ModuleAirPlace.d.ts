import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerInteractItemEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerInteractItemEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { BlockHitResult } from '../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
/**
 * AirPlace module
 *
 * Allows you to place blocks in midair.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAirPlace.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAirPlace.kt:46}
 */
export class ModuleAirPlace extends ClientModule {
    static INSTANCE: ModuleAirPlace;
    // private liquidPlace: boolean;
    // private /*not mapped: */ getLiquidPlace(): boolean;
    // private placeHandler: EventHook<PlayerInteractItemEvent>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private canPlayerPlaceAt(hit: BlockHitResult): boolean;
    // private getValidHitResult(): BlockHitResult | null;
}