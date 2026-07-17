import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HostClassDesc } from '../../../../com/oracle/truffle/host/HostClassDesc.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { HostTargetMapping } from '../../../../com/oracle/truffle/host/HostTargetMapping.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassValue } from '../../../../java/lang/ClassValue.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
export class HostClassCache extends Object {
    static findOrInitialize(paramhostLanguage: AbstractPolyglotImpl$AbstractHostAccess, paramapiAccess: AbstractPolyglotImpl$APIAccess, paramhostAccess: Object): HostClassCache;
    static forInstance(paramreceiver: HostObject): HostClassCache;
    private constructor(polyglotAccess: AbstractPolyglotImpl$AbstractHostAccess, apiAccess: AbstractPolyglotImpl$APIAccess, hostAccess: Object)
    // private allowsAccessInheritance: boolean;
    // private allowsPublicAccess: boolean;
    // private apiAccess: AbstractPolyglotImpl$APIAccess;
    // private arrayAccess: boolean;
    readonly bigIntegerNumberAccess: boolean;
    // private bufferAccess: boolean;
    // private descs: ClassValue<HostClassDesc>;
    // private hostAccess: Object;
    // private iterableAccess: boolean;
    // private iteratorAccess: boolean;
    // private listAccess: boolean;
    // private mapAccess: boolean;
    // private methodLookup: MethodHandles$Lookup;
    // private polyglotHostAccess: AbstractPolyglotImpl$AbstractHostAccess;
    // private targetMappings: JavaMap<Class<Object>, Object>;
    // private weakHostClassRef: WeakReference<HostClassCache>;
    allowsAccess(m: Constructor<Object>): boolean;
    allowsAccess(f: Field): boolean;
    allowsAccess(m: Method): boolean;
    allowsImplementation(type: Class<Object>): boolean;
    forClass(clazz: Class<Object>): HostClassDesc;
    getMappings(targetType: Class<Object>): HostTargetMapping[];
    getMethodLookup(clazz: Class<Object>): MethodHandles$Lookup;
    hasCustomNamedLookup(): boolean;
    hasTargetMappings(): boolean;
    isArrayAccess(): boolean;
    isBigIntegerNumberAccess(): boolean;
    isBufferAccess(): boolean;
    isIterableAccess(): boolean;
    isIteratorAccess(): boolean;
    isListAccess(): boolean;
    isMapAccess(): boolean;
    methodScoped(e: Executable): boolean;
}