import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rfc5424Layout } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout.d.ts'
export class Rfc5424Layout$StructuredDataElement extends Object {
    constructor(null_: Rfc5424Layout, fields: JavaMap<string, string>, prefix: string, discardIfEmpty: boolean)
    // private discardIfEmpty: boolean;
    // private fields: JavaMap<string, string>;
    // private prefix: string;
    discard(): boolean;
    getFields(): JavaMap<string, string>;
    getPrefix(): string;
    union(addFields: JavaMap<string, string>): void;
}