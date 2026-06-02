import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ScopedValue } from '../../../../../java/lang/ScopedValue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
export class DataAccessorHandler extends Object {
    static APPLYING_DATA_CHANGE: ScopedValue<void>;
    static applyDataChanges(paramarg0: AttachmentTarget, paramarg1: ValueInput, paramarg2: () => void): void;
    constructor()
}