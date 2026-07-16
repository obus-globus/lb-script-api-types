import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ScriptModuleMinecraft_ScriptPrimitiveShapeType extends Enum<ScriptModuleMinecraft_ScriptPrimitiveShapeType> {
    static Arrow: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Box: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Circle: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Cone: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Cylinder: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Ellipsoid: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Line: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Pyramid: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Sphere: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static Text: ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByName(paramarg0: string): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByName(paramarg0: string, paramarg1: ScriptModuleMinecraft_ScriptPrimitiveShapeType): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByValue(paramarg0: number): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static getByValue(paramarg0: number, paramarg1: ScriptModuleMinecraft_ScriptPrimitiveShapeType): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ScriptModuleMinecraft_ScriptPrimitiveShapeType;
    static values(): ScriptModuleMinecraft_ScriptPrimitiveShapeType[];
    private constructor(arg2: number)
    private constructor(arg2: ScriptModuleMinecraft_ScriptPrimitiveShapeType)
    readonly value: number;
    getValue(): number;
    name(): "Line" | "Box" | "Sphere" | "Circle" | "Text" | "Arrow" | "Cylinder" | "Pyramid" | "Ellipsoid" | "Cone";
}