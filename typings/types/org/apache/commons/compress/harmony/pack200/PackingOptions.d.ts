import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
export class PackingOptions extends Object {
    static ERROR: string;
    static KEEP: string;
    static PASS: string;
    static SEGMENT_LIMIT: number;
    static STRIP: string;
    constructor()
    // private classAttributeActions: JavaMap<string, string>;
    // private codeAttributeActions: JavaMap<string, string>;
    readonly deflateHint: string;
    readonly effort: number;
    // private fieldAttributeActions: JavaMap<string, string>;
    readonly gzip: boolean;
    readonly keepFileOrder: boolean;
    readonly logFile: string;
    // private methodAttributeActions: JavaMap<string, string>;
    readonly modificationTime: string;
    // private passFiles: string[];
    readonly segmentLimit: number;
    readonly stripDebug: boolean;
    readonly unknownAttributeAction: string;
    // private unknownAttributeTypes: Attribute[];
    readonly verbose: boolean;
    addClassAttributeAction(arg0: string, arg1: string): void;
    addCodeAttributeAction(arg0: string, arg1: string): void;
    addFieldAttributeAction(arg0: string, arg1: string): void;
    addMethodAttributeAction(arg0: string, arg1: string): void;
    // private addOrUpdateAttributeActions(arg0: Attribute[], arg1: JavaMap<string, string>, arg2: number): void;
    addPassFile(arg0: string): void;
    getDeflateHint(): string;
    getEffort(): number;
    getLogFile(): string;
    getModificationTime(): string;
    // private getOrDefault(arg0: JavaMap<string, string>, arg1: string, arg2: string): string;
    getSegmentLimit(): number;
    getUnknownAttributeAction(): string;
    getUnknownAttributePrototypes(): Attribute[];
    getUnknownClassAttributeAction(arg0: string): string;
    getUnknownCodeAttributeAction(arg0: string): string;
    getUnknownFieldAttributeAction(arg0: string): string;
    getUnknownMethodAttributeAction(arg0: string): string;
    isGzip(): boolean;
    isKeepDeflateHint(): boolean;
    isKeepFileOrder(): boolean;
    isPassFile(arg0: string): boolean;
    isStripDebug(): boolean;
    isVerbose(): boolean;
    removePassFile(arg0: string): void;
    setDeflateHint(arg0: string): void;
    setEffort(arg0: number): void;
    setGzip(arg0: boolean): void;
    setKeepFileOrder(arg0: boolean): void;
    setLogFile(arg0: string): void;
    setModificationTime(arg0: string): void;
    setQuiet(arg0: boolean): void;
    setSegmentLimit(arg0: number): void;
    setStripDebug(arg0: boolean): void;
    setUnknownAttributeAction(arg0: string): void;
    setVerbose(arg0: boolean): void;
}