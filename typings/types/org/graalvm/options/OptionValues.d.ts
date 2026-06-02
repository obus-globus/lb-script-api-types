import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../org/graalvm/options/OptionKey.d.ts'
export interface OptionValues extends Object{
    get<T extends Object | number | string | boolean>(optionKey: OptionKey<T>): T;
    getDescriptors(): OptionDescriptor[];
    hasBeenSet(optionKey: OptionKey<Object>): boolean;
    hasSetOptions(): boolean;
    set<T extends Object | number | string | boolean>(optionKey: OptionKey<T>, value: T): void;
}