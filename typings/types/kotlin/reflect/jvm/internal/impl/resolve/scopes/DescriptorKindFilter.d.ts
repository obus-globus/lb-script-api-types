import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DescriptorKindExclude } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindExclude.d.ts'
import type { DescriptorKindFilter$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter$Companion.d.ts'
export class DescriptorKindFilter extends Object {
    static ALL: DescriptorKindFilter;
    static CALLABLES: DescriptorKindFilter;
    static CLASSIFIERS: DescriptorKindFilter;
    static Companion: DescriptorKindFilter$Companion;
    static FUNCTIONS: DescriptorKindFilter;
    static NON_SINGLETON_CLASSIFIERS: DescriptorKindFilter;
    static PACKAGES: DescriptorKindFilter;
    static SINGLETON_CLASSIFIERS: DescriptorKindFilter;
    static TYPE_ALIASES: DescriptorKindFilter;
    static VALUES: DescriptorKindFilter;
    static VARIABLES: DescriptorKindFilter;
    constructor(arg0: number, arg1: DescriptorKindExclude[])
    constructor(arg0: number, arg1: (Object | null)[], arg2: number, arg3: DefaultConstructorMarker)
    readonly excludes: DescriptorKindExclude[];
    readonly kindMask: number;
    acceptsKinds(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    getExcludes(): DescriptorKindExclude[];
    getKindMask(): number;
    hashCode(): number;
    restrictedToKindsOrNull(arg0: number): DescriptorKindFilter;
    toString(): string;
}