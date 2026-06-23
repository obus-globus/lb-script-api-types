import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recipe$BookInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$BookInfo.d.ts'
export interface Recipe$BookInfo$Constructor<CategoryType extends unknown, SelfType extends Recipe$BookInfo<CategoryType>> extends BiFunction<CategoryType, string, SelfType>, Object {
    andThen<V extends unknown>(arg0: (param0: SelfType) => V): (param0: CategoryType, param1: string) => V;
}