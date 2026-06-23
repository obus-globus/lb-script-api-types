import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootItemFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction$Builder.d.ts'
export interface FunctionUserBuilder<T extends FunctionUserBuilder<T>> extends Object {
    apply<E extends unknown>(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    apply(builder: LootItemFunction$Builder): T;
    unwrap(): T;
}