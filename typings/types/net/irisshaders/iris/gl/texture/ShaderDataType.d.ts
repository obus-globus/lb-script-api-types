import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShaderDataType extends Enum<ShaderDataType> {
    static FLOAT: ShaderDataType;
    static INT: ShaderDataType;
    static UINT: ShaderDataType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShaderDataType;
    static values(): ShaderDataType[];
    private constructor()
    name(): "FLOAT" | "UINT" | "INT";
}