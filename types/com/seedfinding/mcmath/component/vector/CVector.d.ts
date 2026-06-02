import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { Norm } from '../../../../../com/seedfinding/mcmath/component/Norm.d.ts'
import type { CMatrix } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix.d.ts'
import type { CVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Generator.d.ts'
import type { CVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Mapper.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CVector extends Object {
    static SUM: (param0: CVector) => Complex;
    static basis(paramarg0: number, paramarg1: number): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: Complex): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: BigInteger): CVector;
    static basis(paramarg0: number, paramarg1: number, paramarg2: number): CVector;
    static zero(paramarg0: number): CVector;
    constructor(arg0: Complex[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number) => com.seedfinding.mcmath.arithmetic.Complex)
    readonly elements: Complex[];
    add(arg0: CVector): CVector;
    addAndSet(arg0: CVector): CVector;
    checkDimension(arg0: CVector): void;
    copy(): CVector;
    divide(arg0: Complex): CVector;
    divide(arg0: BigInteger): CVector;
    divideAndSet(arg0: Complex): CVector;
    divideAndSet(arg0: BigInteger): CVector;
    divideAndSet(arg0: number): CVector;
    dot(arg0: CVector): Complex;
    equals(arg0: Object | null): boolean;
    get(arg0: number): Complex;
    getDimension(): number;
    getElements(): Complex[];
    hashCode(): number;
    map(arg0: (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex): CVector;
    mapAndSet(arg0: (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex): CVector;
    multiply(arg0: CMatrix): CVector;
    multiplyAndSet(arg0: CMatrix): CVector;
    norm(arg0: (param0: CVector) => Complex): Complex;
    scale(arg0: Complex): CVector;
    scale(arg0: BigInteger): CVector;
    scale(arg0: number): CVector;
    scaleAndSet(arg0: Complex): CVector;
    scaleAndSet(arg0: BigInteger): CVector;
    scaleAndSet(arg0: number): CVector;
    set(arg0: number, arg1: Complex): CVector;
    subtract(arg0: CVector): CVector;
    subtractAndSet(arg0: CVector): CVector;
    sum(): Complex;
    swap(arg0: number, arg1: number): CVector;
    swapAndSet(arg0: number, arg1: number): CVector;
    tensor(arg0: CVector): CVector;
    toGenerator(): (param0: number) => com.seedfinding.mcmath.arithmetic.Complex;
    toMapper(): (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex;
    toMatrixColumn(): CMatrix;
    toMatrixRow(): CMatrix;
    toString(): string;
    with(arg0: number, arg1: Complex): CVector;
}