import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { CommentEventsCollector } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentEventsCollector.d.ts'
import type { CommentLine } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentLine.d.ts'
import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeTuple.d.ts'
import type { Parser } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/Parser.d.ts'
import type { Resolver } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/resolver/Resolver.d.ts'
import type { MergeUtils } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/MergeUtils.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Composer extends Object {
    constructor(arg0: Parser, arg1: Resolver, arg2: LoaderOptions)
    // private anchors: JavaMap<string, Node>;
    // private blockCommentsCollector: CommentEventsCollector;
    // private inlineCommentsCollector: CommentEventsCollector;
    // private loadingConfig: LoaderOptions;
    // private mergeUtils: MergeUtils;
    // private nestingDepth: number;
    // private nestingDepthLimit: number;
    // private nonScalarAliasesCount: number;
    // private parser: Parser;
    // private recursiveNodes: Node[];
    // private resolver: Resolver;
    asMappingNode(arg0: Node): MappingNode;
    checkNode(): boolean;
    composeKeyNode(arg0: MappingNode): Node;
    composeMappingChildren(arg0: NodeTuple[], arg1: MappingNode): void;
    composeMappingNode(arg0: string): Node;
    // private composeNode(arg0: Node): Node;
    composeScalarNode(arg0: string, arg1: CommentLine[]): Node;
    composeSequenceNode(arg0: string): Node;
    composeValueNode(arg0: MappingNode): Node;
    // private decreaseNestingDepth(): void;
    getNode(): Node;
    getSingleNode(): Node;
    // private increaseNestingDepth(): void;
}