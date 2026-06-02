import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class VersionedStructuredDataKeys extends Object {
    constructor()
    // private keys: StructuredDataKey<Object>[];
    // private unsupportedForOps: StructuredDataKey<Object>[];
    add(arg0: string, arg1: Type<T>): StructuredDataKey<T>;
    keys(): StructuredDataKey<Object>[];
    supportsOps(arg0: StructuredDataKey<Object>): boolean;
}