import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Source$Builder } from '../../../org/graalvm/polyglot/Source$Builder.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
import type { ByteSequence } from '../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class Source extends Object {
    static create(paramlanguage: string, paramsource: CharSequence): Source;
    static findLanguage(paramfile: File): string;
    static findLanguage(parammimeType: string): string;
    static findLanguage(paramurl: URL): string;
    static findMimeType(paramfile: File): string;
    static findMimeType(paramurl: URL): string;
    static newBuilder(paramlanguage: string, paramfile: File): Source$Builder;
    static newBuilder(paramlanguage: string, paramsource: Reader, paramname: string): Source$Builder;
    static newBuilder(paramlanguage: string, paramcharacters: CharSequence, paramname: string): Source$Builder;
    static newBuilder(paramlanguage: string, paramurl: URL): Source$Builder;
    static newBuilder(paramlanguage: string, parambytes: ByteSequence, paramname: string): Source$Builder;
    constructor(dispatch: AbstractPolyglotImpl$AbstractSourceDispatch, receiver: Object)
    // private dispatch: AbstractPolyglotImpl$AbstractSourceDispatch;
    // private receiver: Object;
    equals(obj: Object | null): boolean;
    getBytes(): ByteSequence;
    getCharacters(): CharSequence;
    getCharacters(lineNumber: number): CharSequence;
    getColumnNumber(offset: number): number;
    getInputStream(): InputStream;
    getLanguage(): string;
    getLength(): number;
    getLineCount(): number;
    getLineLength(lineNumber: number): number;
    getLineNumber(offset: number): number;
    getLineStartOffset(lineNumber: number): number;
    getMimeType(): string;
    getName(): string;
    getPath(): string;
    getReader(): Reader;
    getURI(): URI;
    getURL(): URL;
    hasBytes(): boolean;
    hasCharacters(): boolean;
    hashCode(): number;
    isInteractive(): boolean;
    isInternal(): boolean;
    toString(): string;
}