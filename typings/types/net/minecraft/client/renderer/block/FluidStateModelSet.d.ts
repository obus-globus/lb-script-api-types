import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FluidModel } from '../../../../../net/minecraft/client/renderer/block/FluidModel.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FluidStateModelSet extends Object {
    static bake(parammaterials: MaterialBaker): Map<Fluid, FluidModel>;
    constructor(modelByFluid: Map<Fluid, FluidModel>, missingModel: FluidModel)
    // private missingModel: FluidModel;
    // private modelByFluid: Map<Fluid, FluidModel>;
    get(state: FluidState): FluidModel;
}