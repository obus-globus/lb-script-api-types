import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityProperties extends Record {
    constructor(intProperties: Int2IntMap, floatProperties: Int2ObjectMap<number>)
    // private floatProperties: Int2ObjectMap<number>;
    // private intProperties: Int2IntMap;
    equals(arg0: Object | null): boolean;
    floatProperties(): Int2ObjectMap<number>;
    hashCode(): number;
    intProperties(): Int2IntMap;
    toString(): string;
}