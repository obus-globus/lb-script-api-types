import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Rfc5424Layout$StructuredDataElement extends Object {
    constructor(null_: Rfc5424Layout$StructuredDataElement, prefix: string, discardIfEmpty: boolean)
    // private discardIfEmpty: boolean;
    // private fields: { [key: string]: string };
    // private prefix: string;
    discard(): boolean;
    getFields(): { [key: string]: string };
    getPrefix(): string;
    union(addFields: { [key: string]: string }): void;
}