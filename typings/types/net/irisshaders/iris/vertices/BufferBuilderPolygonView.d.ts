import type { Object } from '../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../net/irisshaders/iris/vertices/views/QuadView.d.ts'
export class BufferBuilderPolygonView extends Object implements QuadView {
    constructor()
    // private pointer: number;
    // private positionOffset: number;
    // private uvOffset: number;
    // private writeOffsets: number[];
    setup(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    u(arg0: number): number;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}