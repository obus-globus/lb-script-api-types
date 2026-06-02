import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LandPathTypeRegistry$PathTypeProvider } from '../../../../../net/fabricmc/fabric/api/registry/LandPathTypeRegistry$PathTypeProvider.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export interface LandPathTypeRegistry$StaticPathTypeProvider extends Object, LandPathTypeRegistry$PathTypeProvider{
    getPathType(arg0: BlockState, arg1: boolean): PathType;
}