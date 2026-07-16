import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FrameSlotKind extends Enum<FrameSlotKind> {
    static Boolean: FrameSlotKind;
    static Byte: FrameSlotKind;
    static Double: FrameSlotKind;
    static Float: FrameSlotKind;
    static Illegal: FrameSlotKind;
    static Int: FrameSlotKind;
    static Long: FrameSlotKind;
    static Object: FrameSlotKind;
    static Static: FrameSlotKind;
    static fromTag(paramtag: number): FrameSlotKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FrameSlotKind;
    static values(): FrameSlotKind[];
    private constructor()
    tag: number;
    name(): "Object" | "Long" | "Int" | "Double" | "Float" | "Boolean" | "Byte" | "Illegal" | "Static";
}