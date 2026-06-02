import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { SourceLocation } from '../../../../../../../io/github/douira/glsl_transformer/ast/transform/SourceLocation.d.ts'
import type { Template } from '../../../../../../../io/github/douira/glsl_transformer/ast/transform/Template.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ASTNode extends Object {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    readonly lastParent: ASTNode;
    readonly parent: ASTNode;
    // private registered: boolean;
    readonly root: Root;
    // private selfReplacer: (param0: ASTNode) => void;
    sourceLocation: SourceLocation;
    // private template: Template<Object>;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    // private changeRootRecursive(arg0: Root): void;
    clone(): ASTNode;
    // private cloneFull(): ASTNode;
    cloneInto(arg0: Root): ASTNode;
    detach(): boolean;
    detachAndDelete(): boolean;
    detachParent(): void;
    getAncestor<N extends ASTNode>(arg0: Class<N>): N;
    getAncestor(arg0: (param0: ASTNode) => kotlin.Boolean): ASTNode;
    getAncestor(arg0: number, arg1: number, arg2: (param0: ASTNode) => kotlin.Boolean): ASTNode;
    getAncestors(): Stream<ASTNode>;
    getBranchAncestor<N extends ASTNode>(arg0: Class<N>, arg1: (param0: N) => ASTNode): N;
    getBranchAncestor<N extends ASTNode>(arg0: number, arg1: number, arg2: Class<N>, arg3: (param0: N) => ASTNode): N;
    getBranchAncestor(arg0: number, arg1: number, arg2: (param0: ASTNode, param1: ASTNode) => kotlin.Boolean): ASTNode;
    getBranchAncestorContinue<R extends ASTNode>(arg0: Class<N>, arg1: (param0: N) => ASTNode, arg2: Class<R>): R;
    getLastParent(): ASTNode;
    getNthParent(arg0: number): ASTNode;
    getParent(): ASTNode;
    getParentSetter(): (param0: ASTNode) => void;
    getRoot(): Root;
    getSourceLocation(): SourceLocation;
    hasAncestor(arg0: ASTNode): boolean;
    hasAncestor(arg0: Class<ASTNode>): boolean;
    hasAncestor(arg0: (param0: ASTNode) => kotlin.Boolean): boolean;
    hasAncestor(arg0: number, arg1: number, arg2: (param0: ASTNode) => kotlin.Boolean): boolean;
    hasParent(): boolean;
    markTemplate(arg0: Template<Object>): void;
    // private register(arg0: boolean): void;
    replaceBy(arg0: ASTNode): boolean;
    replaceByAndDelete(arg0: ASTNode): boolean;
    setParent(arg0: ASTNode, arg1: (param0: ASTNode) => void): boolean;
    // private setRoot(arg0: Root, arg1: boolean): void;
    setSourceLocation(arg0: SourceLocation): void;
    setup<N extends ASTNode>(arg0: N, arg1: (param0: N) => void): N;
    // private unregister(arg0: boolean): void;
    unregisterSubtree(): void;
    updateParents<N extends ASTNode>(arg0: N, arg1: N, arg2: (param0: N) => void): void;
}