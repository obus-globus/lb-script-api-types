import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { JSContextOptions } from '../../../../../../com/oracle/truffle/js/runtime/JSContextOptions.d.ts'
import type { StableContextOptionValue$UpdateKind } from '../../../../../../com/oracle/truffle/js/runtime/util/StableContextOptionValue$UpdateKind.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../../../../org/graalvm/options/OptionKey.d.ts'
export class StableContextOptionValue<T extends unknown> extends Object {
    constructor(getter: (param0: JSContextOptions) => T, optionKey: OptionKey<T>, optionName: string)
    // private getter: (param0: JSContextOptions) => T;
    // private optionKey: OptionKey<T>;
    // private optionName: string;
    // private stableAssumption: Assumption;
    // private stableValue: T;
    equals(obj: Object | null): boolean;
    get(): T;
    getFromContext(): T;
    hashCode(): number;
    // private invalidateAssumption(newValue: T, oldValue: T): void;
    // private isInitialized(): boolean;
    // private makeAssumption(): Assumption;
    // private patchValue(newValue: T): void;
    // private setInitialValue(initialValue: T): void;
    update(contextOptions: JSContextOptions, kind: StableContextOptionValue$UpdateKind): void;
    // private updateValue(newValue: T): void;
}