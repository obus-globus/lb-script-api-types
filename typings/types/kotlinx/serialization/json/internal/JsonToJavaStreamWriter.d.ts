import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
import type { InternalJsonWriter$Companion } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter$Companion.d.ts'
export class JsonToJavaStreamWriter extends Object implements InternalJsonWriter {
    static Companion: InternalJsonWriter$Companion;
    constructor(stream: OutputStream)
    // private buffer: number[];
    // private charArray: string[];
    // private indexInBuffer: number;
    // private stream: OutputStream;
    // private appendStringSlowPath(currentSize: number, string: string): void;
    // private ensure(bytesCount: number): void;
    // private ensureTotalCapacity(oldSize: number, additional: number): number;
    // private flush(): void;
    release(): void;
    // private rest(): number;
    // private write(byte: number): void;
    write(text: string): void;
    writeChar(char: string): void;
    writeLong(value: number): void;
    writeQuoted(text: string): void;
    // private writeUtf8(string: string[], count: number): void;
    // private writeUtf8CodePoint(codePoint: number): void;
}