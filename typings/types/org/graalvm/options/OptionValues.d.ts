import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../org/graalvm/options/OptionKey.d.ts'
export interface OptionValues extends Object{
    get<T extends unknown>(optionKey: OptionKey<T>): T;
    getDescriptors(): OptionDescriptor[];
    hasBeenSet(optionKey: OptionKey<Object>): boolean;
    hasSetOptions(): boolean;
    set<T extends unknown>(optionKey: OptionKey<T>, value: T): void;
}