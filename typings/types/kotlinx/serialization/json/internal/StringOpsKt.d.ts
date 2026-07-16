import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringOpsKt extends Object {
    static getESCAPE_MARKERS(): number[];
    static getESCAPE_STRINGS(): string[];
    static printQuoted(paramarg0: StringBuilder, paramarg1: string): void;
    static toBooleanStrictOrNull(paramarg0: string): boolean;
}