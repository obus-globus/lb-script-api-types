import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FinalizableReference extends Object{
    finalizeReferent(): void;
}