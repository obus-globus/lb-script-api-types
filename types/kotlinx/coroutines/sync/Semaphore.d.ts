import type { Object } from '../../../java/lang/Object.d.ts'
export interface Semaphore extends Object{
    readonly availablePermits: number;
    acquire(): void;
    release(): void;
    tryAcquire(): boolean;
}