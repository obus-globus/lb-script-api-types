import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { HostAccess$Builder } from '../../../org/graalvm/polyglot/HostAccess$Builder.d.ts'
import type { HostAccess$MutableTargetMapping } from '../../../org/graalvm/polyglot/HostAccess$MutableTargetMapping.d.ts'
export class HostAccess extends Object {
    static ALL: HostAccess;
    static CONSTRAINED: HostAccess;
    static EXPLICIT: HostAccess;
    static ISOLATED: HostAccess;
    static NONE: HostAccess;
    static SCOPED: HostAccess;
    static UNTRUSTED: HostAccess;
    static newBuilder(): HostAccess$Builder;
    static newBuilder(paramconf: HostAccess): HostAccess$Builder;
    constructor(annotations: Class<Annotation>[], excludeTypes: EconomicMap<Class<Object>, boolean>, members: AnnotatedElement[], implementableAnnotations: Class<Annotation>[], implementableTypes: Class<Object>[], targetMappings: Object[], name: string, allowPublic: boolean, allowAllImplementations: boolean, allowAllClassImplementations: boolean, allowArrayAccess: boolean, allowListAccess: boolean, allowBufferAccess: boolean, allowIterableAccess: boolean, allowIteratorAccess: boolean, allowMapAccess: boolean, allowBigIntegerNumberAccess: boolean, allowAccessInheritance: boolean, allowMutableTargetMappings: HostAccess$MutableTargetMapping[], methodScopingDefault: boolean, disableMethodScopingAnnotations: Class<Annotation>[], disableMethodScoping: Executable[], methodLookup: MethodHandles$Lookup)
    // private accessAnnotations: Class<Annotation>[];
    // private allowAccessInheritance: boolean;
    // private allowAllClassImplementations: boolean;
    // private allowAllInterfaceImplementations: boolean;
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
    // private impl: Object;
    // private implementableAnnotations: Class<Annotation>[];
    // private implementableTypes: Class<Object>[];
    // private members: AnnotatedElement[];
    // private methodLookup: MethodHandles$Lookup;
    // private methodScopingDefault: boolean;
    // private name: string;
    // private targetMappings: Object[];
    allowsAccess(member: AnnotatedElement): boolean;
    allowsImplementation(type: Class<Object>): boolean;
    equals(obj: Object | null): boolean;
    getMutableTargetMappings(): HostAccess$MutableTargetMapping[];
    getTargetMappings(): Object[];
    hashCode(): number;
    isMethodScoped(e: Executable): boolean;
    isMethodScopingEnabled(): boolean;
    toString(): string;
}