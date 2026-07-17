import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ContextMap$Builder } from '../../../../../../net/minecraft/util/context/ContextMap$Builder.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootParams } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootParams$DynamicDrop } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams$DynamicDrop.d.ts'
export class LootParams$Builder extends Object {
    constructor(level: ServerLevel)
    // private dynamicDrops: JavaMap<Identifier, (param0: (param0: ItemStack) => void) => void>;
    readonly level: ServerLevel;
    // private luck: number;
    // private params: ContextMap$Builder;
    create(contextKeySet: ContextKeySet): LootParams;
    getLevel(): ServerLevel;
    getOptionalParameter<T extends unknown>(param: ContextKey<T>): T;
    getParameter<T extends unknown>(param: ContextKey<T>): T;
    withDynamicDrop(location: Identifier, dynamicDrop: (param0: (param0: ItemStack) => void) => void): LootParams$Builder;
    withLuck(luck: number): LootParams$Builder;
    withOptionalParameter<T extends unknown>(param: ContextKey<T>, value: T): LootParams$Builder;
    withParameter<T extends unknown>(param: ContextKey<T>, value: T): LootParams$Builder;
}