import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { MapMessage$MapFormat } from '../../../../../org/apache/logging/log4j/message/MapMessage$MapFormat.d.ts'
import type { BiConsumer } from '../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { IndexedReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/IndexedReadOnlyStringMap.d.ts'
import type { IndexedStringMap } from '../../../../../org/apache/logging/log4j/util/IndexedStringMap.d.ts'
import type { MultiFormatStringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/MultiFormatStringBuilderFormattable.d.ts'
import type { TriConsumer } from '../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export class MapMessage<M extends MapMessage<M, V>, V extends unknown> extends Object implements MultiFormatStringBuilderFormattable {
    constructor()
    constructor(initialCapacity: number)
    constructor(map: JavaMap<string, V>)
    readonly data: IndexedStringMap;
    appendMap(sb: StringBuilder): void;
    asJava(sb: StringBuilder): void;
    // private asJava(sb: StringBuilder, quoted: boolean): void;
    asJavaUnquoted(sb: StringBuilder): void;
    asJson(sb: StringBuilder): void;
    asString(): string;
    asString(format: string): string;
    asXml(sb: StringBuilder): void;
    clear(): void;
    containsKey(key: string): boolean;
    equals(o: Object | null): boolean;
    forEach<CV extends unknown>(action: (param0: string, param1: CV) => void): void;
    forEach<CV extends unknown, S extends unknown>(action: TriConsumer<string, CV, S>, state: S): void;
    // private format(format: MapMessage$MapFormat, sb: StringBuilder): StringBuilder;
    formatTo(buffer: StringBuilder): void;
    formatTo(formats: string[], buffer: StringBuilder): void;
    get(key: string): string;
    getData(): JavaMap<string, V>;
    getFormat(): string;
    // private getFormat(formats: string[]): MapMessage$MapFormat;
    getFormats(): string[];
    getFormattedMessage(): string;
    getFormattedMessage(formats: string[]): string;
    getIndexedReadOnlyStringMap(): IndexedReadOnlyStringMap;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    newInstance(map: JavaMap<string, V>): M;
    put(candidateKey: string, value: string): void;
    putAll(map: JavaMap<string, string>): void;
    remove(key: string): string;
    toKey(candidateKey: string): string;
    toString(): string;
    validate(key: string, value: Object): void;
    validate(key: string, value: boolean): void;
    validate(key: string, value: number): void;
    validate(key: string, value: string): void;
    with(candidateKey: string, value: Object): M;
    with(candidateKey: string, value: boolean): M;
    with(candidateKey: string, value: number): M;
    with(candidateKey: string, value: string): M;
}