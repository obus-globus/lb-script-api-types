import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseCapabilityRecord extends Object {
    static create(parampromise: JSDynamicObject, paramresolve: JSDynamicObject, paramreject: JSDynamicObject): PromiseCapabilityRecord;
    private constructor(promise: JSDynamicObject, resolve: JSDynamicObject, reject: JSDynamicObject)
    readonly promise: JSDynamicObject;
    readonly reject: Object;
    readonly resolve: Object;
    readonly throwaway: boolean;
    getPromise(): JSDynamicObject;
    getReject(): Object;
    getResolve(): Object;
    isThrowaway(): boolean;
    markAsThrowaway(): void;
    setPromise(promise: JSDynamicObject): void;
    setReject(reject: Object): void;
    setResolve(resolve: Object): void;
}