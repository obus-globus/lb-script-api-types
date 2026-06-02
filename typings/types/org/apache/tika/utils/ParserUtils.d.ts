import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export class ParserUtils extends Object {
    static EMBEDDED_PARSER: Property;
    static cloneMetadata(paramarg0: Metadata): Metadata;
    static ensureStreamReReadable(paramarg0: InputStream, paramarg1: TemporaryResources, paramarg2: Metadata): InputStream;
    static getParserClassname(paramarg0: Parser): string;
    static recordParserDetails(paramarg0: string, paramarg1: Metadata): void;
    static recordParserDetails(paramarg0: Parser, paramarg1: Metadata): void;
    static recordParserFailure(paramarg0: Parser, paramarg1: Throwable, paramarg2: Metadata): void;
    static streamResetForReRead(paramarg0: InputStream, paramarg1: TemporaryResources): InputStream;
    constructor()
}