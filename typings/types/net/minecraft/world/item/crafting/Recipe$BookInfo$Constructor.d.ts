import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recipe$BookInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$BookInfo.d.ts'
export interface Recipe$BookInfo$Constructor<CategoryType extends Object | number | string | boolean, SelfType extends Recipe$BookInfo<CategoryType>> extends BiFunction<CategoryType, string, SelfType>, Object {
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
}