import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UpgradeProgress$Status extends Enum<UpgradeProgress$Status> {
    static COUNTING: UpgradeProgress$Status;
    static FAILED: UpgradeProgress$Status;
    static FINISHED: UpgradeProgress$Status;
    static UPGRADING: UpgradeProgress$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UpgradeProgress$Status;
    static values(): UpgradeProgress$Status[];
    private constructor()
    name(): "COUNTING" | "FAILED" | "FINISHED" | "UPGRADING";
}