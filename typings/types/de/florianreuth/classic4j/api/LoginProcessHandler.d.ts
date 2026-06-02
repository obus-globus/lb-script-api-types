import type { CCAccount } from '../../../../de/florianreuth/classic4j/model/classicube/account/CCAccount.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface LoginProcessHandler extends Object{
    handleException(arg0: Throwable): void;
    handleMfa(arg0: CCAccount): void;
    handleSuccessfulLogin(arg0: CCAccount): void;
}