import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constable } from '../../../java/lang/constant/Constable.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { VarForm } from '../../../java/lang/invoke/VarForm.d.ts'
import type { VarHandle$AccessDescriptor } from '../../../java/lang/invoke/VarHandle$AccessDescriptor.d.ts'
import type { VarHandle$AccessMode } from '../../../java/lang/invoke/VarHandle$AccessMode.d.ts'
import type { VarHandle$AccessType } from '../../../java/lang/invoke/VarHandle$AccessType.d.ts'
import type { VarHandle$VarHandleDesc } from '../../../java/lang/invoke/VarHandle$VarHandleDesc.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VarHandle extends Object implements Constable {
    static acquireFence(): void;
    static fullFence(): void;
    static loadLoadFence(): void;
    static releaseFence(): void;
    static storeStoreFence(): void;
    constructor(arg0: VarForm)
    constructor(arg0: VarForm, arg1: boolean)
    // private exact: boolean;
    // private methodHandleTable: MethodHandle[];
    // private methodTypeTable: MethodType[];
    // private vform: VarForm;
    accessModeType(arg0: VarHandle$AccessMode): MethodType;
    accessModeType(arg0: number): MethodType;
    accessModeTypeUncached(arg0: VarHandle$AccessType): MethodType;
    accessModeTypeUncached(arg0: number): MethodType;
    asDirect(): VarHandle;
    checkAccessModeThenIsDirect(arg0: VarHandle$AccessDescriptor): boolean;
    compareAndExchange(arg0: Object[]): Object;
    compareAndExchangeAcquire(arg0: Object[]): Object;
    compareAndExchangeRelease(arg0: Object[]): Object;
    compareAndSet(arg0: Object[]): boolean;
    coordinateTypes(): Class<Object>[];
    describeConstable(): Optional<VarHandle$VarHandleDesc>;
    get(arg0: Object[]): Object;
    getAcquire(arg0: Object[]): Object;
    getAndAdd(arg0: Object[]): Object;
    getAndAddAcquire(arg0: Object[]): Object;
    getAndAddRelease(arg0: Object[]): Object;
    getAndBitwiseAnd(arg0: Object[]): Object;
    getAndBitwiseAndAcquire(arg0: Object[]): Object;
    getAndBitwiseAndRelease(arg0: Object[]): Object;
    getAndBitwiseOr(arg0: Object[]): Object;
    getAndBitwiseOrAcquire(arg0: Object[]): Object;
    getAndBitwiseOrRelease(arg0: Object[]): Object;
    getAndBitwiseXor(arg0: Object[]): Object;
    getAndBitwiseXorAcquire(arg0: Object[]): Object;
    getAndBitwiseXorRelease(arg0: Object[]): Object;
    getAndSet(arg0: Object[]): Object;
    getAndSetAcquire(arg0: Object[]): Object;
    getAndSetRelease(arg0: Object[]): Object;
    getMethodHandle(arg0: number): MethodHandle;
    getMethodHandleUncached(arg0: number): MethodHandle;
    getOpaque(arg0: Object[]): Object;
    getVolatile(arg0: Object[]): Object;
    hasInvokeExactBehavior(): boolean;
    isAccessModeSupported(arg0: VarHandle$AccessMode): boolean;
    set(arg0: Object[]): void;
    setOpaque(arg0: Object[]): void;
    setRelease(arg0: Object[]): void;
    setVolatile(arg0: Object[]): void;
    target(): VarHandle;
    // private throwWrongMethodTypeException(arg0: VarHandle$AccessDescriptor): void;
    toMethodHandle(arg0: VarHandle$AccessMode): MethodHandle;
    toString(): string;
    updateVarForm(arg0: VarForm): void;
    varType(): Class<Object>;
    weakCompareAndSet(arg0: Object[]): boolean;
    weakCompareAndSetAcquire(arg0: Object[]): boolean;
    weakCompareAndSetPlain(arg0: Object[]): boolean;
    weakCompareAndSetRelease(arg0: Object[]): boolean;
    withInvokeBehavior(): VarHandle;
    withInvokeExactBehavior(): VarHandle;
}