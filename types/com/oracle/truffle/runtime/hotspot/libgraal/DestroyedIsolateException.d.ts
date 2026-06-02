import type { IllegalArgumentException } from '../../../../../../java/lang/IllegalArgumentException.d.ts'
export class DestroyedIsolateException extends IllegalArgumentException {
    constructor(message: string, vmExit: boolean)
    readonly vmExit: boolean;
    isVmExit(): boolean;
}