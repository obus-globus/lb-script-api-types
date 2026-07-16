import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class InterfaceHttpData$HttpDataType extends Enum<InterfaceHttpData$HttpDataType> {
    static Attribute: InterfaceHttpData$HttpDataType;
    static FileUpload: InterfaceHttpData$HttpDataType;
    static InternalAttribute: InterfaceHttpData$HttpDataType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InterfaceHttpData$HttpDataType;
    static values(): InterfaceHttpData$HttpDataType[];
    private constructor()
    name(): "Attribute" | "FileUpload" | "InternalAttribute";
}