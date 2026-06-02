import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ArgumentParser<Result extends Object | number | string | boolean> extends Object{
    parseArgument(arg0: string): Result;
}