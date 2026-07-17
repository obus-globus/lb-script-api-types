import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LocaleIDParser extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    baseName: string;
    // private buffer: StringBuilder;
    // private canonicalize: boolean;
    // private hadCountry: boolean;
    // private id: string[];
    // private index: number;
    keywords: JavaMap<string, string>;
    // private addSeparator(): void;
    // private append(arg0: string): void;
    // private atTerminator(): boolean;
    defaultKeywordValue(arg0: string, arg1: string): void;
    getBaseName(): string;
    getCountry(): string;
    // private getKeyComparator(): (param0: string, param1: string) => number;
    // private getKeyword(): string;
    getKeywordMap(): JavaMap<string, string>;
    getKeywordValue(arg0: string): string;
    getKeywords(): Iterator<string>;
    getLanguage(): string;
    getLanguageScriptCountryVariant(): string[];
    getName(): string;
    getScript(): string;
    // private getString(arg0: number): string;
    // private getValue(): string;
    getVariant(): string;
    // private haveExperimentalLanguagePrefix(): boolean;
    // private haveKeywordAssign(): boolean;
    // private isTerminator(arg0: string): boolean;
    // private isTerminatorOrIDSeparator(arg0: string): boolean;
    // private next(): string;
    parseBaseName(): void;
    // private parseCountry(): number;
    // private parseKeywords(): number;
    // private parseLanguage(): number;
    // private parseScript(): number;
    // private parseVariant(): number;
    // private reset(): void;
    // private set(arg0: number, arg1: string): void;
    setBaseName(arg0: string): void;
    setKeywordValue(arg0: string, arg1: string): void;
    // private setKeywordValue(arg0: string, arg1: string, arg2: boolean): void;
    // private setToKeywordStart(): boolean;
    // private skipCountry(): void;
    // private skipLanguage(): void;
    // private skipScript(): void;
    // private skipUntilTerminatorOrIDSeparator(): void;
}