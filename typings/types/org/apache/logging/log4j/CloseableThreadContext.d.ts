import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CloseableThreadContext$Instance } from '../../../../org/apache/logging/log4j/CloseableThreadContext$Instance.d.ts'
export class CloseableThreadContext extends Object {
    static push(parammessage: string): CloseableThreadContext$Instance;
    static push(parammessage: string, ...paramargs: Object[]): CloseableThreadContext$Instance;
    static pushAll(parammessages: string[]): CloseableThreadContext$Instance;
    static put(paramkey: string, paramvalue: string): CloseableThreadContext$Instance;
    static putAll(paramvalues: { [key: string]: string }): CloseableThreadContext$Instance;
    private constructor()
}