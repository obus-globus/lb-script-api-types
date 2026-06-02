import type { ContentReference } from '../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JsonLocation extends Object implements Serializable {
    static MAX_CONTENT_SNIPPET: number;
    static NA: JsonLocation;
    constructor(arg0: ContentReference, arg1: number, arg2: number, arg3: number)
    constructor(arg0: ContentReference, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: Object, arg1: number, arg2: number, arg3: number)
    constructor(arg0: Object, arg1: number, arg2: number, arg3: number, arg4: number)
    // private _columnNr: number;
    // private _contentReference: ContentReference;
    // private _lineNr: number;
    // private _sourceDescription: string;
    // private _totalBytes: number;
    // private _totalChars: number;
    appendOffsetDescription(arg0: StringBuilder): StringBuilder;
    equals(arg0: Object | null): boolean;
    getSourceRef(): Object;
    hashCode(): number;
    sourceDescription(): string;
    toString(): string;
}