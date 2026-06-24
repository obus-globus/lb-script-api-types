import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelPart$Vertex } from '../../../../../net/minecraft/client/model/geom/ModelPart$Vertex.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ModelPart$Polygon extends Record {
    constructor(vertices: ModelPart$Vertex[], u0: number, v0: number, u1: number, v1: number, xTexSize: number, yTexSize: number, mirror: boolean, facing: Direction)
    constructor(vertices: ModelPart$Vertex[], normal: Vector3fc)
    // private normal: Vector3fc;
    // private vertices: ModelPart$Vertex[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    normal(): Vector3fc;
    toString(): string;
    vertices(): ModelPart$Vertex[];
}