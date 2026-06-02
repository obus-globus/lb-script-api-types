import type { CommentLine } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentLine.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Node extends Object {
    constructor(arg0: Tag, arg1: Mark, arg2: Mark)
    readonly anchor: string;
    readonly blockComments: CommentLine[];
    readonly endComments: CommentLine[];
    endMark: Mark;
    readonly inLineComments: CommentLine[];
    // private resolved: boolean;
    readonly startMark: Mark;
    readonly tag: Tag;
    readonly twoStepsConstruction: boolean;
    readonly type: Class<Object>;
    useClassConstructor: boolean;
    equals(arg0: Object | null): boolean;
    getAnchor(): string;
    getBlockComments(): CommentLine[];
    getEndComments(): CommentLine[];
    getEndMark(): Mark;
    getInLineComments(): CommentLine[];
    getNodeId(): NodeId;
    getStartMark(): Mark;
    getTag(): Tag;
    getType(): Class<Object>;
    hashCode(): number;
    isTwoStepsConstruction(): boolean;
    setAnchor(arg0: string): void;
    setBlockComments(arg0: CommentLine[]): void;
    setEndComments(arg0: CommentLine[]): void;
    setInLineComments(arg0: CommentLine[]): void;
    setTag(arg0: Tag): void;
    setTwoStepsConstruction(arg0: boolean): void;
    setType(arg0: Class<Object>): void;
    setUseClassConstructor(arg0: boolean): void;
    useClassConstructor(): boolean;
}