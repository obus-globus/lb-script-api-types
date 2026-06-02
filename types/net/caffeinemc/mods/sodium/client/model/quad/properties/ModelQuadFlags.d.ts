import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class ModelQuadFlags extends Object {
    static FLAG_BIT_COUNT: number;
    static IS_ALIGNED: number;
    static IS_PARALLEL: number;
    static IS_PARTIAL: number;
    static contains(paramarg0: number, paramarg1: number): boolean;
    static getQuadFlags(paramarg0: ModelQuadView, paramarg1: Direction): number;
    constructor()
}