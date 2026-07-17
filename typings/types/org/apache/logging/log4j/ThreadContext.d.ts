import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReadOnlyThreadContextMap } from '../../../../org/apache/logging/log4j/spi/ReadOnlyThreadContextMap.d.ts'
export class ThreadContext extends Object {
    static EMPTY_MAP: JavaMap<string, string>;
    static EMPTY_STACK: (Object | null)[];
    static clearAll(): void;
    static clearMap(): void;
    static clearStack(): void;
    static cloneStack(): (Object | null)[];
    static containsKey(paramkey: string): boolean;
    static get(paramkey: string): string;
    static getContext(): JavaMap<string, string>;
    static getDepth(): number;
    static getImmutableContext(): JavaMap<string, string>;
    static getImmutableStack(): (Object | null)[];
    static getThreadContextMap(): ReadOnlyThreadContextMap;
    static init(): void;
    static isEmpty(): boolean;
    static peek(): string;
    static pop(): string;
    static push(parammessage: string): void;
    static push(parammessage: string, ...paramargs: Object[]): void;
    static put(paramkey: string, paramvalue: string): void;
    static putAll(paramm: JavaMap<string, string>): void;
    static putIfNull(paramkey: string, paramvalue: string): void;
    static remove(paramkey: string): void;
    static removeAll(paramkeys: string[]): void;
    static removeStack(): void;
    static setStack(paramstack: string[]): void;
    static trim(paramdepth: number): void;
    private constructor()
}