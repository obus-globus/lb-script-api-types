import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Sink } from '../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class RequestResponseBuilder extends Object {
    constructor()
    // private packet: Sink;
    build(): Source;
    bytes(content: ByteBuffer): void;
    bytes(content: number[], offset: number, length: number): void;
    emptyLine(): void;
    headerLine(name: CharSequence, value: CharSequence): void;
    line(line: CharSequence): void;
    release(): void;
    requestLine(method: HttpMethod, uri: CharSequence, version: CharSequence): void;
    responseLine(version: CharSequence, status: number, statusText: CharSequence): void;
}