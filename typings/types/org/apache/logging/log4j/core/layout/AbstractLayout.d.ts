import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export abstract class AbstractLayout<T extends Serializable> extends Object implements Layout<T> {
    static ELEMENT_TYPE: string;
    constructor(header: number[], footer: number[])
    constructor(configuration: Configuration, header: number[], footer: number[])
    readonly configuration: Configuration;
    // private eventCount: number;
    readonly footer: number[];
    readonly header: number[];
    encode(event: LogEvent, destination: ByteBufferDestination): void;
    getConfiguration(): Configuration;
    getContentFormat(): JavaMap<string, string>;
    getFooter(): number[];
    getHeader(): number[];
    markEvent(): void;
}