import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MappableRingBufferAddition extends Object{
    liquidBounce$awaitAndRotate(): void;
    liquidBounce$isSafeForClose(): boolean;
}