import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage$ModelSubmit } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage$ModelSubmit.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class SubmitNodeStorage$TranslucentModelSubmit<S extends Object | number | string | boolean> extends Record {
    constructor(modelSubmit: SubmitNodeStorage$ModelSubmit<S>, renderType: RenderType, position: Vector3f)
    // private modelSubmit: SubmitNodeStorage$ModelSubmit<S>;
    // private position: Vector3f;
    // private renderType: RenderType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelSubmit(): SubmitNodeStorage$ModelSubmit<S>;
    position(): Vector3f;
    renderType(): RenderType;
    toString(): string;
}