import type { Object } from '../../../java/lang/Object.d.ts'
import type { SignatureUpdater } from '../../../net/minecraft/util/SignatureUpdater.d.ts'
import type { SignatureUpdater$Output } from '../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export interface SignatureValidator extends Object {
    validate(payload: number[], signature: number[]): boolean;
    validate(updater: (param0: (param0: number[]) => void) => void, signature: number[]): boolean;
}