import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
export interface LootContextArg$Getter<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object, LootContextArg<R>{
    contextParam(): ContextKey<T>;
    get(value: T): R;
    get(context: LootContext): R;
}