import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { ValueClassAwareCaller$BoxUnboxData } from '../../../../../kotlin/reflect/jvm/internal/calls/ValueClassAwareCaller$BoxUnboxData.d.ts'
import type { CallableMemberDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
export class ValueClassAwareCaller<M extends Member> extends Object implements Caller<M> {
    constructor(descriptor: CallableMemberDescriptor, oldCaller: Caller<M>, isDefault: boolean)
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
    getRealSlicesOfParameters(index: number): { start: number; endInclusive: number; step: number };
}