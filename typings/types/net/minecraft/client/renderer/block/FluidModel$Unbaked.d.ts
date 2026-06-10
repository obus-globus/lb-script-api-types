import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { FluidModel } from '../../../../../net/minecraft/client/renderer/block/FluidModel.d.ts'
import type { ModelDebugName } from '../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { Material } from '../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
export class FluidModel$Unbaked extends Record {
    constructor(stillMaterial: Material, flowingMaterial: Material, overlayMaterial: Material, tintSource: BlockTintSource)
    // private flowingMaterial: Material;
    // private overlayMaterial: Material;
    // private stillMaterial: Material;
    // private tintSource: BlockTintSource;
    bake(materials: MaterialBaker, modelName: () => string): FluidModel;
    equals(o: Object | null): boolean;
    flowingMaterial(): Material;
    hashCode(): number;
    overlayMaterial(): Material;
    stillMaterial(): Material;
    tintSource(): BlockTintSource;
    toString(): string;
}