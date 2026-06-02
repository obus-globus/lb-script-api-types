import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface OptimizedAssumptionDependency extends Object{
    getCompilable(): TruffleCompilable;
    isAlive(): boolean;
    onAssumptionInvalidated(source: Object, reason: CharSequence): void;
}