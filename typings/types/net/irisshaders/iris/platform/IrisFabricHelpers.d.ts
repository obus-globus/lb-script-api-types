import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisPlatformHelpers } from '../../../../net/irisshaders/iris/platform/IrisPlatformHelpers.d.ts'
import type { KeyMapping } from '../../../../net/minecraft/client/KeyMapping.d.ts'
import type { BlockAndTintGetter } from '../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class IrisFabricHelpers extends Object implements IrisPlatformHelpers {
    static INSTANCE: IrisPlatformHelpers;
    static getInstance(): IrisPlatformHelpers;
    constructor()
    compareVersions(arg0: string, arg1: string): number;
    getBlockAppearance(arg0: BlockAndTintGetter, arg1: BlockState, arg2: Direction, arg3: BlockPos): BlockState;
    getConfigDir(): Path;
    getGameDir(): Path;
    getVersion(): string;
    isDevelopmentEnvironment(): boolean;
    isModLoaded(arg0: string): boolean;
    registerKeyBinding(arg0: KeyMapping): KeyMapping;
    useELS(): boolean;
}