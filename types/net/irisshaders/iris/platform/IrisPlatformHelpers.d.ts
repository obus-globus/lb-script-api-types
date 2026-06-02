import type { TextureFormat } from '../../../../com/mojang/blaze3d/textures/TextureFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DepthBufferFormat } from '../../../../net/irisshaders/iris/gl/texture/DepthBufferFormat.d.ts'
import type { KeyMapping } from '../../../../net/minecraft/client/KeyMapping.d.ts'
import type { BlockAndTintGetter } from '../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface IrisPlatformHelpers extends Object{
    compareVersions(arg0: string, arg1: string): number;
    getBlockAppearance(arg0: BlockAndTintGetter, arg1: BlockState, arg2: Direction, arg3: BlockPos): BlockState;
    getConfigDir(): Path[];
    getGameDir(): Path[];
    getVersion(): string;
    isDevelopmentEnvironment(): boolean;
    isModLoaded(arg0: string): boolean;
    mojangDepthFormat(arg0: DepthBufferFormat): TextureFormat;
    registerKeyBinding(arg0: KeyMapping): KeyMapping;
    useELS(): boolean;
}