import type { ImmutableMap$Builder } from '../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HumanoidModel } from '../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorModelSet<T extends unknown> extends Record {
    static bake<M extends HumanoidModel<any>>(paramlocations: ArmorModelSet<ModelLayerLocation>, parammodelSet: EntityModelSet, paramfactory: (param0: ModelPart) => M): ArmorModelSet<M>;
    constructor(head: T, chest: T, legs: T, feet: T)
    // private chest: T;
    // private feet: T;
    // private head: T;
    // private legs: T;
    chest(): T;
    equals(o: Object | null): boolean;
    feet(): T;
    get(slot: EquipmentSlot): T;
    hashCode(): number;
    head(): T;
    legs(): T;
    map<U extends unknown>(mapper: (param0: T) => U): ArmorModelSet<U>;
    putFrom(values: ArmorModelSet<LayerDefinition>, output: ImmutableMap$Builder<T, LayerDefinition>): void;
    toString(): string;
}