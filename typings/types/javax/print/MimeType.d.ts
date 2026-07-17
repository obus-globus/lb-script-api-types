import type { JavaMap } from '../../JavaMap.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MimeType extends Object implements Serializable, Cloneable {
    constructor(arg0: string)
    // private myEntrySet: (Object | null)[];
    // private myParameterMap: JavaMap<any, any>;
    // private myPieces: string[];
    // private myStringValue: string;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getMediaSubtype(): string;
    getMediaType(): string;
    getMimeType(): string;
    getParameterMap(): JavaMap<string, string>;
    // private getStringValue(): string;
    hashCode(): number;
    // private parse(arg0: string): void;
    toString(): string;
}