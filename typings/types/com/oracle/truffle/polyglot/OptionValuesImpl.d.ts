import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class OptionValuesImpl extends Object implements OptionValues {
    constructor(descriptors: OptionDescriptor[], sandboxPolicy: SandboxPolicy, trackDeprecatedOptions: boolean)
    readonly descriptors: OptionDescriptor[];
    // private sandboxPolicy: SandboxPolicy;
    // private trackDeprecatedOptions: boolean;
    // private usedDeprecatedDescriptors: OptionDescriptor[];
    // private validAssertKeys: OptionKey<Object>[];
    // private values: JavaMap<OptionKey<Object>, Object>;
    // private contains<T extends unknown>(optionKey: OptionKey<T>): boolean;
    copy(): OptionValuesImpl;
    copyInto(target: OptionValuesImpl): void;
    equals(obj: Object | null): boolean;
    // private failNotFound(key: string, allOptionsSupplier: () => OptionDescriptor[]): RuntimeException;
    // private findDescriptor(key: string, allowExperimentalOptions: boolean, allOptionsSupplier: () => OptionDescriptor[]): OptionDescriptor;
    get<T extends unknown>(optionKey: OptionKey<T>): T;
    getDescriptors(): OptionDescriptor[];
    getUsedDeprecatedDescriptors(): OptionDescriptor[];
    hasBeenSet(optionKey: OptionKey<Object>): boolean;
    hasSetOptions(): boolean;
    hashCode(): number;
    // private initializeValidAssertKeys(): OptionKey<Object>[];
    put(key: string, value: string, allowExperimentalOptions: boolean, allOptionsSupplier: () => OptionDescriptor[]): OptionDescriptor;
    putAll(providedValues: JavaMap<string, string>, allowExperimentalOptions: boolean, allOptionsSupplier: () => OptionDescriptor[]): void;
    set<T extends unknown>(optionKey: OptionKey<T>, value: T): void;
    // private slowCompareKey(key: OptionKey<Object>, other: OptionValues): boolean;
    toString(): string;
}