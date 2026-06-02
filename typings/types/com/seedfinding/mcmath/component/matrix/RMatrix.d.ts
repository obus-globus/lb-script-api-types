import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix$Augmented } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Augmented.d.ts'
import type { RMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Generator.d.ts'
import type { RMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Mapper.d.ts'
import type { RVector } from '../../../../../com/seedfinding/mcmath/component/vector/RVector.d.ts'
import type { RVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Mapper.d.ts'
import type { RVector$View } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$View.d.ts'
import type { LUDecomposition$R } from '../../../../../com/seedfinding/mcmath/decomposition/LUDecomposition$R.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RMatrix extends Object {
    static identity(paramarg0: number): RMatrix;
    static zero(paramarg0: number, paramarg1: number): RMatrix;
    constructor(arg0: RVector[])
    constructor(arg0: Real[][])
    constructor(arg0: number, arg1: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real)
    // private elements: Real[][];
    add(arg0: RMatrix): RMatrix;
    addAndSet(arg0: RMatrix): RMatrix;
    copy(): RMatrix;
    divide(arg0: Real): RMatrix;
    divideAndSet(arg0: Real): RMatrix;
    equals(arg0: Object | null): boolean;
    get(arg0: number, arg1: number): Real;
    getColumn(arg0: number): RVector$View;
    getColumnCopy(arg0: number): RVector;
    getColumnCount(): number;
    getColumns(): RVector$View[];
    getColumnsCopy(): RVector[];
    getDeterminant(): Real;
    getRow(arg0: number): RVector$View;
    getRowCopy(arg0: number): RVector;
    getRowCount(): number;
    getRows(): RVector$View[];
    getRowsCopy(): RVector[];
    hashCode(): number;
    invert(): RMatrix;
    invertAndSet(): RMatrix;
    isSquare(): boolean;
    luDecompose(): LUDecomposition$R;
    map(arg0: (param0: number, param1: number, param2: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mapAndSet(arg0: (param0: number, param1: number, param2: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mapColumn(arg0: number, arg1: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mapColumnAndSet(arg0: number, arg1: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mapRow(arg0: number, arg1: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mapRowAndSet(arg0: number, arg1: (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real): RMatrix;
    mergeToAugmented(arg0: RMatrix): RMatrix$Augmented;
    multiply(arg0: Real): RMatrix;
    multiply(arg0: RMatrix): RMatrix;
    multiply(arg0: RVector): RVector;
    multiplyAndSet(arg0: Real): RMatrix;
    multiplyAndSet(arg0: RMatrix): RMatrix;
    multiplyAndSet(arg0: RVector): RVector;
    set(arg0: number, arg1: number, arg2: Real): RMatrix;
    setColumn(arg0: number, arg1: RVector): RMatrix;
    setRow(arg0: number, arg1: RVector): RMatrix;
    splitToAugmented(arg0: number): RMatrix$Augmented;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): RMatrix;
    subCopy(arg0: number, arg1: number, arg2: number, arg3: number): RMatrix;
    subtract(arg0: RMatrix): RMatrix;
    subtractAndSet(arg0: RMatrix): RMatrix;
    swap(arg0: number, arg1: number, arg2: number, arg3: number): RMatrix;
    swapAndSet(arg0: number, arg1: number, arg2: number, arg3: number): RMatrix;
    swapColumns(arg0: number, arg1: number): RMatrix;
    swapColumnsAndSet(arg0: number, arg1: number): RMatrix;
    swapRows(arg0: number, arg1: number): RMatrix;
    swapRowsAndSet(arg0: number, arg1: number): RMatrix;
    toGenerator(): (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real;
    toMapper(): (param0: number, param1: number, param2: Real) => com.seedfinding.mcmath.arithmetic.Real;
    toString(): string;
    transpose(): RMatrix;
    transposeAndSet(): RMatrix;
    with(arg0: number, arg1: number, arg2: Real): RMatrix;
    withColumn(arg0: number, arg1: RVector): RMatrix;
    withRow(arg0: number, arg1: RVector): RMatrix;
}