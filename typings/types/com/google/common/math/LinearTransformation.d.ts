import type { LinearTransformation$LinearTransformationBuilder } from '../../../../com/google/common/math/LinearTransformation$LinearTransformationBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LinearTransformation extends Object {
    static forNaN(): LinearTransformation;
    static horizontal(paramy: number): LinearTransformation;
    static mapping(paramx1: number, paramy1: number): LinearTransformation$LinearTransformationBuilder;
    static vertical(paramx: number): LinearTransformation;
    constructor()
    inverse(): LinearTransformation;
    isHorizontal(): boolean;
    isVertical(): boolean;
    slope(): number;
    transform(x: number): number;
}