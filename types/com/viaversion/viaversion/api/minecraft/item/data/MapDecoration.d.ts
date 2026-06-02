import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MapDecoration extends Record {
    static TYPE: Type<MapDecoration>;
    // private rotation: number;
    // private type: string;
    // private x: number;
    // private z: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rotation(): number;
    toString(): string;
    type(): string;
    x(): number;
    z(): number;
}