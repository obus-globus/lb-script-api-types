import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix$Augmented } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Augmented.d.ts'
import type { QMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Generator.d.ts'
import type { QMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Mapper.d.ts'
import type { QVector } from '../../../../../com/seedfinding/mcmath/component/vector/QVector.d.ts'
import type { QVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Mapper.d.ts'
import type { QVector$View } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$View.d.ts'
import type { LUDecomposition$Q } from '../../../../../com/seedfinding/mcmath/decomposition/LUDecomposition$Q.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QMatrix extends Object {
    static identity(paramarg0: number): QMatrix;
    static zero(paramarg0: number, paramarg1: number): QMatrix;
    constructor(arg0: QVector[])
    constructor(arg0: Rational[][])
    constructor(arg0: number, arg1: (param0: number, param1: number) => Rational)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => Rational)
    // private elements: Rational[][];
    add(arg0: QMatrix): QMatrix;
    addAndSet(arg0: QMatrix): QMatrix;
    copy(): QMatrix;
    divide(arg0: Rational): QMatrix;
    divideAndSet(arg0: Rational): QMatrix;
    equals(arg0: Object | null): boolean;
    get(arg0: number, arg1: number): Rational;
    getColumn(arg0: number): QVector$View;
    getColumnCopy(arg0: number): QVector;
    getColumnCount(): number;
    getColumns(): QVector$View[];
    getColumnsCopy(): QVector[];
    getDeterminant(): Rational;
    getRow(arg0: number): QVector$View;
    getRowCopy(arg0: number): QVector;
    getRowCount(): number;
    getRows(): QVector$View[];
    getRowsCopy(): QVector[];
    hashCode(): number;
    invert(): QMatrix;
    invertAndSet(): QMatrix;
    isSquare(): boolean;
    luDecompose(): LUDecomposition$Q;
    map(arg0: (param0: number, param1: number, param2: Rational) => Rational): QMatrix;
    mapAndSet(arg0: (param0: number, param1: number, param2: Rational) => Rational): QMatrix;
    mapColumn(arg0: number, arg1: (param0: number, param1: Rational) => Rational): QMatrix;
    mapColumnAndSet(arg0: number, arg1: (param0: number, param1: Rational) => Rational): QMatrix;
    mapRow(arg0: number, arg1: (param0: number, param1: Rational) => Rational): QMatrix;
    mapRowAndSet(arg0: number, arg1: (param0: number, param1: Rational) => Rational): QMatrix;
    mergeToAugmented(arg0: QMatrix): QMatrix$Augmented;
    multiply(arg0: Rational): QMatrix;
    multiply(arg0: QMatrix): QMatrix;
    multiply(arg0: QVector): QVector;
    multiplyAndSet(arg0: Rational): QMatrix;
    multiplyAndSet(arg0: QMatrix): QMatrix;
    multiplyAndSet(arg0: QVector): QVector;
    set(arg0: number, arg1: number, arg2: Rational): QMatrix;
    setColumn(arg0: number, arg1: QVector): QMatrix;
    setRow(arg0: number, arg1: QVector): QMatrix;
    splitToAugmented(arg0: number): QMatrix$Augmented;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): QMatrix;
    subCopy(arg0: number, arg1: number, arg2: number, arg3: number): QMatrix;
    subtract(arg0: QMatrix): QMatrix;
    subtractAndSet(arg0: QMatrix): QMatrix;
    swap(arg0: number, arg1: number, arg2: number, arg3: number): QMatrix;
    swapAndSet(arg0: number, arg1: number, arg2: number, arg3: number): QMatrix;
    swapColumns(arg0: number, arg1: number): QMatrix;
    swapColumnsAndSet(arg0: number, arg1: number): QMatrix;
    swapRows(arg0: number, arg1: number): QMatrix;
    swapRowsAndSet(arg0: number, arg1: number): QMatrix;
    toGenerator(): (param0: number, param1: number) => Rational;
    toMapper(): (param0: number, param1: number, param2: Rational) => Rational;
    toString(): string;
    transpose(): QMatrix;
    transposeAndSet(): QMatrix;
    with(arg0: number, arg1: number, arg2: Rational): QMatrix;
    withColumn(arg0: number, arg1: QVector): QMatrix;
    withRow(arg0: number, arg1: QVector): QMatrix;
}