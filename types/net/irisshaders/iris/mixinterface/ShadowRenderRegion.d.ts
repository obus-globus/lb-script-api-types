import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ShadowRenderRegion extends Object{
    iris$forceClearAllBatches(): void;
    swapToRegularRenderList(): void;
    swapToShadowRenderList(): void;
}