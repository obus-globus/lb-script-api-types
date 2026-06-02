import type { AllocationEvent } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEvent.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HeapMonitor$Listener extends Object implements AllocationListener {
    private constructor(null_: HeapMonitor$Listener)
    // private getMetaObjectString(language: LanguageInfo, value: Object): string;
    onEnter(event: AllocationEvent): void;
    onReturnValue(event: AllocationEvent): void;
}