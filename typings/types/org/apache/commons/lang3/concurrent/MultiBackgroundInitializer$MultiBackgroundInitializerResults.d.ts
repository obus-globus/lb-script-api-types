import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
export class MultiBackgroundInitializer$MultiBackgroundInitializerResults extends Object {
    private constructor(arg0: JavaMap<string, BackgroundInitializer<Object>>, arg1: JavaMap<string, Object>, arg2: JavaMap<string, ConcurrentException>)
    // private exceptions: JavaMap<string, ConcurrentException>;
    // private initializers: JavaMap<string, BackgroundInitializer<Object>>;
    // private resultObjects: JavaMap<string, Object>;
    // private checkName(arg0: string): BackgroundInitializer<Object>;
    getException(arg0: string): ConcurrentException;
    getInitializer(arg0: string): BackgroundInitializer<Object>;
    getResultObject(arg0: string): Object;
    initializerNames(): string[];
    isException(arg0: string): boolean;
    isSuccessful(): boolean;
}