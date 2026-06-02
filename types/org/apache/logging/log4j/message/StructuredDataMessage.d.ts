import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MapMessage } from '../../../../../org/apache/logging/log4j/message/MapMessage.d.ts'
import type { StructuredDataId } from '../../../../../org/apache/logging/log4j/message/StructuredDataId.d.ts'
import type { StructuredDataMessage$Format } from '../../../../../org/apache/logging/log4j/message/StructuredDataMessage$Format.d.ts'
export class StructuredDataMessage extends MapMessage<StructuredDataMessage, string> {
    constructor()
    constructor(id: string, msg: string, type: string)
    constructor(id: string, msg: string, type: string, maxLength: number)
    constructor(id: string, msg: string, type: string, data: { [key: string]: string })
    constructor(id: string, msg: string, type: string, data: { [key: string]: string }, maxLength: number)
    constructor(id: StructuredDataId, msg: string, type: string)
    constructor(id: StructuredDataId, msg: string, type: string, maxLength: number)
    constructor(id: StructuredDataId, msg: string, type: string, data: { [key: string]: string })
    constructor(id: StructuredDataId, msg: string, type: string, data: { [key: string]: string }, maxLength: number)
    private constructor(msg: StructuredDataMessage, map: { [key: string]: string })
    readonly id: StructuredDataId;
    // private maxLength: number;
    // private message: string;
    readonly type: string;
    asString(): string;
    asString(format: string): string;
    asString(format: StructuredDataMessage$Format, structuredDataId: StructuredDataId): string;
    asString(format: StructuredDataMessage$Format, structuredDataId: StructuredDataId, sb: StringBuilder): void;
    // private asXml(structuredDataId: StructuredDataId, sb: StringBuilder): void;
    equals(o: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    formatTo(formats: string[], buffer: StringBuilder): void;
    getFormat(): string;
    // private getFormat(formats: string[]): StructuredDataMessage$Format;
    getFormats(): string[];
    getFormattedMessage(): string;
    getFormattedMessage(formats: string[]): string;
    getId(): StructuredDataId;
    getType(): string;
    hashCode(): number;
    newInstance(map: { [key: string]: string }): StructuredDataMessage;
    setId(id: string): void;
    setId(id: StructuredDataId): void;
    setMessageFormat(msg: string): void;
    setType(type: string): void;
    toString(): string;
    validate(key: string, value: Object): void;
    validate(key: string, value: boolean): void;
    validate(key: string, value: number): void;
    validate(key: string, value: string): void;
    validate(key: string, value: number): void;
    validate(key: string, value: number): void;
    validate(key: string, value: number): void;
    validate(key: string, value: number): void;
    validate(key: string, value: number): void;
    validate(key: string, value: string): void;
    validateKey(key: string): void;
}