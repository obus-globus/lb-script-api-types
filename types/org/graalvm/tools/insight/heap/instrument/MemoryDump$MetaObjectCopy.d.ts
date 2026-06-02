import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MemoryDump$MetaObjectCopy extends Object implements TruffleObject {
    constructor(metaSimpleName: string, metaQualifiedName: string)
    // private metaQualifiedName: string;
    // private metaSimpleName: string;
    getMetaQualifiedName(): Object;
    getMetaSimpleName(): Object;
    isMetaInstance(instance: Object): boolean;
    isMetaObject(): boolean;
}