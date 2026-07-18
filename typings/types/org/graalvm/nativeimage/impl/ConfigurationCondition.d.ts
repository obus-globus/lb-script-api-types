import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigurationCondition extends Object {
    static alwaysTrue(): ConfigurationCondition;
    static create(paramtype: Class<Object>): ConfigurationCondition;
    static create(paramtype: Class<Object>, paramruntimeChecked: boolean): ConfigurationCondition;
    private constructor(type: Class<Object>, runtimeChecked: boolean)
    readonly runtimeChecked: boolean;
    readonly type: Class<Object>;
    equals(o: Object | null): boolean;
    getType(): Class<Object>;
    hashCode(): number;
    isAlwaysTrue(): boolean;
    isRuntimeChecked(): boolean;
    toString(): string;
}