import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WbemcliUtil$NamespaceProperty extends Enum<WbemcliUtil$NamespaceProperty> {
    static NAME: WbemcliUtil$NamespaceProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WbemcliUtil$NamespaceProperty;
    static values(): WbemcliUtil$NamespaceProperty[];
    private constructor()
    name(): "NAME";
}