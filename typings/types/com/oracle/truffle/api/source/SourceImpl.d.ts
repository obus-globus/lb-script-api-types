import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Source$LiteralBuilder } from '../../../../../com/oracle/truffle/api/source/Source$LiteralBuilder.d.ts'
import type { Source$SourceBuilder } from '../../../../../com/oracle/truffle/api/source/Source$SourceBuilder.d.ts'
import type { SourceImpl$Key } from '../../../../../com/oracle/truffle/api/source/SourceImpl$Key.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { ByteSequence } from '../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class SourceImpl extends Source {
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
    private constructor(key: SourceImpl$Key)
    private constructor(key: SourceImpl$Key, sourceId: Object)
    // private key: SourceImpl$Key;
    // private sourceId: Object;
    copy(): Source;
    getBytes(): ByteSequence;
    getCharacters(): CharSequence;
    getCharacters(lineNumber: number): CharSequence;
    getLanguage(): string;
    getMimeType(): string;
    getName(): string;
    getOptions(): { [key: string]: string };
    getOptions(language: TruffleLanguage<Object>): OptionValues;
    getOriginalURI(): URI;
    getPath(): string;
    getSourceId(): Object;
    getSourceKey(): Object;
    getURL(): URL;
    hasBytes(): boolean;
    hasCharacters(): boolean;
    isCached(): boolean;
    isInteractive(): boolean;
    isInternal(): boolean;
    toKey(): SourceImpl$Key;
}