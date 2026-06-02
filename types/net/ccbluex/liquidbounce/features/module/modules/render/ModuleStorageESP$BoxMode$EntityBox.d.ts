import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ModuleStorageESP$BoxMode$EntityBox extends Record {
    constructor(entity: Entity, box: AABB, color: Color4b)
    // private box: AABB;
    /*not mapped: */ box(): AABB;
    // private color: Color4b;
    /*not mapped: */ color(): Color4b;
    // private entity: Entity;
    /*not mapped: */ entity(): Entity;
    component1(): Entity;
    component2(): AABB;
    component3(): Color4b;
    copy(entity: Entity, box: AABB, color: Color4b): ModuleStorageESP$BoxMode$EntityBox;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}