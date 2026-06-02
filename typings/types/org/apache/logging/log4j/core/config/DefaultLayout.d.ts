import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { StringLayout } from '../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export class DefaultLayout extends Object implements StringLayout {
    static ELEMENT_TYPE: string;
    private constructor()
    encode(event: LogEvent, destination: ByteBufferDestination): void;
    getCharset(): Charset;
    getContentFormat(): { [key: string]: string };
    getContentType(): string;
    getFooter(): number[];
    getHeader(): number[];
    toByteArray(event: LogEvent): number[];
    toSerializable(event: LogEvent): string;
}