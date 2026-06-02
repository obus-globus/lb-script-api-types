import type { Object } from '../../../java/lang/Object.d.ts'
export interface CommandResultCallback extends Object{
    onFailure(): void;
    onResult(success: boolean, result: number): void;
    onSuccess(result: number): void;
}