import type { DialogInput } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Input extends Object {
    constructor(arg0: string, arg1: DialogInput)
    readonly control: DialogInput;
    readonly key: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getControl(): DialogInput;
    getKey(): string;
    hashCode(): number;
    setControl(arg0: DialogInput): void;
    setKey(arg0: string): void;
    toString(): string;
}