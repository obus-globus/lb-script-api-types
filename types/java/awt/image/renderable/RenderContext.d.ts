import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class RenderContext extends Object implements Cloneable {
    constructor(arg0: AffineTransform)
    constructor(arg0: AffineTransform, arg1: RenderingHints)
    constructor(arg0: AffineTransform, arg1: Shape)
    constructor(arg0: AffineTransform, arg1: Shape, arg2: RenderingHints)
    // private aoi: Shape;
    // private hints: RenderingHints;
    // private usr2dev: AffineTransform;
    clone(): Object;
    protected clone(): Object;
    concatenateTransform(arg0: AffineTransform): void;
    concetenateTransform(arg0: AffineTransform): void;
    getAreaOfInterest(): Shape;
    getRenderingHints(): RenderingHints;
    getTransform(): AffineTransform;
    preConcatenateTransform(arg0: AffineTransform): void;
    preConcetenateTransform(arg0: AffineTransform): void;
    setAreaOfInterest(arg0: Shape): void;
    setRenderingHints(arg0: RenderingHints): void;
    setTransform(arg0: AffineTransform): void;
}