import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { EntityHitResult } from '../../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
/**
 * Skip crosshair entity targets.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt:37}
 */
export class ModuleNoEntityInteract extends ClientModule {
    static INSTANCE: ModuleNoEntityInteract;
    // private entityTypeFilter: Filter;
    // private /*not mapped: */ getEntityTypeFilter(): Filter;
    // private entityTypes: EntityType<Object>[];
    // private /*not mapped: */ getEntityTypes(): EntityType<Object>[];
    // private holdingItemFilter: Filter;
    // private /*not mapped: */ getHoldingItemFilter(): Filter;
    // private holdingItems: Item[];
    // private /*not mapped: */ getHoldingItems(): Item[];
    // private defaultEntityTypes(): EntityType<Object>[];
    // private defaultHoldingItems(): Item[];
    test(entity: EntityHitResult): boolean;
}