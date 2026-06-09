import type { Object } from '../../../java/lang/Object.d.ts'
import type { SignatureUpdater } from '../../../net/minecraft/util/SignatureUpdater.d.ts'
import type { SignatureUpdater$Output } from '../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export interface Signer extends Object {
    sign(payload: number[]): number[];
    sign(updater: (param0: (param0: number[]) => void) => void): number[];
}