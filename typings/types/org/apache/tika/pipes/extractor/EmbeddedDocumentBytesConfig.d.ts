import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY } from '../../../../../org/apache/tika/pipes/extractor/EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY.d.ts'
export class EmbeddedDocumentBytesConfig extends Object implements Serializable {
    static SKIP: EmbeddedDocumentBytesConfig;
    static getSKIP(): EmbeddedDocumentBytesConfig;
    constructor()
    constructor(arg0: boolean)
    readonly embeddedIdPrefix: string;
    readonly emitKeyBase: string;
    readonly emitter: string;
    readonly extractEmbeddedDocumentBytes: boolean;
    readonly includeOriginal: boolean;
    readonly suffixStrategy: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    readonly zeroPadName: number;
    equals(arg0: Object | null): boolean;
    getEmbeddedIdPrefix(): string;
    getEmitKeyBase(): string;
    getEmitter(): string;
    getSuffixStrategy(): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    getZeroPadName(): number;
    hashCode(): number;
    isExtractEmbeddedDocumentBytes(): boolean;
    isIncludeOriginal(): boolean;
    setEmbeddedIdPrefix(arg0: string): void;
    setEmitKeyBase(arg0: string): void;
    setEmitter(arg0: string): void;
    setExtractEmbeddedDocumentBytes(arg0: boolean): void;
    setIncludeOriginal(arg0: boolean): void;
    setSuffixStrategy(arg0: string): void;
    setSuffixStrategy(arg0: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY): void;
    setZeroPadName(arg0: number): void;
    toString(): string;
}