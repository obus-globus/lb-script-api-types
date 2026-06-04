import type { Image } from '../../../../ai/djl/modality/cv/Image.d.ts'
import type { Image$Flag } from '../../../../ai/djl/modality/cv/Image$Flag.d.ts'
import type { BoundingBox } from '../../../../ai/djl/modality/cv/output/BoundingBox.d.ts'
import type { DetectedObjects } from '../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { Joints } from '../../../../ai/djl/modality/cv/output/Joints.d.ts'
import type { Joints$Joint } from '../../../../ai/djl/modality/cv/output/Joints$Joint.d.ts'
import type { Mask } from '../../../../ai/djl/modality/cv/output/Mask.d.ts'
import type { Point } from '../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Rectangle } from '../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Graphics2D } from '../../../../java/awt/Graphics2D.d.ts'
import type { BufferedImage } from '../../../../java/awt/image/BufferedImage.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BufferedImageFactory$BufferedImageWrapper extends Object implements Image {
    constructor(null_: BufferedImageFactory$BufferedImageWrapper, arg1: BufferedImage)
    // private image: BufferedImage;
    // private convertIdNeeded(): void;
    createStar(arg0: Point, arg1: number): number[][];
    drawBoundingBoxes(arg0: DetectedObjects): void;
    drawBoundingBoxes(arg0: DetectedObjects, arg1: number): void;
    drawImage(arg0: Image, arg1: boolean): void;
    drawJoints(arg0: Joints): void;
    // private drawLandmarks(arg0: BoundingBox): void;
    // private drawLine(arg0: Graphics2D, arg1: Joints$Joint, arg2: Joints$Joint, arg3: number, arg4: number): void;
    drawMarks(arg0: Point[]): void;
    drawMarks(arg0: Point[], arg1: number): void;
    // private drawMask(arg0: Mask, arg1: number): void;
    drawRectangle(arg0: Rectangle, arg1: number, arg2: number): void;
    // private drawText(arg0: Graphics2D, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
    duplicate(): Image;
    findBoundingBoxes(): BoundingBox[];
    getHeight(): number;
    getMask(arg0: number[][]): Image;
    getSubImage(arg0: number, arg1: number, arg2: number, arg3: number): Image;
    getWidth(): number;
    getWrappedImage(): BufferedImage;
    resize(arg0: number, arg1: number, arg2: boolean): BufferedImageFactory$BufferedImageWrapper;
    save(arg0: OutputStream, arg1: string): void;
    toNDArray(arg0: NDManager): NDArray;
    toNDArray(arg0: NDManager, arg1: Image$Flag): NDArray;
}