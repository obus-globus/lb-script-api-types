import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { JsonSerializable } from '../../../../../ai/djl/util/JsonSerializable.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CategoryMask extends Object implements JsonSerializable {
    constructor(arg0: string[], arg1: number[][])
    readonly classes: string[];
    readonly mask: number[][];
    drawMask(arg0: Image, arg1: number): void;
    drawMask(arg0: Image, arg1: number, arg2: number): void;
    drawMask(arg0: Image, arg1: number, arg2: number, arg3: number): void;
    // private generateColors(arg0: number, arg1: number): number[];
    getAsString(): string;
    getBackgroundImage(arg0: Image): Image;
    getClasses(): string[];
    // private getColorOverlay(arg0: number[]): Image;
    getMask(): number[][];
    getMaskImage(arg0: Image): Image;
    getMaskImage(arg0: Image, arg1: number): Image;
    serialize(): JsonElement;
    toByteBuffer(): ByteBuffer;
    toJson(): string;
    toString(): string;
}