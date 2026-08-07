import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBreadcrumbs$Trail } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs$Trail.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Breadcrumbs module
 *
 * Leaves traces behind players.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs.kt:54}
 */
export class ModuleBreadcrumbs extends ClientModule {
    static INSTANCE: ModuleBreadcrumbs;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    // private colorRainbow: boolean;
    // private /*not mapped: */ getColorRainbow(): boolean;
    // private height: number;
    // private /*not mapped: */ getHeight(): number;
    // private lastPositions: JavaMap<Entity, Vec3>;
    // private onlyOwn: boolean;
    // private /*not mapped: */ getOnlyOwn(): boolean;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    // private trails: JavaMap<Entity, ModuleBreadcrumbs$Trail>;
    /**
     * Updates all trails.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs.kt:105}
     */
    readonly updateHandler: EventHook<GameTickEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private clear(): void;
    onDisabled(): void;
    // private updateEntityTrail(time: number, entity: Entity): void;
}