import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SkinData$AnimationData extends Record {
    constructor(image: BufferedImage, type: number, frames: number, expression: number)
    // private expression: number;
    // private frames: number;
    // private image: BufferedImage;
    // private type: number;
    equals(arg0: Object | null): boolean;
    expression(): number;
    frames(): number;
    hashCode(): number;
    image(): BufferedImage;
    toString(): string;
    type(): number;
}