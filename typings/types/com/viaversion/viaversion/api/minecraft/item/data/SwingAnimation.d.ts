import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SwingAnimation extends Record {
    static TYPE: Type<SwingAnimation>;
    constructor(type: number, duration: number)
    // private duration: number;
    // private type: number;
    duration(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): number;
}