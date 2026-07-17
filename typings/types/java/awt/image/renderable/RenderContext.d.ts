import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class RenderContext extends Object implements Cloneable {
    constructor(arg0: AffineTransform)
    constructor(arg0: AffineTransform, arg1: JavaMap<any, any>)
    constructor(arg0: AffineTransform, arg1: Shape)
    constructor(arg0: AffineTransform, arg1: Shape, arg2: JavaMap<any, any>)
    // private aoi: Shape;
    // private hints: JavaMap<any, any>;
    // private usr2dev: AffineTransform;
    clone(): Object;
    concatenateTransform(arg0: AffineTransform): void;
    concetenateTransform(arg0: AffineTransform): void;
    getAreaOfInterest(): Shape;
    getRenderingHints(): JavaMap<any, any>;
    getTransform(): AffineTransform;
    preConcatenateTransform(arg0: AffineTransform): void;
    preConcetenateTransform(arg0: AffineTransform): void;
    setAreaOfInterest(arg0: Shape): void;
    setRenderingHints(arg0: JavaMap<any, any>): void;
    setTransform(arg0: AffineTransform): void;
}