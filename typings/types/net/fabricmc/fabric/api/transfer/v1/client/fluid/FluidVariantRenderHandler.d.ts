import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { TooltipFlag } from '../../../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
export interface FluidVariantRenderHandler extends Object{
    appendTooltip(arg0: FluidVariant, arg1: Component[], arg2: TooltipFlag): void;
    getColor(arg0: FluidVariant, arg1: BlockAndTintGetter, arg2: BlockPos): number;
}