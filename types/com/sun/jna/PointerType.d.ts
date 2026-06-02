import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { NativeMapped } from '../../../com/sun/jna/NativeMapped.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PointerType extends Object implements NativeMapped {
    constructor()
    constructor(arg0: Pointer)
    readonly pointer: Pointer;
    equals(arg0: Object | null): boolean;
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    getPointer(): Pointer;
    hashCode(): number;
    nativeType(): Class<Object>;
    setPointer(arg0: Pointer): void;
    toNative(): Object;
    toString(): string;
}