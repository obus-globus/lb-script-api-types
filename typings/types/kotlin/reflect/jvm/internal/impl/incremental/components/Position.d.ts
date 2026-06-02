import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Position$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/Position$Companion.d.ts'
export class Position extends Object implements Serializable {
    static Companion: Position$Companion;
    constructor(arg0: number, arg1: number)
    // private column: number;
    // private line: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}