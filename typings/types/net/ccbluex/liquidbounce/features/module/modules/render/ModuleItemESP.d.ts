import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { GenericColorMode } from '../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * ItemESP module
 *
 * Allows you to see dropped items through walls.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemESP.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemESP.kt:57}
 */
export class ModuleItemESP extends ClientModule {
    static INSTANCE: ModuleItemESP;
    readonly baseKey: string;
    // private colorMode: ModeValueGroup<GenericColorMode<Object>>;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    // private maximumDistance: number;
    // private /*not mapped: */ getMaximumDistance(): number;
    // private modes: ModeValueGroup<Mode>;
    readonly showTracers: boolean;
    // private showTridents: boolean;
    // private /*not mapped: */ getShowTridents(): boolean;
    // private tracerRenderHandler: EventHook<WorldRenderEvent>;
    getColor(): Color4b;
    shouldRender(entity: Entity | null): boolean;
}