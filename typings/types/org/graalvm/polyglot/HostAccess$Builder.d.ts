import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { HostAccess } from '../../../org/graalvm/polyglot/HostAccess.d.ts'
import type { HostAccess$MutableTargetMapping } from '../../../org/graalvm/polyglot/HostAccess$MutableTargetMapping.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
export class HostAccess$Builder extends Object {
    constructor(null_: HostAccess)
    constructor(null_: HostAccess, access: HostAccess)
    // private accessAnnotations: Class<Annotation>[];
    // private allowAccessInheritance: boolean;
    // private allowAllClassImplementations: boolean;
    // private allowAllImplementations: boolean;
    // private allowArrayAccess: boolean;
    // private allowBigIntegerNumberAccess: boolean;
    // private allowBufferAccess: boolean;
    // private allowIterableAccess: boolean;
    // private allowIteratorAccess: boolean;
    // private allowListAccess: boolean;
    // private allowMapAccess: boolean;
    // private allowMutableTargetMappings: HostAccess$MutableTargetMapping[];
    // private allowPublic: boolean;
    // private disableMethodScoping: Executable[];
    // private disableMethodScopingAnnotations: Class<Annotation>[];
    // private excludeTypes: EconomicMap<Class<Object>, boolean>;
    // private implementableTypes: Class<Object>[];
    // private implementationAnnotations: Class<Annotation>[];
    // private members: AnnotatedElement[];
    // private methodLookup: MethodHandles$Lookup;
    // private methodScopingDefault: boolean;
    // private name: string;
    // private targetMappings: Object[];
    allowAccess(element: Executable): HostAccess$Builder;
    allowAccess(element: Field): HostAccess$Builder;
    allowAccessAnnotatedBy(annotation: Class<Annotation>): HostAccess$Builder;
    allowAccessInheritance(inheritAccess: boolean): HostAccess$Builder;
    allowAllClassImplementations(allow: boolean): HostAccess$Builder;
    allowAllImplementations(allow: boolean): HostAccess$Builder;
    allowArrayAccess(arrayAccess: boolean): HostAccess$Builder;
    allowBigIntegerNumberAccess(bigIntegerNumberAccess: boolean): HostAccess$Builder;
    allowBufferAccess(bufferAccess: boolean): HostAccess$Builder;
    allowImplementations(type: Class<Object>): HostAccess$Builder;
    allowImplementationsAnnotatedBy(annotation: Class<Annotation>): HostAccess$Builder;
    allowIterableAccess(iterableAccess: boolean): HostAccess$Builder;
    allowIteratorAccess(iteratorAccess: boolean): HostAccess$Builder;
    allowListAccess(listAccess: boolean): HostAccess$Builder;
    allowMapAccess(mapAccess: boolean): HostAccess$Builder;
    allowMutableTargetMappings(...mapping: HostAccess$MutableTargetMapping[]): HostAccess$Builder;
    allowPublicAccess(allow: boolean): HostAccess$Builder;
    build(): HostAccess;
    denyAccess(clazz: Class<Object>): HostAccess$Builder;
    denyAccess(clazz: Class<Object>, includeSubclasses: boolean): HostAccess$Builder;
    disableMethodScoping(e: Executable): HostAccess$Builder;
    disableMethodScopingAnnotatedBy(annotation: Class<Annotation>): HostAccess$Builder;
    methodScoping(scopingDefault: boolean): HostAccess$Builder;
    name(givenName: string): HostAccess$Builder;
    targetTypeMapping<S extends unknown, T extends unknown>(sourceType: Class<S>, targetType: Class<T>, accepts: (param0: S) => boolean, converter: (param0: S) => T): HostAccess$Builder;
    targetTypeMapping<S extends unknown, T extends unknown>(sourceType: Class<S>, targetType: Class<T>, accepts: (param0: S) => boolean, converter: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence): HostAccess$Builder;
    useModuleLookup(lookup: MethodHandles$Lookup): HostAccess$Builder;
}