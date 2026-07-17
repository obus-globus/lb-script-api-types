import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { DumperOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions.d.ts'
import type { DumperOptions$Version } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$Version.d.ts'
import type { CommentLine } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentLine.d.ts'
import type { Emitable } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/Emitable.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Resolver } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/resolver/Resolver.d.ts'
import type { AnchorGenerator } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/serializer/AnchorGenerator.d.ts'
import type { MergeUtils } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/MergeUtils.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Serializer extends Object {
    constructor(arg0: Emitable, arg1: Resolver, arg2: DumperOptions, arg3: Tag)
    // private anchorGenerator: AnchorGenerator;
    // private anchors: JavaMap<Node, string>;
    // private closed: boolean;
    // private dereferenceAliases: boolean;
    // private emitter: Emitable;
    // private explicitEnd: boolean;
    // private explicitRoot: Tag;
    // private explicitStart: boolean;
    // private mergeUtils: MergeUtils;
    // private recursive: Node[];
    // private resolver: Resolver;
    // private serializedNodes: Node[];
    // private useTags: JavaMap<string, string>;
    // private useVersion: DumperOptions$Version;
    // private anchorNode(arg0: Node): void;
    close(): void;
    open(): void;
    serialize(arg0: Node): void;
    // private serializeComments(arg0: CommentLine[]): void;
    // private serializeNode(arg0: Node, arg1: Node): void;
}