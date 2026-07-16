import type { ProjectionType$LayeringTransform } from '../../../com/mojang/blaze3d/ProjectionType$LayeringTransform.d.ts'
import type { VertexSorting } from '../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Matrix4f } from '../../../org/joml/Matrix4f.d.ts'
export class ProjectionType extends Enum<ProjectionType> {
    static ORTHOGRAPHIC: ProjectionType;
    static PERSPECTIVE: ProjectionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ProjectionType;
    static values(): ProjectionType[];
    private constructor(vertexSorting: VertexSorting, layeringTransform: (param0: Matrix4f, param1: number) => void)
    // private layeringTransform: (param0: Matrix4f, param1: number) => void;
    // private vertexSorting: VertexSorting;
    applyLayeringTransform(matrix: Matrix4f, bias: number): void;
    vertexSorting(): VertexSorting;
    name(): "PERSPECTIVE" | "ORTHOGRAPHIC";
}