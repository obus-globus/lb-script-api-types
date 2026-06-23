import type { Object } from '../../../java/lang/Object.d.ts'
export interface CubicSpline$CoordinateVisitor<I extends unknown> extends Object{
    visit(input: I): I;
}