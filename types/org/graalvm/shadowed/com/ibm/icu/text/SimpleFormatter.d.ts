import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class SimpleFormatter extends Object {
    static compile(parampattern: CharSequence): SimpleFormatter;
    static compileMinMaxArguments(parampattern: CharSequence, parammin: number, parammax: number): SimpleFormatter;
    private constructor(compiledPattern: string)
    // private compiledPattern: string;
    format(values: CharSequence[]): string;
    formatAndAppend(appendTo: StringBuilder, offsets: number[], values: CharSequence[]): StringBuilder;
    formatAndReplace(result: StringBuilder, offsets: number[], values: CharSequence[]): StringBuilder;
    getArgumentLimit(): number;
    getTextWithNoArguments(): string;
    toString(): string;
}