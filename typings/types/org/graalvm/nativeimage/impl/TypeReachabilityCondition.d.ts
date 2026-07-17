import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export class TypeReachabilityCondition extends Object implements AccessCondition {
    static JAVA_LANG_OBJECT_REACHED: TypeReachabilityCondition;
    static create(paramtype: Class<Object>, paramruntimeChecked: boolean): TypeReachabilityCondition;
    static typeReached(paramtype: Class<Object>): AccessCondition;
    static unconditional(): AccessCondition;
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