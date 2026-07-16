import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EnumBit } from '../../../../../../../net/caffeinemc/mods/sodium/client/gpu/util/EnumBit.d.ts'
export class EnumBitField<T extends Enum<T> & EnumBit> extends Object {
    static of<T extends Enum<T> & EnumBit>(...paramarg0: T[]): EnumBitField<T>;
    private constructor(arg0: T[])
    // private bitfield: number;
    // private set: T[];
    contains(arg0: T): boolean;
    getBitField(): number;
}