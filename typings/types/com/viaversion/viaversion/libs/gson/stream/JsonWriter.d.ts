import type { FormattingStyle } from '../../../../../../com/viaversion/viaversion/libs/gson/FormattingStyle.d.ts'
import type { Strictness } from '../../../../../../com/viaversion/viaversion/libs/gson/Strictness.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Flushable } from '../../../../../../java/io/Flushable.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JsonWriter extends Object implements Closeable, Flushable {
    constructor(arg0: Writer)
    // private deferredName: string;
    // private formattedColon: string;
    // private formattedComma: string;
    readonly formattingStyle: FormattingStyle;
    readonly htmlSafe: boolean;
    // private out: Writer;
    readonly serializeNulls: boolean;
    // private stack: number[];
    // private stackSize: number;
    readonly strictness: Strictness;
    // private usesEmptyNewlineAndIndent: boolean;
    // private beforeName(): void;
    // private beforeValue(): void;
    beginArray(): JsonWriter;
    beginObject(): JsonWriter;
    close(): void;
    // private closeScope(arg0: number, arg1: number, arg2: string): JsonWriter;
    endArray(): JsonWriter;
    endObject(): JsonWriter;
    flush(): void;
    getFormattingStyle(): FormattingStyle;
    getSerializeNulls(): boolean;
    getStrictness(): Strictness;
    isHtmlSafe(): boolean;
    isLenient(): boolean;
    jsonValue(arg0: string): JsonWriter;
    name(arg0: string): JsonWriter;
    // private newline(): void;
    nullValue(): JsonWriter;
    // private openScope(arg0: number, arg1: string): JsonWriter;
    // private peek(): number;
    // private push(arg0: number): void;
    // private replaceTop(arg0: number): void;
    setFormattingStyle(arg0: FormattingStyle): void;
    setHtmlSafe(arg0: boolean): void;
    setIndent(arg0: string): void;
    setLenient(arg0: boolean): void;
    setSerializeNulls(arg0: boolean): void;
    setStrictness(arg0: Strictness): void;
    // private string(arg0: string): void;
    value(arg0: boolean): JsonWriter;
    value(arg0: boolean): JsonWriter;
    value(arg0: number): JsonWriter;
    value(arg0: number): JsonWriter;
    value(arg0: number): JsonWriter;
    value(arg0: Number): JsonWriter;
    value(arg0: string): JsonWriter;
    // private writeDeferredName(): void;
}