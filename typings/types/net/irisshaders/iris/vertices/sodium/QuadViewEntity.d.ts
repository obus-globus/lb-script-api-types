import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../net/irisshaders/iris/vertices/views/QuadView.d.ts'
export class QuadViewEntity extends Object implements QuadView {
    constructor()
    // private stride: number;
    // private writePointer: number;
    setup(arg0: number, arg1: number): void;
    u(arg0: number): number;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}