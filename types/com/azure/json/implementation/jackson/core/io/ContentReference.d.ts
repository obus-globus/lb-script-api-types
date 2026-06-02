import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class ContentReference extends Object implements Serializable {
    static DEFAULT_MAX_CONTENT_SNIPPET: number;
    static construct(paramarg0: boolean, paramarg1: Object): ContentReference;
    static construct(paramarg0: boolean, paramarg1: Object, paramarg2: number, paramarg3: number): ContentReference;
    static rawReference(paramarg0: boolean, paramarg1: Object): ContentReference;
    static rawReference(paramarg0: Object): ContentReference;
    static unknown(): ContentReference;
    constructor(arg0: boolean, arg1: Object)
    constructor(arg0: boolean, arg1: Object, arg2: number, arg3: number)
    // private _isContentTextual: boolean;
    // private _length: number;
    // private _offset: number;
    // private _rawContent: Object;
    _append(arg0: StringBuilder, arg1: string): number;
    _appendEscaped(arg0: StringBuilder, arg1: number): boolean;
    _truncate(arg0: number[], arg1: number[], arg2: number): string;
    _truncate(arg0: string[], arg1: number[], arg2: number): string;
    _truncate(arg0: CharSequence, arg1: number[], arg2: number): string;
    _truncateOffsets(arg0: number[], arg1: number): void;
    appendSourceDescription(arg0: StringBuilder): StringBuilder;
    buildSourceDescription(): string;
    contentLength(): number;
    contentOffset(): number;
    equals(arg0: Object | null): boolean;
    getRawContent(): Object;
    hasTextualContent(): boolean;
    hashCode(): number;
    maxContentSnippetLength(): number;
    // private readObject(arg0: ObjectInputStream): void;
    readResolve(): Object;
    // private writeObject(arg0: ObjectOutputStream): void;
}