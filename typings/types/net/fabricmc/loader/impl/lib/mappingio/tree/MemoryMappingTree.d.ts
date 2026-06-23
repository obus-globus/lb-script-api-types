import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { HierarchyInfoProvider } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/HierarchyInfoProvider.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTree$MetadataEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MetadataEntry.d.ts'
import type { MemoryMappingTree$ClassEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$ClassEntry.d.ts'
import type { MemoryMappingTree$Entry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$Entry.d.ts'
import type { MemoryMappingTree$GlobalMemberKey } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$GlobalMemberKey.d.ts'
import type { MemoryMappingTree$MemberEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberEntry.d.ts'
import type { MemoryMappingTree$MethodEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodEntry.d.ts'
import type { VisitOrder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitOrder.d.ts'
import type { VisitableMappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitableMappingTree.d.ts'
export class MemoryMappingTree extends Object implements VisitableMappingTree {
    constructor()
    constructor(arg0: boolean)
    // private classesByDstNames: { [key: string]: MemoryMappingTree$ClassEntry }[];
    // private classesBySrcName: { [key: string]: MemoryMappingTree$ClassEntry };
    // private classesView: MemoryMappingTree$ClassEntry[];
    // private currentClass: MemoryMappingTree$ClassEntry;
    // private currentEntry: MemoryMappingTree$Entry<any>;
    // private currentMethod: MemoryMappingTree$MethodEntry;
    // private dstNameMap: number[];
    readonly dstNamespaces: string[];
    // private hierarchyInfo: HierarchyInfoProvider<Object>;
    // private inVisitPass: boolean;
    // private indexByDstNames: boolean;
    // private metadata: MappingTree$MetadataEntry[];
    // private pendingClasses: { [key: string]: MemoryMappingTree$ClassEntry };
    // private pendingMembers: Map<MemoryMappingTree$GlobalMemberKey, MemoryMappingTree$MemberEntry<any>>;
    readonly srcNamespace: string;
    // private srcNsMap: number;
    accept(arg0: MappingVisitor): void;
    accept(arg0: MappingVisitor, arg1: VisitOrder): void;
    // private addPendingClass(arg0: MemoryMappingTree$ClassEntry): void;
    // private addPendingMember(arg0: MemoryMappingTree$MemberEntry<any>): void;
    assertNotInVisitPass(): void;
    getClass(arg0: string): MappingTree$ClassMapping;
    getClass(arg0: string, arg1: number): MappingTree$ClassMapping;
    getClasses(): MappingTree$ClassMapping[];
    getDstNamespaces(): string[];
    getSrcNamespace(): string;
    // private getSrcNsEquivalent(arg0: MappingTree$ElementMapping): number;
    // private initClassesByDstNames(): void;
    // private propagateNames<T extends Object | number | string | boolean>(arg0: HierarchyInfoProvider<T>): void;
    // private queuePendingClass(arg0: string): MemoryMappingTree$ClassEntry;
    // private queuePendingMember(arg0: string, arg1: string, arg2: boolean): MemoryMappingTree$MemberEntry<any>;
    reset(): void;
    // private resizeDstNames(arg0: number): void;
    visitClass(arg0: string): boolean;
    visitComment(arg0: MappedElementKind, arg1: string): void;
    visitDstName(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitEnd(): boolean;
    visitField(arg0: string, arg1: string): boolean;
    visitMetadata(arg0: string, arg1: string): void;
    visitMethod(arg0: string, arg1: string): boolean;
    visitMethodArg(arg0: number, arg1: number, arg2: string): boolean;
    visitMethodVar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
    visitNamespaces(arg0: string, arg1: string[]): void;
}