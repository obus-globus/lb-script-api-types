import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoDodge$EvadingPacket } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge$EvadingPacket.d.ts'
import type { ModuleAutoDodge$HitInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge$HitInfo.d.ts'
import type { ModuleAutoDodge$Ignore } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge$Ignore.d.ts'
import type { PlayerSimulation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleAutoDodge extends ClientModule {
    static INSTANCE: ModuleAutoDodge;
    // private MIN_PACKET_DISTANCE: number;
    // private MIN_PACKET_DISTANCE_SQ: number;
    // private ignore: ModuleAutoDodge$Ignore[];
    // private /*not mapped: */ getIgnore(): ModuleAutoDodge$Ignore[];
    readonly running: boolean;
    readonly tickRep: EventHook<MovementInputEvent>;
    /**
     * Returns the index of the first position packet that avoids all arrows in the next X seconds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt:164}
     */
    findAvoidingArrowPosition(): ModuleAutoDodge$EvadingPacket | null;
    getInflictedHit(pos: Vec3): ModuleAutoDodge$HitInfo | null;
    // private getInflictedHits<T extends PlayerSimulation>(simulatedPlayer: T, arrows: Entity[], maxTicks: number, hitboxExpansion: number): ModuleAutoDodge$HitInfo | null;
}