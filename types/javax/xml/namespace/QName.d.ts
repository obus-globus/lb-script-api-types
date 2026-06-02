import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class QName extends Object implements Serializable {
    static valueOf(paramarg0: string): QName;
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly localPart: string;
    readonly namespaceURI: string;
    readonly prefix: string;
    equals(arg0: Object | null): boolean;
    getLocalPart(): string;
    getNamespaceURI(): string;
    getPrefix(): string;
    hashCode(): number;
    toString(): string;
}