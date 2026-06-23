import type { JcaTemplate$InstanceFactory } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate$InstanceFactory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class JcaTemplate$JcaInstanceFactory<T extends unknown> extends Object implements JcaTemplate$InstanceFactory<T> {
    constructor(arg0: Class<T>)
    // private FALLBACK_ATTEMPTS: { [key: string]: boolean };
    // private clazz: Class<T>;
    doGet(arg0: string, arg1: { [key: string]: any }): T;
    findBouncyCastle(): { [key: string]: any };
    get(arg0: string, arg1: { [key: string]: any }): T;
    getId(): string;
    getInstanceClass(): Class<T>;
    wrap(arg0: Exception, arg1: string, arg2: { [key: string]: any }, arg3: { [key: string]: any }): Exception;
    wrap(arg0: string, arg1: Exception): Exception;
}