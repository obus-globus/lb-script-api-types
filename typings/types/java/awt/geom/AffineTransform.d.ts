import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class AffineTransform extends Object implements Serializable, Cloneable {
    static TYPE_FLIP: number;
    static TYPE_GENERAL_ROTATION: number;
    static TYPE_GENERAL_SCALE: number;
    static TYPE_GENERAL_TRANSFORM: number;
    static TYPE_IDENTITY: number;
    static TYPE_MASK_ROTATION: number;
    static TYPE_MASK_SCALE: number;
    static TYPE_QUADRANT_ROTATION: number;
    static TYPE_TRANSLATION: number;
    static TYPE_UNIFORM_SCALE: number;
    static getQuadrantRotateInstance(paramarg0: number): AffineTransform;
    static getQuadrantRotateInstance(paramarg0: number, paramarg1: number, paramarg2: number): AffineTransform;
    static getRotateInstance(paramarg0: number): AffineTransform;
    static getRotateInstance(paramarg0: number, paramarg1: number): AffineTransform;
    static getRotateInstance(paramarg0: number, paramarg1: number, paramarg2: number): AffineTransform;
    static getRotateInstance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): AffineTransform;
    static getScaleInstance(paramarg0: number, paramarg1: number): AffineTransform;
    static getShearInstance(paramarg0: number, paramarg1: number): AffineTransform;
    static getTranslateInstance(paramarg0: number, paramarg1: number): AffineTransform;
    constructor()
    constructor(arg0: AffineTransform)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    constructor(arg0: number[])
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: number[])
    // private m00: number;
    // private m01: number;
    // private m02: number;
    // private m10: number;
    // private m11: number;
    // private m12: number;
    // private state: number;
    readonly type: number;
    // private calculateType(): void;
    clone(): Object;
    protected clone(): Object;
    concatenate(arg0: AffineTransform): void;
    createInverse(): AffineTransform;
    createTransformedShape(arg0: Shape): Shape;
    deltaTransform(arg0: Point2D, arg1: Point2D): Point2D;
    deltaTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
    equals(arg0: Object | null): boolean;
    getDeterminant(): number;
    getMatrix(arg0: number[]): void;
    getScaleX(): number;
    getScaleY(): number;
    getShearX(): number;
    getShearY(): number;
    getTranslateX(): number;
    getTranslateY(): number;
    getType(): number;
    hashCode(): number;
    inverseTransform(arg0: Point2D, arg1: Point2D): Point2D;
    inverseTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
    invert(): void;
    isIdentity(): boolean;
    preConcatenate(arg0: AffineTransform): void;
    quadrantRotate(arg0: number): void;
    quadrantRotate(arg0: number, arg1: number, arg2: number): void;
    // private readObject(arg0: ObjectInputStream): void;
    rotate(arg0: number): void;
    rotate(arg0: number, arg1: number): void;
    rotate(arg0: number, arg1: number, arg2: number): void;
    rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private rotate180(): void;
    // private rotate270(): void;
    // private rotate90(): void;
    scale(arg0: number, arg1: number): void;
    setToIdentity(): void;
    setToQuadrantRotation(arg0: number): void;
    setToQuadrantRotation(arg0: number, arg1: number, arg2: number): void;
    setToRotation(arg0: number): void;
    setToRotation(arg0: number, arg1: number): void;
    setToRotation(arg0: number, arg1: number, arg2: number): void;
    setToRotation(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setToScale(arg0: number, arg1: number): void;
    setToShear(arg0: number, arg1: number): void;
    setToTranslation(arg0: number, arg1: number): void;
    setTransform(arg0: AffineTransform): void;
    setTransform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    shear(arg0: number, arg1: number): void;
    // private stateError(): void;
    toString(): string;
    transform(arg0: Point2D, arg1: Point2D): Point2D;
    transform(arg0: Point2D[], arg1: number, arg2: Point2D[], arg3: number, arg4: number): void;
    transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
    translate(arg0: number, arg1: number): void;
    updateState(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}