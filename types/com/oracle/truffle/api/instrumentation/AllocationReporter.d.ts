import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Reference } from '../../../../../java/lang/ref/Reference.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AllocationReporter extends Object {
    static SIZE_UNKNOWN: number;
    constructor(language: LanguageInfo)
    // private activeListeners: (param0: boolean) => void[];
    // private language: LanguageInfo;
    // private listeners: AllocationListener[];
    // private listenersNotChangedAssumption: Assumption;
    // private valueCheck: ThreadLocal<Reference<Object>[]>;
    addActiveListener(listener: (param0: boolean) => void): void;
    addListener(l: AllocationListener): void;
    // private allocatedCheck(value: Object, oldSize: number, newSize: number): void;
    isActive(): boolean;
    // private notifyAllocateOrReallocate(value: Object, oldSize: number, newSizeEstimate: number): void;
    // private notifyAllocated(value: Object, oldSize: number, newSize: number): void;
    onEnter(valueToReallocate: Object, oldSize: number, newSizeEstimate: number): void;
    // private onEnterCheck(valueToReallocate: Object, oldSize: number, newSizeEstimate: number): void;
    onReturnValue(value: Object, oldSize: number, newSize: number): void;
    // private onReturnValueCheck(value: Object, oldSize: number, newSize: number): void;
    removeActiveListener(listener: (param0: boolean) => void): void;
    removeListener(l: AllocationListener): void;
    // private setValueCheck(value: Object): boolean;
}