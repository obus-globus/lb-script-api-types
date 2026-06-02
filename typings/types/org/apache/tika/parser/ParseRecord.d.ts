import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class ParseRecord extends Object {
    constructor()
    readonly depth: number;
    readonly exceptions: Exception[];
    readonly metadataList: Metadata[];
    readonly parsers: string[];
    readonly warnings: string[];
    readonly writeLimitReached: boolean;
    addException(arg0: Exception): void;
    addMetadata(arg0: Metadata): void;
    addParserClass(arg0: string): void;
    addWarning(arg0: string): void;
    afterParse(): void;
    beforeParse(): void;
    getDepth(): number;
    getExceptions(): Exception[];
    getMetadataList(): Metadata[];
    getParsers(): string[];
    getWarnings(): string[];
    isWriteLimitReached(): boolean;
    setWriteLimitReached(arg0: boolean): void;
}