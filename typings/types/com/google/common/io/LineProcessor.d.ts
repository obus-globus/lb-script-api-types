import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LineProcessor<T extends Object | number | string | boolean> extends Object{
    getResult(): T;
    processLine(line: string): boolean;
}