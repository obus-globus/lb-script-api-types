import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Matrix4fStack } from '../../../../../org/joml/Matrix4fStack.d.ts'
export class LayeringTransform extends Object {
    static NO_LAYERING: LayeringTransform;
    static VIEW_OFFSET_Z_LAYERING: LayeringTransform;
    static VIEW_OFFSET_Z_LAYERING_FORWARD: LayeringTransform;
    constructor(name: string, modifier: (param0: Matrix4fStack) => void)
    readonly modifier: (param0: Matrix4fStack) => void;
    // private name: string;
    getModifier(): (param0: Matrix4fStack) => void;
    toString(): string;
}