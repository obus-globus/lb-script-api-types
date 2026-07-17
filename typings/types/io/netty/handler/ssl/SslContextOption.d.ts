import type { AbstractConstant } from '../../../../io/netty/util/AbstractConstant.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SslContextOption<T extends unknown> extends AbstractConstant<SslContextOption<T>> {
    static exists(paramarg0: string): boolean;
    static valueOf<T extends unknown>(paramarg0: Class<Object>, paramarg1: string): SslContextOption<T>;
    static valueOf<T extends unknown>(paramarg0: string): SslContextOption<T>;
    constructor(arg0: string)
    validate(arg0: T): void;
}