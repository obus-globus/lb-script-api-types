import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { SourceImpl } from '../../../../../com/oracle/truffle/api/source/SourceImpl.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SourceImpl$Key extends Object {
    constructor(content: Object, mimeType: string, languageId: string, name: string, internal: boolean, interactive: boolean, cached: boolean, embedderSource: boolean, options: JavaMap<string, string>)
    // private cached: boolean;
    // private cachedHashCode: number;
    // private content: Object;
    // private embedderSource: boolean;
    // private interactive: boolean;
    // private internal: boolean;
    // private language: string;
    // private mimeType: string;
    // private name: string;
    // private options: JavaMap<string, string>;
    // private compareContent(other: SourceImpl$Key): boolean;
    equals(obj: Object | null): boolean;
    getPath(): string;
    getURI(): URI;
    getURL(): URL;
    hashCode(): number;
    invalidateAfterPreinitialiation(): void;
    toSourceInterned(): SourceImpl;
    toSourceNotInterned(): SourceImpl;
}