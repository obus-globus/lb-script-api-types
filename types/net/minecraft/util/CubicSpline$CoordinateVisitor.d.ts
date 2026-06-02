import type { Object } from '../../../java/lang/Object.d.ts'
export interface CubicSpline$CoordinateVisitor<I extends Object | number | string | boolean> extends Object{
    visit(input: I): I;
}