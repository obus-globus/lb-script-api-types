import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { QMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix.d.ts'
import type { QVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Generator.d.ts'
import type { QVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Mapper.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QVector extends Object {
    static EUCLIDEAN_SQ: (param0: QVector) => Rational;
    static SUM: (param0: QVector) => Rational;
    static basis(paramarg0: number, paramarg1: number): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Rational): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): QVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): QVector;
    static zero(paramarg0: number): QVector;
    constructor(arg0: Rational[])
    constructor(arg0: BigInteger[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number) => Rational)
    constructor(arg0: number[])
    readonly elements: Rational[];
    add(arg0: QVector): QVector;
    addAndSet(arg0: QVector): QVector;
    checkDimension(arg0: QVector): void;
    copy(): QVector;
    divide(arg0: Rational): QVector;
    divide(arg0: BigInteger): QVector;
    divideAndSet(arg0: Rational): QVector;
    divideAndSet(arg0: BigInteger): QVector;
    divideAndSet(arg0: number): QVector;
    dot(arg0: QVector): Rational;
    equals(arg0: Object | null): boolean;
    get(arg0: number): Rational;
    getDimension(): number;
    getElements(): Rational[];
    gramSchmidtCoefficient(arg0: QVector): Rational;
    hashCode(): number;
    magnitudeSq(): Rational;
    map(arg0: (param0: number, param1: Rational) => Rational): QVector;
    mapAndSet(arg0: (param0: number, param1: Rational) => Rational): QVector;
    multiply(arg0: QMatrix): QVector;
    multiplyAndSet(arg0: QMatrix): QVector;
    norm(arg0: (param0: QVector) => Rational): Rational;
    normalize(arg0: (param0: QVector) => Rational): QVector;
    normalizeAndSet(arg0: (param0: QVector) => Rational): QVector;
    projectOnto(arg0: QMatrix): QVector;
    projectOnto(arg0: QVector): QVector;
    raisedNorm(arg0: number): Rational;
    scale(arg0: Rational): QVector;
    scale(arg0: BigInteger): QVector;
    scale(arg0: number): QVector;
    scaleAndSet(arg0: Rational): QVector;
    scaleAndSet(arg0: BigInteger): QVector;
    scaleAndSet(arg0: number): QVector;
    set(arg0: number, arg1: Rational): QVector;
    subtract(arg0: QVector): QVector;
    subtractAndSet(arg0: QVector): QVector;
    sum(): Rational;
    swap(arg0: number, arg1: number): QVector;
    swapAndSet(arg0: number, arg1: number): QVector;
    tensor(arg0: QVector): QVector;
    toGenerator(): (param0: number) => Rational;
    toMapper(): (param0: number, param1: Rational) => Rational;
    toMatrixColumn(): QMatrix;
    toMatrixRow(): QMatrix;
    toString(): string;
    with(arg0: number, arg1: Rational): QVector;
}