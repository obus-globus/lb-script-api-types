import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { StaticShape$Builder } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape$Builder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StaticShape<T extends Object | number | string | boolean> extends Object {
    static newBuilder(paramlanguage: TruffleLanguage<Object>): StaticShape$Builder;
    constructor(storageClass: Class<Object>, safetyChecks: boolean)
    factory: T;
    // private safetyChecks: boolean;
    // private storageClass: Class<Object>;
    cast<U extends Object | number | string | boolean>(obj: Object, type: Class<U>, checkCondition: boolean): U;
    getFactory(): T;
    getFactoryInterface(): Class<T>;
    getStorage(obj: Object, primitive: boolean): Object;
    getStorageClass(): Class<Object>;
    setFactory(factory: T): void;
}