import type { IdentifiedType } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/IdentifiedType.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DialogType extends Enum<DialogType> implements IdentifiedType {
    static CONFIRMATION: DialogType;
    static DIALOG_LIST: DialogType;
    static MULTI_ACTION: DialogType;
    static NOTICE: DialogType;
    static SERVER_LINKS: DialogType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DialogType;
    static values(): (Object | null)[];
    private constructor(arg2: Identifier)
    readonly identifier: Identifier;
    getIdentifier(): Identifier;
    name(): "NOTICE" | "SERVER_LINKS" | "DIALOG_LIST" | "MULTI_ACTION" | "CONFIRMATION";
}