import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class Composer extends Object {
    constructor(writer: InternalJsonWriter)
    writer: InternalJsonWriter;
    readonly writingFirst: boolean;
    indent(): void;
    nextItem(): void;
    nextItemIfNotFirst(): void;
    print(v: boolean): void;
    print(v: number): void;
    print(v: string): void;
    printQuoted(value: string): void;
    space(): void;
    unIndent(): void;
}