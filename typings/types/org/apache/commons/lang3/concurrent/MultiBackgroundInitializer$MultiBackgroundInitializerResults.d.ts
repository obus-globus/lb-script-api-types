import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
export class MultiBackgroundInitializer$MultiBackgroundInitializerResults extends Object {
    constructor(arg0: Map<Object | null, Object | null>, arg1: Map<Object | null, Object | null>, arg2: Map<Object | null, Object | null>, arg3: any)
    // private exceptions: { [key: string]: ConcurrentException };
    // private initializers: { [key: string]: BackgroundInitializer<Object> };
    // private resultObjects: { [key: string]: Object };
    // private checkName(arg0: string): BackgroundInitializer<Object>;
    getException(arg0: string): ConcurrentException;
    getInitializer(arg0: string): BackgroundInitializer<Object>;
    getResultObject(arg0: string): Object;
    initializerNames(): string[];
    isException(arg0: string): boolean;
    isSuccessful(): boolean;
}