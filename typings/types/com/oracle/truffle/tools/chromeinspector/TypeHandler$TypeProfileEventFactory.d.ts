import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TypeHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler.d.ts'
import type { TypeHandler$SectionTypeProfile } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler$SectionTypeProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeHandler$TypeProfileEventFactory extends Object implements ExecutionEventNodeFactory {
    private constructor(null_: TypeHandler)
    // private profileMap: JavaMap<SourceSection, TypeHandler$SectionTypeProfile>;
    create(context: EventContext): ExecutionEventNode;
    // private getArgSection(function_: SourceSection, argument: Object): SourceSection;
}