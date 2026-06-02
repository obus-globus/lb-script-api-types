import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { ExternalDeclarationIndex$DeclarationEntry } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex$DeclarationEntry.d.ts'
import type { StringKeyedIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/StringKeyedIndex.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExternalDeclarationIndex<S extends ExternalDeclarationIndex$DeclarationEntry[], I extends { [key: string]: S }> extends StringKeyedIndex<ExternalDeclarationIndex$DeclarationEntry, ExternalDeclaration, S, I> {
    static withOnlyExact(paramarg0: () => Object | null): ExternalDeclarationIndex<Object, Object>;
    static withOnlyExact(): ExternalDeclarationIndex<Object, Object>;
    static withOnlyExactOrdered(): ExternalDeclarationIndex<Object, Object>;
    constructor(arg0: I, arg1: () => S)
    add(arg0: ExternalDeclaration): void;
    // private addEntry(arg0: ExternalDeclaration, arg1: ASTNode, arg2: string): void;
    getNode(arg0: ExternalDeclarationIndex$DeclarationEntry): ExternalDeclaration;
    // private iterateKeyMembers(arg0: ExternalDeclaration, arg1: (param0: ASTNode, param1: string) => void): void;
    // private iterateSubtreeEntries(arg0: ASTNode, arg1: ASTNode, arg2: (param0: ASTNode, param1: string) => void): void;
    notifySubtreeAdd(arg0: ASTNode): void;
    notifySubtreeRemove(arg0: ASTNode): void;
    remove(arg0: ExternalDeclaration): void;
    // private removeEntry(arg0: ExternalDeclaration, arg1: ASTNode, arg2: string): void;
}