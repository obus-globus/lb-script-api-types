import type { Object } from '../../../java/lang/Object.d.ts'
import type { SignatureUpdater$Output } from '../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export interface SignatureUpdater extends Object {
    update(output: (param0: number[]) => void): void;
}