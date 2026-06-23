import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface LineProcessor<T extends unknown> extends Object{
    getResult(): T;
    processLine(arg0: string): boolean;
}