import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class SimpleFormatter extends Object {
    static compile(paramarg0: CharSequence): SimpleFormatter;
    static compileMinMaxArguments(paramarg0: CharSequence, paramarg1: number, paramarg2: number): SimpleFormatter;
    private constructor(arg0: string)
    // private compiledPattern: string;
    format(...arg0: CharSequence[]): string;
    formatAndAppend(arg0: StringBuilder, arg1: number[], ...arg2: CharSequence[]): StringBuilder;
    formatAndReplace(arg0: StringBuilder, arg1: number[], ...arg2: CharSequence[]): StringBuilder;
    getArgumentLimit(): number;
    getTextWithNoArguments(): string;
    toString(): string;
}