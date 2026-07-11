import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
export abstract class ReflectKCallableImpl<R extends unknown> extends Object implements ReflectKCallable<R> {
    constructor(overriddenStorage: KCallableOverriddenStorage)
    // private _absentArguments: ReflectProperties$LazySoftVal<(Object | null)[]>;
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isOpen(): boolean;
    readonly overriddenStorage: KCallableOverriddenStorage;
    call(...args: (Object | null)[]): R;
    callBy(args: Map<KParameter, Object | null>): R;
    getAbsentArguments(): (Object | null)[];
}