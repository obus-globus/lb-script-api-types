import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface RolloverListener extends Object{
    rolloverComplete(fileName: string): void;
    rolloverTriggered(fileName: string): void;
}