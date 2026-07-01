import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { CameraType } from '../../../../../net/minecraft/client/CameraType.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Fires while the camera perspective is updated.
 */
export class PerspectiveEvent extends Event {
    static INSTANCE: PerspectiveEvent;
    distance: number;
    lastDistance: number;
    lastPerspective: CameraType;
    noClip: boolean;
    perspective: CameraType;
    update(mc: Minecraft, entity: Entity | null): void;
}