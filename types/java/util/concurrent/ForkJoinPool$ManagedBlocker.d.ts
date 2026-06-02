import type { Object } from '../../../java/lang/Object.d.ts'
export interface ForkJoinPool$ManagedBlocker extends Object{
    block(): boolean;
    isReleasable(): boolean;
}