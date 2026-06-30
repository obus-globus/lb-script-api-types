import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * XRay module
 *
 * Allows you to see ores through walls.
 *
 * Command: {@link CommandXRay}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L123 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:123}
 */
export class ModuleXRay extends ClientModule {
    static INSTANCE: ModuleXRay;
    readonly blocks: Block[];
    // private defaultBlocks: Block[];
    // private exposedOnly: boolean;
    // private /*not mapped: */ getExposedOnly(): boolean;
    readonly fullBright: boolean;
    /**
     * Resets the block list to the default values
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L284 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:284}
     */
    applyDefaults(): void;
    onDisabled(): void;
    onEnabled(): void;
    /**
     * Checks if the block should be rendered or not.
     * This can be used to exclude blocks that should not be rendered.
     * Also features an option to only render blocks that are exposed to air.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L261 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:261}
     */
    shouldRender(blockState: BlockState, blockPos: BlockPos): boolean;
    shouldRender(state: BlockState, otherState: BlockState, side: Direction): boolean;
    valueChangedReload(it: Object): void;
}