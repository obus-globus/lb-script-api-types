import type { AbstractConstant } from '../../../../io/netty/util/AbstractConstant.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SslContextOption<T extends Object | number | string | boolean> extends AbstractConstant<SslContextOption<T>> {
    static exists(paramarg0: string): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): SslContextOption<Object>;
    static valueOf(paramarg0: string): SslContextOption<Object>;
    private constructor(arg0: number, arg1: string)
    constructor(arg0: string)
    validate(arg0: T): void;
}