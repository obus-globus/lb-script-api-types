import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleMetaphone } from '../../../../../org/apache/commons/codec/language/DoubleMetaphone.d.ts'
export class DoubleMetaphone$DoubleMetaphoneResult extends Object {
    constructor(null_: DoubleMetaphone, arg1: number)
    readonly alternate: StringBuilder;
    // private maxLength: number;
    readonly primary: StringBuilder;
    append(arg0: string): void;
    append(arg0: string, arg1: string): void;
    appendAlternate(arg0: string): void;
    appendPrimary(arg0: string): void;
    getAlternate(): string;
    getPrimary(): string;
    isComplete(): boolean;
}