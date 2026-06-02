import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Sam2Translator$Sam2Input } from '../../../../../ai/djl/modality/cv/translator/Sam2Translator$Sam2Input.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Sam2Translator$Sam2Input$Builder extends Object {
    constructor(arg0: Image)
    // private image: Image;
    // private labels: number[];
    // private points: Point[];
    // private visualize: boolean;
    addBox(arg0: number, arg1: number, arg2: number, arg3: number): Sam2Translator$Sam2Input$Builder;
    addPoint(arg0: Point, arg1: number): Sam2Translator$Sam2Input$Builder;
    addPoint(arg0: number, arg1: number): Sam2Translator$Sam2Input$Builder;
    addPoint(arg0: number, arg1: number, arg2: number): Sam2Translator$Sam2Input$Builder;
    build(): Sam2Translator$Sam2Input;
    visualize(): Sam2Translator$Sam2Input$Builder;
}