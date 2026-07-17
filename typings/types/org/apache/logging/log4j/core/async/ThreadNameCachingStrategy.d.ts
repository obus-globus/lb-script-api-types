import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ThreadNameCachingStrategy extends Enum<ThreadNameCachingStrategy> {
    static CACHED: ThreadNameCachingStrategy;
    static UNCACHED: ThreadNameCachingStrategy;
    static create(): ThreadNameCachingStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ThreadNameCachingStrategy;
    static values(): ThreadNameCachingStrategy[];
    private constructor()
    getThreadName(): string;
    name(): "CACHED" | "UNCACHED";
}