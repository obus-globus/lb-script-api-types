import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Source$LiteralBuilder } from '../../../../../com/oracle/truffle/api/source/Source$LiteralBuilder.d.ts'
import type { Source$SourceBuilder } from '../../../../../com/oracle/truffle/api/source/Source$SourceBuilder.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TextMap } from '../../../../../com/oracle/truffle/api/source/TextMap.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { ByteSequence } from '../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export abstract class Source extends Object {
    static CONTENT_NONE: CharSequence;
    static findLanguage(paramfile: TruffleFile): string;
    static findLanguage(parammimeType: string): string;
    static findLanguage(paramurl: URL): string;
    static findMimeType(paramfile: TruffleFile): string;
    static findMimeType(paramurl: URL): string;
    static newBuilder(paramsource: Source): Source$LiteralBuilder;
    static newBuilder(paramlanguage: string, paramcharacters: CharSequence, paramname: string): Source$LiteralBuilder;
    static newBuilder(paramlanguage: string, parambytes: ByteSequence, paramname: string): Source$LiteralBuilder;
    static newBuilder(paramlanguage: string, paramfile: TruffleFile): Source$SourceBuilder;
    static newBuilder(paramlanguage: string, paramsource: Reader, paramname: string): Source$SourceBuilder;
    static newBuilder(paramlanguage: string, paramurl: URL): Source$SourceBuilder;
    constructor()
    // private cachedPolyglotSource: WeakReference<Object>;
    // private computedURI: URI;
    // private textMap: TextMap;
    copy(): Source;
    createSection(lineNumber: number): SourceSection;
    createSection(charIndex: number, length: number): SourceSection;
    createSection(startLine: number, startColumn: number, length: number): SourceSection;
    createSection(startLine: number, startColumn: number, endLine: number, endColumn: number): SourceSection;
    createTextMap(): TextMap;
    createUnavailableSection(): SourceSection;
    equals(obj: Object | null): boolean;
    getBytes(): ByteSequence;
    getCharacters(): CharSequence;
    getCharacters(lineNumber: number): CharSequence;
    getColumnNumber(offset: number): number;
    getLanguage(): string;
    getLength(): number;
    getLineCount(): number;
    getLineLength(lineNumber: number): number;
    getLineNumber(offset: number): number;
    getLineStartOffset(lineNumber: number): number;
    getMimeType(): string;
    getName(): string;
    // private getNamedURI(name: string, bytes: number[]): URI;
    getOptions(): JavaMap<string, string>;
    getOptions(language: TruffleLanguage<Object>): OptionValues;
    getOriginalURI(): URI;
    getPath(): string;
    getReader(): Reader;
    getSourceId(): Object;
    getSourceKey(): Object;
    getTextMap(): TextMap;
    getURI(): URI;
    getURL(): URL;
    hasBytes(): boolean;
    hasCharacters(): boolean;
    hashCode(): number;
    isCached(): boolean;
    isInteractive(): boolean;
    isInternal(): boolean;
    subSource(baseCharIndex: number, length: number): Source;
    toString(): string;
}