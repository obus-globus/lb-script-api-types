import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LineMap extends Object{
    getColumnNumber(arg0: number): number;
    getLineNumber(arg0: number): number;
    getPosition(arg0: number, arg1: number): number;
    getStartPosition(arg0: number): number;
}