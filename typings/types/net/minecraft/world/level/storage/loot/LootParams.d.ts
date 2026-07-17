import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootParams$DynamicDrop } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams$DynamicDrop.d.ts'
export class LootParams extends Object {
    constructor(level: ServerLevel, params: ContextMap, dynamicDrops: JavaMap<Identifier, (param0: (param0: ItemStack) => void) => void>, luck: number)
    // private dynamicDrops: JavaMap<Identifier, (param0: (param0: ItemStack) => void) => void>;
    readonly level: ServerLevel;
    readonly luck: number;
    // private params: ContextMap;
    addDynamicDrops(location: Identifier, output: (param0: ItemStack) => void): void;
    contextMap(): ContextMap;
    getLevel(): ServerLevel;
    getLuck(): number;
}