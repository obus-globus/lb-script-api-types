import type { MappingTree } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$MemberMapping } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MemberMapping.d.ts'
import type { MixinRemapper } from '../../../../../../net/fabricmc/loader/impl/util/mappings/MixinRemapper.d.ts'
export class MixinIntermediaryDevRemapper extends MixinRemapper {
    constructor(arg0: MappingTree, arg1: string, arg2: string)
    // private allPossibleClassNames: string[];
    // private nameDescFieldLookup: { [key: string]: string };
    // private nameDescMethodLookup: { [key: string]: string };
    // private nameFieldLookup: { [key: string]: string };
    // private nameMethodLookup: { [key: string]: string };
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    // private mapFieldNameInner(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    // private mapMethodNameInner(arg0: string, arg1: string, arg2: string): string;
    // private putMemberInLookup<T extends MappingTree$MemberMapping>(arg0: number, arg1: number, arg2: T[], arg3: { [key: string]: string }, arg4: { [key: string]: string }): void;
    // private throwAmbiguousLookup(arg0: string, arg1: string, arg2: string): void;
}