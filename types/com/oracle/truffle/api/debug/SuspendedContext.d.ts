import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SuspendedContext extends Object{
    createUnwind(info: Object, unwindBinding: EventBinding<Object>): ThreadDeath;
    getInstrumentedNode(): Node;
    getInstrumentedSourceSection(): SourceSection;
    getStackDepth(): number;
    hasTag(tag: Class<Tag>): boolean;
    isLanguageContextInitialized(): boolean;
}