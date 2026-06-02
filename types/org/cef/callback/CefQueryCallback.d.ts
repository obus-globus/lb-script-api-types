import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefQueryCallback extends Object{
    failure(arg0: number, arg1: string): void;
    success(arg0: string): void;
}