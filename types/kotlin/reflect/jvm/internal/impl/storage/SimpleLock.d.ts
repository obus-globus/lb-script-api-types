import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SimpleLock extends Object{
    lock(): void;
    unlock(): void;
}