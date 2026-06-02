import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TropicalFishPattern extends Record {
    static TYPE: Type<TropicalFishPattern>;
    // private packedId: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packedId(): number;
    sizeId(): number;
    sizeSpecificId(): number;
    toString(): string;
}