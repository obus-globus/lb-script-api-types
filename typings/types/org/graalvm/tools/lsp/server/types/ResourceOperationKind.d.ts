import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ResourceOperationKind extends Enum<ResourceOperationKind> {
    static Create: ResourceOperationKind;
    static Delete: ResourceOperationKind;
    static Rename: ResourceOperationKind;
    static get(paramstringValue: string): ResourceOperationKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ResourceOperationKind;
    static values(): ResourceOperationKind[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Create" | "Rename" | "Delete";
}