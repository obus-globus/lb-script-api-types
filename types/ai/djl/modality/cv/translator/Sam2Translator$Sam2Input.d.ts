import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Rectangle } from '../../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { Sam2Translator$Sam2Input$Builder } from '../../../../../ai/djl/modality/cv/translator/Sam2Translator$Sam2Input$Builder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Sam2Translator$Sam2Input extends Object {
    static builder(paramarg0: Image): Sam2Translator$Sam2Input$Builder;
    static fromJson(paramarg0: string): Sam2Translator$Sam2Input;
    constructor(arg0: Image, arg1: Point[], arg2: number[])
    constructor(arg0: Image, arg1: Point[], arg2: number[], arg3: boolean)
    readonly image: Image;
    // private labels: number[];
    readonly points: Point[];
    readonly visualize: boolean;
    getBoxes(): Rectangle[];
    getImage(): Image;
    getLabels(): number[][];
    getPoints(): Point[];
    isVisualize(): boolean;
    toLocationArray(arg0: number, arg1: number): number[];
}