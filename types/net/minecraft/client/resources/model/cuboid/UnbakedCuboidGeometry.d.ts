import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { CuboidModelElement } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidModelElement.d.ts'
import type { QuadCollection } from '../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { UnbakedGeometry } from '../../../../../../net/minecraft/client/resources/model/geometry/UnbakedGeometry.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
export class UnbakedCuboidGeometry extends Record implements UnbakedGeometry {
    static EMPTY: (param0: TextureSlots, param1: ModelBaker, param2: ModelState, param3: () => kotlin.String) => net.minecraft.client.resources.model.geometry.QuadCollection;
    static bake(paramelements: CuboidModelElement[], paramtextures: TextureSlots, parammodelBaker: ModelBaker, parammodelState: ModelState, paramname: () => kotlin.String): QuadCollection;
    constructor(elements: CuboidModelElement[])
    // private elements: CuboidModelElement[];
    bake(textures: TextureSlots, modelBaker: ModelBaker, modelState: ModelState, name: () => kotlin.String): QuadCollection;
    elements(): CuboidModelElement[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}