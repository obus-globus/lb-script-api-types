import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Accessor$HostSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$HostSupport.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
export class HostAccessor$HostImpl extends Accessor$HostSupport {
    private constructor()
    bigIntegerFitsInDouble(b: BigInteger): boolean;
    bigIntegerFitsInFloat(b: BigInteger): boolean;
    convertPrimitiveLossLess(value: Object, requestedType: Class<Object>): Object;
    convertPrimitiveLossy(value: Object, requestedType: Class<Object>): Object;
    createDefaultHostLanguage(polyglot: AbstractPolyglotImpl, access: AbstractPolyglotImpl$AbstractHostAccess): TruffleLanguage<Object>;
    findActualTypeArgument(typeOrTypeVar: Type, genericTargetType: Type): Type;
    getHostNull(): Object;
    getRawTypeFromGenericType(genericType: Type, defaultRawType: Class<Object>): Class<Object>;
    inlineToHostNode(target: Object): Node;
    isDisconnectedHostObject(obj: Object): boolean;
    isDisconnectedHostProxy(value: Object): boolean;
    isGuestToHostRootNode(root: RootNode): boolean;
    isHostBoundaryValue(obj: Object): boolean;
    isHostLanguage(languageClass: Class<Object>): boolean;
    isPrimitiveTarget(c: Class<Object>): boolean;
    newTargetTypeMapping<S extends Object | number | string | boolean, T extends Object | number | string | boolean>(sourceType: Class<S>, targetType: Class<T>, acceptsValue: (param0: S) => boolean, convertValue: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence): Object;
    toDisconnectedHostObject(hostValue: Object): Object;
    toDisconnectedHostProxy(hostValue: Object): Object;
    unboxDisconnectedHostObject(hostValue: Object): Object;
    unboxDisconnectedHostProxy(hostValue: Object): Object;
}