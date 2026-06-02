import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { Flushable } from '../../../../../../../java/io/Flushable.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class JsonWriter extends Object implements Closeable, Flushable {
    constructor(arg0: Writer)
    // private deferredName: string;
    readonly htmlSafe: boolean;
    readonly indent: string;
    readonly lenient: boolean;
    // private out: Writer;
    // private separator: string;
    readonly serializeNulls: boolean;
    // private stack: number[];
    // private stackSize: number;
    // private beforeName(): void;
    // private beforeValue(arg0: boolean): void;
    beginArray(): JsonWriter;
    beginObject(): JsonWriter;
    close(): void;
    // private close(arg0: number, arg1: number, arg2: string): JsonWriter;
    endArray(): JsonWriter;
    endObject(): JsonWriter;
    flush(): void;
    getSerializeNulls(): boolean;
    isHtmlSafe(): boolean;
    isLenient(): boolean;
    name(arg0: string): JsonWriter;
    // private newline(): void;
    nullValue(): JsonWriter;
    // private open(arg0: number, arg1: string): JsonWriter;
    // private peek(): number;
    // private push(arg0: number): void;
    // private replaceTop(arg0: number): void;
    setHtmlSafe(arg0: boolean): void;
    setIndent(arg0: string): void;
    setLenient(arg0: boolean): void;
    setSerializeNulls(arg0: boolean): void;
    // private string(arg0: string): void;
    value(arg0: boolean): JsonWriter;
    value(arg0: number): JsonWriter;
    value(arg0: Number): JsonWriter;
    value(arg0: string): JsonWriter;
    // private writeDeferredName(): void;
}