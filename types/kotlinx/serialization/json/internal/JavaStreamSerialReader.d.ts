import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharsetReader } from '../../../../kotlinx/serialization/json/internal/CharsetReader.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
export class JavaStreamSerialReader extends Object implements InternalJsonReader {
    constructor(stream: InputStream)
    // private reader: CharsetReader;
    read(buffer: string[], bufferOffset: number, count: number): number;
    release(): void;
}