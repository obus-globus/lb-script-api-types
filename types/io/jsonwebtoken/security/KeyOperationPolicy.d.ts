import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperationPolicy extends Object{
    getOperations(): E[];
    validate(arg0: E[]): void;
}