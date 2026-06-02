import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SSLSessionContext extends Object{
    getIds(): Enumeration<number[]>;
    getSession(arg0: number[]): SSLSession;
    getSessionCacheSize(): number;
    getSessionTimeout(): number;
    setSessionCacheSize(arg0: number): void;
    setSessionTimeout(arg0: number): void;
}