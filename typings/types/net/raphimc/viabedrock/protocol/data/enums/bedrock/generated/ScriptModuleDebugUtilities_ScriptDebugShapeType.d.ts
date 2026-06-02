import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ScriptModuleDebugUtilities_ScriptDebugShapeType extends Enum<ScriptModuleDebugUtilities_ScriptDebugShapeType> {
    static Arrow: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static Box: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static Circle: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static Line: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static Sphere: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static Text: ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static getByName(paramarg0: string): ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static getByName(paramarg0: string, paramarg1: ScriptModuleDebugUtilities_ScriptDebugShapeType): ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static getByValue(paramarg0: number): ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static getByValue(paramarg0: number, paramarg1: ScriptModuleDebugUtilities_ScriptDebugShapeType): ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScriptModuleDebugUtilities_ScriptDebugShapeType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ScriptModuleDebugUtilities_ScriptDebugShapeType)
    readonly value: number;
    getValue(): number;
    name(): "Line" | "Box" | "Sphere" | "Circle" | "Text" | "Arrow";
}