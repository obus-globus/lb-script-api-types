import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LootTableSource } from '../../../../../net/fabricmc/fabric/api/loot/v3/LootTableSource.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class LootUtil extends Object {
    static SOURCES: ThreadLocal<Object>;
    static determineSource(paramarg0: Resource): LootTableSource;
    static getEntryOrDirect(paramarg0: ServerLevel, paramarg1: LootTable): Holder<LootTable>;
    constructor()
}