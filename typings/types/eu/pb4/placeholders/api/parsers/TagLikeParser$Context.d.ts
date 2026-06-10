import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { TagLikeParser } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser.d.ts'
import type { TagLikeParser$Scope } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Scope.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TagLikeParser$Context extends Object {
    constructor(arg0: TagLikeParser, arg1: string)
    // private currentPos: number;
    // private input: string;
    // private parser: TagLikeParser;
    // private stack: TagLikeParser$Scope[];
    addNode(arg0: TextNode): void;
    contains(arg0: string): boolean;
    currentTagPos(): number;
    input(): string;
    parser(): NodeParser;
    peekId(): string;
    pop(): void;
    pop(arg0: (param0: string) => boolean): void;
    pop(arg0: number): void;
    pop(arg0: string): void;
    popInclusive(arg0: (param0: string) => boolean): void;
    popOnly(arg0: string): void;
    push(arg0: string, arg1: (param0: TextNode[]) => TextNode): void;
    pushParent(): void;
    pushWithParser(arg0: string, arg1: (param0: TextNode[], param1: NodeParser) => TextNode): void;
    size(): number;
    toTextNode(): TextNode[];
}