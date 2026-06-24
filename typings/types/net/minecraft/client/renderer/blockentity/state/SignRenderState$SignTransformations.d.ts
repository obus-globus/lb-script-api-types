import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SignRenderState$SignTransformations extends Record {
    static IDENTITY: SignRenderState$SignTransformations;
    constructor(frontText: Transformation, backText: Transformation)
    // private backText: Transformation;
    // private frontText: Transformation;
    backText(): Transformation;
    equals(o: Object | null): boolean;
    frontText(): Transformation;
    hashCode(): number;
    toString(): string;
}