import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { CallbackInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export class CallbackInfoReturnable<R extends Object | number | string | boolean> extends CallbackInfo {
    static getCallInfoClassName(paramarg0: Type): string;
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: R)
    constructor(arg0: string, arg1: boolean, arg2: boolean)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: string)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: boolean, arg2: number)
    readonly returnValue: R;
    getReturnValue(): R;
    getReturnValueB(): number;
    getReturnValueC(): string;
    getReturnValueD(): number;
    getReturnValueF(): number;
    getReturnValueI(): number;
    getReturnValueJ(): number;
    getReturnValueS(): number;
    getReturnValueZ(): boolean;
    setReturnValue(arg0: R): void;
}