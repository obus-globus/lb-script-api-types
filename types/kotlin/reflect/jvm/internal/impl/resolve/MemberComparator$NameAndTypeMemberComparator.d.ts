import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
export class MemberComparator$NameAndTypeMemberComparator extends Object implements Comparator<DeclarationDescriptor> {
    static INSTANCE: MemberComparator$NameAndTypeMemberComparator;
    static comparing(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static comparing(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingDouble(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Boolean;
    static comparingInt(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static comparingLong(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Boolean;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    private constructor()
    compare(arg0: DeclarationDescriptor, arg1: DeclarationDescriptor): number;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}