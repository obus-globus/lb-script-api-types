import type { ColognePhonetic$CologneBuffer } from '../../../../../org/apache/commons/codec/language/ColognePhonetic$CologneBuffer.d.ts'
export class ColognePhonetic$CologneInputBuffer extends ColognePhonetic$CologneBuffer {
    constructor(null_: ColognePhonetic$CologneInputBuffer, arg1: string[])
    copyData(arg0: number, arg1: number): string[];
    getNextChar(): string;
    getNextPos(): number;
    removeNext(): string;
}