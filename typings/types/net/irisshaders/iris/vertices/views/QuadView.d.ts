import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TriView } from '../../../../../net/irisshaders/iris/vertices/views/TriView.d.ts'
export interface QuadView extends Object, TriView{
    u(arg0: number): number;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}