import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONPointer$Builder } from '../../../../../org/graalvm/shadowed/org/json/JSONPointer$Builder.d.ts'
export class JSONPointer extends Object {
    static builder(): JSONPointer$Builder;
    constructor(pointer: string)
    constructor(refTokens: string[])
    // private refTokens: string[];
    queryFrom(document: Object): Object;
    toString(): string;
    toURIFragment(): string;
}