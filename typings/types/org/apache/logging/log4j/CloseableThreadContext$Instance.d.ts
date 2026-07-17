import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CloseableThreadContext$Instance extends Object implements AutoCloseable {
    private constructor()
    // private originalValues: JavaMap<string, string>;
    // private pushCount: number;
    close(): void;
    // private closeMap(): void;
    // private closeStack(): void;
    push(message: string): CloseableThreadContext$Instance;
    push(message: string, args: Object[]): CloseableThreadContext$Instance;
    pushAll(messages: string[]): CloseableThreadContext$Instance;
    put(key: string, value: string): CloseableThreadContext$Instance;
    putAll(values: JavaMap<string, string>): CloseableThreadContext$Instance;
}