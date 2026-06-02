import type { IdentifiedType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/IdentifiedType.d.ts'
import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BodyType extends Enum<BodyType> implements IdentifiedType {
    static ITEM: BodyType;
    static PLAIN_MESSAGE: BodyType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BodyType;
    static values(): (Object | null)[];
    private constructor(arg2: Identifier)
    readonly identifier: Identifier;
    getIdentifier(): Identifier;
    name(): "ITEM" | "PLAIN_MESSAGE";
}