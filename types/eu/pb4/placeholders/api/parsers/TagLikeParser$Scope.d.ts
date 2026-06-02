import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TagLikeParser$Scope extends Record {
    static enclosing(paramarg0: string, paramarg1: (param0: (Object | null)[]) => TextNode): TagLikeParser$Scope;
    static enclosing(paramarg0: (param0: (Object | null)[]) => TextNode): TagLikeParser$Scope;
    static enclosingParsed(paramarg0: string, paramarg1: (param0: (Object | null)[], param1: NodeParser) => TextNode): TagLikeParser$Scope;
    static enclosingParsed(paramarg0: (param0: (Object | null)[], param1: NodeParser) => TextNode): TagLikeParser$Scope;
    static parent(): TagLikeParser$Scope;
    private constructor(id: string, nodes: TextNode[], merger: (param0: TextNode[], param1: NodeParser) => TextNode)
    // private id: string;
    // private merger: (param0: TextNode[], param1: NodeParser) => TextNode;
    // private nodes: TextNode[];
    collapse(arg0: NodeParser): TextNode;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    merger(): (param0: TextNode[], param1: NodeParser) => TextNode;
    nodes(): TextNode[];
    toString(): string;
}