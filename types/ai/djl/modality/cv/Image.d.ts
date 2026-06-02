import type { Image$Flag } from '../../../../ai/djl/modality/cv/Image$Flag.d.ts'
import type { BoundingBox } from '../../../../ai/djl/modality/cv/output/BoundingBox.d.ts'
import type { DetectedObjects } from '../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { Joints } from '../../../../ai/djl/modality/cv/output/Joints.d.ts'
import type { Point } from '../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Rectangle } from '../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Image extends Object{
    createStar(arg0: Point, arg1: number): number[][];
    drawBoundingBoxes(arg0: DetectedObjects): void;
    drawBoundingBoxes(arg0: DetectedObjects, arg1: number): void;
    drawImage(arg0: Image, arg1: boolean): void;
    drawJoints(arg0: Joints): void;
    drawMarks(arg0: Point[]): void;
    drawMarks(arg0: Point[], arg1: number): void;
    drawRectangle(arg0: Rectangle, arg1: number, arg2: number): void;
    duplicate(): Image;
    findBoundingBoxes(): BoundingBox[];
    getHeight(): number;
    getMask(arg0: number[][]): Image;
    getSubImage(arg0: number, arg1: number, arg2: number, arg3: number): Image;
    getWidth(): number;
    getWrappedImage(): Object;
    resize(arg0: number, arg1: number, arg2: boolean): Image;
    save(arg0: OutputStream, arg1: string): void;
    toNDArray(arg0: NDManager): NDArray;
    toNDArray(arg0: NDManager, arg1: Image$Flag): NDArray;
}