import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CircuitBreaker<T extends unknown> extends Object{
    checkState(): boolean;
    close(): void;
    incrementAndCheckState(arg0: T): boolean;
    isClosed(): boolean;
    isOpen(): boolean;
    open(): void;
}