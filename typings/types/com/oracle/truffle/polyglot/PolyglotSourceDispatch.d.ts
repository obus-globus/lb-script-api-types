import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
import type { ByteSequence } from '../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class PolyglotSourceDispatch extends AbstractPolyglotImpl$AbstractSourceDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    equals(impl: Object, otherImpl: Object): boolean;
    equals(other: Object | null): boolean;
    getByteArray(impl: Object): number[];
    getBytes(impl: Object): ByteSequence;
    getCharacters(impl: Object): CharSequence;
    getCharacters(impl: Object, lineNumber: number): CharSequence;
    getColumnNumber(impl: Object, offset: number): number;
    getInputStream(impl: Object): InputStream;
    getLanguage(impl: Object): string;
    getLength(impl: Object): number;
    getLineCount(impl: Object): number;
    getLineLength(impl: Object, lineNumber: number): number;
    getLineNumber(impl: Object, offset: number): number;
    getLineStartOffset(impl: Object, lineNumber: number): number;
    getMimeType(impl: Object): string;
    getName(impl: Object): string;
    getOptions(impl: Object): JavaMap<string, string>;
    getOriginalURI(impl: Object): URI;
    getPath(impl: Object): string;
    getReader(impl: Object): Reader;
    getURI(impl: Object): URI;
    getURL(impl: Object): URL;
    hasBytes(impl: Object): boolean;
    hasCharacters(impl: Object): boolean;
    hashCode(): number;
    hashCode(impl: Object): number;
    isCached(impl: Object): boolean;
    isInteractive(impl: Object): boolean;
    isInternal(impl: Object): boolean;
    toString(): string;
    toString(impl: Object): string;
}