import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface CancellationToken extends Object{
    isCancelled(): boolean;
    setCancelled(): void;
}