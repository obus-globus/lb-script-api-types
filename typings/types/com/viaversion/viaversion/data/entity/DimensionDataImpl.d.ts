import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DimensionData } from '../../../../../com/viaversion/viaversion/api/data/entity/DimensionData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DimensionDataImpl extends Object implements DimensionData {
    static withDefaultsFor(paramarg0: string, paramarg1: number): DimensionData;
    constructor(arg0: number, arg1: Map$Entry<string, Tag>[])
    constructor(arg0: number, arg1: number, arg2: number)
    // private height: number;
    // private id: number;
    // private minY: number;
    height(): number;
    id(): number;
    minY(): number;
    toString(): string;
}