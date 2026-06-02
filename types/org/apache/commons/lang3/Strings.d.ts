import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Strings$Builder } from '../../../../org/apache/commons/lang3/Strings$Builder.d.ts'
export abstract class Strings extends Object {
    static CI: Strings;
    static CS: Strings;
    static builder(): Strings$Builder;
    private constructor(arg0: boolean, arg1: boolean)
    // private ignoreCase: boolean;
    // private nullIsLess: boolean;
    appendIfMissing(arg0: string, arg1: CharSequence, arg2: CharSequence[]): string;
    compare(arg0: string, arg1: string): number;
    contains(arg0: CharSequence, arg1: CharSequence): boolean;
    containsAny(arg0: CharSequence, arg1: CharSequence[]): boolean;
    endsWith(arg0: CharSequence, arg1: CharSequence): boolean;
    endsWithAny(arg0: CharSequence, arg1: CharSequence[]): boolean;
    equals(arg0: CharSequence, arg1: CharSequence): boolean;
    equals(arg0: string, arg1: string): boolean;
    equalsAny(arg0: CharSequence, arg1: CharSequence[]): boolean;
    indexOf(arg0: CharSequence, arg1: CharSequence): number;
    indexOf(arg0: CharSequence, arg1: CharSequence, arg2: number): number;
    isCaseSensitive(): boolean;
    isNullIsLess(): boolean;
    lastIndexOf(arg0: CharSequence, arg1: CharSequence): number;
    lastIndexOf(arg0: CharSequence, arg1: CharSequence, arg2: number): number;
    prependIfMissing(arg0: string, arg1: CharSequence, arg2: CharSequence[]): string;
    remove(arg0: string, arg1: string): string;
    removeEnd(arg0: string, arg1: CharSequence): string;
    removeStart(arg0: string, arg1: CharSequence): string;
    replace(arg0: string, arg1: string, arg2: string): string;
    replace(arg0: string, arg1: string, arg2: string, arg3: number): string;
    replaceOnce(arg0: string, arg1: string, arg2: string): string;
    startsWith(arg0: CharSequence, arg1: CharSequence): boolean;
    startsWithAny(arg0: CharSequence, arg1: CharSequence[]): boolean;
}