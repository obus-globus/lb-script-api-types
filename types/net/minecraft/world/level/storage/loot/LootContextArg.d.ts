import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
export interface LootContextArg<R extends Object | number | string | boolean> extends Object{
    contextParam(): ContextKey<Object>;
    get(context: LootContext): R;
}