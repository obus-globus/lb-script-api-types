import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOptionProvider extends Object{
    getOption(arg0: string): string;
    getOption(arg0: string, arg1: boolean): boolean;
    getOption(arg0: string, arg1: string): string;
    getOptions(arg0: string): string[];
}