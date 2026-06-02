import type { Copyable } from '../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ItemBase extends Copyable, Object{
    amount(): number;
    copy(): ItemBase;
    identifier(): number;
    isEmpty(): boolean;
    setAmount(arg0: number): void;
    setIdentifier(arg0: number): void;
}