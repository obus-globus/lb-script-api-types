import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface FunctionCommand$Callbacks<T extends Object | number | string | boolean> extends Object{
    signalResult(originalSource: T, functionId: Identifier, newValue: number): void;
}