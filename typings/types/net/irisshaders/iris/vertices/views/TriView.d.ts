import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PolygonView } from '../../../../../net/irisshaders/iris/vertices/views/PolygonView.d.ts'
export interface TriView extends Object, PolygonView{
    u(arg0: number): number;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}