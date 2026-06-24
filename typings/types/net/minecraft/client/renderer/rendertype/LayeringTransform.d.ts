import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class LayeringTransform extends Object {
    static NO_LAYERING: LayeringTransform;
    static VIEW_OFFSET_Z_LAYERING: LayeringTransform;
    static VIEW_OFFSET_Z_LAYERING_FORWARD: LayeringTransform;
    constructor(name: string, modifier: (param0: Matrix4f) => void)
    readonly modifier: (param0: Matrix4f) => void;
    // private name: string;
    getModifier(): (param0: Matrix4f) => void;
    toString(): string;
}