import type { JavaMap } from '../../../JavaMap.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class MessageHeader extends Object {
    static canonicalID(paramarg0: string): string;
    constructor()
    constructor(arg0: InputStream)
    constructor(arg0: number)
    // private keys: string[];
    // private maxHeaderSize: number;
    // private nkeys: number;
    // private size: number;
    // private values: string[];
    add(arg0: string, arg1: string): void;
    // private checkMaxHeaderSize(arg0: number): void;
    // private checkNewSize(arg0: number, arg1: number, arg2: number): number;
    filterAndAddHeaders(arg0: string[], arg1: JavaMap<string, string[]>): JavaMap<string, string[]>;
    filterNTLMResponses(arg0: string): boolean;
    findNextValue(arg0: string, arg1: string): string;
    findValue(arg0: string): string;
    getHeaderNamesInList(): string;
    getHeaders(): JavaMap<string, string[]>;
    getHeaders(arg0: string[]): JavaMap<string, string[]>;
    getKey(arg0: number): string;
    getKey(arg0: string): number;
    getValue(arg0: number): string;
    // private grow(): void;
    mergeHeader(arg0: InputStream): void;
    multiValueIterator(arg0: string): Iterator<string>;
    parseHeader(arg0: InputStream): void;
    prepend(arg0: string, arg1: string): void;
    print(arg0: PrintStream): void;
    remove(arg0: string): void;
    reset(): void;
    set(arg0: number, arg1: string, arg2: string): void;
    set(arg0: string, arg1: string): void;
    setIfNotSet(arg0: string, arg1: string): void;
    toString(): string;
}