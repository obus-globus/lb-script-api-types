import type { Object } from '../../java/lang/Object.d.ts'
export interface OptionChecker extends Object{
    isSupportedOption(arg0: string): number;
}