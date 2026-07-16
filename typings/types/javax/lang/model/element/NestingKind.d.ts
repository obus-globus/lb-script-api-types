import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NestingKind extends Enum<NestingKind> {
    static ANONYMOUS: NestingKind;
    static LOCAL: NestingKind;
    static MEMBER: NestingKind;
    static TOP_LEVEL: NestingKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NestingKind;
    static values(): NestingKind[];
    private constructor()
    isNested(): boolean;
    name(): "TOP_LEVEL" | "MEMBER" | "LOCAL" | "ANONYMOUS";
}