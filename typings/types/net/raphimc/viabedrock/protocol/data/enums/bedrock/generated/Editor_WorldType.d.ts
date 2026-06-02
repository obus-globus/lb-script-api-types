import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Editor_WorldType extends Enum<Editor_WorldType> {
    static EditorProject: Editor_WorldType;
    static EditorRealmsUpload: Editor_WorldType;
    static EditorTestLevel: Editor_WorldType;
    static NonEditor: Editor_WorldType;
    static getByName(paramarg0: string): Editor_WorldType;
    static getByName(paramarg0: string, paramarg1: Editor_WorldType): Editor_WorldType;
    static getByValue(paramarg0: number): Editor_WorldType;
    static getByValue(paramarg0: number, paramarg1: Editor_WorldType): Editor_WorldType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Editor_WorldType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Editor_WorldType)
    readonly value: number;
    getValue(): number;
    name(): "NonEditor" | "EditorProject" | "EditorTestLevel" | "EditorRealmsUpload";
}