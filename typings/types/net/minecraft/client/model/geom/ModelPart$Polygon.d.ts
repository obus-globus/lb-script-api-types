import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelPart$Vertex } from '../../../../../net/minecraft/client/model/geom/ModelPart$Vertex.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ModelPart$Polygon extends Record {
    // private normal: Vector3fc;
    // private vertices: ModelPart$Vertex[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    normal(): Vector3fc;
    toString(): string;
    vertices(): ModelPart$Vertex[];
}