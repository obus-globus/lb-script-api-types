import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { ImageHolder } from '../../../../net/irisshaders/iris/gl/image/ImageHolder.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
export class IrisImages extends Object {
    static addCustomImages(paramarg0: ImageHolder, paramarg1: GlImage[]): void;
    static addRenderTargetImages(paramarg0: ImageHolder, paramarg1: () => Object | null, paramarg2: RenderTargets): void;
    static addShadowColorImages(paramarg0: ImageHolder, paramarg1: ShadowRenderTargets, paramarg2: number[]): void;
    static hasRenderTargetImages(paramarg0: ImageHolder, paramarg1: RenderTargets): boolean;
    static hasShadowImages(paramarg0: ImageHolder): boolean;
    constructor()
}