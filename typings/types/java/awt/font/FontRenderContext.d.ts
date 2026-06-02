import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FontRenderContext extends Object {
    constructor()
    constructor(arg0: AffineTransform, arg1: Object, arg2: Object)
    constructor(arg0: AffineTransform, arg1: boolean, arg2: boolean)
    // private aaHintValue: Object;
    // private defaulting: boolean;
    // private fmHintValue: Object;
    // private tx: AffineTransform;
    equals(arg0: FontRenderContext): boolean;
    equals(arg0: Object | null): boolean;
    getAntiAliasingHint(): Object;
    getFractionalMetricsHint(): Object;
    getTransform(): AffineTransform;
    getTransformType(): number;
    hashCode(): number;
    isAntiAliased(): boolean;
    isTransformed(): boolean;
    usesFractionalMetrics(): boolean;
}