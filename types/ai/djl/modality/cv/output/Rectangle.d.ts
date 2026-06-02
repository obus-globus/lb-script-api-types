import type { BoundingBox } from '../../../../../ai/djl/modality/cv/output/BoundingBox.d.ts'
import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { JsonSerializable } from '../../../../../ai/djl/util/JsonSerializable.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Rectangle extends Object implements BoundingBox, JsonSerializable {
    static nms(paramarg0: Rectangle[], paramarg1: number[], paramarg2: number): number[];
    constructor(arg0: Point, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private corners: Point[];
    readonly height: number;
    readonly width: number;
    // private boxIou(arg0: Rectangle): number;
    getAsString(): string;
    getBounds(): Rectangle;
    getCoordinates(): number[];
    getHeight(): number;
    getIoU(arg0: BoundingBox): number;
    getPath(): Point[];
    getPoint(): Point;
    getWidth(): number;
    getX(): number;
    getY(): number;
    // private intersection(arg0: Rectangle): number;
    // private overlap(arg0: number, arg1: number, arg2: number, arg3: number): number;
    serialize(): JsonObject;
    toByteBuffer(): ByteBuffer;
    toJson(): string;
    toString(): string;
}