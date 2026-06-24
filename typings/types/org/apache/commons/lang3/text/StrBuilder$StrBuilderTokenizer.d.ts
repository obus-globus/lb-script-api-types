import type { StrBuilder } from '../../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
import type { StrTokenizer } from '../../../../../org/apache/commons/lang3/text/StrTokenizer.d.ts'
export class StrBuilder$StrBuilderTokenizer extends StrTokenizer {
    static getCSVInstance(): StrTokenizer;
    static getCSVInstance(paramarg0: string[]): StrTokenizer;
    static getCSVInstance(paramarg0: string): StrTokenizer;
    static getTSVInstance(): StrTokenizer;
    static getTSVInstance(paramarg0: string[]): StrTokenizer;
    static getTSVInstance(paramarg0: string): StrTokenizer;
    constructor(null_: StrBuilder)
    getContent(): string;
    tokenize(arg0: string[], arg1: number, arg2: number): string[];
}