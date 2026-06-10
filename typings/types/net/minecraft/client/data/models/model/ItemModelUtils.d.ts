import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { RangeSelectItemModel$Entry } from '../../../../../../net/minecraft/client/renderer/item/RangeSelectItemModel$Entry.d.ts'
import type { SelectItemModel$SwitchCase } from '../../../../../../net/minecraft/client/renderer/item/SelectItemModel$SwitchCase.d.ts'
import type { ConditionalItemModelProperty } from '../../../../../../net/minecraft/client/renderer/item/properties/conditional/ConditionalItemModelProperty.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { SelectItemModelProperty } from '../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { DataComponentType } from '../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class ItemModelUtils extends Object {
    static composite(parammodels: (Object | null)[]): ItemModel$Unbaked;
    static conditional(paramtransformation: Transformation, paramproperty: ConditionalItemModelProperty, paramonTrue: ItemModel$Unbaked, paramonFalse: ItemModel$Unbaked): ItemModel$Unbaked;
    static conditional(paramtransformation: Optional<Transformation>, paramproperty: ConditionalItemModelProperty, paramonTrue: ItemModel$Unbaked, paramonFalse: ItemModel$Unbaked): ItemModel$Unbaked;
    static conditional(paramproperty: ConditionalItemModelProperty, paramonTrue: ItemModel$Unbaked, paramonFalse: ItemModel$Unbaked): ItemModel$Unbaked;
    static constantTint(paramcolor: number): ItemTintSource;
    static hasComponent(paramcomponent: DataComponentType<Object>): ConditionalItemModelProperty;
    static inOverworld(paramifTrue: ItemModel$Unbaked, paramifFalse: ItemModel$Unbaked): ItemModel$Unbaked;
    static isUsingItem(): ConditionalItemModelProperty;
    static isXmas(paramonTrue: ItemModel$Unbaked, paramonFalse: ItemModel$Unbaked): ItemModel$Unbaked;
    static override(parammodel: ItemModel$Unbaked, paramvalue: number): RangeSelectItemModel$Entry;
    static plainModel(paramid: Identifier): ItemModel$Unbaked;
    static rangeSelect(paramproperty: RangeSelectItemModelProperty, paramscale: number, paramentries: RangeSelectItemModel$Entry[]): ItemModel$Unbaked;
    static rangeSelect(paramproperty: RangeSelectItemModelProperty, paramscale: number, paramfallback: ItemModel$Unbaked, paramentries: (Object | null)[]): ItemModel$Unbaked;
    static rangeSelect(paramproperty: RangeSelectItemModelProperty, paramentries: RangeSelectItemModel$Entry[]): ItemModel$Unbaked;
    static rangeSelect(paramproperty: RangeSelectItemModelProperty, paramfallback: ItemModel$Unbaked, paramentries: RangeSelectItemModel$Entry[]): ItemModel$Unbaked;
    static rangeSelect(paramproperty: RangeSelectItemModelProperty, paramfallback: ItemModel$Unbaked, paramentries: (Object | null)[]): ItemModel$Unbaked;
    static select(paramtransformation: Transformation, paramproperty: SelectItemModelProperty<Object>, paramfallback: ItemModel$Unbaked, paramcases: SelectItemModel$SwitchCase<Object>[]): ItemModel$Unbaked;
    static select(paramproperty: SelectItemModelProperty<Object>, paramcases: SelectItemModel$SwitchCase<Object>[]): ItemModel$Unbaked;
    static select(paramproperty: SelectItemModelProperty<Object>, paramfallback: ItemModel$Unbaked, paramcases: SelectItemModel$SwitchCase<Object>[]): ItemModel$Unbaked;
    static select(paramproperty: SelectItemModelProperty<Object>, paramfallback: ItemModel$Unbaked, paramcases: Object | null): ItemModel$Unbaked;
    static select(paramproperty: SelectItemModelProperty<Object>, paramcases: Object | null): ItemModel$Unbaked;
    static selectBlockItemProperty(paramtransformation: Transformation, paramproperty: Property<Object>, paramfallback: ItemModel$Unbaked, paramcases: Map<Object | null, ItemModel$Unbaked>): ItemModel$Unbaked;
    static selectBlockItemProperty(paramproperty: Property<Object>, paramfallback: ItemModel$Unbaked, paramcases: Map<Object | null, ItemModel$Unbaked>): ItemModel$Unbaked;
    static specialModel(parambase: Identifier, paramtransformation: Transformation, parammodel: SpecialModelRenderer$Unbaked<Object>): ItemModel$Unbaked;
    static specialModel(parambase: Identifier, paramtransformation: Optional<Transformation>, parammodel: SpecialModelRenderer$Unbaked<Object>): ItemModel$Unbaked;
    static specialModel(parambase: Identifier, parammodel: SpecialModelRenderer$Unbaked<Object>): ItemModel$Unbaked;
    static tintedModel(paramid: Identifier, paramtints: (Object | null)[]): ItemModel$Unbaked;
    static when(paramvalue: Object | null, parammodel: ItemModel$Unbaked): SelectItemModel$SwitchCase<Object>;
    static when(paramvalues: (Object | null)[], parammodel: ItemModel$Unbaked): SelectItemModel$SwitchCase<Object>;
    constructor()
}