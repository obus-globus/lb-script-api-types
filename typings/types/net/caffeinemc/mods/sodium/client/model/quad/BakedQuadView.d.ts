import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { ModelQuadFacing } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
export interface BakedQuadView extends Object, ModelQuadView{
    calculateNormal(): number;
    getAccurateNormal(arg0: number): number;
    getFaceNormal(): number;
    getNormalFace(): ModelQuadFacing;
    hasAO(): boolean;
    hasColor(): boolean;
    hasShade(): boolean;
}