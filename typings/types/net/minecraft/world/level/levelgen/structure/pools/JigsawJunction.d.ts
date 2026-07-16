import type { Dynamic } from '../../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructureTemplatePool$Projection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool$Projection.d.ts'
export class JigsawJunction extends Object {
    static deserialize<T extends unknown>(paraminput: Dynamic<T>): JigsawJunction;
    constructor(sourceX: number, sourceGroundY: number, sourceZ: number, deltaY: number, destProjection: StructureTemplatePool$Projection)
    readonly deltaY: number;
    readonly destProjection: StructureTemplatePool$Projection;
    readonly sourceGroundY: number;
    readonly sourceX: number;
    readonly sourceZ: number;
    equals(o: Object | null): boolean;
    getDeltaY(): number;
    getDestProjection(): StructureTemplatePool$Projection;
    getSourceGroundY(): number;
    getSourceX(): number;
    getSourceZ(): number;
    hashCode(): number;
    serialize<T extends unknown>(ops: DynamicOps<T>): Dynamic<T>;
    toString(): string;
}