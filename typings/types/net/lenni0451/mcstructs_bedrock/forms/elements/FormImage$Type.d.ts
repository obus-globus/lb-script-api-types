import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FormImage$Type extends Enum<FormImage$Type> {
    static PATH: FormImage$Type;
    static URL: FormImage$Type;
    static byName(paramarg0: string): FormImage$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FormImage$Type;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly name: string;
    getName(): string;
    name(): "PATH" | "URL";
}