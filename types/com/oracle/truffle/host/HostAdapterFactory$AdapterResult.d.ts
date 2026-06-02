import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { HostMethodDesc$SingleMethod } from '../../../../com/oracle/truffle/host/HostMethodDesc$SingleMethod.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterFactory$AdapterResult extends Object {
    constructor(adapterClass: Class<Object>, constructor: HostMethodDesc, valueConstructor: HostMethodDesc$SingleMethod)
    constructor(exception: RuntimeException)
    // private adapterClass: Class<Object>;
    // private constructor: HostMethodDesc;
    // private exception: RuntimeException;
    // private valueConstructor: HostMethodDesc$SingleMethod;
    getAdapterClass(): Class<Object>;
    getConstructor(): HostMethodDesc;
    getValueConstructor(): HostMethodDesc$SingleMethod;
    isAutoConvertible(): boolean;
    isSuccess(): boolean;
    throwException(): RuntimeException;
}