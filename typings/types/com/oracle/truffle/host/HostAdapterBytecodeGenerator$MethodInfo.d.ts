import type { MethodType } from '../../../../java/lang/invoke/MethodType.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterBytecodeGenerator$MethodInfo extends Object {
    private constructor(method: Method)
    // private method: Method;
    // private type: MethodType;
    // private equals(other: HostAdapterBytecodeGenerator$MethodInfo): boolean;
    equals(obj: Object | null): boolean;
    getName(): string;
    hashCode(): number;
    toString(): string;
}