import type { NearestNodesCollector$Position } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$Position.d.ts'
import type { NearestSectionFilter$Builder } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter$Builder.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NearestSectionFilter extends Object {
    static newBuilder(paramline: number, paramcolumn: number): NearestSectionFilter$Builder;
    private constructor(position: NearestNodesCollector$Position, anchorStart: boolean, tags: Class<Object>[])
    // private anchorStart: boolean;
    // private position: NearestNodesCollector$Position;
    // private tagClasses: Class<Tag>[];
    // private tags: Class<Object>[];
    getPosition(): NearestNodesCollector$Position;
    getReferencedTags(): Class<Object>[];
    getTagClasses(): Class<Tag>[];
    isAnchorStart(): boolean;
    toString(): string;
}