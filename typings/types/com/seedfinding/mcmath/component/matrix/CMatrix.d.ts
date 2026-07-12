import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CMatrix$Augmented } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Augmented.d.ts'
import type { CMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Generator.d.ts'
import type { CMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Mapper.d.ts'
import type { CVector } from '../../../../../com/seedfinding/mcmath/component/vector/CVector.d.ts'
import type { CVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Mapper.d.ts'
import type { CVector$View } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$View.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CMatrix extends Object {
    static identity(paramarg0: number): CMatrix;
    static zero(paramarg0: number, paramarg1: number): CMatrix;
    constructor(...arg0: CVector[])
    constructor(...arg0: Complex[][])
    constructor(arg0: number, arg1: (param0: number, param1: number) => Complex)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: (param0: number, param1: number) => Complex)
    // private elements: Complex[][];
    add(arg0: CMatrix): CMatrix;
    addAndSet(arg0: CMatrix): CMatrix;
    copy(): CMatrix;
    divide(arg0: Complex): CMatrix;
    divideAndSet(arg0: Complex): CMatrix;
    equals(arg0: Object | null): boolean;
    get(arg0: number, arg1: number): Complex;
    getColumn(arg0: number): CVector$View;
    getColumnCopy(arg0: number): CVector;
    getColumnCount(): number;
    getColumns(): CVector$View[];
    getColumnsCopy(): CVector[];
    getRow(arg0: number): CVector$View;
    getRowCopy(arg0: number): CVector;
    getRowCount(): number;
    getRows(): CVector$View[];
    getRowsCopy(): CVector[];
    hashCode(): number;
    isSquare(): boolean;
    map(arg0: (param0: number, param1: number, param2: Complex) => Complex): CMatrix;
    mapAndSet(arg0: (param0: number, param1: number, param2: Complex) => Complex): CMatrix;
    mapColumn(arg0: number, arg1: (param0: number, param1: Complex) => Complex): CMatrix;
    mapColumnAndSet(arg0: number, arg1: (param0: number, param1: Complex) => Complex): CMatrix;
    mapRow(arg0: number, arg1: (param0: number, param1: Complex) => Complex): CMatrix;
    mapRowAndSet(arg0: number, arg1: (param0: number, param1: Complex) => Complex): CMatrix;
    mergeToAugmented(arg0: CMatrix): CMatrix$Augmented;
    multiply(arg0: Complex): CMatrix;
    multiply(arg0: CMatrix): CMatrix;
    multiply(arg0: CVector): CVector;
    multiplyAndSet(arg0: Complex): CMatrix;
    multiplyAndSet(arg0: CMatrix): CMatrix;
    multiplyAndSet(arg0: CVector): CVector;
    set(arg0: number, arg1: number, arg2: Complex): CMatrix;
    setColumn(arg0: number, arg1: CVector): CMatrix;
    setRow(arg0: number, arg1: CVector): CMatrix;
    splitToAugmented(arg0: number): CMatrix$Augmented;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): CMatrix;
    subCopy(arg0: number, arg1: number, arg2: number, arg3: number): CMatrix;
    subtract(arg0: CMatrix): CMatrix;
    subtractAndSet(arg0: CMatrix): CMatrix;
    swap(arg0: number, arg1: number, arg2: number, arg3: number): CMatrix;
    swapAndSet(arg0: number, arg1: number, arg2: number, arg3: number): CMatrix;
    swapColumns(arg0: number, arg1: number): CMatrix;
    swapColumnsAndSet(arg0: number, arg1: number): CMatrix;
    swapRows(arg0: number, arg1: number): CMatrix;
    swapRowsAndSet(arg0: number, arg1: number): CMatrix;
    toGenerator(): (param0: number, param1: number) => Complex;
    toMapper(): (param0: number, param1: number, param2: Complex) => Complex;
    toString(): string;
    transpose(): CMatrix;
    transposeAndSet(): CMatrix;
    with(arg0: number, arg1: number, arg2: Complex): CMatrix;
    withColumn(arg0: number, arg1: CVector): CMatrix;
    withRow(arg0: number, arg1: CVector): CMatrix;
}