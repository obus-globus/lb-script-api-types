import type { AbstractConstant } from '../../../io/netty/util/AbstractConstant.d.ts'
import type { ConstantPool } from '../../../io/netty/util/ConstantPool.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AttributeKey<T extends unknown> extends AbstractConstant<AttributeKey<T>> {
    static exists(paramarg0: string): boolean;
    static newInstance<T extends unknown>(paramarg0: string): AttributeKey<T>;
    static valueOf<T extends unknown>(paramarg0: Class<Object>, paramarg1: string): AttributeKey<T>;
    static valueOf<T extends unknown>(paramarg0: string): AttributeKey<T>;
    constructor(arg0: number, arg1: string, arg2: ConstantPool<AttributeKey<Object>>)
}