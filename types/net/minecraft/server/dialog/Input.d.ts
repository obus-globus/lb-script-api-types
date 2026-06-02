import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InputControl } from '../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
export class Input extends Record {
    static CODEC: Codec<Input>;
    constructor(key: string, control: InputControl)
    // private control: InputControl;
    // private key: string;
    control(): InputControl;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): string;
    toString(): string;
}