import type { WeakAssumedValue$Profile } from '../../../../com/oracle/truffle/polyglot/WeakAssumedValue$Profile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WeakAssumedValue<T extends unknown> extends Object {
    constructor(name: string)
    // private name: string;
    // private profile: WeakAssumedValue$Profile<T>;
    getConstant(): T;
    invalidate(): void;
    // private invalidateImpl(currentProfile: WeakAssumedValue$Profile<T>): void;
    isValid(): boolean;
    reset(): void;
    update(newValue: T): void;
}