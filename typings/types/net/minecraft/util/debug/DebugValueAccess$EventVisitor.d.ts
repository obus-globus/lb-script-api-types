import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DebugValueAccess$EventVisitor<T extends unknown> extends Object{
    accept(value: T, remainingTicks: number, totalLifetime: number): void;
}