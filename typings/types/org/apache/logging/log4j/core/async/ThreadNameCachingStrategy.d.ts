import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ThreadNameCachingStrategy extends Enum<ThreadNameCachingStrategy> {
    static CACHED: ThreadNameCachingStrategy;
    static UNCACHED: ThreadNameCachingStrategy;
    static create(): ThreadNameCachingStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ThreadNameCachingStrategy;
    static values(): (Object | null)[];
    constructor(arg2: ThreadNameCachingStrategy)
    getThreadName(): string;
    name(): "CACHED" | "UNCACHED";
}