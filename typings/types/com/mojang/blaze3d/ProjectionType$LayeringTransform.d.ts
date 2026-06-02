import type { Object } from '../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../org/joml/Matrix4f.d.ts'
export interface ProjectionType$LayeringTransform extends Object{
    apply(matrix: Matrix4f, bias: number): void;
}