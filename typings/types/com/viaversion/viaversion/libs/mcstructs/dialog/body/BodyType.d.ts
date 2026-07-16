import type { IdentifiedType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/IdentifiedType.d.ts'
import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BodyType extends Enum<BodyType> implements IdentifiedType {
    static ITEM: BodyType;
    static PLAIN_MESSAGE: BodyType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BodyType;
    static values(): BodyType[];
    private constructor(arg2: Identifier)
    readonly identifier: Identifier;
    getIdentifier(): Identifier;
    name(): "ITEM" | "PLAIN_MESSAGE";
}