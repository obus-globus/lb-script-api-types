import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface CustomSpawner extends Object{
    tick(level: ServerLevel, spawnEnemies: boolean): void;
}