import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LandPathTypeRegistry$PathTypeProvider } from '../../../../../net/fabricmc/fabric/api/registry/LandPathTypeRegistry$PathTypeProvider.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export interface LandPathTypeRegistry$DynamicPathTypeProvider extends Object, LandPathTypeRegistry$PathTypeProvider{
    getPathType(arg0: BlockState, arg1: BlockGetter, arg2: BlockPos, arg3: boolean): PathType;
}