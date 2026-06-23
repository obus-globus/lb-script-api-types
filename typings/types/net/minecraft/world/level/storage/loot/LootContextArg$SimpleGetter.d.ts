import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
export interface LootContextArg$SimpleGetter<T extends unknown> extends Object, LootContextArg<T>{
    contextParam(): ContextKey<T>;
    get(context: LootContext): T;
}