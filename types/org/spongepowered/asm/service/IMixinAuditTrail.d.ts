import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IMixinAuditTrail extends Object{
    onApply(arg0: string, arg1: string): void;
    onGenerate(arg0: string, arg1: string): void;
    onPostProcess(arg0: string): void;
}