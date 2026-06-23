import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { EntityHitResult } from '../../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
/**
 * Skip crosshair entity targets.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoEntityInteract.kt:37}
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