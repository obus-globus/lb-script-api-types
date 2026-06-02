import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TikaConfig } from '../../../org/apache/tika/config/TikaConfig.d.ts'
import type { Detector } from '../../../org/apache/tika/detect/Detector.d.ts'
import type { Translator } from '../../../org/apache/tika/language/translate/Translator.d.ts'
import type { Metadata } from '../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Parser } from '../../../org/apache/tika/parser/Parser.d.ts'
export class Tika extends Object {
    static getString(): string;
    constructor()
    constructor(arg0: TikaConfig)
    constructor(arg0: Detector)
    constructor(arg0: Detector, arg1: Parser)
    constructor(arg0: Detector, arg1: Parser, arg2: Translator)
    readonly detector: Detector;
    readonly maxStringLength: number;
    readonly parser: Parser;
    readonly translator: Translator;
    detect(arg0: File): string;
    detect(arg0: InputStream): string;
    detect(arg0: InputStream, arg1: string): string;
    detect(arg0: InputStream, arg1: Metadata): string;
    detect(arg0: URL): string;
    detect(arg0: Path[]): string;
    detect(arg0: number[]): string;
    detect(arg0: number[], arg1: string): string;
    detect(arg0: string): string;
    getDetector(): Detector;
    getMaxStringLength(): number;
    getParser(): Parser;
    getTranslator(): Translator;
    parse(arg0: File): Reader;
    parse(arg0: File, arg1: Metadata): Reader;
    parse(arg0: InputStream): Reader;
    parse(arg0: InputStream, arg1: Metadata): Reader;
    parse(arg0: URL): Reader;
    parse(arg0: Path[]): Reader;
    parse(arg0: Path[], arg1: Metadata): Reader;
    parseToString(arg0: File): string;
    parseToString(arg0: InputStream): string;
    parseToString(arg0: InputStream, arg1: Metadata): string;
    parseToString(arg0: InputStream, arg1: Metadata, arg2: number): string;
    parseToString(arg0: URL): string;
    parseToString(arg0: Path[]): string;
    setMaxStringLength(arg0: number): void;
    toString(): string;
    translate(arg0: string, arg1: string): string;
    translate(arg0: string, arg1: string, arg2: string): string;
}