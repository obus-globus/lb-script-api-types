import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StringBuilderWriter extends Writer implements Serializable {
    static nullWriter(): Writer;
    constructor()
    constructor(arg0: StringBuilder)
    constructor(arg0: number)
    readonly builder: StringBuilder;
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    getBuilder(): StringBuilder;
    toString(): string;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}