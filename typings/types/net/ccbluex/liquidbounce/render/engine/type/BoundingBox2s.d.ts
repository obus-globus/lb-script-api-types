import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { UV2f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/UV2f.d.ts'
export class BoundingBox2s extends Record {
    constructor(xMin: number, yMin: number, xMax: number, yMax: number)
    constructor(rect: BoundingBox2f)
    constructor(min: UV2f, max: UV2f)
    // private max: UV2f;
    /*not mapped: */ max(): UV2f;
    // private min: UV2f;
    /*not mapped: */ min(): UV2f;
    component1(): UV2f;
    component2(): UV2f;
    copy(min: UV2f, max: UV2f): BoundingBox2s;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}