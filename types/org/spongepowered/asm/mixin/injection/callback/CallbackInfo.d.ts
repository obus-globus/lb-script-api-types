import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { Cancellable } from '../../../../../../org/spongepowered/asm/mixin/injection/callback/Cancellable.d.ts'
export class CallbackInfo extends Object implements Cancellable {
    static getCallInfoClassName(paramarg0: Type): string;
    constructor(arg0: string, arg1: boolean)
    readonly cancellable: boolean;
    readonly cancelled: boolean;
    // private name: string;
    cancel(): void;
    getId(): string;
    isCancellable(): boolean;
    isCancelled(): boolean;
    toString(): string;
}