import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { EntityHitResult } from '../../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
/**
 * Skip crosshair entity targets.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt:41}
 */
export class ModuleNoEntityInteract extends ClientModule {
    static INSTANCE: ModuleNoEntityInteract;
    // private entityTypeFilter: Filter;
    // private /*not mapped: */ getEntityTypeFilter(): Filter;
    // private entityTypes: EntityType<any>[];
    // private /*not mapped: */ getEntityTypes(): EntityType<any>[];
    // private holdingItemFilter: Filter;
    // private /*not mapped: */ getHoldingItemFilter(): Filter;
    // private holdingItems: Item[];
    // private /*not mapped: */ getHoldingItems(): Item[];
    // private defaultEntityTypes(): EntityType<any>[];
    // private defaultHoldingItems(): Item[];
    test(entity: EntityHitResult): boolean;
}