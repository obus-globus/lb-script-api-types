import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { YOLOv3Loss } from '../../../../ai/djl/training/loss/YOLOv3Loss.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YOLOv3Loss$Builder extends Object {
    constructor()
    // private anchorsArray: number[];
    // private ignoreThreshold: number;
    // private inputShape: Shape;
    // private name: string;
    // private numClasses: number;
    build(): YOLOv3Loss;
    optIgnoreThreshold(arg0: number): YOLOv3Loss$Builder;
    setAnchorsArray(arg0: number[]): YOLOv3Loss$Builder;
    setInputShape(arg0: Shape): YOLOv3Loss$Builder;
    setName(arg0: string): YOLOv3Loss$Builder;
    setNumClasses(arg0: number): YOLOv3Loss$Builder;
}