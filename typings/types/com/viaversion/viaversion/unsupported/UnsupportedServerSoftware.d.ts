import type { UnsupportedSoftware } from '../../../../com/viaversion/viaversion/api/platform/UnsupportedSoftware.d.ts'
import type { UnsupportedMethods } from '../../../../com/viaversion/viaversion/unsupported/UnsupportedMethods.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsupportedServerSoftware extends Object implements UnsupportedSoftware {
    constructor(arg0: string, arg1: string[], arg2: UnsupportedMethods[], arg3: string)
    // private classNames: string[];
    // private methods: UnsupportedMethods[];
    readonly name: string;
    readonly reason: string;
    findMatch(): boolean;
    getName(): string;
    getReason(): string;
    match(): string;
}