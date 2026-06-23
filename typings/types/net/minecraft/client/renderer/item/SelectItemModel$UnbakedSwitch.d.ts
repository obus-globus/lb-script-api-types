import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { SelectItemModel$ModelSelector } from '../../../../../net/minecraft/client/renderer/item/SelectItemModel$ModelSelector.d.ts'
import type { SelectItemModel$SwitchCase } from '../../../../../net/minecraft/client/renderer/item/SelectItemModel$SwitchCase.d.ts'
import type { SelectItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { RegistryContextSwapper } from '../../../../../net/minecraft/util/RegistryContextSwapper.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class SelectItemModel$UnbakedSwitch<P extends SelectItemModelProperty<T>, T extends Object | number | string | boolean> extends Record {
    static MAP_CODEC: MapCodec<SelectItemModel$UnbakedSwitch<any, Object>>;
    constructor(property: P, cases: SelectItemModel$SwitchCase<T>[])
    // private cases: SelectItemModel$SwitchCase<T>[];
    // private property: P;
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc, fallback: ItemModel): ItemModel;
    cases(): SelectItemModel$SwitchCase<T>[];
    // private createModelGetter(originalModels: Map<T, ItemModel>, registrySwapper: RegistryContextSwapper): (param0: T, param1: ClientLevel) => ItemModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    property(): P;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
}