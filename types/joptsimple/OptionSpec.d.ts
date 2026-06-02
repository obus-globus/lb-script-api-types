import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface OptionSpec<V extends Object | number | string | boolean> extends Object{
    isForHelp(): boolean;
    options(): string[];
    value(arg0: OptionSet): V;
    values(arg0: OptionSet): V[];
}