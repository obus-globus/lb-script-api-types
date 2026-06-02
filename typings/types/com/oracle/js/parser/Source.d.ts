import type { Source$Data } from '../../../../com/oracle/js/parser/Source$Data.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Source extends Object {
    static readFully(paramreader: Reader): string;
    static sourceFor(paramname: string, paramcontent: CharSequence, paramisEval: boolean): Source;
    static sourceFor(paramname: string, paramcontent: string): Source;
    private constructor(name: string, base: string, data: Source$Data)
    readonly base: string;
    // private data: Source$Data;
    readonly explicitURL: string;
    // private hash: number;
    readonly name: string;
    // private data(): string;
    equals(obj: Object | null): boolean;
    // private findBOLN(position: number): number;
    // private findEOLN(position: number): number;
    getBase(): string;
    getColumn(position: number): number;
    getContent(): string;
    getExplicitURL(): string;
    getLastModified(): number;
    getLength(): number;
    getLine(position: number): number;
    getName(): string;
    getSourceLine(position: number): string;
    getString(start: number, len: number): string;
    getString(token: number): string;
    getURL(): URL;
    hashCode(): number;
    isEvalCode(): boolean;
    // private length(): number;
    setExplicitURL(explicitURL: string): void;
    toString(): string;
}