import type { LinearTransformation } from '../../../../com/google/common/math/LinearTransformation.d.ts'
import type { LinearTransformation$LinearTransformationBuilder } from '../../../../com/google/common/math/LinearTransformation$LinearTransformationBuilder.d.ts'
export class LinearTransformation$VerticalLinearTransformation extends LinearTransformation {
    static forNaN(): LinearTransformation;
    static horizontal(paramy: number): LinearTransformation;
    static mapping(paramx1: number, paramy1: number): LinearTransformation$LinearTransformationBuilder;
    static vertical(paramx: number): LinearTransformation;
    constructor(x: number)
    constructor(x: number, inverse: LinearTransformation)
    // private inverse: LinearTransformation;
    // private x: number;
    // private createInverse(): LinearTransformation;
    inverse(): LinearTransformation;
    isHorizontal(): boolean;
    isVertical(): boolean;
    slope(): number;
    toString(): string;
    transform(x: number): number;
}