import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ArgumentParser<Result extends unknown> extends Object{
    parseArgument(arg0: string): Result;
}