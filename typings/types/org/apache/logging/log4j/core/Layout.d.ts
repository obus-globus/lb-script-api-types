import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Encoder } from '../../../../../org/apache/logging/log4j/core/layout/Encoder.d.ts'
export interface Layout<T extends Serializable> extends Object, Encoder<LogEvent>{
    getContentFormat(): JavaMap<string, string>;
    getContentType(): string;
    getFooter(): number[];
    getHeader(): number[];
    toByteArray(event: LogEvent): number[];
    toSerializable(event: LogEvent): T;
}