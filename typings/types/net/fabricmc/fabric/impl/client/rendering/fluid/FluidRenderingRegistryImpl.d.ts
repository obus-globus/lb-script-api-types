import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidRenderHandler } from '../../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRenderHandler.d.ts'
import type { FluidModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/FluidModel$Unbaked.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidRenderingRegistryImpl extends Object {
    static get(paramarg0: Fluid): FluidRenderHandler;
    static getOverride(paramarg0: Fluid): FluidRenderHandler;
    static getUnbakedModels(): Map<Fluid, FluidModel$Unbaked>;
    static isBlockTransparent(paramarg0: Block): boolean;
    static register(paramarg0: Fluid, paramarg1: FluidModel$Unbaked): void;
    static register(paramarg0: Fluid, paramarg1: FluidModel$Unbaked, paramarg2: FluidRenderHandler): void;
    static setBlockTransparency(paramarg0: Block, paramarg1: boolean): void;
    private constructor()
}