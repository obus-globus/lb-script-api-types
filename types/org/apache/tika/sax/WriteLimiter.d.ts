import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WriteLimiter extends Object{
    getWriteLimit(): number;
    isThrowOnWriteLimitReached(): boolean;
}