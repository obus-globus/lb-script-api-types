import type { Holder } from '../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { Int2IntFunction } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SoundEvent extends Record {
    constructor(identifier: string, fixedRange: number)
    // private fixedRange: number;
    // private identifier: string;
    equals(arg0: Object | null): boolean;
    fixedRange(): number;
    hashCode(): number;
    identifier(): string;
    toString(): string;
    withIdentifier(arg0: string): SoundEvent;
}