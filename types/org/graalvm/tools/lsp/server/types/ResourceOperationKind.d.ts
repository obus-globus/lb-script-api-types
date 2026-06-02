import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ResourceOperationKind extends Enum<ResourceOperationKind> {
    static Create: ResourceOperationKind;
    static Delete: ResourceOperationKind;
    static Rename: ResourceOperationKind;
    static get(paramstringValue: string): ResourceOperationKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ResourceOperationKind;
    static values(): (Object | null)[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Create" | "Rename" | "Delete";
}