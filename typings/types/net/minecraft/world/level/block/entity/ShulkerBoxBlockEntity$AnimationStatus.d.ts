import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ShulkerBoxBlockEntity$AnimationStatus extends Enum<ShulkerBoxBlockEntity$AnimationStatus> {
    static CLOSED: ShulkerBoxBlockEntity$AnimationStatus;
    static CLOSING: ShulkerBoxBlockEntity$AnimationStatus;
    static OPENED: ShulkerBoxBlockEntity$AnimationStatus;
    static OPENING: ShulkerBoxBlockEntity$AnimationStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ShulkerBoxBlockEntity$AnimationStatus;
    static values(): ShulkerBoxBlockEntity$AnimationStatus[];
    private constructor()
    name(): "CLOSED" | "OPENING" | "OPENED" | "CLOSING";
}