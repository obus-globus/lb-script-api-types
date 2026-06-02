import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DataDesc extends Object {
    constructor(arg0: Shape)
    constructor(arg0: Shape, arg1: DataType)
    constructor(arg0: Shape, arg1: DataType, arg2: string)
    constructor(arg0: Shape, arg1: string)
    readonly dataType: DataType;
    readonly name: string;
    readonly shape: Shape;
    getDataType(): DataType;
    getName(): string;
    getShape(): Shape;
    setDataType(arg0: DataType): void;
    setName(arg0: string): void;
    setShape(arg0: Shape): void;
    toString(): string;
}