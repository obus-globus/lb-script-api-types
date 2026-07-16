import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TestArrayNode$Test extends Enum<TestArrayNode$Test> {
    static HasHoles: TestArrayNode$Test;
    static HasHolesOrUnused: TestArrayNode$Test;
    static IsSealed: TestArrayNode$Test;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TestArrayNode$Test;
    static values(): TestArrayNode$Test[];
    private constructor()
    name(): "HasHoles" | "HasHolesOrUnused" | "IsSealed";
}