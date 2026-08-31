import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * XRay module
 *
 * Allows you to see ores through walls.
 *
 * Command: {@link CommandXRay}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:124}
 */
export class ModuleXRay extends ClientModule {
    static INSTANCE: ModuleXRay;
    readonly backgroundOpacity: number;
    readonly blocks: Block[];
    getBlocks(): Block[];
    // private defaultBlocks: Block[];
    // private exposedOnly: boolean;
    // private /*not mapped: */ getExposedOnly(): boolean;
    readonly fullBright: boolean;
    /**
     * Resets the block list to the default values
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L330 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:330}
     */
    applyDefaults(): void;
    /**
     * Keeps vanilla/Sodium face culling unless this is a whitelisted XRay block hidden behind another block.
     *
     * @see net.minecraft.client.renderer.block.ModelBlockRenderer.shouldRenderFace
     * @see net.caffeinemc.mods.sodium.client.render.model.AbstractBlockRenderContext.shouldDrawSide
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L292 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:292}
     */
    modifyDrawSide(blockState: BlockState, level: BlockGetter, blockPos: BlockPos, side: Direction, original: boolean): boolean;
    modifyShouldRenderFace(original: boolean, state: BlockState, otherState: BlockState, side: Direction): boolean;
    onDisabled(): void;
    onEnabled(): void;
    /**
     * Checks if the block should be rendered or not.
     * This can be used to exclude blocks that should not be rendered.
     * Also features an option to only render blocks that are exposed to air.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt#L265 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleXRay.kt:265}
     */
    shouldRender(blockState: BlockState, blockPos: BlockPos): boolean;
    shouldRender(state: BlockState, otherState: BlockState, side: Direction): boolean;
    shouldRenderTransparentBackground(blockState: BlockState): boolean;
    shouldSkipRender(blockState: BlockState, blockPos: BlockPos): boolean;
    transparentBackgroundAlpha(blockState: BlockState): number;
    valueChangedReload(it: Object): void;
}