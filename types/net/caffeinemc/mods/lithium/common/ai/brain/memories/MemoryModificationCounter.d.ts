import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface MemoryModificationCounter extends Object{
    lithium$getMemoryValueModCount(): number;
    lithium$onMemoryModified(): void;
}