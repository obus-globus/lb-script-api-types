import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ReferenceReferenceImmutablePair } from '../../../../../../it/unimi/dsi/fastutil/objects/ReferenceReferenceImmutablePair.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityClassGroup extends Object {
    static CUSTOM_COLLIDE_LIKE_MINECART_BOAT_WINDCHARGE: EntityClassGroup;
    constructor(arg0: (param0: Class<Object>, param1: () => EntityType<any>) => boolean)
    // private class2GroupContains: JavaMap<any, any>;
    // private classAndTypeFitEvaluator: (param0: Class<Object>, param1: () => EntityType<any>) => boolean;
    // private containedClassAndTypePairs: ReferenceReferenceImmutablePair<Class<Object>, EntityType<any>>[];
    // private checkDetailedContains(arg0: Class<Object>, arg1: EntityType<any>, arg2: number): boolean;
    clear(): void;
    contains(arg0: Class<Object>, arg1: EntityType<any>): boolean;
    contains(arg0: Entity): boolean;
    testAndAddClass(arg0: Class<Object>, arg1: EntityType<any>): boolean;
}