import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityTickList extends Object {
    constructor()
    // private active: JavaMap<any, any>;
    // private iterated: JavaMap<any, any>;
    // private passive: JavaMap<any, any>;
    add(entity: Entity): void;
    contains(entity: Entity): boolean;
    // private ensureActiveIsNotIterated(): void;
    forEach(output: (param0: Entity) => void): void;
    remove(entity: Entity): void;
}