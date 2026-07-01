import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Strings } from '../../../../org/apache/commons/lang3/Strings.d.ts'
import type { Strings$Builder } from '../../../../org/apache/commons/lang3/Strings$Builder.d.ts'
export class Strings$CiStrings extends Strings {
    static CI: Strings;
    static CS: Strings;
    static builder(): Strings$Builder;
    constructor(arg0: boolean, arg1: any)
    compare(arg0: string, arg1: string): number;
    contains(arg0: CharSequence, arg1: CharSequence): boolean;
    equals(other: Object | null): boolean;
    equals(arg0: CharSequence, arg1: CharSequence): boolean;
    equals(arg0: string, arg1: string): boolean;
    indexOf(arg0: CharSequence, arg1: CharSequence): number;
    indexOf(arg0: CharSequence, arg1: CharSequence, arg2: number): number;
    lastIndexOf(arg0: CharSequence, arg1: CharSequence): number;
    lastIndexOf(arg0: CharSequence, arg1: CharSequence, arg2: number): number;
}