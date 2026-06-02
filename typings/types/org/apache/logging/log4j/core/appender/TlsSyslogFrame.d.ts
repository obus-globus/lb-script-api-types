import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TlsSyslogFrame extends Object {
    constructor(message: string)
    // private byteLength: number;
    readonly message: string;
    equals(obj: Object | null): boolean;
    getMessage(): string;
    hashCode(): number;
    toString(): string;
}