import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class RenderContext extends Object implements Cloneable {
    constructor(arg0: AffineTransform)
    constructor(arg0: AffineTransform, arg1: { [key: string]: any })
    constructor(arg0: AffineTransform, arg1: Shape)
    constructor(arg0: AffineTransform, arg1: Shape, arg2: { [key: string]: any })
    // private aoi: Shape;
    // private hints: { [key: string]: any };
    // private usr2dev: AffineTransform;
    clone(): Object;
    protected clone(): Object;
    concatenateTransform(arg0: AffineTransform): void;
    concetenateTransform(arg0: AffineTransform): void;
    getAreaOfInterest(): Shape;
    getRenderingHints(): { [key: string]: any };
    getTransform(): AffineTransform;
    preConcatenateTransform(arg0: AffineTransform): void;
    preConcetenateTransform(arg0: AffineTransform): void;
    setAreaOfInterest(arg0: Shape): void;
    setRenderingHints(arg0: { [key: string]: any }): void;
    setTransform(arg0: AffineTransform): void;
}