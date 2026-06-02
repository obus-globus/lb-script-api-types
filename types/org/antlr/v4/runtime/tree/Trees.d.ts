import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Predicate } from '../../../../../org/antlr/v4/runtime/misc/Predicate.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { Tree } from '../../../../../org/antlr/v4/runtime/tree/Tree.d.ts'
export class Trees extends Object {
    static _findAllNodes(paramarg0: ParseTree, paramarg1: number, paramarg2: boolean, paramarg3: (Object | null)[]): void;
    static descendants(paramarg0: ParseTree): ParseTree[];
    static findAllNodes(paramarg0: ParseTree, paramarg1: number, paramarg2: boolean): ParseTree[];
    static findAllRuleNodes(paramarg0: ParseTree, paramarg1: number): E[];
    static findAllTokenNodes(paramarg0: ParseTree, paramarg1: number): E[];
    static findNodeSuchThat(paramarg0: Tree, paramarg1: Predicate<Tree>): Tree;
    static getAncestors(paramarg0: Tree): (Object | null)[];
    static getChildren(paramarg0: Tree): Tree[];
    static getDescendants(paramarg0: ParseTree): ParseTree[];
    static getNodeText(paramarg0: Tree, paramarg1: string[]): string;
    static getNodeText(paramarg0: Tree, paramarg1: Parser): string;
    static getRootOfSubtreeEnclosingRegion(paramarg0: ParseTree, paramarg1: number, paramarg2: number): ParserRuleContext;
    static isAncestorOf(paramarg0: Tree, paramarg1: Tree): boolean;
    static stripChildrenOutOfRange(paramarg0: ParserRuleContext, paramarg1: ParserRuleContext, paramarg2: number, paramarg3: number): void;
    static toStringTree(paramarg0: Tree): string;
    static toStringTree(paramarg0: Tree, paramarg1: string[]): string;
    static toStringTree(paramarg0: Tree, paramarg1: Parser): string;
    private constructor()
}