import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostMethodInfo extends Record {
    constructor(isTruffleBoundary: boolean, isBytecodeInterpreterSwitch: boolean, isBytecodeInterpreterSwitchBoundary: boolean, isInliningCutoff: boolean)
    // private isBytecodeInterpreterSwitch: boolean;
    // private isBytecodeInterpreterSwitchBoundary: boolean;
    // private isInliningCutoff: boolean;
    // private isTruffleBoundary: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isBytecodeInterpreterSwitch(): boolean;
    isBytecodeInterpreterSwitchBoundary(): boolean;
    isInliningCutoff(): boolean;
    isTruffleBoundary(): boolean;
    toString(): string;
}