import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FluidVariantRenderHandler } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/client/fluid/FluidVariantRenderHandler.d.ts'
import type { FluidVariant } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { TooltipFlag } from '../../../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { Fluid } from '../../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidVariantRendering extends Object {
    static getColor(paramarg0: FluidVariant): number;
    static getColor(paramarg0: FluidVariant, paramarg1: BlockAndTintGetter, paramarg2: BlockPos): number;
    static getHandler(paramarg0: Fluid): FluidVariantRenderHandler;
    static getHandlerOrDefault(paramarg0: Fluid): FluidVariantRenderHandler;
    static getTooltip(paramarg0: FluidVariant): Component[];
    static getTooltip(paramarg0: FluidVariant, paramarg1: TooltipFlag): Component[];
    static register(paramarg0: Fluid, paramarg1: FluidVariantRenderHandler): void;
    private constructor()
}