import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { RMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix.d.ts'
import type { RVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Generator.d.ts'
import type { RVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Mapper.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RVector extends Object {
    static EUCLIDEAN: (param0: RVector) => Real;
    static EUCLIDEAN_SQ: (param0: RVector) => Real;
    static SUM: (param0: RVector) => Real;
    static basis(paramarg0: number, paramarg1: number): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Real): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): RVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): RVector;
    static zero(paramarg0: number): RVector;
    constructor(arg0: Real[])
    constructor(arg0: BigInteger[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number) => com.seedfinding.mcmath.arithmetic.Real)
    constructor(arg0: number[])
    readonly elements: Real[];
    add(arg0: RVector): RVector;
    addAndSet(arg0: RVector): RVector;
    checkDimension(arg0: RVector): void;
    copy(): RVector;
    divide(arg0: Real): RVector;
    divide(arg0: BigInteger): RVector;
    divideAndSet(arg0: Real): RVector;
    divideAndSet(arg0: BigInteger): RVector;
    divideAndSet(arg0: number): RVector;
    dot(arg0: RVector): Real;
    equals(arg0: Object | null): boolean;
    get(arg0: number): Real;
    getDimension(): number;
    getElements(): Real[];
    gramSchmidtCoefficient(arg0: RVector): Real;
    hashCode(): number;
    magnitude(): Real;
    magnitudeSq(): Real;
    map(arg0: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RVector;
    mapAndSet(arg0: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RVector;
    multiply(arg0: RMatrix): RVector;
    multiplyAndSet(arg0: RMatrix): RVector;
    norm(arg0: (param0: RVector) => Real): Real;
    normalize(arg0: (param0: RVector) => Real): RVector;
    normalizeAndSet(arg0: (param0: RVector) => Real): RVector;
    projectOnto(arg0: RMatrix): RVector;
    projectOnto(arg0: RVector): RVector;
    scale(arg0: Real): RVector;
    scale(arg0: BigInteger): RVector;
    scale(arg0: number): RVector;
    scaleAndSet(arg0: Real): RVector;
    scaleAndSet(arg0: BigInteger): RVector;
    scaleAndSet(arg0: number): RVector;
    set(arg0: number, arg1: Real): RVector;
    subtract(arg0: RVector): RVector;
    subtractAndSet(arg0: RVector): RVector;
    sum(): Real;
    swap(arg0: number, arg1: number): RVector;
    swapAndSet(arg0: number, arg1: number): RVector;
    tensor(arg0: RVector): RVector;
    toGenerator(): (param0: number) => com.seedfinding.mcmath.arithmetic.Real;
    toMapper(): (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real;
    toMatrixColumn(): RMatrix;
    toMatrixRow(): RMatrix;
    toString(): string;
    with(arg0: number, arg1: Real): RVector;
}