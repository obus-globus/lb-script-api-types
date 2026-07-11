import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EnumBit } from '../../../../../../../net/caffeinemc/mods/sodium/client/gpu/util/EnumBit.d.ts'
export class EnumBitField<T extends Enum<T> & EnumBit> extends Object {
    static of(...paramarg0: Object | null): EnumBitField<any>;
    private constructor(arg0: T[])
    // private bitfield: number;
    // private set: T[];
    contains(arg0: T): boolean;
    getBitField(): number;
}