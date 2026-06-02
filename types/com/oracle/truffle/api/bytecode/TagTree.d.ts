import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TagTree extends Object{
    getEnterBytecodeIndex(): number;
    getReturnBytecodeIndex(): number;
    getSourceSection(): SourceSection;
    getSourceSections(): SourceSection[];
    getTags(): Class<Tag>[];
    getTreeChildren(): TagTree[];
    hasTag(tag: Class<Tag>): boolean;
}