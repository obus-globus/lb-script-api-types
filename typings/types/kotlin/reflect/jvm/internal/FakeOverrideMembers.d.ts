import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EqualityMode$JavaSignature } from '../../../../kotlin/reflect/jvm/internal/EqualityMode$JavaSignature.d.ts'
import type { EquatableCallableSignature } from '../../../../kotlin/reflect/jvm/internal/EquatableCallableSignature.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export class FakeOverrideMembers extends Object {
    constructor(members: Map<EquatableCallableSignature<EqualityMode$JavaSignature>, ReflectKCallable<Object>>, containsInheritedStatics: boolean, containsPackagePrivate: boolean)
    readonly containsInheritedStatics: boolean;
    readonly containsPackagePrivate: boolean;
    readonly members: Map<EquatableCallableSignature<EqualityMode$JavaSignature>, ReflectKCallable<Object>>;
    component1(): Map<EquatableCallableSignature<EqualityMode$JavaSignature>, ReflectKCallable<Object>>;
    component2(): boolean;
    component3(): boolean;
    copy(members: Map<EquatableCallableSignature<EqualityMode$JavaSignature>, ReflectKCallable<Object>>, containsInheritedStatics: boolean, containsPackagePrivate: boolean): FakeOverrideMembers;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}