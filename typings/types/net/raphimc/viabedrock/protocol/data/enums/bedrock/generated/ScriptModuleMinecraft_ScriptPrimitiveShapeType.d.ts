import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ScriptModuleMinecraft_ScriptPrimitiveShapeType extends Enum<ScriptModuleMinecraft_ScriptPrimitiveShapeType> {
    static Arrow: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Box: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Circle: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Line: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Sphere: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Text: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByName(paramarg0: string): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByName(paramarg0: string, paramarg1: ScriptModuleMinecraft_ScriptPrimitiveShapeType): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByValue(paramarg0: number): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByValue(paramarg0: number, paramarg1: ScriptModuleMinecraft_ScriptPrimitiveShapeType): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ScriptModuleMinecraft_ScriptPrimitiveShapeType)
    readonly value: number;
    getValue(): number;
    name(): "Line" | "Box" | "Sphere" | "Circle" | "Text" | "Arrow";
}