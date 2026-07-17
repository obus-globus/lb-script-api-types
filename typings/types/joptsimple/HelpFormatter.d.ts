import type { JavaMap } from '../JavaMap.d.ts'
import type { OptionDescriptor } from '../joptsimple/OptionDescriptor.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface HelpFormatter extends Object{
    format(arg0: JavaMap<string, OptionDescriptor>): string;
}