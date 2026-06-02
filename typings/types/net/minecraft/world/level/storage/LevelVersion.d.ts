import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataVersion } from '../../../../../net/minecraft/world/level/storage/DataVersion.d.ts'
export class LevelVersion extends Object {
    static parse(paraminput: Dynamic<Object>): LevelVersion;
    private constructor(levelDataVersion: number, lastPlayed: number, minecraftVersionName: string, minecraftVersion: number, series: string, snapshot: boolean)
    // private lastPlayed: number;
    // private levelDataVersion: number;
    // private minecraftVersion: DataVersion;
    // private minecraftVersionName: string;
    // private snapshot: boolean;
    lastPlayed(): number;
    levelDataVersion(): number;
    minecraftVersion(): DataVersion;
    minecraftVersionName(): string;
    snapshot(): boolean;
}