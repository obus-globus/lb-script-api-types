import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { FallenTreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FallenTreeConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { TreeDecorator } from '../../../../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecorator.d.ts'
export class FallenTreeConfiguration$FallenTreeConfigurationBuilder extends Object {
    constructor(trunkProvider: BlockStateProvider, logLength: IntProvider)
    // private logDecorators: TreeDecorator[];
    // private logLength: IntProvider;
    // private stumpDecorators: TreeDecorator[];
    // private trunkProvider: BlockStateProvider;
    build(): FallenTreeConfiguration;
    logDecorators(logDecorators: TreeDecorator[]): FallenTreeConfiguration$FallenTreeConfigurationBuilder;
    stumpDecorators(stumpDecorators: TreeDecorator[]): FallenTreeConfiguration$FallenTreeConfigurationBuilder;
}