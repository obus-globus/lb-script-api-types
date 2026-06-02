import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SubscriberRegistry$MethodIdentifier extends Object {
    constructor(method: Method)
    // private name: string;
    // private parameterTypes: Class<Object>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
}