import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityClassGroup } from '../../../../../../../net/caffeinemc/mods/lithium/common/entity/EntityClassGroup.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export abstract class MovementTrackerHelper extends Object {
    static CLASS_2_NOTIFY_MASK: { [key: string]: any };
    static MOVEMENT_NOTIFYING_ENTITY_CLASSES: Class<Object>[];
    static MOVEMENT_NOTIFYING_ENTITY_CLASS_GROUPS: EntityClassGroup[];
    static NUM_MOVEMENT_NOTIFYING_CLASSES: number;
    static getNotificationMask(paramarg0: Entity): number;
    constructor()
}