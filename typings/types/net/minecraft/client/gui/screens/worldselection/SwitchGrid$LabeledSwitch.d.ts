import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
export class SwitchGrid$LabeledSwitch extends Record {
    private constructor(button: CycleButton<boolean>, stateSupplier: () => boolean, isActiveCondition: () => boolean)
    // private button: CycleButton<boolean>;
    // private isActiveCondition: () => boolean;
    // private stateSupplier: () => boolean;
    button(): CycleButton<boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isActiveCondition(): () => boolean;
    refreshState(): void;
    stateSupplier(): () => boolean;
    toString(): string;
}