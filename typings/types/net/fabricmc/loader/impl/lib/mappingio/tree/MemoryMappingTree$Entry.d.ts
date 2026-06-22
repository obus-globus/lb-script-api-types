import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MemoryMappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree.d.ts'
export abstract class MemoryMappingTree$Entry<T extends MemoryMappingTree$Entry<T>> extends Object implements MappingTree$ElementMapping {
    constructor(arg0: MemoryMappingTree, arg1: string)
    constructor(arg0: MemoryMappingTree, arg1: MappingTree$ElementMapping, arg2: number)
    comment: string;
    // private dstNames: string[];
    // private missingSrcNameAllowed: boolean;
    readonly srcName: string;
    // private tree: MemoryMappingTree;
    acceptElement(arg0: MappingVisitor, arg1: string[]): boolean;
    assertSrcNamePresent(): void;
    copyFrom(arg0: T, arg1: boolean): void;
    getComment(): string;
    getDstName(arg0: number): string;
    getKind(): MappedElementKind;
    getSrcName(): string;
    getSrcNameUnchecked(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    isSrcNameMissing(): boolean;
    resizeDstNames(arg0: number): void;
    setCommentInternal(arg0: string): void;
    setDstName(arg0: string, arg1: number): void;
    setDstNameInternal(arg0: string, arg1: number): void;
    setSrcName(arg0: string): void;
}