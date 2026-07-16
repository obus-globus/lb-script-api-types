import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
export class ReflectKPropertyKt extends Object {
    static getDelegateImpl(self: ReflectKProperty<Object>, fieldOrMethod: Member | null, receiver1: Object | null, receiver2: Object | null): Object | null;
    static isLocalDelegated(paramarg0: ReflectKProperty<Object>): boolean;
}