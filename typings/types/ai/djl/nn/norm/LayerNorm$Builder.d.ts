import type { LayerNorm } from '../../../../ai/djl/nn/norm/LayerNorm.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LayerNorm$Builder extends Object {
    constructor()
    // private axis: number[];
    // private center: boolean;
    // private epsilon: number;
    // private scale: boolean;
    axis(...arg0: number[]): LayerNorm$Builder;
    build(): LayerNorm;
    optCenter(arg0: boolean): LayerNorm$Builder;
    optEpsilon(arg0: number): LayerNorm$Builder;
    optScale(arg0: boolean): LayerNorm$Builder;
}