import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MixinApplicatorStandard$ApplicatorPass extends Enum<MixinApplicatorStandard$ApplicatorPass> {
    static ACCESSOR: MixinApplicatorStandard$ApplicatorPass;
    static INITIALISER_APPLY: MixinApplicatorStandard$ApplicatorPass;
    static INITIALISER_APPLY_LEGACY: MixinApplicatorStandard$ApplicatorPass;
    static INJECT_APPLY: MixinApplicatorStandard$ApplicatorPass;
    static INJECT_PREINJECT: MixinApplicatorStandard$ApplicatorPass;
    static INJECT_PREPARE: MixinApplicatorStandard$ApplicatorPass;
    static INJECT_PREPARE_LEGACY: MixinApplicatorStandard$ApplicatorPass;
    static MAIN: MixinApplicatorStandard$ApplicatorPass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinApplicatorStandard$ApplicatorPass;
    static values(): MixinApplicatorStandard$ApplicatorPass[];
    private constructor()
    name(): "MAIN" | "INJECT_PREPARE" | "INITIALISER_APPLY_LEGACY" | "INJECT_PREPARE_LEGACY" | "INITIALISER_APPLY" | "ACCESSOR" | "INJECT_PREINJECT" | "INJECT_APPLY";
}