import type { UnsupportedSoftware } from '../../../../com/viaversion/viaversion/api/platform/UnsupportedSoftware.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsupportedPlugin extends Object implements UnsupportedSoftware {
    constructor(arg0: string, arg1: string[], arg2: string)
    // private identifiers: string[];
    readonly name: string;
    readonly reason: string;
    findMatch(): boolean;
    getName(): string;
    getReason(): string;
    match(): string;
}