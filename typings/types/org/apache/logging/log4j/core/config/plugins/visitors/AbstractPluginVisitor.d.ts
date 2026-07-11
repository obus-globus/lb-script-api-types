import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Member } from '../../../../../../../../java/lang/reflect/Member.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginVisitor } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/visitors/PluginVisitor.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export abstract class AbstractPluginVisitor<A extends Annotation> extends Object implements PluginVisitor<A> {
    constructor(clazz: Class<A>)
    // private aliases: string[];
    // private annotation: A;
    // private clazz: Class<A>;
    // private conversionType: Class<Object>;
    // private member: Member;
    // private substitutor: StrSubstitutor;
    convert(value: string, defaultValue: Object): Object;
    setAliases(...someAliases: string[]): PluginVisitor<A>;
    setAnnotation(anAnnotation: Annotation): PluginVisitor<A>;
    setConversionType(aConversionType: Class<Object>): PluginVisitor<A>;
    setMember(aMember: Member): PluginVisitor<A>;
    setStrSubstitutor(aSubstitutor: StrSubstitutor): PluginVisitor<A>;
}