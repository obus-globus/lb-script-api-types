import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
/**
 * NewChunks module
 *
 * Highlights chunks that are likely newly generated.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNewChunks.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNewChunks.kt:48}
 */
export class ModuleNewChunks extends ClientModule {
    static INSTANCE: ModuleNewChunks;
    // private autoY: boolean;
    // private /*not mapped: */ getAutoY(): boolean;
    // private chunks: Map<ChunkPos, boolean>;
    // private newColor: Color4b;
    // private /*not mapped: */ getNewColor(): Color4b;
    // private oldColor: Color4b;
    // private /*not mapped: */ getOldColor(): Color4b;
    // private packetHandler: EventHook<PacketEvent>;
    // private persist: boolean;
    // private /*not mapped: */ getPersist(): boolean;
    // private renderDistance: number;
    // private /*not mapped: */ getRenderDistance(): number;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private renderY: number;
    // private /*not mapped: */ getRenderY(): number;
    // private smooth: boolean;
    // private /*not mapped: */ getSmooth(): boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    onDisabled(): void;
    // private reset(): void;
}