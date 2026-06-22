import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BooleanStateExtended } from '../../../../net/irisshaders/iris/gl/BooleanStateExtended.d.ts'
import type { BooleanStateAccessor } from '../../../../net/irisshaders/iris/mixin/statelisteners/BooleanStateAccessor.d.ts'
export class GlStateManager$BooleanState extends Object implements BooleanStateExtended, BooleanStateAccessor {
    constructor(state: number)
    enabled: boolean;
    // private state: number;
    // private stateUnknown: boolean;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    setUnknownState(): void;
}