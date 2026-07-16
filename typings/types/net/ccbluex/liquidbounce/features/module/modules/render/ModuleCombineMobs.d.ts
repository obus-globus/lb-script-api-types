import type { Pool } from '../../../../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleCombineMobs$CombineKey } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCombineMobs$CombineKey.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Combine Mobs
 *
 * This module will disable rendering of entities of the same type that are crammed together
 * and show a single entity instead with a count of how many entities are crammed together.
 *
 * This is useful for example in 2b2t where there are a lot of entities in spawn.
 * The idea behind this module originates from the video
 * "2b2t's WAR Against Chicken Lag" https://www.youtube.com/watch?v=Qqmz76Z5az0
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCombineMobs.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCombineMobs.kt:46}
 */
export class ModuleCombineMobs extends ClientModule {
    static INSTANCE: ModuleCombineMobs;
    // private combineArmorStands: boolean;
    // private /*not mapped: */ getCombineArmorStands(): boolean;
    // private combineMinecarts: boolean;
    // private /*not mapped: */ getCombineMinecarts(): boolean;
    // private mapPool: Pool<{ [key: string]: any }>;
    // private nametagTracker: Map<ModuleCombineMobs$CombineKey, { [key: string]: any }>;
    // private renderGameHandler: EventHook<GameRenderEvent>;
    // private renderTracker: Map<ModuleCombineMobs$CombineKey, { [key: string]: any }>;
    // private clearNametagTracker(): void;
    // private clearRenderTracker(): void;
    getCombinedCount(entity: Entity): number;
    // private keyFor(mob: Entity): ModuleCombineMobs$CombineKey;
    onDisabled(): void;
    onEnabled(): void;
    trackEntity(entity: Entity, forNametag: boolean): boolean;
}