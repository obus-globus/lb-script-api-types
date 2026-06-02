import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { CustomSpawner } from '../../../../../net/minecraft/world/level/CustomSpawner.d.ts'
export class PhantomSpawner extends Object implements CustomSpawner {
    constructor()
    // private nextTick: number;
    tick(level: ServerLevel, spawnEnemies: boolean): void;
}