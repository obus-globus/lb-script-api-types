import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MixinCoprocessor$ProcessResult extends Enum<MixinCoprocessor$ProcessResult> {
    static NONE: MixinCoprocessor$ProcessResult;
    static PASSTHROUGH_NONE: MixinCoprocessor$ProcessResult;
    static PASSTHROUGH_TRANSFORMED: MixinCoprocessor$ProcessResult;
    static TRANSFORMED: MixinCoprocessor$ProcessResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinCoprocessor$ProcessResult;
    static values(): MixinCoprocessor$ProcessResult[];
    private constructor(arg2: boolean, arg3: boolean)
    // private passthrough: boolean;
    // private transformed: boolean;
    isPassthrough(): boolean;
    isTransformed(): boolean;
    with(arg0: MixinCoprocessor$ProcessResult): MixinCoprocessor$ProcessResult;
    name(): "NONE" | "TRANSFORMED" | "PASSTHROUGH_NONE" | "PASSTHROUGH_TRANSFORMED";
}