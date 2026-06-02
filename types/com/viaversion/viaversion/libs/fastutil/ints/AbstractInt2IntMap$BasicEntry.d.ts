import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractInt2IntMap$BasicEntry extends Object implements Int2IntMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getIntKey(): number;
    getIntValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}