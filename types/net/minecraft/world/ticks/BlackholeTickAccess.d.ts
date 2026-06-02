import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { TickContainerAccess } from '../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class BlackholeTickAccess extends Object {
    static emptyContainer(): TickContainerAccess<Object>;
    static emptyLevelList(): LevelTickAccess<Object>;
    constructor()
}