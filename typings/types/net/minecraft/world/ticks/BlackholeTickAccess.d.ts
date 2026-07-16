import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { TickContainerAccess } from '../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class BlackholeTickAccess extends Object {
    static emptyContainer<T extends unknown>(): TickContainerAccess<T>;
    static emptyLevelList<T extends unknown>(): LevelTickAccess<T>;
    constructor()
}