import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UpgradeProgress$Status extends Enum<UpgradeProgress$Status> {
    static COUNTING: UpgradeProgress$Status;
    static FAILED: UpgradeProgress$Status;
    static FINISHED: UpgradeProgress$Status;
    static UPGRADING: UpgradeProgress$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UpgradeProgress$Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "COUNTING" | "FAILED" | "FINISHED" | "UPGRADING";
}