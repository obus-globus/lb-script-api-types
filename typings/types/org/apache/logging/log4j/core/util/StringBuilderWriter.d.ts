import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class StringBuilderWriter extends Writer implements Serializable {
    static nullWriter(): Writer;
    constructor()
    constructor(builder: StringBuilder)
    constructor(capacity: number)
    readonly builder: StringBuilder;
    append(value: string): Writer;
    append(value: CharSequence): Writer;
    append(value: CharSequence, start: number, end: number): Writer;
    close(): void;
    flush(): void;
    getBuilder(): StringBuilder;
    toString(): string;
    write(value: string[], offset: number, length: number): void;
    write(value: string): void;
}