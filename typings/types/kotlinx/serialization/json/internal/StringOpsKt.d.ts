import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringOpsKt extends Object {
    static getESCAPE_MARKERS(): number[];
    static getESCAPE_STRINGS(): string[];
    static printQuoted(self: StringBuilder, value: string): void;
    static toBooleanStrictOrNull(self: string): boolean | null;
}