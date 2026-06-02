import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbilitiesIndex } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/AbilitiesIndex.d.ts'
export class PlayerAbilities$AbilitiesLayer extends Record {
    // private abilitiesSet: AbilitiesIndex[];
    // private abilityValues: AbilitiesIndex[];
    // private flySpeed: number;
    // private verticalFlySpeed: number;
    // private walkSpeed: number;
    abilitiesSet(): AbilitiesIndex[];
    abilityValues(): AbilitiesIndex[];
    equals(arg0: Object | null): boolean;
    flySpeed(): number;
    hashCode(): number;
    setAbility(arg0: AbilitiesIndex, arg1: boolean): void;
    toString(): string;
    verticalFlySpeed(): number;
    walkSpeed(): number;
}