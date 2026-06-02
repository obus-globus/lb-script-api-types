import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Entity$Movement extends Record {
    constructor(from: Vec3, to: Vec3)
    constructor(from: Vec3, to: Vec3, axisDependentOriginalMovement: Optional<Vec3>)
    constructor(from: Vec3, to: Vec3, axisDependentOriginalMovement: Vec3)
    // private axisDependentOriginalMovement: Optional<Vec3>;
    // private from: Vec3;
    // private to: Vec3;
    axisDependentOriginalMovement(): Optional<Vec3>;
    equals(o: Object | null): boolean;
    from(): Vec3;
    hashCode(): number;
    to(): Vec3;
    toString(): string;
}