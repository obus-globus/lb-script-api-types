import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LandPathTypeRegistry$DynamicPathTypeProvider } from '../../../../../net/fabricmc/fabric/api/registry/LandPathTypeRegistry$DynamicPathTypeProvider.d.ts'
import type { LandPathTypeRegistry$PathTypeProvider } from '../../../../../net/fabricmc/fabric/api/registry/LandPathTypeRegistry$PathTypeProvider.d.ts'
import type { LandPathTypeRegistry$StaticPathTypeProvider } from '../../../../../net/fabricmc/fabric/api/registry/LandPathTypeRegistry$StaticPathTypeProvider.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export class LandPathTypeRegistry extends Object {
    static getPathType(paramarg0: BlockState, paramarg1: BlockGetter, paramarg2: BlockPos, paramarg3: boolean): PathType;
    static getPathTypeProvider(paramarg0: Block): LandPathTypeRegistry$PathTypeProvider;
    static register(paramarg0: Block, paramarg1: (param0: BlockState, param1: boolean) => net.minecraft.world.level.pathfinder.PathType): void;
    static register(paramarg0: Block, paramarg1: PathType, paramarg2: PathType): void;
    static registerDynamic(paramarg0: Block, paramarg1: (param0: BlockState, param1: BlockGetter, param2: BlockPos, param3: boolean) => net.minecraft.world.level.pathfinder.PathType): void;
    private constructor()
}