import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostFieldDesc extends Object {
    private constructor(type: Class<Object>, genericType: Type, name: string, isFinal: boolean)
    readonly genericType: Type;
    // private isFinal: boolean;
    readonly name: string;
    readonly type: Class<Object>;
    get(receiver: Object): Object;
    getGenericType(): Type;
    getName(): string;
    getType(): Class<Object>;
    isFinal(): boolean;
    set(receiver: Object, value: Object): void;
}