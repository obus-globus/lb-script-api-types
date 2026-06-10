import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Palette } from '../../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
export interface BitStorageExtension extends Object{
    sodium$unpack<T extends Object | number | string | boolean>(arg0: T[], arg1: Palette<T>): void;
}