import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Rectangle } from '../../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BoundingBox extends Serializable, Object{
    getBounds(): Rectangle;
    getIoU(arg0: BoundingBox): number;
    getPath(): Point[];
    getPoint(): Point;
}