import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSAgent } from '../../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
import type { JSAgentWaiterList$WaiterRecord } from '../../../../../../com/oracle/truffle/js/runtime/JSAgentWaiterList$WaiterRecord.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { TypedArray$TypedIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedIntArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SharedMemorySync extends Object {
    static addWaiter(paramagent: JSAgent, paramwl: (Object | null)[], paramwaiterRecord: JSAgentWaiterList$WaiterRecord, paramisAsync: boolean): void;
    static compareAndSetBigInt(paramtarget: JSTypedArrayObject, paramintArrayOffset: number, paramexpected: BigInt, paramreplacement: BigInt, paramtypedArray: TypedArray$TypedBigIntArray): boolean;
    static compareAndSetInt(paramtarget: JSTypedArrayObject, paramintArrayOffset: number, paramexpected: number, paramreplacement: number, paramtypedArray: TypedArray$TypedIntArray): boolean;
    static doVolatileGet(paramtarget: JSTypedArrayObject, paramintArrayOffset: number, paramtypedArray: TypedArray$TypedIntArray): number;
    static doVolatileGetBigInt(paramtarget: JSTypedArrayObject, paramintArrayOffset: number, paramtypedArray: TypedArray$TypedBigIntArray): BigInt;
    static doVolatilePut(paramtarget: JSTypedArrayObject, paramindex: number, paramvalue: number, paramtypedArray: TypedArray$TypedIntArray): void;
    static doVolatilePutBigInt(paramtarget: JSTypedArrayObject, paramindex: number, paramvalue: BigInt, paramtypedArray: TypedArray$TypedBigIntArray): void;
    static getWaiterList(paramcontext: JSContext, paramtarget: JSDynamicObject, paramindexPos: number): (Object | null)[];
    static removeWaiter(paramwl: (Object | null)[], paramw: JSAgentWaiterList$WaiterRecord): void;
    static removeWaiters(paramwl: (Object | null)[], paramcount: number): JSAgentWaiterList$WaiterRecord[];
    static suspendAgent(paramagent: JSAgent, paramwl: (Object | null)[], paramwaiterRecord: JSAgentWaiterList$WaiterRecord): boolean;
    static wakeWaiters(paramwl: (Object | null)[]): void;
    private constructor()
}