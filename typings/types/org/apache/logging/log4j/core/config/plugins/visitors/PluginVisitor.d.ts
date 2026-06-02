import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Member } from '../../../../../../../../java/lang/reflect/Member.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export interface PluginVisitor<A extends Annotation> extends Object{
    setAliases(aliases: string[]): PluginVisitor<A>;
    setAnnotation(annotation: Annotation): PluginVisitor<A>;
    setConversionType(conversionType: Class<Object>): PluginVisitor<A>;
    setMember(member: Member): PluginVisitor<A>;
    setStrSubstitutor(substitutor: StrSubstitutor): PluginVisitor<A>;
    visit(configuration: Configuration, node: Node, event: LogEvent, log: StringBuilder): Object;
}