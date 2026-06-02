import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface UploadResourceBudget extends Object{
    consume(arg0: number, arg1: number): void;
    isAvailable(): boolean;
}